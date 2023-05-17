"use strict";
exports.id = 3177;
exports.ids = [3177];
exports.modules = {

/***/ 3177:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dashboard),
/* harmony export */   "listMenuUser": () => (/* binding */ listMenuUser)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_components_atoms_TitlePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7624);
/* harmony import */ var _common_components_molecules_FlowCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9883);
/* harmony import */ var _common_components_molecules_HeaderBreadcrumbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8533);
/* harmony import */ var _mui_icons_material_ArrowCircleDownOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2893);
/* harmony import */ var _mui_icons_material_ArrowCircleDownOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowCircleDownOutlined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_PendingOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1613);
/* harmony import */ var _mui_icons_material_PendingOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PendingOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_CheckCircleOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2892);
/* harmony import */ var _mui_icons_material_CheckCircleOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_CheckCircleOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_components_atoms_BasicDonutChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1596);
/* harmony import */ var _common_components_organism_DaisyCarousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2933);
/* harmony import */ var _common_components_molecules_TableRiwayat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6035);
/* harmony import */ var _mui_icons_material_HomeOutlined__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9989);
/* harmony import */ var _mui_icons_material_HomeOutlined__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_HomeOutlined__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_icons_material_DateRangeOutlined__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1699);
/* harmony import */ var _mui_icons_material_DateRangeOutlined__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_DateRangeOutlined__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_icons_material_AssignmentOutlined__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8613);
/* harmony import */ var _mui_icons_material_AssignmentOutlined__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AssignmentOutlined__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_icons_material_PersonOutlined__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5018);
/* harmony import */ var _mui_icons_material_PersonOutlined__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PersonOutlined__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_icons_material_LogoutOutlined__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(241);
/* harmony import */ var _mui_icons_material_LogoutOutlined__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LogoutOutlined__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _json_riwayatAjuan_json__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4368);
/* harmony import */ var _common_components_organism_DashboardPanel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9906);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_components_organism_DaisyCarousel__WEBPACK_IMPORTED_MODULE_10__]);
_common_components_organism_DaisyCarousel__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



















