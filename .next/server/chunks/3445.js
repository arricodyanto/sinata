"use strict";
exports.id = 3445;
exports.ids = [3445];
exports.modules = {

/***/ 3445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TableData)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(773);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_components_atoms_TextfieldTableSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2801);





function TableData(props) {
    const { headers , columns , rows , status , addButton , addPublikasiStatus , actionOnClick  } = props;
    const statusPublikasi = addPublikasiStatus || false;
    // Passing index to other components
    const handleClick = (index)=>{
        actionOnClick(index);
    };
    // Table Pagination
    const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(0);
    const [rowsPerPage, setRowsPerPage] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(5);
    const handleChangePage = (event, newPage)=>{
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event)=>{
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    // Get value from textfield table search
    const [search, setSearch] = react__WEBPACK_IMPORTED_MODULE_2___default().useState("");
    const handleSearch = (value)=>{
        setSearch(value);
        setPage(0);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                direction: "row",
                justifyContent: "space-between",
                alignItems: "center",
                spacing: 1,
                marginTop: 1,
                marginBottom: 2,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_TextfieldTableSearch__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        placeholder: "Search...",
                        getValue: handleSearch
                    }),
                    addButton
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TableContainer, {
                component: _mui_material__WEBPACK_IMPORTED_MODULE_1__.Paper,
                className: "shadow-none",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Table, {
                    sx: {
                        minWidth: 650
                    },
                    "aria-label": "Data Table",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TableHead, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TableRow, {
                                children: headers.map((header, index)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TableCell, {
                                        align: "center",
                                        children: header
                                    }, index);
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TableBody, {
                            children: rows.filter((item)=>{
                                let match = false;
                                for(const key in item){
                                    if (item[key].toString().toLowerCase().includes(search.toLowerCase())) {
                                        match = true;
                                        break;
                                    }
                                }
                                return match;
                            }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TableRow, {
                                    hover: true,
                                    sx: {
                                        "&:last-child td, &:last-child th": {
                                            border: 0
                                        }
                                    },
                                    children: [
                                        columns.map((column)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TableCell, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                                    variant: "body2",
                                                    className: "xs:line-clamp-4 md:line-clamp-3",
                                                    children: column.source ? row[column.source][0][column.label] : row[column.label]
                                                })
                                            }, column.id);
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TableCell, {
                                            align: "center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                                                onClick: ()=>handleClick(row.id),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    fontSize: "small"
                                                })
                                            })
                                        }),
                                        status === false ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TableCell, {
                                                align: "center",
                                                children: row.status === "approved & on progress" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Chip, {
                                                    label: row.status,
                                                    size: "small",
                                                    sx: {
                                                        height: "auto",
                                                        "& .MuiChip-label": {
                                                            display: "block",
                                                            whiteSpace: "normal"
                                                        }
                                                    },
                                                    className: "bg-primary w-[100px] text-white text-xs capitalize px-1 py-1"
                                                }) : row.status === "complete" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Chip, {
                                                    label: row.status,
                                                    size: "small",
                                                    className: "bg-complete text-white text-xs capitalize"
                                                }) : row.status === "rejected" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Chip, {
                                                    label: row.status,
                                                    size: "small",
                                                    className: "bg-error text-white text-xs capitalize"
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Chip, {
                                                    label: "Pending",
                                                    size: "small",
                                                    className: "bg-pending text-white text-xs capitalize"
                                                })
                                            })
                                        }),
                                        statusPublikasi === false ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TableCell, {
                                            align: "center",
                                            children: row.arsip[0].status_publikasi === "selesai" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Chip, {
                                                label: row.arsip[0].status_publikasi,
                                                size: "small",
                                                className: "bg-complete text-white text-xs capitalize"
                                            }) : row.arsip[0].status_publikasi === "ID" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Chip, {
                                                label: row.arsip[0].status_publikasi,
                                                size: "small",
                                                className: "bg-primary text-white text-xs capitalize"
                                            }) : row.arsip[0].status_publikasi === "EN" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Chip, {
                                                label: row.arsip[0].status_publikasi,
                                                size: "small",
                                                className: "bg-violet-400 text-white text-xs capitalize"
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Chip, {
                                                label: "Pending",
                                                size: "small",
                                                className: "bg-pending text-white text-xs capitalize"
                                            })
                                        })
                                    ]
                                }, row.id);
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TablePagination, {
                rowsPerPageOptions: [
                    5,
                    10,
                    50
                ],
                component: "div",
                count: rows.length,
                rowsPerPage: rowsPerPage,
                page: page,
                onPageChange: handleChangePage,
                onRowsPerPageChange: handleChangeRowsPerPage,
                className: "xs:-mx-6 md:-mx-0"
            })
        ]
    });
}


/***/ })

};
;