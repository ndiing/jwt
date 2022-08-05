const crypto = require("crypto");
const Crypto = require("@ndiing/crypto");

/**
 * Nodejs JWT module
 *
 * ### Install
 * ```
 * npm install @ndiing/jwt
 * ```
 * @see {@link https://www.rfc-editor.org/rfc/rfc7519.html}
 * @see {@link https://jwt.io/}
 * @module JWT
 */

/** @private */
const algSign = {

    /** @private */
    HS256: function (data, options = {}) {
        const { secret: key } = options;
        return Crypto.hmac(data, { algorithm: "sha256", key, encoding: "base64url" });
    },

    /** @private */
    HS384: function (data, options = {}) {
        const { secret: key } = options;
        return Crypto.hmac(data, { algorithm: "sha384", key, encoding: "base64url" });
    },

    /** @private */
    HS512: function (data, options = {}) {
        const { secret: key } = options;
        return Crypto.hmac(data, { algorithm: "sha512", key, encoding: "base64url" });
    },

    /** @private */
    RS256: function (data, options = {}) {
        const { secret: { privateKey } = {} } = options;
        return Crypto.sign(data, { privateKey, algorithm: "sha256", encoding: "base64url" });
    },

    /** @private */
    RS384: function (data, options = {}) {
        const { secret: { privateKey } = {} } = options;
        return Crypto.sign(data, { privateKey, algorithm: "sha384", encoding: "base64url" });
    },

    /** @private */
    RS512: function (data, options = {}) {
        const { secret: { privateKey } = {} } = options;
        return Crypto.sign(data, { privateKey, algorithm: "sha512", encoding: "base64url" });
    },

    /** @private */
    ES256: function (data, options = {}) {
        const { secret: { privateKey } = {} } = options;
        return Crypto.sign(data, {
            privateKey: {
                key: privateKey,
                // dsaEncoding: 'der',
                dsaEncoding: "ieee-p1363",
                // padding: crypto.constants.RSA_PKCS1_PADDING,
                // padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
                // saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST,
                // saltLength: crypto.constants.RSA_PSS_SALTLEN_MAX_SIGN,
            },
            algorithm: "rsa-sha256",
            encoding: "base64url",
        });
    },

    /** @private */
    ES384: function (data, options = {}) {
        const { secret: { privateKey } = {} } = options;
        return Crypto.sign(data, {
            privateKey: {
                key: privateKey,
                // dsaEncoding: 'der',
                dsaEncoding: "ieee-p1363",
                // padding: crypto.constants.RSA_PKCS1_PADDING,
                // padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
                // saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST,
                // saltLength: crypto.constants.RSA_PSS_SALTLEN_MAX_SIGN,
            },
            algorithm: "rsa-sha384",
            encoding: "base64url",
        });
    },

    /** @private */
    ES512: function (data, options = {}) {
        const { secret: { privateKey } = {} } = options;
        return Crypto.sign(data, {
            privateKey: {
                key: privateKey,
                // dsaEncoding: 'der',
                dsaEncoding: "ieee-p1363",
                // padding: crypto.constants.RSA_PKCS1_PADDING,
                // padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
                // saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST,
                // saltLength: crypto.constants.RSA_PSS_SALTLEN_MAX_SIGN,
            },
            algorithm: "rsa-sha512",
            encoding: "base64url",
        });
    },

    /** @private */
    PS256: function (data, options = {}) {
        const { secret: { privateKey } = {} } = options;
        return Crypto.sign(data, {
            privateKey: {
                key: privateKey,
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
            },
            algorithm: "rsa-sha256",
            encoding: "base64url",
        });
    },

    /** @private */
    PS384: function (data, options = {}) {
        const { secret: { privateKey } = {} } = options;
        return Crypto.sign(data, {
            privateKey: {
                key: privateKey,
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
            },
            algorithm: "rsa-sha384",
            encoding: "base64url",
        });
    },

    /** @private */
    PS512: function (data, options = {}) {
        const { secret: { privateKey } = {} } = options;
        return Crypto.sign(data, {
            privateKey: {
                key: privateKey,
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
            },
            algorithm: "rsa-sha512",
            encoding: "base64url",
        });
    },
};

