"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateError = exports.Unauthorized = exports.TemplateSentError = void 0;
var TemplateSentError = /** @class */ (function (_super) {
    __extends(TemplateSentError, _super);
    function TemplateSentError(message, errorType, data, errorInfo, info) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.errorType = errorType;
        _this.data = data;
        _this.errorInfo = errorInfo;
        Object.setPrototypeOf(_this, TemplateSentError.prototype);
        var fieldName = info.fieldName;
        var path = info.path;
        var pathArray = [];
        do {
            pathArray.splice(0, 0, path.key);
            path = path.prev;
        } while (path);
        var fieldNode = info.fieldNodes.find(function (f) { return f.name.value === fieldName; });
        var filedLocation = (fieldNode && fieldNode.loc.startToken) || null;
        _this.extensions = {
            message: message,
            errorType: errorType,
            data: data,
            errorInfo: errorInfo,
            path: pathArray,
            locations: [
                filedLocation
                    ? {
                        line: filedLocation.line,
                        column: filedLocation.column,
                        sourceName: fieldNode.loc.source.name,
                    }
                    : [],
            ],
        };
        return _this;
    }
    return TemplateSentError;
}(Error));
exports.TemplateSentError = TemplateSentError;
var Unauthorized = /** @class */ (function (_super) {
    __extends(Unauthorized, _super);
    function Unauthorized(gqlMessage, info) {
        var _this = _super.call(this, gqlMessage, 'Unauthorized', {}, {}, info) || this;
        Object.setPrototypeOf(_this, Unauthorized.prototype);
        return _this;
    }
    return Unauthorized;
}(TemplateSentError));
exports.Unauthorized = Unauthorized;
var ValidateError = /** @class */ (function (_super) {
    __extends(ValidateError, _super);
    function ValidateError(message, info, type, data) {
        if (type === void 0) { type = 'CustomTemplateException'; }
        if (data === void 0) { data = null; }
        var _this = _super.call(this, message, type, {}, {}, info) || this;
        _this.message = message;
        _this.type = type;
        _this.data = data;
        Object.setPrototypeOf(_this, ValidateError.prototype);
        return _this;
    }
    return ValidateError;
}(TemplateSentError));
exports.ValidateError = ValidateError;
//# sourceMappingURL=errors.js.map