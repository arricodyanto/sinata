"use strict";
exports.id = 2463;
exports.ids = [2463];
exports.modules = {

/***/ 2463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TableManajemenPeliputan),
/* harmony export */   "q": () => (/* binding */ kategoriBerita)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_components_molecules_TableData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3445);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3188);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_Save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9932);
/* harmony import */ var _mui_icons_material_Save__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Save__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3733);
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_components_atoms_TextfieldLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3170);
/* harmony import */ var _common_components_atoms_SelectLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5561);
/* harmony import */ var _common_components_atoms_DateFieldBasic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4112);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_components_atoms_TimePickerBasic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6622);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _common_components_atoms_FileUpload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2197);
/* harmony import */ var _common_components_atoms_ButtonIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3608);
/* harmony import */ var _common_components_atoms_AutocompleteTitle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2009);
/* harmony import */ var _common_components_atoms_AutocompleteCustom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5596);
/* harmony import */ var _common_components_molecules_TableDataSkeleton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5344);
/* harmony import */ var _json_tb_kegiatan_json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6377);
/* harmony import */ var _json_tb_account_json__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(961);
/* harmony import */ var _json_tb_laypeliputan_json__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(4480);






















// import users from '@/json/tb_account.json'
function TableManajemenPeliputan() {
    // Table Data
    const headers = [
        "ID",
        "Judul Kegiatan",
        "User Pemohon",
        "Tanggal Kegiatan",
        "Waktu",
        "Tempat",
        "Judul Berita",
        "Kategori",
        "Jurnalis",
        "Disposisi",
        "Aksi",
        "Status"
    ];
    const columns = [
        {
            id: 1,
            label: "id"
        },
        {
            id: 2,
            label: "judul_kegiatan"
        },
        {
            id: 3,
            label: "name"
        },
        {
            id: 4,
            label: "tgl_kegiatan"
        },
        {
            id: 5,
            label: "waktu_kegiatan"
        },
        {
            id: 6,
            label: "tempat_kegiatan"
        },
        {
            id: 7,
            label: "judul_berita"
        },
        {
            id: 8,
            label: "kategori"
        },
        {
            id: 9,
            label: "jurnalis"
        },
        {
            id: 10,
            label: "disposisi"
        }
    ];
    // Fetch data from local json
    const combinedData = _json_tb_kegiatan_json__WEBPACK_IMPORTED_MODULE_19__.map((obj1)=>{
        const match2 = _json_tb_account_json__WEBPACK_IMPORTED_MODULE_20__.find((obj2)=>obj1.id_account === obj2.id);
        const match3 = _json_tb_laypeliputan_json__WEBPACK_IMPORTED_MODULE_21__.find((obj3)=>obj1.id === obj3.id_kegiatan);
        return {
            ...obj1,
            ...match2,
            ...match3
        };
    });
    const filteredData = combinedData.filter((row)=>{
        return row.judul_berita != null;
    });
    const [data, setData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(filteredData);
    //   const [data, setData] = React.useState<Array<any>>([])
    //   const [users, setUsers] = React.useState<Array<any>>([])
    const [autocomplete, setAutocomplete] = react__WEBPACK_IMPORTED_MODULE_1___default().useState() // Handle autocomplete
    ;
    const handleJudulChange = (event, value)=>{
        if (value == null) setAutocomplete(value);
        if (value != null) setAutocomplete(value.judul_kegiatan);
    };
    //   React.useEffect(() => {
    //     fetch('/api/manajemen-peliputan')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    //     // // fetch autocomplete
    //     // fetch('/api/data-account')
    //     // .then(response => response.json())
    //     // .then(data => setUsers(data))
    //   }, [])
    const rows = data.slice().reverse().map((row)=>row);
    // Modal state
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [currIndex, setCurrIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const handleOpen = (id)=>{
        setOpen(true);
        setCurrIndex(id);
        setAutocomplete(rows.filter((item)=>item.id == id).map((item)=>item.judul_kegiatan)[0]);
    };
    const handleBackdropClick = (event)=>{
        event.stopPropagation();
    };
    const handleClose = ()=>setOpen(false);
    // Editable File Input
    const [leaflet, setLeaflet] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [disposisi, setDisposisi] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            rows.length === 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                        variant: "rounded",
                        width: 210,
                        height: 25,
                        className: "mb-6"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_molecules_TableDataSkeleton__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        headers: headers
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_molecules_TableData__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                headers: headers,
                columns: columns,
                rows: rows,
                status: true,
                actionOnClick: handleOpen
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Modal, {
                open: open,
                onClose: handleClose,
                BackdropProps: {
                    onClick: handleBackdropClick
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Fade, {
                    in: open,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md xs:w-[calc(100%-40px)] md:w-[800px] lg:w-[1000px]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                direction: "row",
                                justifyContent: "space-between",
                                className: "sticky py-2 px-6 bg-gray-100 rounded-t-md",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        variant: "subtitle1",
                                        component: "h2",
                                        className: "font-bold",
                                        children: "Manajemen Layanan Peliputan"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
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
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                sx: {
                                    mt: 2
                                },
                                className: "max-h-[80vh] overflow-y-auto pb-4 px-6",
                                children: [
                                    rows.filter((item)=>item.id === currIndex).map((data)=>{
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_TextfieldLabel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                    name: "id",
                                                    label: "ID Pengajuan",
                                                    defaultValue: data.id,
                                                    disabled: true
                                                }),
                                                leaflet == false && data.leaflet_kegiatan != null ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {
                                                            className: "mb-2 text-sm",
                                                            children: "Leaflet Kegiatan"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                                            direction: "row",
                                                            spacing: 1,
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                            className: "mb-4",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                                    href: "/",
                                                                    target: "_blank",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                                        className: "text-sm hover:text-primary hover:underline hover:underline-offset-2 transition",
                                                                        children: data.leaflet_kegiatan
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                                    size: "small",
                                                                    disableElevation: true,
                                                                    className: "rounded-md capitalize py-1 px-3",
                                                                    onClick: ()=>setLeaflet(true),
                                                                    children: "Change File"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_FileUpload__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                            name: "leaflet_kegiatan",
                                                            label: "Leaflet Kegiatan",
                                                            allowMultiple: false,
                                                            allowReorder: false,
                                                            acceptedFileTypes: [
                                                                "application/pdf"
                                                            ],
                                                            labelFileTypeNotAllowed: "Hanya file PDF yang diijinkan"
                                                        }),
                                                        data.leaflet_kegiatan != null ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                                            direction: "row-reverse",
                                                            className: "-mt-2",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                                size: "small",
                                                                disableElevation: true,
                                                                className: "rounded-md capitalize py-1 px-3",
                                                                onClick: ()=>setLeaflet(false),
                                                                children: "Cancel"
                                                            })
                                                        }) : null
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_AutocompleteTitle__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                    name: "judul_kegiatan",
                                                    label: "Judul Kegiatan",
                                                    data: rows,
                                                    onChange: handleJudulChange,
                                                    defaultValue: rows.find((item)=>item.id === currIndex)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_AutocompleteCustom__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                    name: "name",
                                                    label: "User Pemohon",
                                                    data: rows,
                                                    getOptionLabel: (data)=>data.name,
                                                    defaultValue: rows.find((item)=>item.name == data.name)
                                                }),
                                                rows.filter((row)=>row.judul_kegiatan == autocomplete).map((item)=>{
                                                    // console.log(autocomplete)
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_TextfieldLabel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                name: "des_kegiatan",
                                                                label: "Deskripsi Kegiatan",
                                                                value: item.des_kegiatan,
                                                                multiline: true,
                                                                rows: 3,
                                                                disabled: true
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_common_components_atoms_SelectLabel__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                name: "sifat_kegiatan",
                                                                label: "Sifat Kegiatan",
                                                                value: item.sifat_kegiatan,
                                                                disabled: true,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                                        value: "terbuka",
                                                                        children: "Terbuka untuk Umum"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                                        value: "undangan",
                                                                        children: "Undangan"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                                                direction: "row",
                                                                spacing: 1,
                                                                className: "mb-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
                                                                        className: "w-full",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {
                                                                                className: "mb-1 text-sm",
                                                                                children: "Tanggal Kegiatan"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_DateFieldBasic__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                                                name: "tgl_kegiatan",
                                                                                value: dayjs__WEBPACK_IMPORTED_MODULE_11___default()(item.tgl_kegiatan, "DD/MM/YYYY"),
                                                                                disabled: true
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
                                                                        className: "w-full",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {
                                                                                className: "mb-1 text-sm",
                                                                                children: "Waktu Kegiatan"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_TimePickerBasic__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                                                value: dayjs__WEBPACK_IMPORTED_MODULE_11___default()(item.tgl_kegiatan + " " + item.waktu_kegiatan, "DD/MM/YYYY hh:mm"),
                                                                                disabled: true
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                                                direction: "row",
                                                                spacing: 1,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_TextfieldLabel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                        name: "tempat_kegiatan",
                                                                        label: "Tempat Kegiatan",
                                                                        value: item.tempat_kegiatan,
                                                                        disabled: true
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_common_components_atoms_SelectLabel__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                        name: "status",
                                                                        label: "Status",
                                                                        defaultValue: data.status,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                                                value: "pending",
                                                                                children: "Pending"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                                                value: "approved & on progress",
                                                                                children: "Approved & On Progress"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                                                value: "complete",
                                                                                children: "Complete"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                                                value: "rejected",
                                                                                children: "Rejected"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
                                                                className: "w-full",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {
                                                                        className: "mb-2 text-sm",
                                                                        children: "Surat Permohonan"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                                                        direction: "row",
                                                                        spacing: 1,
                                                                        justifyContent: "space-between",
                                                                        alignItems: "center",
                                                                        className: "mb-4",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                                                href: "/",
                                                                                target: "_blank",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                                                    className: "text-sm hover:text-primary hover:underline hover:underline-offset-2 transition",
                                                                                    children: item.surat_permohonan
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                                                size: "small",
                                                                                disableElevation: true,
                                                                                className: "rounded-md capitalize py-1 px-3",
                                                                                disabled: true,
                                                                                children: "Change File"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    });
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_TextfieldLabel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                    label: "Judul Berita",
                                                    defaultValue: data.judul_berita
                                                }),
                                                disposisi == false ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {
                                                            className: "mb-2 text-sm",
                                                            children: "Disposisi"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                                            direction: "row",
                                                            spacing: 1,
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                            className: "mb-4",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                                    href: "/",
                                                                    target: "_blank",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                                        className: "text-sm hover:text-primary hover:underline hover:underline-offset-2 transition",
                                                                        children: data.disposisi
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                                    size: "small",
                                                                    disableElevation: true,
                                                                    className: "rounded-md capitalize py-1 px-3",
                                                                    onClick: ()=>setDisposisi(true),
                                                                    children: "Change File"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_FileUpload__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                            name: "disposisi",
                                                            label: "Disposisi",
                                                            allowMultiple: false,
                                                            allowReorder: false,
                                                            acceptedFileTypes: [
                                                                "application/pdf"
                                                            ],
                                                            labelFileTypeNotAllowed: "Hanya file PDF yang diijinkan"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                                            direction: "row-reverse",
                                                            className: "-mt-2 mb-4",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                                size: "small",
                                                                disableElevation: true,
                                                                className: "rounded-md capitalize py-1 px-3",
                                                                onClick: ()=>setDisposisi(false),
                                                                children: "Cancel"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                                    direction: "row",
                                                    spacing: 1,
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_common_components_atoms_SelectLabel__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                            name: "kategori",
                                                            label: "Kategori Berita",
                                                            defaultValue: data.kategori,
                                                            className: "capitalize",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                                    value: "",
                                                                    disabled: true,
                                                                    children: "Pilih salah satu"
                                                                }),
                                                                kategoriBerita.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                                        value: item,
                                                                        className: "capitalize",
                                                                        children: item
                                                                    }, index))
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_AutocompleteCustom__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                            name: "jurnalis",
                                                            label: "Jurnalis PIC",
                                                            data: rows,
                                                            getOptionLabel: (data)=>data.jurnalis,
                                                            defaultValue: rows.find((item)=>item.jurnalis == data.jurnalis)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_TextfieldLabel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                    name: "prarilis",
                                                    label: "Prarilis",
                                                    defaultValue: data.prarilis,
                                                    minRows: 4,
                                                    multiline: true
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_TextfieldLabel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                    name: "rilis",
                                                    label: "Rilis",
                                                    defaultValue: data.rilis,
                                                    minRows: 4,
                                                    multiline: true
                                                })
                                            ]
                                        });
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                        direction: "row",
                                        justifyContent: "flex-end",
                                        spacing: 1,
                                        marginBottom: 1,
                                        marginTop: 2,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_ButtonIcon__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                variant: "outlined",
                                                color: "error",
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    className: "-mr-1"
                                                }),
                                                children: "Hapus"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_ButtonIcon__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                variant: "contained",
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    className: "-mr-1"
                                                }),
                                                onClick: handleClose,
                                                children: "Tutup"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_ButtonIcon__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                variant: "contained",
                                                color: "success",
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Save__WEBPACK_IMPORTED_MODULE_6___default()), {
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
const kategoriBerita = [
    "berita terkini",
    "alumni uns",
    "mahasiswa uns",
    "akademik"
];


/***/ }),

