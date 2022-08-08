const crypto = require("crypto");
const Crypto = require("@ndiing/crypto");

/**
 * Nodejs JSON Web Token module
 * ### Install
 * ```
 * npm i @ndiing/jwt
 * ```
 */

class JWT {
    /** @private */
    static algSign = {
        /** @private */
        HS256(data, options = {}) {
            const { secret: key } = options;
            return Crypto.hmac(data, { algorithm: "sha256", key, encoding: "base64url" });
        },

        /** @private */
        HS384(data, options = {}) {
            const { secret: key } = options;
            return Crypto.hmac(data, { algorithm: "sha384", key, encoding: "base64url" });
        },

        /** @private */
        HS512(data, options = {}) {
            const { secret: key } = options;
            return Crypto.hmac(data, { algorithm: "sha512", key, encoding: "base64url" });
        },

        /** @private */
        RS256(data, options = {}) {
            const { secret: { privateKey } = {} } = options;
            return Crypto.sign(data, { privateKey, algorithm: "sha256", encoding: "base64url" });
        },

        /** @private */
        RS384(data, options = {}) {
            const { secret: { privateKey } = {} } = options;
            return Crypto.sign(data, { privateKey, algorithm: "sha384", encoding: "base64url" });
        },

        /** @private */
        RS512(data, options = {}) {
            const { secret: { privateKey } = {} } = options;
            return Crypto.sign(data, { privateKey, algorithm: "sha512", encoding: "base64url" });
        },

        /** @private */
        ES256(data, options = {}) {
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
        ES384(data, options = {}) {
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
        ES512(data, options = {}) {
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
        PS256(data, options = {}) {
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
        PS384(data, options = {}) {
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
        PS512(data, options = {}) {
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
    static algVerify = {
        /** @private */
        HS256(data, signature, options = {}) {
            const { secret: key } = options;
            return signature == Crypto.hmac(data, { algorithm: "sha256", key, encoding: "base64url" });
        },

        /** @private */
        HS384(data, signature, options = {}) {
            const { secret: key } = options;
            return signature == Crypto.hmac(data, { algorithm: "sha384", key, encoding: "base64url" });
        },

        /** @private */
        HS512(data, signature, options = {}) {
            const { secret: key } = options;
            return signature == Crypto.hmac(data, { algorithm: "sha512", key, encoding: "base64url" });
        },

        /** @private */
        RS256(data, signature, options = {}) {
            const { secret: { privateKey } = {} } = options;
            return Crypto.verify(data, signature, { privateKey, algorithm: "sha256", encoding: "base64url" });
        },

        /** @private */
        RS384(data, signature, options = {}) {
            const { secret: { privateKey } = {} } = options;
            return Crypto.verify(data, signature, { privateKey, algorithm: "sha384", encoding: "base64url" });
        },

        /** @private */
        RS512(data, signature, options = {}) {
            const { secret: { privateKey } = {} } = options;
            return Crypto.verify(data, signature, { privateKey, algorithm: "sha512", encoding: "base64url" });
        },

        /** @private */
        ES256(data, signature, options = {}) {
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
        ES384(data, signature, options = {}) {
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
        ES512(data, signature, options = {}) {
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
        PS256(data, signature, options = {}) {
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
        PS384(data, signature, options = {}) {
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
        PS512(data, signature, options = {}) {
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
    static encode(data, options = {}) {
        let { headers } = options;
        headers = Crypto.base64UrlEncode(JSON.stringify(headers));
        data = Crypto.base64UrlEncode(JSON.stringify(data));
        const message = `${headers}.${data}`;
        const signature = this.sign(message, options);
        return `${message}.${signature}`;
    }

    /**
     * Decode from token
     * @param {String} data -
     * @returns {Object}
     */
    static decode(data) {
        [, data] = data.split(".");
        data = JSON.parse(Crypto.base64UrlDecode(data));
        return data;
    }

    /** @private */
    static sign(data, options = {}) {
        let headers;
        [headers, data] = data.split(".");
        const message = `${headers}.${data}`;
        const { alg } = JSON.parse(Crypto.base64UrlDecode(headers));
        return this.algSign[alg](message, options);
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
    static verify(data, options = {}) {
        let headers;
        let signature;
        [headers, data, signature] = data.split(".");
        const message = `${headers}.${data}`;
        const { alg } = JSON.parse(Crypto.base64UrlDecode(headers));
        return this.algVerify[alg](message, signature, options);
    }
}

module.exports = JWT;
