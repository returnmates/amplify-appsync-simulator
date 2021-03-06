"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeHeaderFromQueryParam = void 0;
var url_1 = require("url");
function decodeHeaderFromQueryParam(rawUrl, paramName) {
    if (paramName === void 0) { paramName = 'header'; }
    var url = (0, url_1.parse)(rawUrl);
    var params = new url_1.URLSearchParams(url.query);
    var base64Header = params.get(paramName);
    if (!base64Header) {
        return {};
    }
    return JSON.parse(Buffer.from(base64Header, 'base64').toString('utf8'));
}
exports.decodeHeaderFromQueryParam = decodeHeaderFromQueryParam;
//# sourceMappingURL=decode-header.js.map