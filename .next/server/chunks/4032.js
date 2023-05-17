"use strict";
exports.id = 4032;
exports.ids = [4032];
exports.modules = {

/***/ 1705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TableKegiatan)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(773);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_components_atoms_DatePickerBasic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7829);
/* harmony import */ var _common_components_atoms_TimePickerBasic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6622);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3188);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_Save__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9932);
/* harmony import */ var _mui_icons_material_Save__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Save__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3733);
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_components_atoms_ButtonIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3608);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_components_atoms_FileUpload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2197);
/* harmony import */ var _common_components_atoms_TextfieldLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3170);














function TableKegiatan(props) {
    const { rows  } = props;
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [currIndex, setCurrIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const handleOpen = (index)=>{
        setOpen(true);
        setCurrIndex(index);
    };
    const handleClose = ()=>setOpen(false);
    // Table Pagination
    const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [rowsPerPage, setRowsPerPage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(10);
    const handleChangePage = (event, newPage)=>{
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event)=>{
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const count = rows.length;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableContainer, {
                component: _mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper,
                className: "shadow-none overflow-x-auto",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Table, {
                    sx: {
                        minWidth: 650
                    },
                    "aria-label": "simple table",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableHead, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableRow, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                                        children: "Judul Kegiatan"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                                        children: "Deskripsi Kegiatan"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                                        align: "center",
                                        children: "Tanggal"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                                        align: "center",
                                        children: "Waktu"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                                        children: "Tempat"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                                        align: "center",
                                        children: "Aksi"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableBody, {
                            children: rows.map((row, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableRow, {
                                    sx: {
                                        "&:last-child td, &:last-child th": {
                                            border: 0
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                                            component: "th",
                                            scope: "row",
                                            children: row.judulKegiatan
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                                            width: 400,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                variant: "body2",
                                                className: "xs:line-clamp-4 md:line-clamp-2",
                                                children: row.deskripsi
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                                            align: "center",
                                            children: row.tanggal
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                                            align: "center",
                                            children: row.waktu
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                                            children: row.tempat
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                                            align: "center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                                                onClick: ()=>handleOpen(index),
                                                "aria-label": "view-more",
                                                size: "small",
                                                className: "hover:text-primary",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    fontSize: "small"
                                                })
                                            })
                                        })
                                    ]
                                }, row.judulKegiatan))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TablePagination, {
                component: "div",
                count: count,
                page: page,
                onPageChange: handleChangePage,
                rowsPerPage: rowsPerPage,
                onRowsPerPageChange: handleChangeRowsPerPage
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                open: open,
                onClose: handleClose,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Fade, {
                    in: open,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-4 px-6 rounded-md xs:w-[calc(100%-40px)] md:w-[600px]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                direction: "row",
                                justifyContent: "space-between",
                                className: "sticky",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        id: "transition-modal-title",
                                        variant: "subtitle1",
                                        component: "h2",
                                        className: "font-bold leading-5",
                                        children: "Riwayat Kegiatan Yang Ditambahkan"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                                        onClick: handleClose,
                                        "aria-label": "close",
                                        size: "small",
                                        className: "hover:text-primary",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            fontSize: "small"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                id: "transition-modal-description",
                                sx: {
                                    mt: 2
                                },
                                children: [
                                    rows.filter((item, i)=>i === currIndex).map((data)=>{
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_TextfieldLabel__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                    label: "Judul Kegiatan",
                                                    defaultValue: data.judulKegiatan
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_TextfieldLabel__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                    label: "Deskripsi Kegiatan",
                                                    defaultValue: data.deskripsi,
                                                    multiline: true,
                                                    maxRows: 4
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                                    direction: "row",
                                                    spacing: 1,
                                                    className: "mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                                                            className: "w-full",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                                                                    className: "text-sm mb-1",
                                                                    children: "Tanggal Kegiatan"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_DatePickerBasic__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                    defaultValue: dayjs__WEBPACK_IMPORTED_MODULE_11___default()(data.tanggal, "DD/MM/YYYY")
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                                                            className: "w-full",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                                                                    className: "text-sm mb-1",
                                                                    children: "Waktu Kegiatan"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_TimePickerBasic__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                    defaultValue: dayjs__WEBPACK_IMPORTED_MODULE_11___default()(data.tanggal + " " + data.waktu, "DD/MM/YYYY hh:mm")
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_TextfieldLabel__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                    label: "Tempat Kegiatan",
                                                    defaultValue: data.tempat
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_FileUpload__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    name: "surat_permohonan",
                                                    label: "Surat Permohonan",
                                                    allowMultiple: false,
                                                    acceptedFileTypes: [
                                                        "application/pdf"
                                                    ],
                                                    labelFileTypeNotAllowed: "Hanya file PDF yang diijinkan"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_FileUpload__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    name: "leaflet_kegiatan",
                                                    label: "Leaflet Kegiatan",
                                                    allowMultiple: false,
                                                    acceptedFileTypes: [
                                                        "image/png",
                                                        "image/jpeg"
                                                    ],
                                                    labelFileTypeNotAllowed: "Hanya file JPEG dan PNG yang diijinkan"
                                                })
                                            ]
                                        });
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                        direction: "row",
                                        justifyContent: "flex-end",
                                        spacing: 1,
                                        marginBottom: 1,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_ButtonIcon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                variant: "outlined",
                                                color: "error",
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    className: "-mr-1"
                                                }),
                                                children: "Hapus"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_ButtonIcon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                variant: "contained",
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                    className: "-mr-1"
                                                }),
                                                onClick: handleClose,
                                                children: "Tutup"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_ButtonIcon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                variant: "contained",
                                                color: "success",
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Save__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    className: "-mr-1"
                                                }),
                                                children: "Simpan"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 9953:
/***/ ((module) => {

module.exports = JSON.parse('[{"judulKegiatan":"Lomba Gobak Sodor Dharmawanita UNS","deskripsi":"Fall on same level from slipping, tripping and stumbling with subsequent striking against furniture, sequela","tanggal":"07/03/2023","waktu":"08.00","tempat":"Selasar Auditorium UNS"},{"judulKegiatan":"World Dance Event 46 - PUI Javanologi UNS","deskripsi":"Unspecified fracture of third metacarpal bone, left hand, initial encounter for closed fractureUnspecified fracture of third metacarpal bone, left hand, initial encounter for closed fractureUnspecified fracture of third metacarpal bone, left hand, initial encounter for closed fractureUnspecified fracture of third metacarpal bone, left hand, initial encounter for closed fracture","tanggal":"10/03/2023","waktu":"08.00","tempat":"Halaman Kantor Pusat UNS"},{"judulKegiatan":"Webinar Strategi Pencegahan Klaster Covid PTM Terbatas","deskripsi":"Strain of unspecified muscle(s) and tendon(s) at lower leg level, left leg, initial encounter","tanggal":"17/03/2023","waktu":"13.00","tempat":"Ruang Sidang II Kantor Pusat UNS"}]');

/***/ })

};
;