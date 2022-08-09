const Crypto = require('@ndiing/crypto');
const crypto = require("crypto");

/**
 * ### Install
 * ```
 * npm install @ndiing/jwt
 * ```
 * @see {@link ./test.js}
 * @module JWT
 */

/**
 *
 */
class Signer {
    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String/Object} options.secret
     * @returns {String}
     */
    static HS256(data, options = {}) {
        const { algorithm = "sha256", secret: key, encoding = "base64url" } = options;
        options = { algorithm, key, encoding };
        return Crypto.hmac(data, options);
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String/Object} options.secret
     * @returns {String}
     */
    static HS384(data, options = {}) {
        const { algorithm = "sha384", secret: key, encoding = "base64url" } = options;
        options = { algorithm, key, encoding };
        return Crypto.hmac(data, options);
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String/Object} options.secret
     * @returns {String}
     */
    static HS512(data, options = {}) {
        const { algorithm = "sha512", secret: key, encoding = "base64url" } = options;
        options = { algorithm, key, encoding };
        return Crypto.hmac(data, options);
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String/Object} options.secret
     * @returns {String}
     */
    static RS256(data, options = {}) {
        const { algorithm = "sha256", secret: { privateKey } = {}, encoding = "base64url" } = options;
        options = { algorithm, privateKey, encoding };
        return Crypto.sign(data, options);
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String/Object} options.secret
     * @returns {String}
     */
    static RS384(data, options = {}) {
        const { algorithm = "sha384", secret: { privateKey } = {}, encoding = "base64url" } = options;
        options = { algorithm, privateKey, encoding };
        return Crypto.sign(data, options);
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String/Object} options.secret
     * @returns {String}
     */
    static RS512(data, options = {}) {
        const { algorithm = "sha512", secret: { privateKey } = {}, encoding = "base64url" } = options;
        options = { algorithm, privateKey, encoding };
        return Crypto.sign(data, options);
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String/Object} options.secret
     * @returns {String}
     */
    static ES256(data, options = {}) {
        const { algorithm = "sha256", secret: { privateKey: key } = {}, encoding = "base64url" } = options;
        var padding;
        var saltLength;
        var dsaEncoding = "ieee-p1363";
        options = { algorithm, privateKey: { key, padding, saltLength, dsaEncoding }, encoding };
        return Crypto.sign(data, options);
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String/Object} options.secret
     * @returns {String}
     */
    static ES384(data, options = {}) {
        const { algorithm = "sha384", secret: { privateKey: key } = {}, encoding = "base64url" } = options;
        var padding;
        var saltLength;
        var dsaEncoding = "ieee-p1363";
        options = { algorithm, privateKey: { key, padding, saltLength, dsaEncoding }, encoding };
        return Crypto.sign(data, options);
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String/Object} options.secret
     * @returns {String}
     */
    static ES512(data, options = {}) {
        const { algorithm = "sha512", secret: { privateKey: key } = {}, encoding = "base64url" } = options;
        var padding;
        var saltLength;
        var dsaEncoding = "ieee-p1363";
        options = { algorithm, privateKey: { key, padding, saltLength, dsaEncoding }, encoding };
        return Crypto.sign(data, options);
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String/Object} options.secret
     * @returns {String}
     */
    static PS256(data, options = {}) {
        const { algorithm = "sha256", secret: { privateKey: key } = {}, encoding = "base64url" } = options;
        var padding = crypto.constants.RSA_PKCS1_PSS_PADDING;
        var saltLength;
        var dsaEncoding;
        options = { algorithm, privateKey: { key, padding, saltLength, dsaEncoding }, encoding };
        return Crypto.sign(data, options);
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String/Object} options.secret
     * @returns {String}
     */
    static PS384(data, options = {}) {
        const { algorithm = "sha384", secret: { privateKey: key } = {}, encoding = "base64url" } = options;
        var padding = crypto.constants.RSA_PKCS1_PSS_PADDING;
        var saltLength;
        var dsaEncoding;
        options = { algorithm, privateKey: { key, padding, saltLength, dsaEncoding }, encoding };
        return Crypto.sign(data, options);
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String/Object} options.secret
     * @returns {String}
     */
    static PS512(data, options = {}) {
        const { algorithm = "sha512", secret: { privateKey: key } = {}, encoding = "base64url" } = options;
        var padding = crypto.constants.RSA_PKCS1_PSS_PADDING;
        var saltLength;
        var dsaEncoding;
        options = { algorithm, privateKey: { key, padding, saltLength, dsaEncoding }, encoding };
        return Crypto.sign(data, options);
    }
}

/**
 *
 */
