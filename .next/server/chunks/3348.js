"use strict";
exports.id = 3348;
exports.ids = [3348];
exports.modules = {

/***/ 3348:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dashboard),
/* harmony export */   "listMenuAdmin": () => (/* binding */ listMenuAdmin)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_components_atoms_TitlePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7624);
/* harmony import */ var _common_components_organism_DashboardPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9906);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_HomeOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9989);
/* harmony import */ var _mui_icons_material_HomeOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_HomeOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_AssignmentOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8613);
/* harmony import */ var _mui_icons_material_AssignmentOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AssignmentOutlined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_DateRangeOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1699);
/* harmony import */ var _mui_icons_material_DateRangeOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_DateRangeOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_Inventory2Outlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7044);
/* harmony import */ var _mui_icons_material_Inventory2Outlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Inventory2Outlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_GroupsOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7182);
/* harmony import */ var _mui_icons_material_GroupsOutlined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_GroupsOutlined__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_PersonOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5018);
/* harmony import */ var _mui_icons_material_PersonOutlined__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PersonOutlined__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_icons_material_LogoutOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(241);
/* harmony import */ var _mui_icons_material_LogoutOutlined__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LogoutOutlined__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_components_molecules_HeaderBreadcrumbs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8533);
/* harmony import */ var _common_components_molecules_FlowCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9883);
/* harmony import */ var _mui_icons_material_ArrowCircleDownOutlined__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2893);
/* harmony import */ var _mui_icons_material_ArrowCircleDownOutlined__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowCircleDownOutlined__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_icons_material_PendingOutlined__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1613);
/* harmony import */ var _mui_icons_material_PendingOutlined__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PendingOutlined__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_icons_material_CheckCircleOutlined__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2892);
/* harmony import */ var _mui_icons_material_CheckCircleOutlined__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_CheckCircleOutlined__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _common_components_atoms_BasicDonutChart__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1596);
/* harmony import */ var _common_components_molecules_TableRiwayat__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6035);
/* harmony import */ var _json_riwayatAjuan_json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4368);
/* harmony import */ var _common_components_organism_DaisyCarousel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2933);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_components_organism_DaisyCarousel__WEBPACK_IMPORTED_MODULE_20__]);
_common_components_organism_DaisyCarousel__WEBPACK_IMPORTED_MODULE_20__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





















