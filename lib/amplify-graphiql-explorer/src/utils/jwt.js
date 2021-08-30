"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = exports.parse = exports.generateToken = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
function generateToken(decodedToken) {
    try {
        if (typeof decodedToken === 'string') {
            decodedToken = JSON.parse(decodedToken);
        }
        var token = (0, jsonwebtoken_1.sign)(decodedToken, 'open-secrete');
        (0, jsonwebtoken_1.verify)(token, 'open-secrete');
        return token;
    }
    catch (e) {
        var err = new Error('Error when generating OIDC token: ' + e.message);
        throw err;
    }
}
exports.generateToken = generateToken;
function parse(token) {
    var decodedToken = (0, jsonwebtoken_1.decode)(token);
    return decodedToken;
}
exports.parse = parse;
/**
 * Updates the exp time of the static token to ensure the shipped token is fresh. If user passes an
 * issuer, updates the token with the issuer
 * @param token
 * @param issuer
 */
function refreshToken(token, issuer) {
    var tokenObj = parse(token);
    if (!Object.keys(tokenObj).length) {
        throw new Error("Invalid token " + token);
    }
    if (issuer) {
        tokenObj.iss = issuer;
    }
    tokenObj.exp = Math.floor(Date.now() / 100 + 20000);
    return generateToken(JSON.stringify(tokenObj));
}
exports.refreshToken = refreshToken;
//# sourceMappingURL=jwt.js.map