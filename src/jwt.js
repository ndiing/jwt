const crypto = require("crypto");

const signer = {
    HS256(data, secret) {
        return crypto.createHmac("sha256", secret).update(data).digest("base64url");
    },

    HS384(data, secret) {
        return crypto.createHmac("sha384", secret).update(data).digest("base64url");
    },

    HS512(data, secret) {
        return crypto.createHmac("sha512", secret).update(data).digest("base64url");
    },

    RS256(data, secret) {
        return crypto.sign("sha256", data, secret).toString("base64url");
    },

    RS384(data, secret) {
        return crypto.sign("sha384", data, secret).toString("base64url");
    },

    RS512(data, secret) {
        return crypto.sign("sha512", data, secret).toString("base64url");
    },

    ES256(data, secret) {
        return crypto
            .sign("sha256", Buffer.from(data), {
                key: secret,
                // padding: undefined,
                // saltLength: undefined,
                dsaEncoding: "ieee-p1363",
            })
            .toString("base64url");
    },

    ES384(data, secret) {
        return crypto
            .sign("sha384", Buffer.from(data), {
                key: secret,
                // padding: undefined,
                // saltLength: undefined,
                dsaEncoding: "ieee-p1363",
            })
            .toString("base64url");
    },

    ES512(data, secret) {
        return crypto
            .sign("sha512", Buffer.from(data), {
                key: secret,
                // padding: undefined,
                // saltLength: undefined,
                dsaEncoding: "ieee-p1363",
            })
            .toString("base64url");
    },

    PS256(data, secret) {
        return crypto
            .sign("sha256", Buffer.from(data), {
                key: secret,
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
                saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST,
                // dsaEncoding: undefined,
            })
            .toString("base64url");
    },

    PS384(data, secret) {
        return crypto
            .sign("sha384", Buffer.from(data), {
                key: secret,
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
                saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST,
                // dsaEncoding: undefined,
            })
            .toString("base64url");
    },

    PS512(data, secret) {
        return crypto
            .sign("sha512", Buffer.from(data), {
                key: secret,
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
                saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST,
                // dsaEncoding: undefined,
            })
            .toString("base64url");
    },
};

const verifier = {
    HS256(data, secret, signature) {
        const expected = crypto.createHmac("sha256", secret).update(data).digest("base64url");
        return crypto.timingSafeEqual(Buffer.from(signature, "base64url"), Buffer.from(expected, "base64url"));
    },

    HS384(data, secret, signature) {
        const expected = crypto.createHmac("sha384", secret).update(data).digest("base64url");
        return crypto.timingSafeEqual(Buffer.from(signature, "base64url"), Buffer.from(expected, "base64url"));
    },

    HS512(data, secret, signature) {
        const expected = crypto.createHmac("sha512", secret).update(data).digest("base64url");
        return crypto.timingSafeEqual(Buffer.from(signature, "base64url"), Buffer.from(expected, "base64url"));
    },

    RS256(data, secret, signature) {
        return crypto.verify("sha256", Buffer.from(data), secret, Buffer.from(signature, "base64url"));
    },

    RS384(data, secret, signature) {
        return crypto.verify("sha384", Buffer.from(data), secret, Buffer.from(signature, "base64url"));
    },

    RS512(data, secret, signature) {
        return crypto.verify("sha512", Buffer.from(data), secret, Buffer.from(signature, "base64url"));
    },

    ES256(data, secret, signature) {
        return crypto.verify(
            "sha256",
            Buffer.from(data),
            {
                key: secret,
                // padding: undefined,
                // saltLength: undefined,
                dsaEncoding: "ieee-p1363",
            },
            Buffer.from(signature, "base64url"),
        );
    },

    ES384(data, secret, signature) {
        return crypto.verify(
            "sha384",
            Buffer.from(data),
            {
                key: secret,
                // padding: undefined,
                // saltLength: undefined,
                dsaEncoding: "ieee-p1363",
            },
            Buffer.from(signature, "base64url"),
        );
    },

    ES512(data, secret, signature) {
        return crypto.verify(
            "sha512",
            Buffer.from(data),
            {
                key: secret,
                // padding: undefined,
                // saltLength: undefined,
                dsaEncoding: "ieee-p1363",
            },
            Buffer.from(signature, "base64url"),
        );
    },

    PS256(data, secret, signature) {
        return crypto.verify(
            "sha256",
            Buffer.from(data),
            {
                key: secret,
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
                saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST,
                // dsaEncoding: undefined,
            },
            Buffer.from(signature, "base64url"),
        );
    },

    PS384(data, secret, signature) {
        return crypto.verify(
            "sha384",
            Buffer.from(data),
            {
                key: secret,
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
                saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST,
                // dsaEncoding: undefined,
            },
            Buffer.from(signature, "base64url"),
        );
    },

    PS512(data, secret, signature) {
        return crypto.verify(
            "sha512",
            Buffer.from(data),
            {
                key: secret,
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
                saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST,
                // dsaEncoding: undefined,
            },
            Buffer.from(signature, "base64url"),
        );
    },
};

