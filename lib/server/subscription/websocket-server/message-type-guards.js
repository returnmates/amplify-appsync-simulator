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
exports.isSubscriptionConnectionInitMessage = exports.isSubscriptionStopMessage = exports.isSubscriptionStartMessage = exports.GQLMessageExtractionError = void 0;
var message_types_1 = require("./message-types");
var GQLMessageExtractionError = /** @class */ (function (_super) {
    __extends(GQLMessageExtractionError, _super);
    function GQLMessageExtractionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GQLMessageExtractionError;
}(Error));
exports.GQLMessageExtractionError = GQLMessageExtractionError;
function isSubscriptionStartMessage(message) {
    if (!message)
        return false;
    if (message.type !== message_types_1.MESSAGE_TYPES.GQL_START)
        return false;
    if (!message.id)
        return false;
    if (!(message.payload && message.payload.data))
        return false;
    try {
        var dataJson = JSON.parse(message.payload.data);
        if (!dataJson.query)
            return false;
    }
    catch (e) {
        return false;
    }
    if (!(message.payload && message.payload.extensions && message.payload.extensions.authorization))
        return false;
    return true;
}
exports.isSubscriptionStartMessage = isSubscriptionStartMessage;
function isSubscriptionStopMessage(message) {
    if (!message)
        return false;
    if (message.type !== message_types_1.MESSAGE_TYPES.GQL_STOP)
        return false;
    if (!message.id)
        return false;
    return true;
}
exports.isSubscriptionStopMessage = isSubscriptionStopMessage;
function isSubscriptionConnectionInitMessage(message) {
    if (!message)
        return false;
    if (message.type !== message_types_1.MESSAGE_TYPES.GQL_CONNECTION_INIT)
        return false;
    return true;
}
exports.isSubscriptionConnectionInitMessage = isSubscriptionConnectionInitMessage;
//# sourceMappingURL=message-type-guards.js.map