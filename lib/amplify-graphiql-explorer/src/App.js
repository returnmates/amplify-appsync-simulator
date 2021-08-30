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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphiql_1 = __importDefault(require("graphiql"));
var graphiql_explorer_1 = __importDefault(require("graphiql-explorer"));
require("graphiql/graphiql.css");
var graphql_1 = require("graphql");
var react_1 = __importStar(require("react"));
require("semantic-ui-css/semantic.min.css");
require("./App.css");
var AuthModal_1 = require("./AuthModal");
var jwt_1 = require("./utils/jwt");
var DEFAULT_COGNITO_JWT_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3ZDhjYTUyOC00OTMxLTQyNTQtOTI3My1lYTVlZTg1M2YyNzEiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS91cy1lYXN0LTFfZmFrZSIsInBob25lX251bWJlcl92ZXJpZmllZCI6dHJ1ZSwiY29nbml0bzp1c2VybmFtZSI6InVzZXIxIiwiYXVkIjoiMmhpZmEwOTZiM2EyNG12bTNwaHNrdWFxaTMiLCJldmVudF9pZCI6ImIxMmEzZTJmLTdhMzYtNDkzYy04NWIzLTIwZDgxOGJkNzhhMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxOTc0MjY0NDEyLCJwaG9uZV9udW1iZXIiOiIrMTIwNjIwNjIwMTYiLCJleHAiOjE1NjQyNjgwMTIsImlhdCI6MTU2NDI2NDQxMywiZW1haWwiOiJ1c2VyQGRvbWFpbi5jb20ifQ.wHKY2KIhvWn4zpJ4TZ1vS3zRE9mGWsLY4NCV2Cof17Q";
var DEFAULT_OIDC_JWT_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL3NvbWUtb2lkYy1wcm92aWRlci9hdXRoIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJhdWQiOiIyaGlmYTA5NmIzYTI0bXZtM3Boc2t1YXFpMyIsImV2ZW50X2lkIjoiYjEyYTNlMmYtN2EzNi00OTNjLTg1YjMtMjBkODE4YmQ3OGExIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE5NzQyNjQ0MTIsInBob25lX251bWJlciI6IisxMjA2MjA2MjAxNiIsImV4cCI6MTU2NDI2ODAxMiwiaWF0IjoxNTY0MjY0NDEzLCJlbWFpbCI6InVzZXJAZG9tYWluLmNvbSJ9.uAegFXomOnA7Dkl-5FcS5icu5kL9Juqb81GnTrOZZqM";
var AUTH_TYPE_TO_NAME = {
    AMAZON_COGNITO_USER_POOLS: 'User Pool',
    API_KEY: 'API Key',
    OPENID_CONNECT: 'Open ID',
    AWS_IAM: 'IAM',
};
var DEFAULT_API_INFO = {
    name: 'AppSyncTransformer',
    defaultAuthenticationType: {
        authenticationType: 'API_KEY',
    },
    additionalAuthenticationProviders: [],
    apiKey: 'da2-fakeApiId123456',
};
var LOCAL_STORAGE_KEY_NAMES = {
    cognitoToken: 'AMPLIFY_GRPAHIQL_EXPLORER_COGNITO_JWT_TOKEN',
    oidcToken: 'AMPLIFY_GRPAHIQL_EXPLORER_OIDC_JWT_TOKEN',
    apiKey: 'AMPLIFY_GRPAHIQL_EXPLORER_API_KEY',
    iam: 'AMPLIFY_GRPAHIQL_EXPLORER_AWS_IAM',
};
function getAPIInfo() {
    return fetch('/api-config').then(function (response) { return response.json(); });
}
function fetcher(params, additionalHeaders) {
    var headers = __assign({ Accept: 'application/json', 'Content-Type': 'application/json' }, additionalHeaders);
    return fetch('/graphql', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(params),
    })
        .then(function (response) {
        return response.json();
    })
        .then(function (responseBody) {
        try {
            return JSON.parse(responseBody);
        }
        catch (e) {
            return responseBody;
        }
    });
}
var DEFAULT_QUERY = "# shift-option/alt-click on a query below to jump to it in the explorer\n# option/alt-click on a field in the explorer to select all subfields\n";
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            schema: null,
            query: DEFAULT_QUERY,
            explorerIsOpen: true,
            authModalVisible: false,
            apiInfo: DEFAULT_API_INFO,
            currentAuthMode: AuthModal_1.AUTH_MODE.API_KEY,
            credentials: {
                apiKey: '',
                cognitoJWTToken: '',
                oidcJWTToken: '',
                iam: '',
            },
        };
        _this.toggleAuthModal = function () {
            return _this.setState(function (prevState) { return ({
                authModalVisible: !prevState.authModalVisible,
            }); });
        };
        _this.switchAuthMode = function (val) {
            _this.setState({ currentAuthMode: val });
        };
        _this._handleInspectOperation = function (cm, mousePos) {
            var parsedQuery = (0, graphql_1.parse)(_this.state.query || '');
            if (!parsedQuery) {
                console.error("Couldn't parse query document");
                return null;
            }
            var token = cm.getTokenAt(mousePos);
            var start = { line: mousePos.line, ch: token.start };
            var end = { line: mousePos.line, ch: token.end };
            var relevantMousePos = {
                start: cm.indexFromPos(start),
                end: cm.indexFromPos(end),
            };
            var position = relevantMousePos;
            var def = parsedQuery.definitions.find(function (definition) {
                if (!definition.loc) {
                    console.log('Missing location information for definition');
                    return false;
                }
                var _a = definition.loc, start = _a.start, end = _a.end;
                return start <= position.start && end >= position.end;
            });
            if (!def) {
                console.error("Unable to find definition corresponding position at " + position.start);
                return null;
            }
            var operationKind = def.kind === 'OperationDefinition' ? def.operation : def.kind === 'FragmentDefinition' ? 'fragment' : 'unknown';
            var operationName = def.kind === 'OperationDefinition' && !!def.name
                ? def.name.value
                : def.kind === 'FragmentDefinition' && !!def.name
                    ? def.name.value
                    : 'unknown';
            var selector = ".graphiql-explorer-root #" + operationKind + "-" + operationName;
            var el = document.querySelector(selector);
            el && el.scrollIntoView();
        };
        _this._handleEditQuery = function (query) { return _this.setState({ query: query }); };
        _this._handleToggleExplorer = function () {
            _this.setState({ explorerIsOpen: !_this.state.explorerIsOpen });
        };
        _this.fetch = _this.fetch.bind(_this);
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var apiInfo, introspectionResult, editor;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, getAPIInfo()];
                    case 1:
                        apiInfo = _b.sent();
                        this.loadCredentials(apiInfo);
                        this.setState({ apiInfo: apiInfo });
                        return [4 /*yield*/, this.fetch({
                                query: (0, graphql_1.getIntrospectionQuery)(),
                            })];
                    case 2:
                        introspectionResult = _b.sent();
                        editor = (_a = this._graphiql) === null || _a === void 0 ? void 0 : _a.getQueryEditor();
                        editor.setOption('extraKeys', __assign(__assign({}, (editor.options.extraKeys || {})), { 'Shift-Alt-LeftClick': this._handleInspectOperation }));
                        if (introspectionResult && introspectionResult.data) {
                            this.setState({ schema: (0, graphql_1.buildClientSchema)(introspectionResult.data) });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.fetch = function (params) {
        var headers = {};
        if (this.state.currentAuthMode === AuthModal_1.AUTH_MODE.API_KEY) {
            headers['x-api-key'] = this.state.credentials.apiKey;
        }
        else if (this.state.currentAuthMode === AuthModal_1.AUTH_MODE.AMAZON_COGNITO_USER_POOLS) {
            headers['Authorization'] = this.state.credentials.cognitoJWTToken;
        }
        else if (this.state.currentAuthMode === AuthModal_1.AUTH_MODE.OPENID_CONNECT) {
            headers['Authorization'] = this.state.credentials.oidcJWTToken;
        }
        else if (this.state.currentAuthMode === AuthModal_1.AUTH_MODE.AWS_IAM) {
            headers['Authorization'] = this.state.credentials.iam;
        }
        return fetcher(params, headers);
    };
    App.prototype.storeCredentials = function (credentials) {
        var apiInfo = this.state.apiInfo;
        var newState = {
            apiInfo: __assign(__assign({}, apiInfo), { authenticationType: credentials.authMode }),
        };
        if (credentials.authMode === 'API_KEY') {
            newState['apiKey'] = credentials.apiKey;
            window.localStorage.setItem(LOCAL_STORAGE_KEY_NAMES.apiKey, credentials.apiKey);
        }
        else if (credentials.authMode === AuthModal_1.AUTH_MODE.AMAZON_COGNITO_USER_POOLS) {
            newState['cognitoJWTToken'] = credentials.cognitoToken;
            window.localStorage.setItem(LOCAL_STORAGE_KEY_NAMES.cognitoToken, credentials.cognitoToken);
        }
        else if (credentials.authMode === AuthModal_1.AUTH_MODE.OPENID_CONNECT) {
            newState['oidcJWTToken'] = credentials.OIDCToken;
            window.localStorage.setItem(LOCAL_STORAGE_KEY_NAMES.oidcToken, credentials.OIDCToken);
        }
        else if (credentials.authMode === AuthModal_1.AUTH_MODE.AWS_IAM) {
            newState['oidcJWTToken'] = credentials.IAM;
            window.localStorage.setItem(LOCAL_STORAGE_KEY_NAMES.iam, credentials.iam);
        }
        this.setState(function (prevState) { return ({
            credentials: __assign(__assign({}, prevState.credentials), newState),
            currentAuthMode: credentials.authMode,
        }); });
    };
    App.prototype.loadCredentials = function (apiInfo) {
        if (apiInfo === void 0) { apiInfo = this.state.apiInfo; }
        var credentials = {};
        var authProviders = __spreadArray([apiInfo.defaultAuthenticationType], apiInfo.additionalAuthenticationProviders, true);
        var possibleAuth = authProviders.map(function (auth) { return auth.authenticationType; });
        if (possibleAuth.includes('API_KEY')) {
            credentials['apiKey'] = DEFAULT_API_INFO.apiKey;
        }
        if (possibleAuth.includes('AMAZON_COGNITO_USER_POOLS')) {
            try {
                credentials['cognitoJWTToken'] = (0, jwt_1.refreshToken)(window.localStorage.getItem(LOCAL_STORAGE_KEY_NAMES.cognitoToken) || '');
            }
            catch (e) {
                console.warn('Invalid Cognito token found in local storage. Using the default OIDC token');
                // token is not valid
                credentials['cognitoJWTToken'] = (0, jwt_1.refreshToken)(DEFAULT_COGNITO_JWT_TOKEN);
            }
        }
        if (possibleAuth.includes('OPENID_CONNECT')) {
            var issuers = authProviders
                .filter(function (auth) { return auth.authenticationType === AuthModal_1.AUTH_MODE.OPENID_CONNECT; })
                .map(function (auth) { return auth.openIDConnectConfig.Issuer; });
            try {
                credentials['oidcJWTToken'] = (0, jwt_1.refreshToken)(window.localStorage.getItem(LOCAL_STORAGE_KEY_NAMES.oidcToken) || '', issuers[0]);
            }
            catch (e) {
                console.warn('Invalid OIDC token found in local storage. Using the default OIDC token');
                credentials['oidcJWTToken'] = (0, jwt_1.refreshToken)(DEFAULT_OIDC_JWT_TOKEN, issuers[0]);
            }
        }
        if (possibleAuth.includes('AWS_IAM')) {
            credentials['iam'] = 'AWS4-HMAC-SHA256 IAMAuthorized';
        }
        this.setState(function () { return ({
            currentAuthMode: AuthModal_1.AUTH_MODE[apiInfo.defaultAuthenticationType.authenticationType] || AuthModal_1.AUTH_MODE.API_KEY,
        }); });
        this.setState({ credentials: credentials });
        return credentials;
    };
    App.prototype.render = function () {
        var _this = this;
        var _a = this.state, query = _a.query, schema = _a.schema, authModalVisible = _a.authModalVisible, apiInfo = _a.apiInfo;
        var authModes = __spreadArray([
            AuthModal_1.AUTH_MODE[apiInfo.defaultAuthenticationType.authenticationType]
        ], apiInfo.additionalAuthenticationProviders.map(function (auth) { return AuthModal_1.AUTH_MODE[auth.authenticationType]; }), true).filter(function (auth) { return auth; });
        var authModal = authModalVisible ? (<AuthModal_1.AuthModal selectedAuthMode={this.state.currentAuthMode} currentOIDCToken={this.state.credentials.oidcJWTToken} currentCognitoToken={this.state.credentials.cognitoJWTToken} apiKey={this.state.credentials.apiKey} authModes={authModes} onClose={function (credentials) {
                _this.storeCredentials(credentials);
                _this.setState({ authModalVisible: false });
            }}/>) : null;
        return (<>
        {authModal}
        <div className='graphiql-container'>
          <graphiql_explorer_1.default schema={schema} query={query} onEdit={this._handleEditQuery} onRunOperation={function (operationName) { var _a; return (_a = _this._graphiql) === null || _a === void 0 ? void 0 : _a.handleRunQuery(operationName); }} explorerIsOpen={this.state.explorerIsOpen} onToggleExplorer={this._handleToggleExplorer}/>
          <graphiql_1.default ref={function (ref) { return (_this._graphiql = ref); }} fetcher={this.fetch} schema={schema} query={query} onEditQuery={this._handleEditQuery}>
            <graphiql_1.default.Toolbar>
              <graphiql_1.default.Button onClick={function () { var _a; return (_a = _this._graphiql) === null || _a === void 0 ? void 0 : _a.handlePrettifyQuery(); }} label='Prettify' title='Prettify Query (Shift-Ctrl-P)'/>
              <graphiql_1.default.Button onClick={function () { var _a; return (_a = _this._graphiql) === null || _a === void 0 ? void 0 : _a.handleToggleHistory(); }} label='History' title='Show History'/>
              <graphiql_1.default.Button onClick={this._handleToggleExplorer} label='Explorer' title='Toggle Explorer'/>
              <graphiql_1.default.Button onClick={this.toggleAuthModal} label='Update Auth' title='Auth Setting'/>
              <graphiql_1.default.Menu label={"Auth - " + AUTH_TYPE_TO_NAME[this.state.currentAuthMode] + " "} title={AUTH_TYPE_TO_NAME[this.state.currentAuthMode]}>
                {authModes.map(function (mode) { return (<graphiql_1.default.MenuItem title={AUTH_TYPE_TO_NAME[mode]} label={"Use: " + AUTH_TYPE_TO_NAME[mode]} onSelect={function () { return _this.switchAuthMode(mode); }}/>); })}
              </graphiql_1.default.Menu>
            </graphiql_1.default.Toolbar>
          </graphiql_1.default>
        </div>
      </>);
    };
    return App;
}(react_1.Component));
exports.default = App;
//# sourceMappingURL=App.js.map