/***/ 4480:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"id_kegiatan":1,"judul_berita":"suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris","kategori":"akademik","leaflet_kegiatan":"http://dummyimage.com/720x1280.png/dddddd/000000","status":"rejected","disposisi":"VestibulumAnteIpsum.xls","jurnalis":"Napoleon Turk","prarilis":"In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\\n\\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\\n\\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\\n\\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\\n\\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\\n\\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\\n\\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\\n\\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\\n\\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","rilis":"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\\n\\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\\n\\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\\n\\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\\n\\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\\n\\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\\n\\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\\n\\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.","arsip":[{"id":1,"no_rilis":"05-718-7814","tgl_upload":"14/03/2023","waktu_upload":"5:08","admin":"Randene Trorey","link_berita":"http://bizjournals.com/viverra.jsp","penerjemah":"Bethina Dacks","judul_terjemahan":"nulla nisl nunc nisl duis bibendum felis sed","tgl_upload_terj":"25/07/2023","waktu_upload_terj":"9:30","admin_terj":"Cathyleen Scarce","link_terj":"http://issuu.com/a/pede/posuere/nonummy.json","status_publikasi":"ID"}]},{"id":2,"id_kegiatan":2,"judul_berita":"pede venenatis non sodales sed tincidunt eu felis fusce","kategori":"akademik","leaflet_kegiatan":"http://dummyimage.com/720x1280.png/cc0000/ffffff","status":"complete","disposisi":"OrnareImperdiet.doc","jurnalis":"Jakob Hartless","prarilis":"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\\n\\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\\n\\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\\n\\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\\n\\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\\n\\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\\n\\nFusce consequat. Nulla nisl. Nunc nisl.\\n\\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\\n\\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\\n\\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\\n\\nSed ante. Vivamus tortor. Duis mattis egestas metus.","rilis":"Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\\n\\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\\n\\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\\n\\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\\n\\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\\n\\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\\n\\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\\n\\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\\n\\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\\n\\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\\n\\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.","arsip":[{"id":1,"no_rilis":"40-403-4623","tgl_upload":"19/11/2022","waktu_upload":"18:08","admin":"Tiphany Bethune","link_berita":"http://examiner.com/et/ultrices/posuere/cubilia/curae/mauris.json","penerjemah":"Berty Stowte","judul_terjemahan":"nulla neque libero convallis eget eleifend","tgl_upload_terj":"19/07/2023","waktu_upload_terj":"12:59","admin_terj":"Ralina Abbett","link_terj":"https://eepurl.com/tristique/in/tempus/sit/amet/sem/fusce.jpg","status_publikasi":"selesai"}]},{"id":3,"id_kegiatan":3,"judul_berita":"lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum","kategori":"akademik","leaflet_kegiatan":"http://dummyimage.com/720x1280.png/dddddd/000000","status":"complete","disposisi":"Nullam.tiff","jurnalis":"Fifine Myton","prarilis":"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\\n\\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\\n\\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\\n\\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\\n\\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\\n\\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\\n\\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\\n\\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\\n\\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\\n\\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\\n\\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\\n\\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.","rilis":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\\n\\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\\n\\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\\n\\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\\n\\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\\n\\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\\n\\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\\n\\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\\n\\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\\n\\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\\n\\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\\n\\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.","arsip":[{"id":1,"no_rilis":"11-249-0183","tgl_upload":"30/05/2022","waktu_upload":"4:13","admin":"Karlee Norval","link_berita":"http://businessweek.com/enim/blandit/mi/in/porttitor.html","penerjemah":"Ingunna Geistbeck","judul_terjemahan":"dolor sit amet consectetuer adipiscing elit proin interdum mauris","tgl_upload_terj":"15/03/2023","waktu_upload_terj":"3:47","admin_terj":"Emmy Skynner","link_terj":"http://state.tx.us/rhoncus/aliquet/pulvinar/sed.jsp","status_publikasi":"selesai"}]},{"id":4,"id_kegiatan":4,"judul_berita":"aenean sit amet justo morbi","kategori":"akademik","leaflet_kegiatan":"http://dummyimage.com/720x1280.png/ff4444/ffffff","status":"approved & on progress","disposisi":"NisiEu.tiff","jurnalis":"Martie Gash","prarilis":"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\\n\\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\\n\\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\\n\\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\\n\\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\\n\\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\\n\\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\\n\\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.","rilis":"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\\n\\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\\n\\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\\n\\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\\n\\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\\n\\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\\n\\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\\n\\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\\n\\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\\n\\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\\n\\nFusce consequat. Nulla nisl. Nunc nisl.","arsip":[{"id":1,"no_rilis":"69-807-8002","tgl_upload":"14/03/2023","waktu_upload":"1:15","admin":"Steffen Willars","link_berita":"https://lycos.com/quis/turpis/sed.html","penerjemah":"Dorey Petkens","judul_terjemahan":"in hac habitasse platea dictumst morbi vestibulum velit id","tgl_upload_terj":"13/03/2023","waktu_upload_terj":"18:53","admin_terj":"Dredi Rounsivall","link_terj":"http://princeton.edu/in.js","status_publikasi":"EN"}]},{"id":5,"id_kegiatan":5,"judul_berita":"in hac habitasse platea dictumst maecenas ut massa quis augue luctus","kategori":"","leaflet_kegiatan":"http://dummyimage.com/720x1280.png/ff4444/ffffff","status":"pending","disposisi":"InMagna.xls","jurnalis":"Donny Brixey","prarilis":"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\\n\\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\\n\\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\\n\\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\\n\\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\\n\\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\\n\\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\\n\\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\\n\\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\\n\\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\\n\\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\\n\\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.","rilis":"Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\\n\\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\\n\\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\\n\\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\\n\\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\\n\\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\\n\\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\\n\\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\\n\\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\\n\\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\\n\\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\\n\\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.","arsip":[{"id":1,"no_rilis":"68-851-2979","tgl_upload":"21/02/2023","waktu_upload":"14:17","admin":"Dwayne Dommett","link_berita":"https://delicious.com/integer/tincidunt/ante/vel/ipsum/praesent.jpg","penerjemah":"Ximenez Fayter","judul_terjemahan":"posuere cubilia curae nulla dapibus dolor","tgl_upload_terj":"21/01/2023","waktu_upload_terj":"22:18","admin_terj":"Rebekkah Domotor","link_terj":"http://ifeng.com/erat/eros/viverra.jpg","status_publikasi":"ID"},{"id":2,"no_rilis":"42-237-2267","tgl_upload":"19/09/2022","waktu_upload":"16:59","admin":"Codie Durban","link_berita":"https://hubpages.com/vehicula/consequat/morbi/a/ipsum.html","penerjemah":"Ingar Sline","judul_terjemahan":"suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae","tgl_upload_terj":"13/10/2022","waktu_upload_terj":"19:50","admin_terj":"Rhody Samwayes","link_terj":"http://deliciousdays.com/duis/faucibus/accumsan/odio/curabitur.jsp","status_publikasi":"ID"}]},{"id":6,"id_kegiatan":6,"judul_berita":"natoque penatibus et magnis dis parturient montes nascetur","kategori":"akademik","leaflet_kegiatan":"http://dummyimage.com/720x1280.png/ff4444/ffffff","status":"rejected","disposisi":"SemperEstQuam.mp3","jurnalis":"Brandon Richfield","prarilis":"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\\n\\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\\n\\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\\n\\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\\n\\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\\n\\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\\n\\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\\n\\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\\n\\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.","rilis":"Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\\n\\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\\n\\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\\n\\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\\n\\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\\n\\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\\n\\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\\n\\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.","arsip":[]},{"id":7,"id_kegiatan":7,"judul_berita":"suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus","kategori":"mahasiswa uns","leaflet_kegiatan":"http://dummyimage.com/720x1280.png/cc0000/ffffff","status":"complete","disposisi":"BlanditUltrices.jpeg","jurnalis":"Cornelia Ruck","prarilis":"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\\n\\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\\n\\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\\n\\nIn congue. Etiam justo. Etiam pretium iaculis justo.\\n\\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\\n\\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\\n\\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\\n\\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\\n\\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\\n\\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\\n\\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\\n\\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.","rilis":"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\\n\\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\\n\\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\\n\\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\\n\\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\\n\\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\\n\\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\\n\\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\\n\\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.","arsip":[]},{"id":8,"id_kegiatan":8,"judul_berita":"mauris non ligula pellentesque ultrices phasellus","kategori":"alumni uns","leaflet_kegiatan":"http://dummyimage.com/720x1280.png/dddddd/000000","status":"pending","disposisi":"PellentesqueVolutpat.avi","jurnalis":"Linnea Regus","prarilis":"Sed ante. Vivamus tortor. Duis mattis egestas metus.\\n\\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\\n\\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\\n\\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\\n\\nIn congue. Etiam justo. Etiam pretium iaculis justo.\\n\\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\\n\\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\\n\\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\\n\\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\\n\\nPhasellus in felis. Donec semper sapien a libero. Nam dui.","rilis":"Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\\n\\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\\n\\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\\n\\nFusce consequat. Nulla nisl. Nunc nisl.\\n\\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\\n\\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\\n\\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\\n\\nSed ante. Vivamus tortor. Duis mattis egestas metus.\\n\\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\\n\\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\\n\\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\\n\\nIn congue. Etiam justo. Etiam pretium iaculis justo.","arsip":[{"id":1,"no_rilis":"23-067-4428","tgl_upload":"17/05/2022","waktu_upload":"1:01","admin":"Georgi Klein","link_berita":"http://cmu.edu/habitasse/platea/dictumst.html","penerjemah":"Liv Hacquard","judul_terjemahan":"nisl aenean lectus pellentesque eget nunc donec","tgl_upload_terj":"08/11/2022","waktu_upload_terj":"13:42","admin_terj":"Mattheus Gearty","link_terj":"https://photobucket.com/mattis/pulvinar.jsp","status_publikasi":"ID"},{"id":2,"no_rilis":"09-278-4043","tgl_upload":"07/12/2022","waktu_upload":"19:27","admin":"Cynthy Langlais","link_berita":"https://japanpost.jp/dui/proin/leo/odio/porttitor/id.jsp","penerjemah":"Steffane Kinnin","judul_terjemahan":"orci luctus et ultrices posuere cubilia","tgl_upload_terj":"08/09/2022","waktu_upload_terj":"18:10","admin_terj":"Alfi Bunyard","link_terj":"http://archive.org/eget/semper/rutrum.xml","status_publikasi":"EN"}]},{"id":9,"id_kegiatan":9,"judul_berita":"lacus at velit vivamus vel nulla eget eros elementum pellentesque","kategori":"akademik","leaflet_kegiatan":"http://dummyimage.com/720x1280.png/dddddd/000000","status":"rejected","disposisi":"Pede.xls","jurnalis":"Chelsy Godmar","prarilis":"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\\n\\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\\n\\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\\n\\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\\n\\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\\n\\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\\n\\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.","rilis":"Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\\n\\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\\n\\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\\n\\nFusce consequat. Nulla nisl. Nunc nisl.\\n\\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\\n\\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\\n\\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\\n\\nSed ante. Vivamus tortor. Duis mattis egestas metus.\\n\\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\\n\\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\\n\\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.","arsip":[{"id":1,"no_rilis":"63-912-9172","tgl_upload":"06/05/2022","waktu_upload":"1:07","admin":"Osborne Wildes","link_berita":"https://dyndns.org/in/hac.aspx","penerjemah":"Hercules Veldens","judul_terjemahan":"donec diam neque vestibulum eget vulputate ut","tgl_upload_terj":"27/05/2023","waktu_upload_terj":"8:21","admin_terj":"Kimble Valdes","link_terj":"http://infoseek.co.jp/quis/tortor/id/nulla.jsp","status_publikasi":"selesai"}]},{"id":10,"id_kegiatan":10,"judul_berita":"integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis","kategori":"akademik","leaflet_kegiatan":"http://dummyimage.com/720x1280.png/ff4444/ffffff","status":"complete","disposisi":"NibhLigulaNec.tiff","jurnalis":"Marys Hrinchishin","prarilis":"Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\\n\\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\\n\\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\\n\\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\\n\\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\\n\\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\\n\\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\\n\\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\\n\\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.","rilis":"Fusce consequat. Nulla nisl. Nunc nisl.\\n\\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\\n\\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\\n\\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\\n\\nSed ante. Vivamus tortor. Duis mattis egestas metus.\\n\\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\\n\\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\\n\\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\\n\\nIn congue. Etiam justo. Etiam pretium iaculis justo.","arsip":[{"id":1,"no_rilis":"24-488-3431","tgl_upload":"11/05/2023","waktu_upload":"0:08","admin":"Lorilyn McGilvra","link_berita":"http://squarespace.com/in/leo/maecenas/pulvinar/lobortis/est.jsp","penerjemah":"Olia Haywood","judul_terjemahan":"ultrices posuere cubilia curae mauris","tgl_upload_terj":"18/06/2023","waktu_upload_terj":"10:25","admin_terj":"Emogene Belle","link_terj":"https://home.pl/sit/amet/eros/suspendisse/accumsan/tortor.jpg","status_publikasi":"selesai"}]},{"id":11,"id_kegiatan":11,"judul_berita":"in congue etiam justo etiam pretium iaculis justo","kategori":"mahasiswa uns","leaflet_kegiatan":"http://dummyimage.com/720x1280.png/dddddd/000000","status":"rejected","disposisi":"ArcuLibero.avi","jurnalis":"Skye Trebilcock","prarilis":"Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\\n\\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\\n\\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\\n\\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\\n\\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\\n\\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\\n\\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\\n\\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\\n\\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\\n\\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\\n\\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.","rilis":"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\\n\\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\\n\\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\\n\\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\\n\\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\\n\\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\\n\\nFusce consequat. Nulla nisl. Nunc nisl.\\n\\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\\n\\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\\n\\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\\n\\nSed ante. Vivamus tortor. Duis mattis egestas metus.","arsip":[{"id":1,"no_rilis":"56-830-1111","tgl_upload":"24/10/2022","waktu_upload":"3:28","admin":"Luciana Lambis","link_berita":"http://artisteer.com/purus/sit/amet/nulla/quisque.aspx","penerjemah":"Zach Mougin","judul_terjemahan":"in purus eu magna vulputate luctus cum sociis","tgl_upload_terj":"12/10/2022","waktu_upload_terj":"18:35","admin_terj":"Bari Penberthy","link_terj":"https://squarespace.com/aliquam/augue.jpg","status_publikasi":"selesai"}]},{"id":12,"id_kegiatan":12,"judul_berita":"est lacinia nisi venenatis tristique","kategori":"mahasiswa uns","leaflet_kegiatan":"http://dummyimage.com/720x1280.png/ff4444/ffffff","status":"approved & on progress","disposisi":"LuctusEt.xls","jurnalis":"Nikolia Torrans","prarilis":"Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\\n\\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\\n\\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\\n\\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\\n\\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\\n\\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\\n\\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\\n\\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\\n\\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","rilis":"In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\\n\\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\\n\\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\\n\\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\\n\\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\\n\\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\\n\\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\\n\\nFusce consequat. Nulla nisl. Nunc nisl.\\n\\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.","arsip":[{"id":1,"no_rilis":"10-026-8195","tgl_upload":"18/07/2023","waktu_upload":"4:20","admin":"Harlan Chastenet","link_berita":"http://trellian.com/varius/ut/blandit/non/interdum/in.png","penerjemah":"Claresta Couche","judul_terjemahan":"in hac habitasse platea dictumst morbi","tgl_upload_terj":"24/03/2023","waktu_upload_terj":"11:53","admin_terj":"Carlina Howland","link_terj":"http://un.org/nunc/proin/at.json","status_publikasi":"selesai"},{"id":2,"no_rilis":"07-698-1887","tgl_upload":"10/12/2022","waktu_upload":"19:53","admin":"Hakim Macer","link_berita":"https://unc.edu/justo/in/hac/habitasse/platea/dictumst.js","penerjemah":"Matthias Winyard","judul_terjemahan":"sapien urna pretium nisl ut volutpat sapien arcu sed","tgl_upload_terj":"11/01/2023","waktu_upload_terj":"23:51","admin_terj":"Mathias Stenett","link_terj":"https://scribd.com/lobortis/ligula/sit/amet/eleifend.html","status_publikasi":"selesai"},{"id":3,"no_rilis":"14-368-9685","tgl_upload":"10/07/2022","waktu_upload":"2:32","admin":"Pryce Castelot","link_berita":"http://joomla.org/aliquam/non/mauris/morbi/non.aspx","penerjemah":"Tallia Hannigane","judul_terjemahan":"posuere nonummy integer non velit donec diam neque vestibulum","tgl_upload_terj":"07/03/2023","waktu_upload_terj":"11:49","admin_terj":"Thorndike MacNeice","link_terj":"https://pen.io/nulla/sed/accumsan/felis/ut/at/dolor.aspx","status_publikasi":"selesai"}]},{"id":13,"id_kegiatan":13,"judul_berita":"pellentesque eget nunc donec quis","kategori":"mahasiswa uns","leaflet_kegiatan":"http://dummyimage.com/720x1280.png/dddddd/000000","status":"approved & on progress","disposisi":"NisiVulputateNonummy.doc","jurnalis":"Susana Bodega","prarilis":"Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\\n\\nFusce consequat. Nulla nisl. Nunc nisl.\\n\\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\\n\\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\\n\\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\\n\\nSed ante. Vivamus tortor. Duis mattis egestas metus.\\n\\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\\n\\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\\n\\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\\n\\nIn congue. Etiam justo. Etiam pretium iaculis justo.","rilis":"Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\\n\\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\\n\\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\\n\\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\\n\\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\\n\\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\\n\\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\\n\\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\\n\\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.","arsip":[{"id":1,"no_rilis":"82-727-8199","tgl_upload":"21/05/2023","waktu_upload":"11:53","admin":"Verile Malec","link_berita":"https://archive.org/amet/eleifend/pede/libero.js","penerjemah":"Wally Pardon","judul_terjemahan":"quam pharetra magna ac consequat","tgl_upload_terj":"17/12/2022","waktu_upload_terj":"6:26","admin_terj":"Colette Castard","link_terj":"http://noaa.gov/turpis/sed/ante/vivamus/tortor/duis.html","status_publikasi":"selesai"}]},{"id":14,"id_kegiatan":14,"judul_berita":"dictumst maecenas ut massa quis augue luctus tincidunt","kategori":"akademik","leaflet_kegiatan":"http://dummyimage.com/720x1280.png/cc0000/ffffff","status":"complete","disposisi":"EleifendDonecUt.avi","jurnalis":"Guntar Beswell","prarilis":"Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\\n\\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\\n\\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\\n\\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\\n\\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\\n\\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\\n\\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.","rilis":"Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\\n\\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\\n\\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\\n\\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\\n\\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\\n\\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\\n\\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\\n\\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.","arsip":[{"id":1,"no_rilis":"04-177-1587","tgl_upload":"16/11/2022","waktu_upload":"7:43","admin":"Verney Rickardsson","link_berita":"http://marketwatch.com/in.jsp","penerjemah":"Alix Ielden","judul_terjemahan":"dui proin leo odio porttitor id consequat in consequat ut nulla sed","tgl_upload_terj":"25/01/2023","waktu_upload_terj":"0:18","admin_terj":"Grace Jerger","link_terj":"http://paypal.com/consequat/nulla/nisl/nunc/nisl/duis/bibendum.jsp","status_publikasi":"ID"}]},{"id":15,"id_kegiatan":15,"judul_berita":"vel nisl duis ac nibh fusce","kategori":"","leaflet_kegiatan":"http://dummyimage.com/720x1280.png/cc0000/ffffff","status":"complete","disposisi":"Pellentesque.jpeg","jurnalis":"Tomkin Yokel","prarilis":"Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\\n\\nFusce consequat. Nulla nisl. Nunc nisl.\\n\\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\\n\\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\\n\\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\\n\\nSed ante. Vivamus tortor. Duis mattis egestas metus.\\n\\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\\n\\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\\n\\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\\n\\nIn congue. Etiam justo. Etiam pretium iaculis justo.\\n\\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.","rilis":"Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\\n\\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\\n\\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\\n\\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\\n\\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\\n\\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\\n\\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\\n\\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\\n\\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\\n\\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","arsip":[{"id":1,"no_rilis":"98-818-7203","tgl_upload":"10/08/2022","waktu_upload":"3:25","admin":"Leone Lethebridge","link_berita":"https://washingtonpost.com/pede/ac/diam/cras/pellentesque.jsp","penerjemah":"Chantal Scoffham","judul_terjemahan":"at nibh in hac habitasse platea dictumst aliquam augue","tgl_upload_terj":"19/04/2023","waktu_upload_terj":"9:21","admin_terj":"Dino Okroy","link_terj":"http://instagram.com/mollis.json","status_publikasi":"EN"}]},{"id":16,"id_kegiatan":16,"judul_berita":"sit amet eros suspendisse accumsan tortor quis turpis","kategori":"","leaflet_kegiatan":"http://dummyimage.com/720x1280.png/5fa2dd/ffffff","status":"pending","disposisi":"Ligula.png","jurnalis":"Rozamond Follin","prarilis":"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\\n\\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\\n\\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\\n\\nSed ante. Vivamus tortor. Duis mattis egestas metus.\\n\\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\\n\\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\\n\\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.","rilis":"Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\\n\\nFusce consequat. Nulla nisl. Nunc nisl.\\n\\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\\n\\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\\n\\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\\n\\nSed ante. Vivamus tortor. Duis mattis egestas metus.\\n\\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\\n\\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\\n\\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.","arsip":[{"id":1,"no_rilis":"09-729-5410","tgl_upload":"10/07/2023","waktu_upload":"13:59","admin":"Zack Stormonth","link_berita":"http://chron.com/vulputate/vitae/nisl/aenean/lectus/pellentesque/eget.json","penerjemah":"Silvain Conquest","judul_terjemahan":"in blandit ultrices enim lorem ipsum dolor","tgl_upload_terj":"14/02/2023","waktu_upload_terj":"4:31","admin_terj":"Sumner Ricart","link_terj":"https://springer.com/leo.js","status_publikasi":"EN"},{"id":2,"no_rilis":"84-518-7587","tgl_upload":"17/11/2022","waktu_upload":"1:02","admin":"Emmalee Torrijos","link_berita":"http://dedecms.com/rutrum/rutrum/neque/aenean/auctor/gravida/sem.json","penerjemah":"Jareb Lias","judul_terjemahan":"morbi quis tortor id nulla ultrices aliquet maecenas leo odio","tgl_upload_terj":"28/09/2022","waktu_upload_terj":"22:44","admin_terj":"Lori Hawkey","link_terj":"https://goodreads.com/nullam/orci/pede.aspx","status_publikasi":"EN"}]},{"id":17,"id_kegiatan":17,"judul_berita":"nunc proin at turpis a pede","kategori":"mahasiswa uns","leaflet_kegiatan":"http://dummyimage.com/720x1280.png/dddddd/000000","status":"pending","disposisi":"QuamSollicitudin.avi","jurnalis":"Tuesday Maddyson","prarilis":"Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\\n\\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\\n\\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\\n\\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\\n\\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\\n\\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\\n\\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\\n\\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\\n\\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\\n\\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","rilis":"In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\\n\\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\\n\\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\\n\\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\\n\\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\\n\\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\\n\\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\\n\\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.","arsip":[{"id":1,"no_rilis":"22-926-2941","tgl_upload":"14/11/2022","waktu_upload":"21:21","admin":"Rosemonde Tesauro","link_berita":"https://sphinn.com/nullam/varius/nulla/facilisi.js","penerjemah":"Cheston Reiach","judul_terjemahan":"erat id mauris vulputate elementum","tgl_upload_terj":"13/01/2023","waktu_upload_terj":"7:10","admin_terj":"Charleen Boyce","link_terj":"http://newyorker.com/nunc/proin.xml","status_publikasi":"selesai"},{"id":2,"no_rilis":"92-211-3519","tgl_upload":"28/06/2022","waktu_upload":"9:18","admin":"Lukas Cleall","link_berita":"http://comsenz.com/purus/sit.jpg","penerjemah":"Jillene Hansom","judul_terjemahan":"potenti cras in purus eu magna","tgl_upload_terj":"28/05/2023","waktu_upload_terj":"7:03","admin_terj":"Delia Wildt","link_terj":"https://jiathis.com/orci.js","status_publikasi":"selesai"},{"id":3,"no_rilis":"68-517-4762","tgl_upload":"01/08/2022","waktu_upload":"16:21","admin":"Jase Lourenco","link_berita":"http://behance.net/congue/risus/semper/porta/volutpat/quam.xml","penerjemah":"Daron Fashion","judul_terjemahan":"id pretium iaculis diam erat fermentum justo nec condimentum neque sapien","tgl_upload_terj":"11/03/2023","waktu_upload_terj":"10:56","admin_terj":"Ruy Turnock","link_terj":"https://ft.com/pretium/nisl/ut/volutpat/sapien.html","status_publikasi":"selesai"}]},{"id":18,"id_kegiatan":18,"judul_berita":"aenean fermentum donec ut mauris eget","kategori":"berita terkini","leaflet_kegiatan":"http://dummyimage.com/720x1280.png/cc0000/ffffff","status":"rejected","disposisi":"Dolor.jpeg","jurnalis":"Alvina Kitchingman","prarilis":"In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\\n\\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\\n\\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\\n\\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\\n\\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\\n\\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\\n\\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\\n\\nFusce consequat. Nulla nisl. Nunc nisl.","rilis":"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\\n\\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\\n\\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\\n\\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\\n\\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\\n\\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\\n\\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\\n\\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\\n\\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\\n\\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.","arsip":[{"id":1,"no_rilis":"89-191-2549","tgl_upload":"05/08/2022","waktu_upload":"9:55","admin":"Damon Warby","link_berita":"http://mediafire.com/sem/fusce/consequat/nulla/nisl.html","penerjemah":"Collie Goolding","judul_terjemahan":"volutpat dui maecenas tristique est et tempus semper est quam pharetra magna","tgl_upload_terj":"25/06/2022","waktu_upload_terj":"2:50","admin_terj":"Loleta Strathman","link_terj":"https://ebay.co.uk/consectetuer/adipiscing/elit/proin.js","status_publikasi":"ID"}]},{"id":19,"id_kegiatan":19,"judul_berita":"nisl duis bibendum felis sed","kategori":"alumni uns","leaflet_kegiatan":"http://dummyimage.com/720x1280.png/5fa2dd/ffffff","status":"pending","disposisi":"VelitVivamusVel.ppt","jurnalis":"Natty Kelmere","prarilis":"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\\n\\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\\n\\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\\n\\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\\n\\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\\n\\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\\n\\nFusce consequat. Nulla nisl. Nunc nisl.\\n\\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\\n\\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\\n\\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\\n\\nSed ante. Vivamus tortor. Duis mattis egestas metus.","rilis":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\\n\\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\\n\\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\\n\\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\\n\\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\\n\\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\\n\\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.","arsip":[{"id":1,"no_rilis":"23-844-1454","tgl_upload":"17/07/2023","waktu_upload":"12:13","admin":"Cass Leggs","link_berita":"http://prlog.org/feugiat.jpg","penerjemah":"Bernardo Cowthard","judul_terjemahan":"orci pede venenatis non sodales sed tincidunt eu","tgl_upload_terj":"12/05/2022","waktu_upload_terj":"15:09","admin_terj":"Skyler Noseworthy","link_terj":"https://nifty.com/nulla.xml","status_publikasi":"ID"},{"id":2,"no_rilis":"94-239-0524","tgl_upload":"05/02/2023","waktu_upload":"20:53","admin":"Amory Aleksankin","link_berita":"https://nature.com/donec/odio/justo/sollicitudin.html","penerjemah":"Silvie Hatliffe","judul_terjemahan":"consequat morbi a ipsum integer a nibh in quis justo","tgl_upload_terj":"12/03/2023","waktu_upload_terj":"12:37","admin_terj":"Roana Blaxter","link_terj":"https://phpbb.com/id/mauris/vulputate/elementum/nullam/varius.jsp","status_publikasi":"ID"}]},{"id":20,"id_kegiatan":20,"judul_berita":"at nibh in hac habitasse","kategori":"","leaflet_kegiatan":"http://dummyimage.com/720x1280.png/cc0000/ffffff","status":"pending","disposisi":"FaucibusCursusUrna.ppt","jurnalis":"Timmie Pelling","prarilis":"Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\\n\\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\\n\\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\\n\\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\\n\\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\\n\\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\\n\\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.","rilis":"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\\n\\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\\n\\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\\n\\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\\n\\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\\n\\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\\n\\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\\n\\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\\n\\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.","arsip":[{"id":1,"no_rilis":"10-030-1190","tgl_upload":"10/05/2022","waktu_upload":"9:03","admin":"Corry Hollow","link_berita":"https://seesaa.net/placerat.xml","penerjemah":"Lynnett Tanzer","judul_terjemahan":"rhoncus aliquet pulvinar sed nisl nunc rhoncus dui","tgl_upload_terj":"14/12/2022","waktu_upload_terj":"21:34","admin_terj":"Daveen Northley","link_terj":"https://about.me/vel.png","status_publikasi":"ID"}]}]');

/***/ })

};
;