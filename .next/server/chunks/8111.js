"use strict";
exports.id = 8111;
exports.ids = [8111];
exports.modules = {

/***/ 3594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ButtonBasic)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);



function ButtonBasic(props) {
    const { children , ...buttonProps } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
        size: "small",
        ...buttonProps,
        disableElevation: true,
        className: "rounded-md capitalize mb-4 py-1 px-3",
        children: children
    });
}


/***/ }),

/***/ 8111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AccountProfile)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/common/components/atoms/LinearProgressC/index.tsx



function LinearProgressC(props) {
    const { value  } = props;
    const [progress, setProgress] = external_react_default().useState(value);
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        sx: {
            width: "100%"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
            sx: {
                display: "flex",
                alignItems: "center"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        width: "100%",
                        mr: 1
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.LinearProgress, {
                        variant: "determinate",
                        sx: {
                            height: 8,
                            borderRadius: "10px",
                            opacity: "0.75",
                            ":hover": {
                                height: 9,
                                opacity: "0.85"
                            }
                        },
                        ...props
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        minWidth: 35
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        variant: "body2",
                        color: "text.secondary",
                        children: `${Math.round(props.value)}%`
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/common/components/atoms/ButtonBasic/index.tsx
var ButtonBasic = __webpack_require__(3594);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@mui/icons-material/Close"
var Close_ = __webpack_require__(4173);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);
// EXTERNAL MODULE: ./src/common/components/atoms/TextfieldPass/index.tsx
var TextfieldPass = __webpack_require__(2083);
;// CONCATENATED MODULE: ./src/common/components/organism/AccountProfile/index.tsx








function AccountProfile(props) {
    const { data  } = props;
    const [open, setOpen] = external_react_default().useState(false);
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>setOpen(false);
    const user = 3;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: data.filter((item)=>item.id === user).map((item)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                        direction: "column",
                        className: "grid place-items-center m-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                alt: "Gary Doe",
                                src: "/images/avatar/avatar-4.jpg",
                                sx: {
                                    width: 150,
                                    height: 150
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                variant: "body1",
                                className: "text-dark mt-4 font-bold",
                                children: item.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                variant: "body2",
                                className: "text-dark mb-4",
                                children: item.username
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                variant: "body2",
                                className: "text-dark",
                                children: "Lengkapi Profil"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(LinearProgressC, {
                                value: 70
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                        direction: "column",
                        className: "grid place-items-center m-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                variant: "body1",
                                className: "text-dark font-bold",
                                children: "Role Akun"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                variant: "body2",
                                className: "text-dark",
                                children: item.role == "user" ? "User" : "Admin"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                        direction: "column",
                        className: "m-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                variant: "body1",
                                className: "text-dark font-bold mb-2",
                                children: "Informasi Akun"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.TableContainer, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Table, {
                                    sx: {
                                        minWidth: 250,
                                        "& td": {
                                            border: 0,
                                            paddingY: 1
                                        }
                                    },
                                    size: "small",
                                    padding: "none",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableBody, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableRow, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                        className: "font-bold",
                                                        children: "Alamat Email"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                        children: item.email
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableRow, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                        className: "font-bold",
                                                        children: "No. Identitas"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                        children: item.no_identitas
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableRow, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                        className: "font-bold",
                                                        children: "Unit/ Fakultas"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                        children: item.unit
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableRow, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                        className: "font-bold",
                                                        children: "Kontak"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                        children: item.kontak
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                        direction: "row",
                        spacing: 1,
                        className: "flex justify-center mt-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ButtonBasic/* default */.Z, {
                                variant: "contained",
                                color: "primary",
                                onClick: handleOpen,
                                children: "Ubah Kata Sandi"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/sign-in",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonBasic/* default */.Z, {
                                    variant: "outlined",
                                    color: "primary",
                                    children: "Sign Out"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Modal, {
                        open: open,
                        onClose: handleClose,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            className: "absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xs:w-[300px] sm:w-[350px] md:w-[500px] min-h-[250px] outline-0 rounded-md overflow-y-auto",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                                    direction: "row",
                                    spacing: 2,
                                    className: "py-2 px-4 bg-gray-50 rounded-t-md sticky top-0 z-10",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                            variant: "subtitle1",
                                            className: "text-dark font-bold",
                                            children: "Ubah Kata Sandi"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                                            onClick: handleClose,
                                            "aria-label": "Close",
                                            className: "absolute right-1 -translate-y-1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                                                fontSize: "small"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                                    className: "pb-4 pt-6 z-20 xs:px-6 md:px-8",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(TextfieldPass/* default */.Z, {
                                            name: "old_password",
                                            label: "Kata Sandi Lama",
                                            placeholder: "Masukkan kata sandi Anda yang lama"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(TextfieldPass/* default */.Z, {
                                            name: "new_password",
                                            label: "Kata Sandi Baru",
                                            placeholder: "Masukkan kata sandi Anda yang baru",
                                            helperText: "Pastikan kata sandi Anda lebih dari 8 karakter",
                                            className: "-pt-4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(TextfieldPass/* default */.Z, {
                                            label: "Konfirmasi Kata Sandi",
                                            placeholder: "Konfirmasi kata sandi Anda yang baru"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                                            direction: "row-reverse",
                                            spacing: 1,
                                            marginTop: 2,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(ButtonBasic/* default */.Z, {
                                                    variant: "contained",
                                                    color: "primary",
                                                    children: "Simpan"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ButtonBasic/* default */.Z, {
                                                    variant: "outlined",
                                                    color: "primary",
                                                    onClick: handleClose,
                                                    children: "Batal"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            });
        })
    });
}


/***/ })

};
;