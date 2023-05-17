"use strict";
exports.id = 3492;
exports.ids = [3492];
exports.modules = {

/***/ 3492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ EventCalendar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: external "@mui/material/Badge"
var Badge_ = __webpack_require__(5168);
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge_);
// EXTERNAL MODULE: external "@mui/x-date-pickers/AdapterDayjs"
var AdapterDayjs_ = __webpack_require__(298);
// EXTERNAL MODULE: external "@mui/x-date-pickers"
var x_date_pickers_ = __webpack_require__(8716);
// EXTERNAL MODULE: external "@mui/icons-material/FiberManualRecord"
var FiberManualRecord_ = __webpack_require__(7943);
var FiberManualRecord_default = /*#__PURE__*/__webpack_require__.n(FiberManualRecord_);
// EXTERNAL MODULE: ./src/json/events.json
var events = __webpack_require__(7619);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/icons-material/Visibility"
var Visibility_ = __webpack_require__(773);
var Visibility_default = /*#__PURE__*/__webpack_require__.n(Visibility_);
// EXTERNAL MODULE: external "@mui/icons-material/CalendarMonthOutlined"
var CalendarMonthOutlined_ = __webpack_require__(6158);
var CalendarMonthOutlined_default = /*#__PURE__*/__webpack_require__.n(CalendarMonthOutlined_);
// EXTERNAL MODULE: external "@mui/icons-material/ScheduleOutlined"
var ScheduleOutlined_ = __webpack_require__(7059);
var ScheduleOutlined_default = /*#__PURE__*/__webpack_require__.n(ScheduleOutlined_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/common/components/organism/EventModalItems/index.tsx







function EventModalItems(props) {
    const { filteredDate  } = props;
    // const arrFilteredDate = Object.entries(filteredDate)
    // console.log(filteredDate.map((item) => item.date))
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: filteredDate.map((item)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Card, {
                className: "mb-3",
                sx: {
                    display: "flex"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.CardMedia, {
                        sx: {
                            width: {
                                xs: 100,
                                sm: 120
                            },
                            height: 140
                        },
                        component: "img",
                        image: `${item.image}`,
                        alt: "event-cover"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        className: "p-2 relative",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.CardContent, {
                                sx: {
                                    width: {
                                        xs: 150,
                                        sm: 210,
                                        md: 335
                                    },
                                    height: 120,
                                    padding: 1
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        variant: "subtitle1",
                                        fontStyle: "bold",
                                        className: "truncate",
                                        children: item.title
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                        variant: "caption",
                                        color: "text.primary",
                                        className: "truncate xs:text-[10px] sm:text-[13px]",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((CalendarMonthOutlined_default()), {
                                                sx: {
                                                    fontSize: 10
                                                }
                                            }),
                                            " ",
                                            item.date,
                                            /*#__PURE__*/ jsx_runtime_.jsx((ScheduleOutlined_default()), {
                                                sx: {
                                                    fontSize: 10,
                                                    marginLeft: 1
                                                }
                                            }),
                                            item.date
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        variant: "caption",
                                        className: "leading-[1rem] line-clamp-2 mt-1",
                                        children: item.description
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.CardActions, {
                                className: "h-0 flex bottom-3 right-0 absolute",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `${item.link}`,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.IconButton, {
                                        "aria-label": "more",
                                        color: "primary",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Visibility_default()), {
                                                fontSize: "small"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                variant: "caption",
                                                className: "pl-1",
                                                children: "More"
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            }, item.id);
        })
    });
}

;// CONCATENATED MODULE: ./src/common/components/organism/EventCalendar/index.tsx










function EventCalendar() {
    const initialValue = external_dayjs_default()();
    const getBulan = initialValue.month() + 1;
    const getTahun = initialValue.year();
    // get array of object from db (json)
    const jsonValue = events.map((item)=>item.date);
    // filter array of object from db (json) by current month
    const filterMonthdb = jsonValue.filter((item)=>item.split("/")[1] == getBulan.toString());
    // const splitDate = filterMonthdb.map((item) => item.split('/')[1] == currentMonth.toString())
    // filter array from filterMonthdb by current year
    const filterYeardb = filterMonthdb.filter((item)=>item.split("/")[2] == getTahun.toString());
    // console.log(filterYeardb)
    // get only date from array of object from db (json)
    const stringDate = filterYeardb.map((item)=>item.split("/")[0]);
    // convert date string to number
    const highlightDays = stringDate.map(Number);
    const [fetchP, setFetchP] = external_react_.useState(highlightDays);
    const requestAbortController = external_react_.useRef(null);
    const [isLoading, setIsLoading] = external_react_.useState(false);
    const [highlightedDays, setHighlightedDays] = external_react_.useState([]);
    const [value, setValue] = external_react_.useState(initialValue);
    const [open, setOpen] = external_react_.useState(false);
    // define type of eventdb
    const [filteredDate, setFilteredDate] = external_react_.useState([
        {
            id: 0,
            title: "",
            date: "",
            sdate: 0,
            description: "",
            image: "",
            link: ""
        }
    ]);
    function fakeFetch(date, { signal  }, highlightDays) {
        return new Promise((resolve, reject)=>{
            const timeout = setTimeout(()=>{
                // const daysInMonth = date.daysInMonth();
                const daysToHighlight = highlightDays;
                const dateValue = value?.format("D-M-YYYY");
                // console.log(highlightDays)
                resolve({
                    daysToHighlight
                });
            }, 500);
            signal.onabort = ()=>{
                clearTimeout(timeout);
                reject(new DOMException("aborted", "AbortError"));
            };
        });
    }
    const fetchHighlightedDays = (date, highlightDays)=>{
        const controller = new AbortController();
        fakeFetch(date, {
            signal: controller.signal
        }, highlightDays).then(({ daysToHighlight  })=>{
            setHighlightedDays(daysToHighlight);
            setIsLoading(false);
        }).catch((error)=>{
            // ignore the error if it's caused by `controller.abort`
            if (error.name !== "AbortError") {
                throw error;
            }
        });
        requestAbortController.current = controller;
    };
    external_react_.useEffect(()=>{
        fetchHighlightedDays(initialValue, fetchP);
        // abort request on unmount
        return ()=>requestAbortController.current?.abort();
    }, []);
    const handleMonthChange = (date)=>{
        if (requestAbortController.current) {
            // make sure that you are aborting useless requests
            // because it is possible to switch between months pretty quickly
            requestAbortController.current.abort();
        }
        setIsLoading(true);
        setHighlightedDays([]);
        fetchHighlightedDays(date, fetchP);
        const getCurrentMonth = date.month() + 1;
        const getCurrentYear = date.year();
        filterEvent(getCurrentMonth, getCurrentYear);
    // console.log(getCurrentYear)
    };
    const handleDateChange = (newValue)=>{
        setValue(newValue);
        filterModal(newValue);
    };
    function filterModal(newValue) {
        // convert date to local string (20/12/2023 15:15:20)
        const dateString = new Date(newValue).toLocaleDateString("it-IT");
        const filtered = events.filter((t)=>t.date === dateString);
        // console.log(filtered)
        {
            if (filtered.length !== 0) {
                {
                    setOpen(true);
                }
                setFilteredDate(filtered);
            // console.log(event.date)
            } else {
                {
                    setOpen(false);
                }
            }
        }
    }
    function filterEvent(getCurrentMonth, getCurrentYear) {
        // get array of object from db (json)
        const jsonValue = events.map((item)=>item.date);
        // console.log(jsonValue)
        // get current month from handleMonthChange
        const currentMonth = getCurrentMonth;
        // console.log(currentMonth)
        // get current year from handleMonthChange
        const currentYear = getCurrentYear;
        // console.log(currentYear)
        // filter array of object from db (json) by current month
        const filterMonthdb = jsonValue.filter((item)=>item.split("/")[1] == currentMonth.toString());
        // const splitDate = filterMonthdb.map((item) => item.split('/')[1] == currentMonth.toString())
        // filter array from filterMonthdb by current year
        const filterYeardb = filterMonthdb.filter((item)=>item.split("/")[2] == currentYear.toString());
        // console.log(filterYeardb)
        // get only date from array of object from db (json)
        const stringDate = filterYeardb.map((item)=>item.split("/")[0]);
        // convert date string to number
        const highlightDays = stringDate.map(Number);
        // console.log(highlightDays)
        // setHighlightedDays(highlightDays)
        const date = external_dayjs_default()();
        fetchHighlightedDays(date, highlightDays);
        setHighlightedDays(highlightDays);
    }
    function ServerDay(props) {
        const { highlighDays =highlightedDays , day , outsideCurrentMonth , ...other } = props;
        const isSelected = !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0;
        return /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
            overlap: "circular",
            badgeContent: isSelected ? /*#__PURE__*/ jsx_runtime_.jsx((FiberManualRecord_default()), {
                sx: {
                    fontSize: 12
                },
                color: "primary"
            }) : undefined,
            children: /*#__PURE__*/ jsx_runtime_.jsx(x_date_pickers_.PickersDay, {
                ...other,
                outsideCurrentMonth: outsideCurrentMonth,
                day: day
            })
        }, props.day.toString());
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(x_date_pickers_.LocalizationProvider, {
        dateAdapter: AdapterDayjs_.AdapterDayjs,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(x_date_pickers_.StaticDatePicker, {
                className: "max-w-80 h-[23rem]",
                openTo: "day",
                displayStaticWrapperAs: "desktop",
                value: value,
                loading: isLoading,
                onChange: handleDateChange,
                onMonthChange: handleMonthChange,
                componentsProps: {
                    actionBar: {
                        actions: [
                            "today"
                        ]
                    }
                },
                renderLoading: ()=>/*#__PURE__*/ jsx_runtime_.jsx(x_date_pickers_.DayCalendarSkeleton, {}),
                slots: {
                    day: ServerDay
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Modal, {
                open: open,
                onClose: ()=>setOpen(false),
                "aria-labelledby": "modal-modal-title",
                "aria-describedby": "modal-modal-description",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        width: {
                            xs: 300,
                            sm: 380,
                            md: 512
                        },
                        maxHeight: 530
                    },
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border p-4 rounded-lg overflow-y-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            id: "modal-modal-title",
                            variant: "h6",
                            component: "h2",
                            children: "List Agenda"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                            className: "mt-3"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            id: "modal-modal-description",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(EventModalItems, {
                                filteredDate: filteredDate
                            })
                        })
                    ]
                })
            })
        ]
    });
}


/***/ })

};
;