class Verifier {
    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String/Object} options.secret
     * @returns {Boolean}
     */
    static HS256(data, signature, options = {}) {
        const { algorithm = "sha256", secret: key, encoding = "base64url" } = options;
        options = { algorithm, key, encoding };
        return Crypto.hmac(data, options) == signature;
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String/Object} options.secret
     * @returns {Boolean}
     */
    static HS384(data, signature, options = {}) {
        const { algorithm = "sha384", secret: key, encoding = "base64url" } = options;
        options = { algorithm, key, encoding };
        return Crypto.hmac(data, options) == signature;
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String/Object} options.secret
     * @returns {Boolean}
     */
    static HS512(data, signature, options = {}) {
        const { algorithm = "sha512", secret: key, encoding = "base64url" } = options;
        options = { algorithm, key, encoding };
        return Crypto.hmac(data, options) == signature;
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String/Object} options.secret
     * @returns {Boolean}
     */
    static RS256(data, signature, options = {}) {
        const { algorithm = "sha256", secret: { privateKey } = {}, encoding = "base64url" } = options;
        options = { algorithm, privateKey, encoding };
        return Crypto.verify(data, signature, options);
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String/Object} options.secret
     * @returns {Boolean}
     */
    static RS384(data, signature, options = {}) {
        const { algorithm = "sha384", secret: { privateKey } = {}, encoding = "base64url" } = options;
        options = { algorithm, privateKey, encoding };
        return Crypto.verify(data, signature, options);
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String/Object} options.secret
     * @returns {Boolean}
     */
    static RS512(data, signature, options = {}) {
        const { algorithm = "sha512", secret: { privateKey } = {}, encoding = "base64url" } = options;
        options = { algorithm, privateKey, encoding };
        return Crypto.verify(data, signature, options);
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String/Object} options.secret
     * @returns {Boolean}
     */
    static ES256(data, signature, options = {}) {
        const { algorithm = "sha256", secret: { privateKey: key } = {}, encoding = "base64url" } = options;
        var padding;
        var saltLength;
        var dsaEncoding = "ieee-p1363";
        options = { algorithm, privateKey: { key, padding, saltLength, dsaEncoding }, encoding };
        return Crypto.verify(data, signature, options);
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String/Object} options.secret
     * @returns {Boolean}
     */
    static ES384(data, signature, options = {}) {
        const { algorithm = "sha384", secret: { privateKey: key } = {}, encoding = "base64url" } = options;
        var padding;
        var saltLength;
        var dsaEncoding; //='ieee-p1363';
        options = { algorithm, privateKey: { key, padding, saltLength, dsaEncoding }, encoding };
        return Crypto.verify(data, signature, options);
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String/Object} options.secret
     * @returns {Boolean}
     */
    static ES512(data, signature, options = {}) {
        const { algorithm = "sha512", secret: { privateKey: key } = {}, encoding = "base64url" } = options;
        var padding;
        var saltLength;
        var dsaEncoding; //='ieee-p1363';
        options = { algorithm, privateKey: { key, padding, saltLength, dsaEncoding }, encoding };
        return Crypto.verify(data, signature, options);
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String/Object} options.secret
     * @returns {Boolean}
     */
    static PS256(data, signature, options = {}) {
        const { algorithm = "sha256", secret: { privateKey: key } = {}, encoding = "base64url" } = options;
        var padding = crypto.constants.RSA_PKCS1_PSS_PADDING;
        var saltLength;
        var dsaEncoding;
        options = { algorithm, privateKey: { key, padding, saltLength, dsaEncoding }, encoding };
        return Crypto.verify(data, signature, options);
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String/Object} options.secret
     * @returns {Boolean}
     */
    static PS384(data, signature, options = {}) {
        const { algorithm = "sha384", secret: { privateKey: key } = {}, encoding = "base64url" } = options;
        var padding = crypto.constants.RSA_PKCS1_PSS_PADDING;
        var saltLength;
        var dsaEncoding;
        options = { algorithm, privateKey: { key, padding, saltLength, dsaEncoding }, encoding };
        return Crypto.verify(data, signature, options);
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String/Object} options.secret
     * @returns {Boolean}
     */
    static PS512(data, signature, options = {}) {
        const { algorithm = "sha512", secret: { privateKey: key } = {}, encoding = "base64url" } = options;
        var padding = crypto.constants.RSA_PKCS1_PSS_PADDING;
        var saltLength;
        var dsaEncoding;
        options = { algorithm, privateKey: { key, padding, saltLength, dsaEncoding }, encoding };
        return Crypto.verify(data, signature, options);
    }
}

/**
 *
 */
class JWT {
    /**
     *
     * @param {Object} data
     * @param {Object} options
     * @param {Object} options.headers
     * @param {String} options.headers.alg
     * @param {String} options.headers.typ
     * @param {String/Object} options.secret
     * @param {String/Object} options.secret.privateKey
     * @returns {String}
     */
    static encode(data, options = {}) {
        let { headers } = options;
        headers = JSON.stringify(headers);
        headers = Crypto.base64UrlEncode(headers);
        data = JSON.stringify(data);
        data = Crypto.base64UrlEncode(data);
        const message = `${headers}.${data}`;
        const signature = this.sign(message, options);
        return `${message}.${signature}`;
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @returns {Object}
     */
    static decode(data, options = {}) {
        [, data] = data.split(".");
        data = Crypto.base64Decode(data);
        data = JSON.parse(data);
        return data;
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @returns {String}
     */
    static sign(data, options = {}) {
        let headers;
        [headers, data] = data.split(".");
        const { alg } = JSON.parse(Crypto.base64UrlDecode(headers));
        const message = `${headers}.${data}`;
        return Signer[alg](message, options);
    }

    /**
     *
     * @param {String} data
     * @param {String} signature
     * @param {Object} options
     * @returns {Boolean}
     */
    static verify(data, signature, options = {}) {
        let headers;
        [headers, data] = data.split(".");
        const { alg } = JSON.parse(Crypto.base64UrlDecode(headers));
        const message = `${headers}.${data}`;
        return Verifier[alg](message, signature, options);
    }
}

JWT.Signer = Signer;
JWT.Verifier = Verifier;
module.exports = JWT;

// jsdoc2md jwt/index.js > jwt/README.md
