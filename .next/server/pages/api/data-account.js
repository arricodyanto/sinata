"use strict";
(() => {
var exports = {};
exports.id = 2008;
exports.ids = [2008];
exports.modules = {

/***/ 1146:
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
        const response = await fetch("https://my.api.mockaroo.com/tb_account.json", options);
        const data = await response.json();
        res.status(200).json(data);
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
var __webpack_exports__ = (__webpack_exec__(1146));
module.exports = __webpack_exports__;

})();