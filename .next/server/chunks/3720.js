"use strict";
exports.id = 3720;
exports.ids = [3720];
exports.modules = {

/***/ 6546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TabItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const customTheme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.createTheme)({
    components: {
        MuiTab: {
            styleOverrides: {
                root: ({ theme  })=>theme.unstable_sx({
                        "&:hover": {
                            opacity: 1
                        },
                        minHeight: 44,
                        textTransform: "initial"
                    })
            }
        }
    }
});
function TabItem(props) {
    const { ...tabProps } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
        theme: customTheme,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Tab, {
            disableRipple: true,
            ...tabProps,
            className: "text-xs xs:w-[160px] xl:w-[180px]"
        })
    });
}


/***/ }),

/***/ 4902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TabsContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);



const customTheme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.createTheme)({
    components: {
        MuiTabs: {
            styleOverrides: {
                root: ({ theme  })=>theme.unstable_sx({
                        backgroundColor: "#f3f4f6",
                        borderRadius: 3,
                        minHeight: 44,
                        "& .Mui-selected": {
                            color: "#0ea5e8"
                        }
                    }),
                flexContainer: {
                    display: "inline-flex",
                    position: "relative",
                    zIndex: 1
                },
                indicator: {
                    top: 3,
                    bottom: 3,
                    right: 3,
                    height: "auto",
                    background: "none",
                    "&:after": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        left: 4,
                        right: 4,
                        bottom: 0,
                        borderRadius: 8,
                        backgroundColor: "#fff",
                        color: "red",
                        boxShadow: "0 4px 12px 0 rgba(0,0,0,0.16)"
                    }
                },
                scrollButtons: ({ theme  })=>theme.unstable_sx({
                        [theme.breakpoints.up("lg")]: {
                            display: "none"
                        },
                        "&.Mui-disabled": {
                            width: 0
                        },
                        overflow: "hidden",
                        transition: "width 0.5s"
                    })
            }
        }
    }
});
function TabsContainer(props) {
    const { value , children , ...tabsProps } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
            theme: customTheme,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                className: "xs:w-full lg:w-fit",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
                    value: value,
                    variant: "scrollable",
                    scrollButtons: true,
                    allowScrollButtonsMobile: true,
                    ...tabsProps,
                    children: children
                })
            })
        })
    });
}


/***/ })

};
;