const crypto = require("crypto");
const Crypto = require("@ndiing/crypto");

/**
 * Nodejs JWT module
 *
 * ### Install
 * ```
 * npm install @ndiing/jwt
 * ```
 *
 * ### Usage
 * ```js
 * const jwt = require("../index.js");
 *
 * // HS256
 * var headers = {
 *     alg: "HS256",
 *     typ: "JWT",
 * };
 * var data = {
 *     sub: "1234567890",
 *     name: "John Doe",
 *     iat: 1516239022,
 * };
 * var secret = "your-256-bit-secret";
 * var options = { headers, secret };
 * var encoded = jwt.encode(data, options);
 * // https://jwt.io/ > Debugger
 * var signature = "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
 * // console.log(encoded);
 * console.log(
 *     jwt.verify(encoded, options),
 *     // test with https://jwt.io/ > Debugger
 *     jwt.verify(encoded.split(".").slice(0, 2).concat(signature).join("."), options)
 * );
 *
 * // HS384
 * var headers = {
 *     alg: "HS384",
 *     typ: "JWT",
 * };
 * var data = {
 *     "sub": "1234567890",
 *     "name": "John Doe",
 *     "admin": true,
 *     "iat": 1516239022
 *   };
 * var secret = "your-384-bit-secret";
 * var options = { headers, secret };
 * var encoded = jwt.encode(data, options);
 * // https://jwt.io/ > Debugger
 * var signature = "bQTnz6AuMJvmXXQsVPrxeQNvzDkimo7VNXxHeSBfClLufmCVZRUuyTwJF311JHuh";
 * // console.log(encoded);
 * console.log(
 *     jwt.verify(encoded, options),
 *     // test with https://jwt.io/ > Debugger
 *     jwt.verify(encoded.split(".").slice(0, 2).concat(signature).join("."), options)
 * );
 *
 * // HS512
 * var headers = {
 *     alg: "HS512",
 *     typ: "JWT",
 * };
 * var data = {
 *     "sub": "1234567890",
 *     "name": "John Doe",
 *     "admin": true,
 *     "iat": 1516239022
 *   };
 * var secret = "your-512-bit-secret";
 * var options = { headers, secret };
 * var encoded = jwt.encode(data, options);
 * // https://jwt.io/ > Debugger
 * var signature = "VFb0qJ1LRg_4ujbZoRMXnVkUgiuKq5KxWqNdbKq_G9Vvz-S1zZa9LPxtHWKa64zDl2ofkT8F6jBt_K4riU-fPg";
 * // console.log(encoded);
 * console.log(
 *     jwt.verify(encoded, options),
 *     // test with https://jwt.io/ > Debugger
 *     jwt.verify(encoded.split(".").slice(0, 2).concat(signature).join("."), options)
 * );
 *
 * // RS256
 * var headers = {
 *     "alg": "RS256",
 *     "typ": "JWT"
 *   };
 * var data = {
 *     "sub": "1234567890",
 *     "name": "John Doe",
 *     "admin": true,
 *     "iat": 1516239022
 *   };
 * var secret = {};
 * secret.publicKey=`-----BEGIN PUBLIC KEY-----
 * MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu1SU1LfVLPHCozMxH2Mo
 * 4lgOEePzNm0tRgeLezV6ffAt0gunVTLw7onLRnrq0/IzW7yWR7QkrmBL7jTKEn5u
 * +qKhbwKfBstIs+bMY2Zkp18gnTxKLxoS2tFczGkPLPgizskuemMghRniWaoLcyeh
 * kd3qqGElvW/VDL5AaWTg0nLVkjRo9z+40RQzuVaE8AkAFmxZzow3x+VJYKdjykkJ
 * 0iT9wCS0DRTXu269V264Vf/3jvredZiKRkgwlL9xNAwxXFg0x/XFw005UWVRIkdg
 * cKWTjpBP2dPwVZ4WWC+9aGVd+Gyn1o0CLelf4rEjGoXbAAEgAqeGUxrcIlbjXfbc
 * mwIDAQAB
 * -----END PUBLIC KEY-----`
 * secret.privateKey=`-----BEGIN PRIVATE KEY-----
 * MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC7VJTUt9Us8cKj
 * MzEfYyjiWA4R4/M2bS1GB4t7NXp98C3SC6dVMvDuictGeurT8jNbvJZHtCSuYEvu
 * NMoSfm76oqFvAp8Gy0iz5sxjZmSnXyCdPEovGhLa0VzMaQ8s+CLOyS56YyCFGeJZ
 * qgtzJ6GR3eqoYSW9b9UMvkBpZODSctWSNGj3P7jRFDO5VoTwCQAWbFnOjDfH5Ulg
 * p2PKSQnSJP3AJLQNFNe7br1XbrhV//eO+t51mIpGSDCUv3E0DDFcWDTH9cXDTTlR
 * ZVEiR2BwpZOOkE/Z0/BVnhZYL71oZV34bKfWjQIt6V/isSMahdsAASACp4ZTGtwi
 * VuNd9tybAgMBAAECggEBAKTmjaS6tkK8BlPXClTQ2vpz/N6uxDeS35mXpqasqskV
 * laAidgg/sWqpjXDbXr93otIMLlWsM+X0CqMDgSXKejLS2jx4GDjI1ZTXg++0AMJ8
 * sJ74pWzVDOfmCEQ/7wXs3+cbnXhKriO8Z036q92Qc1+N87SI38nkGa0ABH9CN83H
 * mQqt4fB7UdHzuIRe/me2PGhIq5ZBzj6h3BpoPGzEP+x3l9YmK8t/1cN0pqI+dQwY
 * dgfGjackLu/2qH80MCF7IyQaseZUOJyKrCLtSD/Iixv/hzDEUPfOCjFDgTpzf3cw
 * ta8+oE4wHCo1iI1/4TlPkwmXx4qSXtmw4aQPz7IDQvECgYEA8KNThCO2gsC2I9PQ
 * DM/8Cw0O983WCDY+oi+7JPiNAJwv5DYBqEZB1QYdj06YD16XlC/HAZMsMku1na2T
 * N0driwenQQWzoev3g2S7gRDoS/FCJSI3jJ+kjgtaA7Qmzlgk1TxODN+G1H91HW7t
 * 0l7VnL27IWyYo2qRRK3jzxqUiPUCgYEAx0oQs2reBQGMVZnApD1jeq7n4MvNLcPv
 * t8b/eU9iUv6Y4Mj0Suo/AU8lYZXm8ubbqAlwz2VSVunD2tOplHyMUrtCtObAfVDU
 * AhCndKaA9gApgfb3xw1IKbuQ1u4IF1FJl3VtumfQn//LiH1B3rXhcdyo3/vIttEk
 * 48RakUKClU8CgYEAzV7W3COOlDDcQd935DdtKBFRAPRPAlspQUnzMi5eSHMD/ISL
 * DY5IiQHbIH83D4bvXq0X7qQoSBSNP7Dvv3HYuqMhf0DaegrlBuJllFVVq9qPVRnK
 * xt1Il2HgxOBvbhOT+9in1BzA+YJ99UzC85O0Qz06A+CmtHEy4aZ2kj5hHjECgYEA
 * mNS4+A8Fkss8Js1RieK2LniBxMgmYml3pfVLKGnzmng7H2+cwPLhPIzIuwytXywh
 * 2bzbsYEfYx3EoEVgMEpPhoarQnYPukrJO4gwE2o5Te6T5mJSZGlQJQj9q4ZB2Dfz
 * et6INsK0oG8XVGXSpQvQh3RUYekCZQkBBFcpqWpbIEsCgYAnM3DQf3FJoSnXaMhr
 * VBIovic5l0xFkEHskAjFTevO86Fsz1C2aSeRKSqGFoOQ0tmJzBEs1R6KqnHInicD
 * TQrKhArgLXX4v3CddjfTRJkFWDbE/CkvKZNOrcf1nhaGCPspRJj2KUkj1Fhl9Cnc
 * dn/RsYEONbwQSjIfMPkvxF+8HQ==
 * -----END PRIVATE KEY-----`
 * var options = { headers, secret };
 * var encoded = jwt.encode(data, options);
 * // https://jwt.io/ > Debugger
 * var signature = "NHVaYe26MbtOYhSKkoKYdFVomg4i8ZJd8_-RU8VNbftc4TSMb4bXP3l3YlNWACwyXPGffz5aXHc6lty1Y2t4SWRqGteragsVdZufDn5BlnJl9pdR_kdVFUsra2rWKEofkZeIC4yWytE58sMIihvo9H1ScmmVwBcQP6XETqYd0aSHp1gOa9RdUPDvoXQ5oqygTqVtxaDr6wUFKrKItgBMzWIdNZ6y7O9E0DhEPTbE9rfBo6KTFsHAZnMg4k68CDp2woYIaXbmYTWcvbzIuHO7_37GT79XdIwkm95QJ7hYC9RiwrV7mesbY4PAahERJawntho0my942XheVLmGwLMBkQ";
 * // console.log(encoded);
 * console.log(
 *     jwt.verify(encoded, options),
 *     // test with https://jwt.io/ > Debugger
 *     jwt.verify(encoded.split(".").slice(0, 2).concat(signature).join("."), options)
 * );
 *
 * // RS384
 * var headers = {
 *     "alg": "RS384",
 *     "typ": "JWT"
 *   };
 * var data = {
 *     "sub": "1234567890",
 *     "name": "John Doe",
 *     "admin": true,
 *     "iat": 1516239022
 *   };
 * var secret = {};
 * secret.publicKey=`-----BEGIN PUBLIC KEY-----
 * MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu1SU1LfVLPHCozMxH2Mo
 * 4lgOEePzNm0tRgeLezV6ffAt0gunVTLw7onLRnrq0/IzW7yWR7QkrmBL7jTKEn5u
 * +qKhbwKfBstIs+bMY2Zkp18gnTxKLxoS2tFczGkPLPgizskuemMghRniWaoLcyeh
 * kd3qqGElvW/VDL5AaWTg0nLVkjRo9z+40RQzuVaE8AkAFmxZzow3x+VJYKdjykkJ
 * 0iT9wCS0DRTXu269V264Vf/3jvredZiKRkgwlL9xNAwxXFg0x/XFw005UWVRIkdg
 * cKWTjpBP2dPwVZ4WWC+9aGVd+Gyn1o0CLelf4rEjGoXbAAEgAqeGUxrcIlbjXfbc
 * mwIDAQAB
 * -----END PUBLIC KEY-----`
 * secret.privateKey=`-----BEGIN PRIVATE KEY-----
 * MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC7VJTUt9Us8cKj
 * MzEfYyjiWA4R4/M2bS1GB4t7NXp98C3SC6dVMvDuictGeurT8jNbvJZHtCSuYEvu
 * NMoSfm76oqFvAp8Gy0iz5sxjZmSnXyCdPEovGhLa0VzMaQ8s+CLOyS56YyCFGeJZ
 * qgtzJ6GR3eqoYSW9b9UMvkBpZODSctWSNGj3P7jRFDO5VoTwCQAWbFnOjDfH5Ulg
 * p2PKSQnSJP3AJLQNFNe7br1XbrhV//eO+t51mIpGSDCUv3E0DDFcWDTH9cXDTTlR
 * ZVEiR2BwpZOOkE/Z0/BVnhZYL71oZV34bKfWjQIt6V/isSMahdsAASACp4ZTGtwi
 * VuNd9tybAgMBAAECggEBAKTmjaS6tkK8BlPXClTQ2vpz/N6uxDeS35mXpqasqskV
 * laAidgg/sWqpjXDbXr93otIMLlWsM+X0CqMDgSXKejLS2jx4GDjI1ZTXg++0AMJ8
 * sJ74pWzVDOfmCEQ/7wXs3+cbnXhKriO8Z036q92Qc1+N87SI38nkGa0ABH9CN83H
 * mQqt4fB7UdHzuIRe/me2PGhIq5ZBzj6h3BpoPGzEP+x3l9YmK8t/1cN0pqI+dQwY
 * dgfGjackLu/2qH80MCF7IyQaseZUOJyKrCLtSD/Iixv/hzDEUPfOCjFDgTpzf3cw
 * ta8+oE4wHCo1iI1/4TlPkwmXx4qSXtmw4aQPz7IDQvECgYEA8KNThCO2gsC2I9PQ
 * DM/8Cw0O983WCDY+oi+7JPiNAJwv5DYBqEZB1QYdj06YD16XlC/HAZMsMku1na2T
 * N0driwenQQWzoev3g2S7gRDoS/FCJSI3jJ+kjgtaA7Qmzlgk1TxODN+G1H91HW7t
 * 0l7VnL27IWyYo2qRRK3jzxqUiPUCgYEAx0oQs2reBQGMVZnApD1jeq7n4MvNLcPv
 * t8b/eU9iUv6Y4Mj0Suo/AU8lYZXm8ubbqAlwz2VSVunD2tOplHyMUrtCtObAfVDU
 * AhCndKaA9gApgfb3xw1IKbuQ1u4IF1FJl3VtumfQn//LiH1B3rXhcdyo3/vIttEk
 * 48RakUKClU8CgYEAzV7W3COOlDDcQd935DdtKBFRAPRPAlspQUnzMi5eSHMD/ISL
 * DY5IiQHbIH83D4bvXq0X7qQoSBSNP7Dvv3HYuqMhf0DaegrlBuJllFVVq9qPVRnK
 * xt1Il2HgxOBvbhOT+9in1BzA+YJ99UzC85O0Qz06A+CmtHEy4aZ2kj5hHjECgYEA
 * mNS4+A8Fkss8Js1RieK2LniBxMgmYml3pfVLKGnzmng7H2+cwPLhPIzIuwytXywh
 * 2bzbsYEfYx3EoEVgMEpPhoarQnYPukrJO4gwE2o5Te6T5mJSZGlQJQj9q4ZB2Dfz
 * et6INsK0oG8XVGXSpQvQh3RUYekCZQkBBFcpqWpbIEsCgYAnM3DQf3FJoSnXaMhr
 * VBIovic5l0xFkEHskAjFTevO86Fsz1C2aSeRKSqGFoOQ0tmJzBEs1R6KqnHInicD
 * TQrKhArgLXX4v3CddjfTRJkFWDbE/CkvKZNOrcf1nhaGCPspRJj2KUkj1Fhl9Cnc
 * dn/RsYEONbwQSjIfMPkvxF+8HQ==
 * -----END PRIVATE KEY-----`
 * var options = { headers, secret };
 * var encoded = jwt.encode(data, options);
 * // https://jwt.io/ > Debugger
 * var signature = "o1hC1xYbJolSyh0-bOY230w22zEQSk5TiBfc-OCvtpI2JtYlW-23-8B48NpATozzMHn0j3rE0xVUldxShzy0xeJ7vYAccVXu2Gs9rnTVqouc-UZu_wJHkZiKBL67j8_61L6SXswzPAQu4kVDwAefGf5hyYBUM-80vYZwWPEpLI8K4yCBsF6I9N1yQaZAJmkMp_Iw371Menae4Mp4JusvBJS-s6LrmG2QbiZaFaxVJiW8KlUkWyUCns8-qFl5OMeYlgGFsyvvSHvXCzQrsEXqyCdS4tQJd73ayYA4SPtCb9clz76N1zE5WsV4Z0BYrxeb77oA7jJhh994RAPzCG0hmQ";
 * // console.log(encoded);
 * console.log(
 *     jwt.verify(encoded, options),
 *     // test with https://jwt.io/ > Debugger
 *     jwt.verify(encoded.split(".").slice(0, 2).concat(signature).join("."), options)
 * );
 *
 * // and more
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