/** @private */
const algVerify = {

    /** @private */
    HS256: function (data, signature, options = {}) {
        const { secret: key } = options;
        return signature == Crypto.hmac(data, { algorithm: "sha256", key, encoding: "base64url" });
    },

    /** @private */
    HS384: function (data, signature, options = {}) {
        const { secret: key } = options;
        return signature == Crypto.hmac(data, { algorithm: "sha384", key, encoding: "base64url" });
    },

    /** @private */
    HS512: function (data, signature, options = {}) {
        const { secret: key } = options;
        return signature == Crypto.hmac(data, { algorithm: "sha512", key, encoding: "base64url" });
    },

    /** @private */
    RS256: function (data, signature, options = {}) {
        const { secret: { privateKey } = {} } = options;
        return Crypto.verify(data, signature, { privateKey, algorithm: "sha256", encoding: "base64url" });
    },

    /** @private */
    RS384: function (data, signature, options = {}) {
        const { secret: { privateKey } = {} } = options;
        return Crypto.verify(data, signature, { privateKey, algorithm: "sha384", encoding: "base64url" });
    },

    /** @private */
    RS512: function (data, signature, options = {}) {
        const { secret: { privateKey } = {} } = options;
        return Crypto.verify(data, signature, { privateKey, algorithm: "sha512", encoding: "base64url" });
    },

    /** @private */
    ES256: function (data, signature, options = {}) {
        const { secret: { privateKey } = {} } = options;
        return Crypto.verify(data, signature, {
            privateKey: {
                key: privateKey,
                // dsaEncoding: 'der',
                dsaEncoding: "ieee-p1363",
                // padding: crypto.constants.RSA_PKCS1_PADDING,
                // padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
                // saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST,
                // saltLength: crypto.constants.RSA_PSS_SALTLEN_MAX_SIGN,
            },
            algorithm: "rsa-sha256",
            encoding: "base64url",
        });
    },

    /** @private */
    ES384: function (data, signature, options = {}) {
        const { secret: { privateKey } = {} } = options;
        return Crypto.verify(data, signature, {
            privateKey: {
                key: privateKey,
                // dsaEncoding: 'der',
                dsaEncoding: "ieee-p1363",
                // padding: crypto.constants.RSA_PKCS1_PADDING,
                // padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
                // saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST,
                // saltLength: crypto.constants.RSA_PSS_SALTLEN_MAX_SIGN,
            },
            algorithm: "rsa-sha384",
            encoding: "base64url",
        });
    },

    /** @private */
    ES512: function (data, signature, options = {}) {
        const { secret: { privateKey } = {} } = options;
        return Crypto.verify(data, signature, {
            privateKey: {
                key: privateKey,
                // dsaEncoding: 'der',
                dsaEncoding: "ieee-p1363",
                // padding: crypto.constants.RSA_PKCS1_PADDING,
                // padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
                // saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST,
                // saltLength: crypto.constants.RSA_PSS_SALTLEN_MAX_SIGN,
            },
            algorithm: "rsa-sha512",
            encoding: "base64url",
        });
    },

    /** @private */
    PS256: function (data, signature, options = {}) {
        const { secret: { privateKey } = {} } = options;
        return Crypto.verify(data, signature, {
            privateKey: {
                key: privateKey,
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
            },
            algorithm: "rsa-sha256",
            encoding: "base64url",
        });
    },

    /** @private */
    PS384: function (data, signature, options = {}) {
        const { secret: { privateKey } = {} } = options;
        return Crypto.verify(data, signature, {
            privateKey: {
                key: privateKey,
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
            },
            algorithm: "rsa-sha384",
            encoding: "base64url",
        });
    },

    /** @private */
    PS512: function (data, signature, options = {}) {
        const { secret: { privateKey } = {} } = options;
        return Crypto.verify(data, signature, {
            privateKey: {
                key: privateKey,
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
            },
            algorithm: "rsa-sha512",
            encoding: "base64url",
        });
    },
};

/**
 * Encode data
 * @param {Object} data -
 * @param {Object} options -
 * @param {Object} options.headers -
 * @param {String} options.headers.alg - `HS256`,`HS384`,`HS512`,`RS256`,`RS384`,`RS512`,`ES256`,`ES384`,`ES512`,`PS256`,`PS384`,`PS512`
 * @param {String} options.headers.typ -
 * @param {String/Object} options.headers.secret - used in `HS256`,`HS384`,`HS512`
 * @param {String} options.headers.secret.publicKey - used in `RS256`,`RS384`,`RS512`,`ES256`,`ES384`,`ES512`,`PS256`,`PS384`,`PS512`
 * @param {String} options.headers.secret.privateKey - used in `RS256`,`RS384`,`RS512`,`ES256`,`ES384`,`ES512`,`PS256`,`PS384`,`PS512`
 * @returns {String}
 */
function encode(data, options = {}) {
    let { headers } = options;
    headers = Crypto.base64UrlEncode(JSON.stringify(headers));
    data = Crypto.base64UrlEncode(JSON.stringify(data));
    const message = `${headers}.${data}`;
    const signature = sign(message, options);
    return `${message}.${signature}`;
}

/**
 * Decode from token
 * @param {String} data -
 * @returns {Object}
 */
function decode(data) {
    [, data] = data.split(".");
    data = JSON.parse(Crypto.base64UrlDecode(data));
    return data;
}

/** @private */
function getMessage(data) {
    let headers;
    [headers, data] = data.split(".");
    return `${headers}.${data}`;
}

/** @private */
function decodeHeaders(data) {
    let headers;
    [headers] = data.split(".");
    headers = JSON.parse(Crypto.base64UrlDecode(headers));
    return headers;
}

/** @private */
function sign(data, options = {}) {
    const headers = decodeHeaders(data);
    const message = getMessage(data);
    return algSign[headers.alg](message, options);
}

/**
 * Verify token
 * @param {String} data -
 * @param {Object} options - 
 * @param {Object} options.headers -
 * @param {String} options.headers.alg - `HS256`,`HS384`,`HS512`,`RS256`,`RS384`,`RS512`,`ES256`,`ES384`,`ES512`,`PS256`,`PS384`,`PS512`
 * @param {String} options.headers.typ -
 * @param {String/Object} options.headers.secret - used in `HS256`,`HS384`,`HS512`
 * @param {String} options.headers.secret.publicKey - used in `RS256`,`RS384`,`RS512`,`ES256`,`ES384`,`ES512`,`PS256`,`PS384`,`PS512`
 * @param {String} options.headers.secret.privateKey - used in `RS256`,`RS384`,`RS512`,`ES256`,`ES384`,`ES512`,`PS256`,`PS384`,`PS512`
 * @returns {Boolean}
 */
function verify(data, options = {}) {
    const { alg } = decodeHeaders(data);
    let headers;
    let signature;
    [headers, data, signature] = data.split(".");
    let message = `${headers}.${data}`;
    return algVerify[alg](message, signature, options);
}

module.exports = {
    algSign,
    algVerify,
    encode,
    decode,
    getMessage,
    decodeHeaders,
    sign,
    verify,
};
