const crypto = require("crypto");

/**
 * @module jwt
 */

/**
 * Kumpulan fungsi untuk melakukan signing (penandatanganan) menggunakan berbagai algoritma.
 * @memberof module:jwt
 */
const signer = {
    hs256: (secret, data) => {
        return crypto.createHmac("sha256", secret).update(data).digest("base64url");
    },
    hs384: (secret, data) => {
        return crypto.createHmac("sha384", secret).update(data).digest("base64url");
    },
    hs512: (secret, data) => {
        return crypto.createHmac("sha512", secret).update(data).digest("base64url");
    },
    rs256: (secret, data) => {
        return crypto.sign("sha256", data, secret).toString("base64url");
    },
    rs384: (secret, data) => {
        return crypto.sign("sha384", data, secret).toString("base64url");
    },
    rs512: (secret, data) => {
        return crypto.sign("sha512", data, secret).toString("base64url");
    },
    es256: (secret, data) => {
        return crypto.sign("sha256", data, { key: secret, dsaEncoding: "ieee-p1363" }).toString("base64url");
    },
    es384: (secret, data) => {
        return crypto.sign("sha384", data, { key: secret, dsaEncoding: "ieee-p1363" }).toString("base64url");
    },
    es512: (secret, data) => {
        return crypto.sign("sha512", data, { key: secret, dsaEncoding: "ieee-p1363" }).toString("base64url");
    },
    ps256: (secret, data) => {
        return crypto
            .sign("sha256", data, {
                key: secret,
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
            })
            .toString("base64url");
    },
    ps384: (secret, data) => {
        return crypto
            .sign("sha384", data, {
                key: secret,
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
            })
            .toString("base64url");
    },
    ps512: (secret, data) => {
        return crypto
            .sign("sha512", data, {
                key: secret,
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
            })
            .toString("base64url");
    },
};

/**
 * Kumpulan fungsi untuk melakukan verifikasi signature menggunakan berbagai algoritma.
 * @memberof module:jwt
 */
const verifier = {
    hs256: (signature, secret, data) => {
        return signature === signer.hs256(secret, data);
    },
    hs384: (signature, secret, data) => {
        return signature === signer.hs384(secret, data);
    },
    hs512: (signature, secret, data) => {
        return signature === signer.hs512(secret, data);
    },
    rs256: (signature, secret, data) => {
        return crypto.verify("sha256", data, secret, Buffer.from(signature, "base64url"));
    },
    rs384: (signature, secret, data) => {
        return crypto.verify("sha384", data, secret, Buffer.from(signature, "base64url"));
    },
    rs512: (signature, secret, data) => {
        return crypto.verify("sha512", data, secret, Buffer.from(signature, "base64url"));
    },
    es256: (signature, secret, data) => {
        return crypto.verify("sha256", data, { key: secret, dsaEncoding: "ieee-p1363" }, Buffer.from(signature, "base64url"));
    },
    es384: (signature, secret, data) => {
        return crypto.verify("sha384", data, { key: secret, dsaEncoding: "ieee-p1363" }, Buffer.from(signature, "base64url"));
    },
    es512: (signature, secret, data) => {
        return crypto.verify("sha512", data, { key: secret, dsaEncoding: "ieee-p1363" }, Buffer.from(signature, "base64url"));
    },
    ps256: (signature, secret, data) => {
        return crypto.verify("sha256", data, { key: secret, padding: crypto.constants.RSA_PKCS1_PSS_PADDING }, Buffer.from(signature, "base64url"));
    },
    ps384: (signature, secret, data) => {
        return crypto.verify("sha384", data, { key: secret, padding: crypto.constants.RSA_PKCS1_PSS_PADDING }, Buffer.from(signature, "base64url"));
    },
    ps512: (signature, secret, data) => {
        return crypto.verify("sha512", data, { key: secret, padding: crypto.constants.RSA_PKCS1_PSS_PADDING }, Buffer.from(signature, "base64url"));
    },
};

/**
 * Meng-encode header dan payload menjadi token JWT (JSON Web Token).
 * @memberof module:jwt
 * @param {Object} header - Header JWT yang berisi informasi tentang algoritma dan tipe token.
 * @param {Object} payload - Payload JWT yang berisi klaim atau data yang ingin disimpan dalam token.
 * @param {string} secret - Kunci rahasia atau kunci privat untuk signing.
 * @returns {string} - Token JWT dalam format string.
 */
function encode(header, payload, secret) {
    const sign = signer[header.alg.toLowerCase()];

    header = JSON.stringify(header);
    header = Buffer.from(header).toString("base64url");

    payload = JSON.stringify(payload);
    payload = Buffer.from(payload).toString("base64url");

    const data = [header, payload].join(".");
    const signature = sign(secret, data);
    const token = [data, signature].join(".");

    return token;
}

/**
 * Meng-decode token JWT dan memverifikasi signature-nya.
 * @memberof module:jwt
 * @param {string} token - Token JWT yang akan di-decode.
 * @param {string} secret - Kunci rahasia atau kunci publik untuk verifikasi.
 * @returns {Object|null} - Mengembalikan payload jika verifikasi berhasil, null jika gagal.
 */
function decode(token, secret) {
    let [header, payload, signature] = token.split(".");

    const data = [header, payload].join(".");

    header = Buffer.from(header, "base64url");
    header = JSON.parse(header);

    payload = Buffer.from(payload, "base64url");
    payload = JSON.parse(payload);

    const verify = verifier[header.alg.toLowerCase()];

    if (verify(signature, secret, data)) {
        return payload;
    }

    return null;
}

module.exports = {
    signer,
    verifier,
    encode,
    decode,
};
