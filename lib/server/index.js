"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSyncSimulatorServer = void 0;
var operations_1 = require("./operations");
var subscription_1 = require("./subscription");
var http_1 = require("http");
var portfinder_1 = __importDefault(require("portfinder"));
var event_to_promise_1 = __importDefault(require("event-to-promise"));
var ip_1 = require("ip");
var websocket_subscription_1 = require("./websocket-subscription");
var BASE_PORT = 8900;
var MAX_PORT = 9999;
var AppSyncSimulatorServer = /** @class */ (function () {
    function AppSyncSimulatorServer(config, simulatorContext) {
        this.config = config;
        this.simulatorContext = simulatorContext;
        this._subscriptionServer = new subscription_1.SubscriptionServer(config, simulatorContext);
        this._operationServer = new operations_1.OperationServer(config, simulatorContext, this._subscriptionServer);
        this._httpServer = (0, http_1.createServer)(this._operationServer.app);
        this._realTimeSubscriptionServer = new websocket_subscription_1.AppSyncSimulatorSubscriptionServer(simulatorContext, this._httpServer, '/graphql');
    }
    AppSyncSimulatorServer.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var port, e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        port = this.config.port;
                        return [4 /*yield*/, this._subscriptionServer.start()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this._realTimeSubscriptionServer.start()];
                    case 2:
                        _a.sent();
                        if (!!port) return [3 /*break*/, 4];
                        return [4 /*yield*/, portfinder_1.default.getPortPromise({
                                startPort: BASE_PORT,
                                stopPort: MAX_PORT,
                                port: BASE_PORT,
                            })];
                    case 3:
                        port = _a.sent();
                        return [3 /*break*/, 7];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, portfinder_1.default.getPortPromise({
                                startPort: port,
                                stopPort: port,
                                port: port,
                            })];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        e_1 = _a.sent();
                        throw new Error("Port " + port + " is already in use. Please kill the program using this port and restart Mock");
                    case 7:
                        this._httpServer.listen(port);
                        return [4 /*yield*/, (0, event_to_promise_1.default)(this._httpServer, 'listening').then(function () {
                                _this._url = "http://" + (0, ip_1.address)() + ":" + port;
                            })];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppSyncSimulatorServer.prototype.stop = function () {
        this._subscriptionServer.stop();
        this._realTimeSubscriptionServer.stop();
        this._httpServer.close();
    };
    Object.defineProperty(AppSyncSimulatorServer.prototype, "url", {
        get: function () {
            return {
                graphql: this._url,
            };
        },
        enumerable: false,
        configurable: true
    });
    return AppSyncSimulatorServer;
}());
exports.AppSyncSimulatorServer = AppSyncSimulatorServer;
//# sourceMappingURL=index.js.map