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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModal = exports.AUTH_MODE = void 0;
var react_1 = __importStar(require("react"));
var semantic_ui_react_1 = require("semantic-ui-react");
var jwt_1 = require("./utils/jwt");
var AUTH_MODE;
(function (AUTH_MODE) {
    AUTH_MODE["API_KEY"] = "API_KEY";
    AUTH_MODE["AMAZON_COGNITO_USER_POOLS"] = "AMAZON_COGNITO_USER_POOLS";
    AUTH_MODE["OPENID_CONNECT"] = "OPENID_CONNECT";
    AUTH_MODE["AWS_IAM"] = "AWS_IAM";
})(AUTH_MODE = exports.AUTH_MODE || (exports.AUTH_MODE = {}));
var AuthModal = /** @class */ (function (_super) {
    __extends(AuthModal, _super);
    function AuthModal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            currentCognitoToken: '',
            currentOIDCTokenDecoded: '',
            currentOIDCToken: '',
            userName: '',
            issuer: '',
            userGroups: [],
            apiKey: '',
            possibleGroups: [],
            email: '',
            supportedAuthModes: [AUTH_MODE.API_KEY],
            isOpen: true,
            currentAuthMode: AUTH_MODE.API_KEY,
            oidcTokenError: '',
        };
        _this.onAdditionalFieldChange = function (ev, data) {
            _this.setState({
                additionalFields: data.value,
            });
        };
        var decodedToken = _this.parseJWTToken(_this.props.currentCognitoToken) || {};
        var state = {
            userName: decodedToken['cognito:username'] || '',
            userGroups: decodedToken['cognito:groups'] || [],
            issuer: decodedToken['iss'],
            email: decodedToken['email'],
            possibleGroups: decodedToken['cognito:groups'] || [],
        };
        var jwtFieldsToFilter = [
            'cognito:username',
            'cognito:groups',
            'iss',
            'email',
            'sub',
            'aud',
            'exp',
            'event_id',
            'iat',
            'algorithm',
            'auth_time',
        ];
        var additionalFields = Object.keys(decodedToken)
            .filter(function (k) { return !jwtFieldsToFilter.includes(k); })
            .reduce(function (acc, k) {
            var _a;
            return (__assign(__assign({}, acc), (_a = {}, _a[k] = decodedToken[k], _a)));
        }, {});
        _this.state = __assign(__assign(__assign({}, _this.state), state), { additionalFields: JSON.stringify(additionalFields, null, 4), currentCognitoToken: _this.props.currentCognitoToken || '', currentOIDCToken: _this.props.currentOIDCToken || '', currentOIDCTokenDecoded: JSON.stringify(_this.parseJWTToken(_this.props.currentOIDCToken), null, 4) || '', apiKey: props.apiKey || '', supportedAuthModes: _this.props.authModes, currentAuthMode: props.selectedAuthMode });
        _this.onClose = _this.onClose.bind(_this);
        _this.onGroupChange = _this.onGroupChange.bind(_this);
        _this.onGroupAdd = _this.onGroupAdd.bind(_this);
        _this.onGenerate = _this.onGenerate.bind(_this);
        _this.changeAPIKey = _this.changeAPIKey.bind(_this);
        _this.changeEmail = _this.changeEmail.bind(_this);
        _this.onUserNameChange = _this.onUserNameChange.bind(_this);
        _this.onOIDCTokenChange = _this.onOIDCTokenChange.bind(_this);
        _this.onAuthModeChange = _this.onAuthModeChange.bind(_this);
        return _this;
    }
    AuthModal.prototype.onClose = function () {
        var result = {
            authMode: this.state.currentAuthMode,
            apiKey: this.state.currentAuthMode === AUTH_MODE.API_KEY ? this.state.apiKey : null,
            cognitoToken: this.state.currentAuthMode === AUTH_MODE.AMAZON_COGNITO_USER_POOLS ? this.state.currentCognitoToken : null,
            OIDCToken: this.state.currentAuthMode === AUTH_MODE.OPENID_CONNECT ? this.state.currentOIDCToken : null,
            // We have no data for IAM to store, so we just store a constant string for now
            iam: this.state.currentAuthMode === AUTH_MODE.AWS_IAM ? 'AWS4-HMAC-SHA256 IAMAuthorized' : null,
        };
        if (this.props.onClose) {
            this.props.onClose(result);
        }
    };
    AuthModal.prototype.onGroupChange = function (ev, data) {
        this.setState({
            userGroups: data.value,
        });
    };
    AuthModal.prototype.onGroupAdd = function (ev, data) {
        this.setState({
            possibleGroups: __spreadArray(__spreadArray([], this.state.possibleGroups, true), [data.value], false),
        });
    };
    AuthModal.prototype.onUserNameChange = function (ev, data) {
        this.setState({
            userName: data.value,
        });
    };
    AuthModal.prototype.onOIDCTokenChange = function (ev, data) {
        this.setState({
            currentOIDCTokenDecoded: data.value,
        });
    };
    AuthModal.prototype.onAuthModeChange = function (ev, data) {
        this.setState({
            currentAuthMode: data.value,
        });
    };
    AuthModal.prototype.changeEmail = function (ev, data) {
        this.setState({
            email: data.value,
        });
    };
    AuthModal.prototype.changeAPIKey = function (ev, data) {
        this.setState({
            apiKey: data.value,
        });
    };
    AuthModal.prototype.render = function () {
        var formContent;
        var actionText = 'Save';
        if (this.state.currentAuthMode === AUTH_MODE.API_KEY) {
            formContent = (<>
          <semantic_ui_react_1.Form.Field>
            <label>ApiKey</label>
            <semantic_ui_react_1.Input readOnly placeholder='APIKey' value={this.state.apiKey} onChange={this.changeAPIKey}/>
          </semantic_ui_react_1.Form.Field>
        </>);
        }
        else if (this.state.currentAuthMode === AUTH_MODE.AMAZON_COGNITO_USER_POOLS) {
            actionText = 'Generate Token';
            formContent = (<>
          <semantic_ui_react_1.Form.Field>
            <label>Username</label>
            <semantic_ui_react_1.Input placeholder='User Name' value={this.state.userName} onChange={this.onUserNameChange}/>
          </semantic_ui_react_1.Form.Field>
          <semantic_ui_react_1.Form.Field>
            <label>Groups</label>
            <semantic_ui_react_1.Dropdown placeholder='Choose cognito user groups' search options={this.state.possibleGroups.map(function (g) { return ({
                    key: g,
                    value: g,
                    text: g,
                }); })} selection fluid multiple allowAdditions value={this.state.userGroups} onAddItem={this.onGroupAdd} onChange={this.onGroupChange}/>
          </semantic_ui_react_1.Form.Field>
          <semantic_ui_react_1.Form.Field>
            <label>Email</label>
            <semantic_ui_react_1.Input placeholder='Email' value={this.state.email} onChange={this.changeEmail}/>
          </semantic_ui_react_1.Form.Field>

          <semantic_ui_react_1.Form.Field>
            <label>Additional Fields</label>
            <semantic_ui_react_1.TextArea onChange={this.onAdditionalFieldChange} rows={10} placeholder='Decoded OIDC Token' spellCheck='false' value={this.state.additionalFields}/>
          </semantic_ui_react_1.Form.Field>
        </>);
        }
        else if (this.state.currentAuthMode === AUTH_MODE.OPENID_CONNECT) {
            var errorLabel = this.state.oidcTokenError ? (<semantic_ui_react_1.Label basic color='red' pointing='below'>
          {this.state.oidcTokenError}
        </semantic_ui_react_1.Label>) : null;
            formContent = (<>
          <semantic_ui_react_1.Form.Field>
            <label>Decoded OpenID Connect Token</label>
            {errorLabel}
            <semantic_ui_react_1.TextArea onChange={this.onOIDCTokenChange} rows={10} placeholder='Decoded OIDC Token' spellCheck='false' value={this.state.currentOIDCTokenDecoded}/>
          </semantic_ui_react_1.Form.Field>
        </>);
        }
        else if (this.state.currentAuthMode === AUTH_MODE.AWS_IAM) {
            formContent = (<>
          <label>IAM authentication mode has no settings.</label>
        </>);
        }
        var authModeOptions = this.state.supportedAuthModes
            .filter(function (mode) { return mode; })
            .map(function (mode) { return ({
            key: mode,
            value: mode,
            text: mode,
        }); });
        return (<semantic_ui_react_1.Modal onClose={this.onClose} onActionClick={this.onGenerate} open={this.state.isOpen}>
        <semantic_ui_react_1.Modal.Header>Auth Options</semantic_ui_react_1.Modal.Header>
        <semantic_ui_react_1.Modal.Content>
          <semantic_ui_react_1.Modal.Description>
            <semantic_ui_react_1.Dropdown placeholder='Auth Mode' selection options={authModeOptions} value={this.state.currentAuthMode} onChange={this.onAuthModeChange}/>
            <div style={{ marginTop: '1em' }}>
              <semantic_ui_react_1.Form>{formContent}</semantic_ui_react_1.Form>
            </div>
          </semantic_ui_react_1.Modal.Description>
        </semantic_ui_react_1.Modal.Content>
        <semantic_ui_react_1.Modal.Actions>
          <semantic_ui_react_1.Button primary onClick={this.onGenerate}>
            {actionText}
          </semantic_ui_react_1.Button>
        </semantic_ui_react_1.Modal.Actions>
      </semantic_ui_react_1.Modal>);
    };
    AuthModal.prototype.onGenerate = function () {
        var _this = this;
        try {
            var newState = {
                isOpen: false,
            };
            if (this.state.currentAuthMode === AUTH_MODE.AMAZON_COGNITO_USER_POOLS) {
                newState['currentCognitoToken'] = this.generateCognitoJWTToken();
            }
            else if (this.state.currentAuthMode === AUTH_MODE.OPENID_CONNECT) {
                newState['currentOIDCToken'] = this.generateOIDCJWTToken();
            }
            this.setState(newState, function () {
                _this.onClose();
            });
        }
        catch (e) { }
    };
    AuthModal.prototype.generateCognitoJWTToken = function () {
        var _a;
        var additionalFields;
        try {
            additionalFields = JSON.parse(((_a = this.state.additionalFields) === null || _a === void 0 ? void 0 : _a.trim()) || '{}');
        }
        catch (e) {
            additionalFields = {};
        }
        var tokenPayload = __assign({ sub: '7d8ca528-4931-4254-9273-ea5ee853f271', 'cognito:groups': [], email_verified: true, algorithm: 'HS256', iss: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_fake_idp', phone_number_verified: true, 'cognito:username': '', 'cognito:roles': [], aud: '2hifa096b3a24mvm3phskuaqi3', event_id: '18f4067e-9985-4eae-9f33-f45f495470d0', token_use: 'id', phone_number: '+12062062016', exp: Math.floor(Date.now() / 1000) + 60 * 60 * 12, email: this.state.email }, additionalFields);
        tokenPayload['cognito:username'] = this.state.userName;
        tokenPayload['cognito:groups'] = this.state.userGroups;
        tokenPayload['auth_time'] = Math.floor(Date.now() / 1000); // In seconds
        var token = (0, jwt_1.generateToken)(tokenPayload);
        return token;
    };
    AuthModal.prototype.generateOIDCJWTToken = function () {
        var tokenPayload = this.state.currentOIDCTokenDecoded || '';
        try {
            return (0, jwt_1.generateToken)(tokenPayload);
        }
        catch (e) {
            this.setState({
                oidcTokenError: e.message,
            });
            throw e;
        }
    };
    AuthModal.prototype.parseJWTToken = function (token) {
        return (0, jwt_1.parse)(token);
    };
    return AuthModal;
}(react_1.Component));
exports.AuthModal = AuthModal;
//# sourceMappingURL=AuthModal.js.map