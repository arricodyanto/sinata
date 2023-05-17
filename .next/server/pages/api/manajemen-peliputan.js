"use strict";
(() => {
var exports = {};
exports.id = 2272;
exports.ids = [2272];
exports.modules = {

/***/ 1218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, res) {
    try {
        const headers = new Headers();
        headers.append("X-API-Key", process.env.X_API_Key || "");
        const options = {
            method: "GET",
            headers: headers
        };
        const response1 = await fetch("https://my.api.mockaroo.com/tb_kegiatan.json", options);
        const response2 = await fetch("https://my.api.mockaroo.com/tb_account.json", options);
        const response3 = await fetch("https://my.api.mockaroo.com/tb_laypeliputan.json", options);
        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();
        const combinedData = data1.map((obj1)=>{
            const match2 = data2.find((obj2)=>obj1.id_account === obj2.id);
            const match3 = data3.find((obj3)=>obj1.id === obj3.id_kegiatan);
            return {
                ...obj1,
                ...match2,
                ...match3
            };
        });
        const filteredData = combinedData.filter((row)=>{
            return row.judul_berita != null;
        });
        res.status(200).json(filteredData);
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1218));
module.exports = __webpack_exports__;

})();