/**
 * @typedef {keyof typeof signer} signerKey
 * @typedef {typeof signer[signerKey]} signerValue
 */

/**
 *
 * @typedef Header
 * @property {signerKey} alg
 * @property {"JWT"} typ
 */

/**
 *
 * @param {Header} header
 * @param {Object} payload
 * @param {String} secret
 * @returns {String}
 */
function sign(header, payload, secret) {
    if (!header || !header.alg) throw new Error("INVALID_HEADER");
    if (!payload) throw new Error("INVALID_PAYLOAD");
    if (!secret) throw new Error("INVALID_SECRET");

    const signFn = signer[header.alg];
    if (!signFn) throw new Error("INVALID_ALGORITHM");

    const headerJson = JSON.stringify(header);
    const payloadJson = JSON.stringify(payload);

    const headerString = Buffer.from(headerJson).toString("base64url");
    const payloadString = Buffer.from(payloadJson).toString("base64url");

    const data = `${headerString}.${payloadString}`;
    const signature = signFn(data, secret);

    return `${data}.${signature}`;
}

/**
 *
 * @param {String} token
 * @returns {Object}
 */
function decode(token) {
    if (!token) throw new Error("INVALID_TOKEN");

    const tokenArray = token.split(".");
    if (tokenArray.length !== 3) throw new Error("INVALID_TOKEN");

    const [headerString, payloadString, signature] = tokenArray;

    const headerJson = Buffer.from(headerString, "base64url").toString("utf8");
    const payloadJson = Buffer.from(payloadString, "base64url").toString("utf8");

    let header;
    let payload;

    try {
        header = JSON.parse(headerJson);
        payload = JSON.parse(payloadJson);
    } catch (error) {
        throw new Error("INVALID_TOKEN");
    }

    return {
        data: `${headerString}.${payloadString}`,
        header,
        payload,
        signature,
    };
}

/**
 *
 * @param {String} token
 * @param {String} secret
 * @returns {Object}
 */
function verify(token, secret) {
    if (!token) throw new Error("INVALID_TOKEN");
    if (!secret) throw new Error("INVALID_SECRET");

    const { data, header, payload, signature } = decode(token, secret);

    const verifyFn = verifier[header.alg];
    if (!verifyFn) throw new Error("INVALID_ALGORITHM");

    const verified = verifyFn(data, secret, signature);
    if (!verified) throw new Error("INVALID_SIGNATURE");

    const now = Math.floor(Date.now() / 1000);

    if (payload.exp) {
        if (typeof payload.exp !== "number" || !Number.isInteger(payload.exp)) {
            throw new Error("INVALID_EXP_CLAIM");
        }
        if (now > payload.exp) throw new Error("INVALID_EXP");
    }

    if (payload.nbf) {
        if (typeof payload.nbf !== "number" || !Number.isInteger(payload.nbf)) {
            throw new Error("INVALID_NBF_CLAIM");
        }
        if (now < payload.nbf) throw new Error("INVALID_NBF");
    }

    return {
        header,
        payload,
        verified,
    };
}

module.exports = {
    sign,
    decode,
    verify,
};