function Dashboard() {
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        className: "bg-grey",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_TitlePage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                title: "Dashboard Admin - Sinata"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_common_components_organism_DashboardPanel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                listMenu: listMenuAdmin,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_molecules_HeaderBreadcrumbs__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        pageHeader: "Dashboard Admin",
                        currentPage: "Dashboard"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        container: true,
                        marginBottom: {
                            xs: 2,
                            md: 4
                        },
                        rowSpacing: 2,
                        columnSpacing: 4,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 12,
                                md: 4,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_molecules_FlowCard__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    text: dark,
                                    lineColor: primary,
                                    data: data,
                                    headline: "Layanan masuk",
                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowCircleDownOutlined__WEBPACK_IMPORTED_MODULE_14___default()), {
                                        fontSize: "large",
                                        className: "text-primary"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 12,
                                md: 4,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_molecules_FlowCard__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    text: dark,
                                    lineColor: pending,
                                    data: data1,
                                    headline: "Layanan dalam proses",
                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_PendingOutlined__WEBPACK_IMPORTED_MODULE_15___default()), {
                                        fontSize: "large",
                                        className: "text-pending"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 12,
                                md: 4,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_molecules_FlowCard__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    text: dark,
                                    lineColor: complete,
                                    data: data2,
                                    headline: "Layanan selesai",
                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_CheckCircleOutlined__WEBPACK_IMPORTED_MODULE_16___default()), {
                                        fontSize: "large",
                                        className: "text-complete"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        container: true,
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 12,
                                md: 4,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {
                                    className: "shadow-md px-6 py-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                            variant: "subtitle1",
                                            color: "text.primary",
                                            className: "font-bold mb-4 leading-5",
                                            children: "Layanan Yang Diajukan"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                            justifyContent: "center",
                                            alignItems: "center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_atoms_BasicDonutChart__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                data: donutData
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 12,
                                md: 8,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {
                                    className: "shadow-md px-6 py-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                            variant: "subtitle1",
                                            color: "text.primary",
                                            className: "font-bold mb-4 leading-5",
                                            children: "Riwayat Layanan"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_molecules_TableRiwayat__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                            rows: _json_riwayatAjuan_json__WEBPACK_IMPORTED_MODULE_19__
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {
                        className: "shadow-md px-6 py-4 mt-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                variant: "subtitle1",
                                color: "text.primary",
                                className: "font-bold mb-2 leading-5",
                                children: "Agenda Terkini"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                className: "justify-center flex",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_components_organism_DaisyCarousel__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {})
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
const listMenuAdmin = [
    {
        id: 1,
        subheader: "",
        title: "Dashboard",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_HomeOutlined__WEBPACK_IMPORTED_MODULE_5___default()), {
            sx: {
                color: "#9ca3af"
            },
            fontSize: "small"
        }),
        link: "/admins/dashboard",
        divider: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Divider, {
            light: true,
            className: "border-gray-600 mx-5 mb-4"
        }),
        subItem: []
    },
    {
        id: 2,
        subheader: "Manajemen",
        title: "Manajemen Kegiatan",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_DateRangeOutlined__WEBPACK_IMPORTED_MODULE_7___default()), {
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
                subtitle: "Daftar Kegiatan",
                link: "/admins/daftar-kegiatan"
            },
            {
                id: 2,
                subtitle: "Daftar Agenda Terpublikasi",
                link: "/admins/daftar-agenda"
            }
        ]
    },
    {
        id: 3,
        subheader: "",
        title: "Manajemen Layanan",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AssignmentOutlined__WEBPACK_IMPORTED_MODULE_6___default()), {
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
                subtitle: "Layanan Hubungan Masyarakat",
                link: "/admins/layanan-humas"
            },
            {
                id: 2,
                subtitle: "Layanan Publikasi",
                link: "/admins/layanan-publikasi"
            },
            {
                id: 3,
                subtitle: "Layanan Media",
                link: "/admins/layanan-media"
            }
        ]
    },
    {
        id: 4,
        subheader: "",
        title: "Manajemen Akun",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_GroupsOutlined__WEBPACK_IMPORTED_MODULE_9___default()), {
            sx: {
                color: "#9ca3af"
            },
            fontSize: "small"
        }),
        link: "/admins/manajemen-akun",
        divider: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Divider, {
            light: true,
            className: "border-gray-600 mx-5 mb-4"
        }),
        subItem: []
    },
    {
        id: 5,
        subheader: "Arsip",
        title: "Arsip Layanan",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Inventory2Outlined__WEBPACK_IMPORTED_MODULE_8___default()), {
            sx: {
                color: "#9ca3af"
            },
            fontSize: "small"
        }),
        link: "",
        divider: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Divider, {
            light: true,
            className: "border-gray-600 mx-5 mb-4"
        }),
        subItem: [
            {
                id: 1,
                subtitle: "Dokumentasi",
                link: "/admins/arsip-dokumentasi"
            },
            {
                id: 2,
                subtitle: "Arsip Pers",
                link: "/admins/arsip-pers"
            },
            {
                id: 3,
                subtitle: "Arsip Desain",
                link: "/admins/arsip-desain"
            }
        ]
    },
    {
        id: 6,
        subheader: "Akun",
        title: "Profil Akun",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_PersonOutlined__WEBPACK_IMPORTED_MODULE_10___default()), {
            sx: {
                color: "#9ca3af"
            },
            fontSize: "small"
        }),
        link: "/admins/profile",
        divider: null,
        subItem: []
    },
    {
        id: 7,
        subheader: "",
        title: "Sign Out",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_LogoutOutlined__WEBPACK_IMPORTED_MODULE_11___default()), {
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