function Dashboard() {
    const [loginInfo, setLoginInfo] = react__WEBPACK_IMPORTED_MODULE_2___default().useState("");
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{
        const login = localStorage.getItem("loginInfo");
        if (login) {
            setLoginInfo(JSON.parse(login));
        }
    }, []);
    console.log(loginInfo);
    const dark = "#1f2937";
    const primary = "#0ea5e9";
    const pending = "#f59e0b";
    const complete = "#22c55e";
    const data = [
        {
            x: "Jan",
            y: 40
        },
        {
            x: "Feb",
            y: 30
        },
        {
            x: "Mar",
            y: 45
        },
        {
            x: "Apr",
            y: 50
        },
        {
            x: "May",
            y: 35
        },
        {
            x: "Jun",
            y: 55
        }
    ];
    const data1 = [
        {
            x: "Jan",
            y: 1
        },
        {
            x: "Feb",
            y: 2
        },
        {
            x: "Mar",
            y: 1
        },
        {
            x: "Apr",
            y: 3
        },
        {
            x: "May",
            y: 2
        },
        {
            x: "Jun",
            y: 3
        }
    ];
    const data2 = [
        {
            x: "Jan",
            y: 71
        },
        {
            x: "Feb",
            y: 23
        },
        {
            x: "Mar",
            y: 63
        },
        {
            x: "Apr",
            y: 51
        },
        {
            x: "May",
            y: 27
        },
        {
            x: "Jun",
            y: 33
        }
    ];
    const donutData = [
        {
            x: "Layanan Peliputan",
            y: 71
        },
        {
            x: "Layanan Konferensi Pers",
            y: 0
        },
        {
            x: "Layanan Pembaruan Informasi Unit di Laman",
            y: 0
        },
        {
            x: "Layanan Live Streaming",
            y: 17
        },
        {
            x: "Layanan Publikasi di Medsos & Laman UNS",
            y: 27
        },
        {
            x: "Layanan Publikasi Majalah di UNS",
            y: 7
        },
        {
            x: "Layanan Opini di Media",
            y: 0
        },
        {
            x: "Layanan Penayangan Konten di Videotron",
            y: 17
        },
        {
            x: "Layanan Pemasangan Baliho",
            y: 2
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            className: "bg-grey",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_TitlePage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    title: "Dashboard User - Sinata"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_common_components_organism_DashboardPanel__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                    listMenu: listMenuUser,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_molecules_HeaderBreadcrumbs__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            pageHeader: "Dashboard",
                            currentPage: "Dashboard"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            container: true,
                            marginBottom: {
                                xs: 2,
                                md: 4
                            },
                            rowSpacing: 2,
                            columnSpacing: 4,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                    item: true,
                                    xs: 12,
                                    md: 4,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_molecules_FlowCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        text: dark,
                                        lineColor: primary,
                                        data: data,
                                        headline: "Layanan diajukan",
                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowCircleDownOutlined__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            fontSize: "large",
                                            className: "text-primary"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                    item: true,
                                    xs: 12,
                                    md: 4,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_molecules_FlowCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        text: dark,
                                        lineColor: pending,
                                        data: data1,
                                        headline: "Layanan dalam proses",
                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_PendingOutlined__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            fontSize: "large",
                                            className: "text-pending"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                    item: true,
                                    xs: 12,
                                    md: 4,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_molecules_FlowCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        text: dark,
                                        lineColor: complete,
                                        data: data2,
                                        headline: "Layanan selesai",
                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_CheckCircleOutlined__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            fontSize: "large",
                                            className: "text-complete"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            container: true,
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                    item: true,
                                    xs: 12,
                                    md: 4,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Paper, {
                                        className: "shadow-md px-6 py-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                                variant: "subtitle1",
                                                color: "text.primary",
                                                className: "font-bold mb-4 leading-5",
                                                children: "Layanan Yang Diajukan"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                                justifyContent: "center",
                                                alignItems: "center",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_BasicDonutChart__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                    data: donutData
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                    item: true,
                                    xs: 12,
                                    md: 8,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Paper, {
                                        className: "shadow-md px-6 py-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                                variant: "subtitle1",
                                                color: "text.primary",
                                                className: "font-bold mb-4 leading-5",
                                                children: "Riwayat Layanan"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_molecules_TableRiwayat__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                rows: _json_riwayatAjuan_json__WEBPACK_IMPORTED_MODULE_17__
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Paper, {
                            className: "shadow-md px-6 py-4 mt-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                    variant: "subtitle1",
                                    color: "text.primary",
                                    className: "font-bold mb-2 leading-5",
                                    children: "Agenda Terkini"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    className: "justify-center flex",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_organism_DaisyCarousel__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
const listMenuUser = [
    {
        id: 1,
        subheader: "",
        title: "Dashboard",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_HomeOutlined__WEBPACK_IMPORTED_MODULE_12___default()), {
            sx: {
                color: "#9ca3af"
            },
            fontSize: "small"
        }),
        link: "/users/dashboard",
        divider: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {
            light: true,
            className: "border-gray-600 mx-5 mb-4"
        }),
        subItem: []
    },
    {
        id: 2,
        subheader: "Layanan",
        title: "Riwayat",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_DateRangeOutlined__WEBPACK_IMPORTED_MODULE_13___default()), {
            sx: {
                color: "#9ca3af"
            },
            fontSize: "small"
        }),
        link: "",
        divider: null,
        subItem: [
            {
                id: 1,
                subtitle: "Riwayat Kegiatan",
                link: "/users/riwayat-kegiatan"
            },
            {
                id: 2,
                subtitle: "Tambah Kegiatan",
                link: "/users/tambah-kegiatan"
            }
        ]
    },
    {
        id: 3,
        subheader: "",
        title: "Ajukan Layanan",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AssignmentOutlined__WEBPACK_IMPORTED_MODULE_14___default()), {
            sx: {
                color: "#9ca3af"
            },
            fontSize: "small"
        }),
        link: "",
        divider: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {
            light: true,
            className: "border-gray-600 mx-5 mb-4"
        }),
        subItem: [
            {
                id: 1,
                subtitle: "Layanan Hubungan Masyarakat",
                link: "/users/layanan-humas"
            },
            {
                id: 2,
                subtitle: "Layanan Publikasi",
                link: "/users/layanan-publikasi"
            },
            {
                id: 3,
                subtitle: "Layanan Media",
                link: "/users/layanan-media"
            }
        ]
    },
    {
        id: 4,
        subheader: "Akun",
        title: "Profil Akun",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_PersonOutlined__WEBPACK_IMPORTED_MODULE_15___default()), {
            sx: {
                color: "#9ca3af"
            },
            fontSize: "small"
        }),
        link: "/users/profile",
        divider: null,
        subItem: []
    },
    {
        id: 5,
        subheader: "",
        title: "Sign Out",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_LogoutOutlined__WEBPACK_IMPORTED_MODULE_16___default()), {
            sx: {
                color: "#9ca3af"
            },
            fontSize: "small"
        }),
        link: "/sign-in",
        divider: null,
        subItem: []
    }
];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;