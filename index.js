const Crypto = require("@ndiinginc/crypto");
const crypto = require("crypto");

/**
 *
 */
class Signer {
    /**
     *
     */
    static HS256(data, options = {}) {
        const { algorithm = "sha256", secret: key, encoding = "base64url" } = options;
        return Crypto.hmac(data, { algorithm, key, encoding });
    }

    /**
     *
     */
    static HS384(data, options = {}) {
        options.algorithm = "sha384";
        return this.HS256(data, options);
    }

    /**
     *
     */
    static HS512(data, options = {}) {
        options.algorithm = "sha512";
        return this.HS256(data, options);
    }

    /**
     *
     */
    static RS256(data, options = {}) {
        const {
            algorithm = "sha256",
            secret: { privateKey },
            encoding = "base64url",
        } = options;
        return Crypto.sign(data, { algorithm, privateKey, encoding });
    }

    /**
     *
     */
    static RS384(data, options = {}) {
        options.algorithm = "sha384";
        return this.RS256(data, options);
    }

    /**
     *
     */
    static RS512(data, options = {}) {
        options.algorithm = "sha512";
        return this.RS256(data, options);
    }

    /**
     *
     */
    static ES256(data, options = {}) {
        const { algorithm = "sha256", secret, encoding = "base64url" } = options;
        const privateKey = {};
        privateKey.key = secret.privateKey;
        privateKey.dsaEncoding = "ieee-p1363";
        privateKey.padding = crypto.constants.RSA_PKCS1_PADDING;
        privateKey.saltLength = crypto.constants.RSA_PSS_SALTLEN_DIGEST;
        return Crypto.sign(data, { algorithm, privateKey, encoding });
    }

    /**
     *
     */
    static ES384(data, options = {}) {
        options.algorithm = "sha384";
        return this.ES256(data, options);
    }

    /**
     *
     */
    static ES512(data, options = {}) {
        options.algorithm = "sha512";
        return this.ES256(data, options);
    }

    /**
     *
     */
    static PS256(data, options = {}) {
        const { algorithm = "sha256", secret, encoding = "base64url" } = options;
        const privateKey = {};
        privateKey.key = secret.privateKey;
        privateKey.padding = crypto.constants.RSA_PKCS1_PSS_PADDING;
        return Crypto.sign(data, { algorithm, privateKey, encoding });
    }

    /**
     *
     */
    static PS384(data, options = {}) {
        options.algorithm = "sha384";
        return this.PS256(data, options);
    }

    /**
     *
     */
    static PS512(data, options = {}) {
        options.algorithm = "sha512";
        return this.PS256(data, options);
    }
}

/**
 *
 */
class Verifier {
    /**
     *
     */
    static HS256(data, signature, options = {}) {
        const { algorithm = "sha256", secret: key, encoding = "base64url" } = options;
        return signature == Crypto.hmac(data, { algorithm, key, encoding });
    }

    /**
     *
     */
    static HS384(data, signature, options = {}) {
        options.algorithm = "sha384";
        return this.HS256(data, signature, options);
    }

    /**
     *
     */
    static HS512(data, signature, options = {}) {
        options.algorithm = "sha512";
        return this.HS256(data, signature, options);
    }

    /**
     *
     */
    static RS256(data, signature, options = {}) {
        const {
            algorithm = "sha256",
            secret: { privateKey },
            encoding = "base64url",
        } = options;
        return Crypto.verify(data, signature, { algorithm, privateKey, encoding });
    }

    /**
     *
     */
    static RS384(data, signature, options = {}) {
        options.algorithm = "sha384";
        return this.RS256(data, signature, options);
    }

    /**
     *
     */
    static RS512(data, signature, options = {}) {
        options.algorithm = "sha512";
        return this.RS256(data, signature, options);
    }

    /**
     *
     */
    static ES256(data, signature, options = {}) {
        const { algorithm = "sha256", secret, encoding = "base64url" } = options;
        const privateKey = {};
        privateKey.key = secret.privateKey;
        privateKey.dsaEncoding = "ieee-p1363";
        privateKey.padding = crypto.constants.RSA_PKCS1_PADDING;
        privateKey.saltLength = crypto.constants.RSA_PSS_SALTLEN_DIGEST;
        return Crypto.verify(data, signature, { algorithm, privateKey, encoding });
    }

    /**
     *
     */
    static ES384(data, signature, options = {}) {
        try {
            options.algorithm = "sha384";
            return this.ES256(data, signature, options);
        } catch (error) {
            return false;
        }
    }

    /**
     *
     */
    static ES512(data, signature, options = {}) {
        try {
            options.algorithm = "sha512";
            return this.ES256(data, signature, options);
        } catch (error) {
            return false;
        }
    }

    /**
     *
     */
    static PS256(data, signature, options = {}) {
        const { algorithm = "sha256", secret, encoding = "base64url" } = options;
        const privateKey = {};
        privateKey.key = secret.privateKey;
        privateKey.padding = crypto.constants.RSA_PKCS1_PSS_PADDING;
        return Crypto.verify(data, signature, { algorithm, privateKey, encoding });
    }

    /**
     *
     */
    static PS384(data, signature, options = {}) {
        options.algorithm = "sha384";
        return this.PS256(data, signature, options);
    }

    /**
     *
     */
    static PS512(data, signature, options = {}) {
        options.algorithm = "sha512";
        return this.PS256(data, signature, options);
    }
}

/**
 * @see {@link https://www.rfc-editor.org/rfc/rfc7519.html}
 */
class JWT {
    /**
     *
     */
    static encode(data, options = {}) {
        const { headers } = options;
        var _data = JSON.stringify(data);
        _data = Crypto.base64UrlEncode(_data);
        var _headers = JSON.stringify(headers);
        _headers = Crypto.base64UrlEncode(_headers);
        var signature = this.sign([_headers, _data].join("."), options);
        return [_headers, _data, signature].join(".");
    }

    /**
     *
     */
    static decode(data, options = {}) {
        let headers, signature;
        [headers, data, signature] = data.split(".");
        data = Crypto.base64UrlDecode(data);
        return JSON.parse(data);
    }

    /**
     *
     */
    static sign(data, options = {}) {
        let headers, signature;
        [headers, data, signature] = data.split(".");
        let { alg } = JSON.parse(Crypto.base64UrlDecode(headers));
        return Signer[alg]([headers, data].join("."), options);
    }

    /**
     *
     */
    static verify(data, signature, options = {}) {
        let headers;
        [headers, data] = data.split(".");
        let { alg } = JSON.parse(Crypto.base64UrlDecode(headers));
        return Verifier[alg]([headers, data].join("."), signature, options);
    }
}

module.exports = JWT;
