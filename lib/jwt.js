const crypto = require("crypto");

/**
 * Objek untuk menandatangani data menggunakan berbagai algoritma.
 *
 * @type {Object}
 * @property {function} hs256 - Menandatangani data menggunakan HMAC SHA-256.
 * @property {function} hs384 - Menandatangani data menggunakan HMAC SHA-384.
 * @property {function} hs512 - Menandatangani data menggunakan HMAC SHA-512.
 * @property {function} rs256 - Menandatangani data menggunakan RSA SHA-256.
 * @property {function} rs384 - Menandatangani data menggunakan RSA SHA-384.
 * @property {function} rs512 - Menandatangani data menggunakan RSA SHA-512.
 * @property {function} es256 - Menandatangani data menggunakan ECDSA SHA-256.
 * @property {function} es384 - Menandatangani data menggunakan ECDSA SHA-384.
 * @property {function} es512 - Menandatangani data menggunakan ECDSA SHA-512.
 * @property {function} ps256 - Menandatangani data menggunakan RSA PSS SHA-256.
 * @property {function} ps384 - Menandatangani data menggunakan RSA PSS SHA-384.
 * @property {function} ps512 - Menandatangani data menggunakan RSA PSS SHA-512.
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
 * Objek untuk memverifikasi tanda tangan menggunakan berbagai algoritma.
 *
 * @type {Object}
 * @property {function} hs256 - Memverifikasi tanda tangan menggunakan HMAC SHA-256.
 * @property {function} hs384 - Memverifikasi tanda tangan menggunakan HMAC SHA-384.
 * @property {function} hs512 - Memverifikasi tanda tangan menggunakan HMAC SHA-512.
 * @property {function} rs256 - Memverifikasi tanda tangan menggunakan RSA SHA-256.
 * @property {function} rs384 - Memverifikasi tanda tangan menggunakan RSA SHA-384.
 * @property {function} rs512 - Memverifikasi tanda tangan menggunakan RSA SHA-512.
 * @property {function} es256 - Memverifikasi tanda tangan menggunakan ECDSA SHA-256.
 * @property {function} es384 - Memverifikasi tanda tangan menggunakan ECDSA SHA-384.
 * @property {function} es512 - Memverifikasi tanda tangan menggunakan ECDSA SHA-512.
 * @property {function} ps256 - Memverifikasi tanda tangan menggunakan RSA PSS SHA-256.
 * @property {function} ps384 - Memverifikasi tanda tangan menggunakan RSA PSS SHA-384.
 * @property {function} ps512 - Memverifikasi tanda tangan menggunakan RSA PSS SHA-512.
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
 * Mengkodekan header dan payload menjadi token JWT menggunakan algoritma penandatanganan yang ditentukan.
 *
 * @param {Object} header - Objek header JWT yang berisi informasi algoritma dan tipe token.
 * @param {Object} payload - Objek payload JWT yang berisi informasi yang ingin disimpan dalam token.
 * @param {string} secret - Kunci rahasia yang digunakan untuk menandatangani token.
 * @returns {string} Token JWT yang telah dikodekan.
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
 * Menguraikan token JWT dan memverifikasi tanda tangan menggunakan kunci rahasia.
 *
 * @param {string} token - Token JWT yang ingin diuraikan.
 * @param {string} secret - Kunci rahasia yang digunakan untuk memverifikasi token.
 * @returns {Object|null} Objek payload jika token valid, atau null jika tidak valid.
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

module.exports = { signer, verifier, encode, decode };

// {
//     const k = "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC7VJTUt9Us8cKj\nMzEfYyjiWA4R4/M2bS1GB4t7NXp98C3SC6dVMvDuictGeurT8jNbvJZHtCSuYEvu\nNMoSfm76oqFvAp8Gy0iz5sxjZmSnXyCdPEovGhLa0VzMaQ8s+CLOyS56YyCFGeJZ\nqgtzJ6GR3eqoYSW9b9UMvkBpZODSctWSNGj3P7jRFDO5VoTwCQAWbFnOjDfH5Ulg\np2PKSQnSJP3AJLQNFNe7br1XbrhV//eO+t51mIpGSDCUv3E0DDFcWDTH9cXDTTlR\nZVEiR2BwpZOOkE/Z0/BVnhZYL71oZV34bKfWjQIt6V/isSMahdsAASACp4ZTGtwi\nVuNd9tybAgMBAAECggEBAKTmjaS6tkK8BlPXClTQ2vpz/N6uxDeS35mXpqasqskV\nlaAidgg/sWqpjXDbXr93otIMLlWsM+X0CqMDgSXKejLS2jx4GDjI1ZTXg++0AMJ8\nsJ74pWzVDOfmCEQ/7wXs3+cbnXhKriO8Z036q92Qc1+N87SI38nkGa0ABH9CN83H\nmQqt4fB7UdHzuIRe/me2PGhIq5ZBzj6h3BpoPGzEP+x3l9YmK8t/1cN0pqI+dQwY\ndgfGjackLu/2qH80MCF7IyQaseZUOJyKrCLtSD/Iixv/hzDEUPfOCjFDgTpzf3cw\nta8+oE4wHCo1iI1/4TlPkwmXx4qSXtmw4aQPz7IDQvECgYEA8KNThCO2gsC2I9PQ\nDM/8Cw0O983WCDY+oi+7JPiNAJwv5DYBqEZB1QYdj06YD16XlC/HAZMsMku1na2T\nN0driwenQQWzoev3g2S7gRDoS/FCJSI3jJ+kjgtaA7Qmzlgk1TxODN+G1H91HW7t\n0l7VnL27IWyYo2qRRK3jzxqUiPUCgYEAx0oQs2reBQGMVZnApD1jeq7n4MvNLcPv\nt8b/eU9iUv6Y4Mj0Suo/AU8lYZXm8ubbqAlwz2VSVunD2tOplHyMUrtCtObAfVDU\nAhCndKaA9gApgfb3xw1IKbuQ1u4IF1FJl3VtumfQn//LiH1B3rXhcdyo3/vIttEk\n48RakUKClU8CgYEAzV7W3COOlDDcQd935DdtKBFRAPRPAlspQUnzMi5eSHMD/ISL\nDY5IiQHbIH83D4bvXq0X7qQoSBSNP7Dvv3HYuqMhf0DaegrlBuJllFVVq9qPVRnK\nxt1Il2HgxOBvbhOT+9in1BzA+YJ99UzC85O0Qz06A+CmtHEy4aZ2kj5hHjECgYEA\nmNS4+A8Fkss8Js1RieK2LniBxMgmYml3pfVLKGnzmng7H2+cwPLhPIzIuwytXywh\n2bzbsYEfYx3EoEVgMEpPhoarQnYPukrJO4gwE2o5Te6T5mJSZGlQJQj9q4ZB2Dfz\net6INsK0oG8XVGXSpQvQh3RUYekCZQkBBFcpqWpbIEsCgYAnM3DQf3FJoSnXaMhr\nVBIovic5l0xFkEHskAjFTevO86Fsz1C2aSeRKSqGFoOQ0tmJzBEs1R6KqnHInicD\nTQrKhArgLXX4v3CddjfTRJkFWDbE/CkvKZNOrcf1nhaGCPspRJj2KUkj1Fhl9Cnc\ndn/RsYEONbwQSjIfMPkvxF+8HQ==\n-----END PRIVATE KEY-----",
//         B = {
//             e: "AQAB",
//             n: "u1SU1LfVLPHCozMxH2Mo4lgOEePzNm0tRgeLezV6ffAt0gunVTLw7onLRnrq0_IzW7yWR7QkrmBL7jTKEn5u-qKhbwKfBstIs-bMY2Zkp18gnTxKLxoS2tFczGkPLPgizskuemMghRniWaoLcyehkd3qqGElvW_VDL5AaWTg0nLVkjRo9z-40RQzuVaE8AkAFmxZzow3x-VJYKdjykkJ0iT9wCS0DRTXu269V264Vf_3jvredZiKRkgwlL9xNAwxXFg0x_XFw005UWVRIkdgcKWTjpBP2dPwVZ4WWC-9aGVd-Gyn1o0CLelf4rEjGoXbAAEgAqeGUxrcIlbjXfbcmw",
//             d: "pOaNpLq2QrwGU9cKVNDa-nP83q7EN5LfmZempqyqyRWVoCJ2CD-xaqmNcNtev3ei0gwuVawz5fQKowOBJcp6MtLaPHgYOMjVlNeD77QAwnywnvilbNUM5-YIRD_vBezf5xudeEquI7xnTfqr3ZBzX43ztIjfyeQZrQAEf0I3zceZCq3h8HtR0fO4hF7-Z7Y8aEirlkHOPqHcGmg8bMQ_7HeX1iYry3_Vw3Smoj51DBh2B8aNpyQu7_aofzQwIXsjJBqx5lQ4nIqsIu1IP8iLG_-HMMRQ984KMUOBOnN_dzC1rz6gTjAcKjWIjX_hOU-TCZfHipJe2bDhpA_PsgNC8Q",
//             p: "8KNThCO2gsC2I9PQDM_8Cw0O983WCDY-oi-7JPiNAJwv5DYBqEZB1QYdj06YD16XlC_HAZMsMku1na2TN0driwenQQWzoev3g2S7gRDoS_FCJSI3jJ-kjgtaA7Qmzlgk1TxODN-G1H91HW7t0l7VnL27IWyYo2qRRK3jzxqUiPU",
//             q: "x0oQs2reBQGMVZnApD1jeq7n4MvNLcPvt8b_eU9iUv6Y4Mj0Suo_AU8lYZXm8ubbqAlwz2VSVunD2tOplHyMUrtCtObAfVDUAhCndKaA9gApgfb3xw1IKbuQ1u4IF1FJl3VtumfQn__LiH1B3rXhcdyo3_vIttEk48RakUKClU8",
//             dp: "zV7W3COOlDDcQd935DdtKBFRAPRPAlspQUnzMi5eSHMD_ISLDY5IiQHbIH83D4bvXq0X7qQoSBSNP7Dvv3HYuqMhf0DaegrlBuJllFVVq9qPVRnKxt1Il2HgxOBvbhOT-9in1BzA-YJ99UzC85O0Qz06A-CmtHEy4aZ2kj5hHjE",
//             dq: "mNS4-A8Fkss8Js1RieK2LniBxMgmYml3pfVLKGnzmng7H2-cwPLhPIzIuwytXywh2bzbsYEfYx3EoEVgMEpPhoarQnYPukrJO4gwE2o5Te6T5mJSZGlQJQj9q4ZB2Dfzet6INsK0oG8XVGXSpQvQh3RUYekCZQkBBFcpqWpbIEs",
//             qi: "JzNw0H9xSaEp12jIa1QSKL4nOZdMRZBB7JAIxU3rzvOhbM9QtmknkSkqhhaDkNLZicwRLNUeiqpxyJ4nA00KyoQK4C11-L9wnXY300SZBVg2xPwpLymTTq3H9Z4Whgj7KUSY9ilJI9RYZfQp3HZ_0bGBDjW8EEoyHzD5L8RfvB0",
//             kty: "RSA",
//         },
//         L = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu1SU1LfVLPHCozMxH2Mo\n4lgOEePzNm0tRgeLezV6ffAt0gunVTLw7onLRnrq0/IzW7yWR7QkrmBL7jTKEn5u\n+qKhbwKfBstIs+bMY2Zkp18gnTxKLxoS2tFczGkPLPgizskuemMghRniWaoLcyeh\nkd3qqGElvW/VDL5AaWTg0nLVkjRo9z+40RQzuVaE8AkAFmxZzow3x+VJYKdjykkJ\n0iT9wCS0DRTXu269V264Vf/3jvredZiKRkgwlL9xNAwxXFg0x/XFw005UWVRIkdg\ncKWTjpBP2dPwVZ4WWC+9aGVd+Gyn1o0CLelf4rEjGoXbAAEgAqeGUxrcIlbjXfbc\nmwIDAQAB\n-----END PUBLIC KEY-----",
//         N = {
//             hs256: {
//                 token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
//                 secret: "your-256-bit-secret",
//             },
//             hs384: {
//                 token: "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.bQTnz6AuMJvmXXQsVPrxeQNvzDkimo7VNXxHeSBfClLufmCVZRUuyTwJF311JHuh",
//                 secret: "your-384-bit-secret",
//             },
//             hs512: {
//                 token: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.VFb0qJ1LRg_4ujbZoRMXnVkUgiuKq5KxWqNdbKq_G9Vvz-S1zZa9LPxtHWKa64zDl2ofkT8F6jBt_K4riU-fPg",
//                 secret: "your-512-bit-secret",
//             },
//             rs256: {
//                 token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.NHVaYe26MbtOYhSKkoKYdFVomg4i8ZJd8_-RU8VNbftc4TSMb4bXP3l3YlNWACwyXPGffz5aXHc6lty1Y2t4SWRqGteragsVdZufDn5BlnJl9pdR_kdVFUsra2rWKEofkZeIC4yWytE58sMIihvo9H1ScmmVwBcQP6XETqYd0aSHp1gOa9RdUPDvoXQ5oqygTqVtxaDr6wUFKrKItgBMzWIdNZ6y7O9E0DhEPTbE9rfBo6KTFsHAZnMg4k68CDp2woYIaXbmYTWcvbzIuHO7_37GT79XdIwkm95QJ7hYC9RiwrV7mesbY4PAahERJawntho0my942XheVLmGwLMBkQ",
//                 privateKey: k,
//                 jwk: B,
//                 publicKey: L,
//             },
//             rs384: {
//                 token: "eyJhbGciOiJSUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.o1hC1xYbJolSyh0-bOY230w22zEQSk5TiBfc-OCvtpI2JtYlW-23-8B48NpATozzMHn0j3rE0xVUldxShzy0xeJ7vYAccVXu2Gs9rnTVqouc-UZu_wJHkZiKBL67j8_61L6SXswzPAQu4kVDwAefGf5hyYBUM-80vYZwWPEpLI8K4yCBsF6I9N1yQaZAJmkMp_Iw371Menae4Mp4JusvBJS-s6LrmG2QbiZaFaxVJiW8KlUkWyUCns8-qFl5OMeYlgGFsyvvSHvXCzQrsEXqyCdS4tQJd73ayYA4SPtCb9clz76N1zE5WsV4Z0BYrxeb77oA7jJhh994RAPzCG0hmQ",
//                 privateKey: k,
//                 jwk: B,
//                 publicKey: L,
//             },
//             rs512: {
//                 token: "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.jYW04zLDHfR1v7xdrW3lCGZrMIsVe0vWCfVkN2DRns2c3MN-mcp_-RE6TN9umSBYoNV-mnb31wFf8iun3fB6aDS6m_OXAiURVEKrPFNGlR38JSHUtsFzqTOj-wFrJZN4RwvZnNGSMvK3wzzUriZqmiNLsG8lktlEn6KA4kYVaM61_NpmPHWAjGExWv7cjHYupcjMSmR8uMTwN5UuAwgW6FRstCJEfoxwb0WKiyoaSlDuIiHZJ0cyGhhEmmAPiCwtPAwGeaL1yZMcp0p82cpTQ5Qb-7CtRov3N4DcOHgWYk6LomPR5j5cCkePAz87duqyzSMpCB0mCOuE3CU2VMtGeQ",
//                 privateKey: k,
//                 jwk: B,
//                 publicKey: L,
//             },
//             es256: {
//                 token: "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.tyh-VfuzIxCyGYDlkBA7DfyjrqmSHu6pQ2hoZuFqUSLPNY2N0mpHb3nk5K17HWP_3cYHBw7AhHale5wky6-sVA",
//                 privateKey: "-----BEGIN PRIVATE KEY-----\nMIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgevZzL1gdAFr88hb2\nOF/2NxApJCzGCEDdfSp6VQO30hyhRANCAAQRWz+jn65BtOMvdyHKcvjBeBSDZH2r\n1RTwjmYSi9R/zpBnuQ4EiMnCqfMPWiZqB4QdbAd0E7oH50VpuZ1P087G\n-----END PRIVATE KEY-----",
//                 jwk: {
//                     crv: "P-256",
//                     x: "EVs_o5-uQbTjL3chynL4wXgUg2R9q9UU8I5mEovUf84",
//                     y: "kGe5DgSIycKp8w9aJmoHhB1sB3QTugfnRWm5nU_TzsY",
//                     d: "evZzL1gdAFr88hb2OF_2NxApJCzGCEDdfSp6VQO30hw",
//                     kty: "EC",
//                 },
//                 publicKey: "-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEEVs/o5+uQbTjL3chynL4wXgUg2R9\nq9UU8I5mEovUf86QZ7kOBIjJwqnzD1omageEHWwHdBO6B+dFabmdT9POxg==\n-----END PUBLIC KEY-----",
//             },
//             es384: {
//                 token: "eyJhbGciOiJFUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.VUPWQZuClnkFbaEKCsPy7CZVMh5wxbCSpaAWFLpnTe9J0--PzHNeTFNXCrVHysAa3eFbuzD8_bLSsgTKC8SzHxRVSj5eN86vBPo_1fNfE7SHTYhWowjY4E_wuiC13yoj",
//                 privateKey: "-----BEGIN PRIVATE KEY-----\nMIG2AgEAMBAGByqGSM49AgEGBSuBBAAiBIGeMIGbAgEBBDCAHpFQ62QnGCEvYh/p\nE9QmR1C9aLcDItRbslbmhen/h1tt8AyMhskeenT+rAyyPhGhZANiAAQLW5ZJePZz\nMIPAxMtZXkEWbDF0zo9f2n4+T1h/2sh/fviblc/VTyrv10GEtIi5qiOy85Pf1RRw\n8lE5IPUWpgu553SteKigiKLUPeNpbqmYZUkWGh3MLfVzLmx85ii2vMU=\n-----END PRIVATE KEY-----",
//                 jwk: {
//                     crv: "P-384",
//                     x: "C1uWSXj2czCDwMTLWV5BFmwxdM6PX9p-Pk9Yf9rIf374m5XP1U8q79dBhLSIuaoj",
//                     y: "svOT39UUcPJROSD1FqYLued0rXiooIii1D3jaW6pmGVJFhodzC31cy5sfOYotrzF",
//                     d: "gB6RUOtkJxghL2If6RPUJkdQvWi3AyLUW7JW5oXp_4dbbfAMjIbJHnp0_qwMsj4R",
//                     kty: "EC",
//                 },
//                 publicKey: "-----BEGIN PUBLIC KEY-----\nMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEC1uWSXj2czCDwMTLWV5BFmwxdM6PX9p+\nPk9Yf9rIf374m5XP1U8q79dBhLSIuaojsvOT39UUcPJROSD1FqYLued0rXiooIii\n1D3jaW6pmGVJFhodzC31cy5sfOYotrzF\n-----END PUBLIC KEY-----",
//             },
//             es512: {
//                 token: "eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.AbVUinMiT3J_03je8WTOIl-VdggzvoFgnOsdouAs-DLOtQzau9valrq-S6pETyi9Q18HH-EuwX49Q7m3KC0GuNBJAc9Tksulgsdq8GqwIqZqDKmG7hNmDzaQG1Dpdezn2qzv-otf3ZZe-qNOXUMRImGekfQFIuH_MjD2e8RZyww6lbZk",
//                 privateKey: "-----BEGIN PRIVATE KEY-----\nMIHuAgEAMBAGByqGSM49AgEGBSuBBAAjBIHWMIHTAgEBBEIBiyAa7aRHFDCh2qga\n9sTUGINE5jHAFnmM8xWeT/uni5I4tNqhV5Xx0pDrmCV9mbroFtfEa0XVfKuMAxxf\nZ6LM/yKhgYkDgYYABAGBzgdnP798FsLuWYTDDQA7c0r3BVk8NnRUSexpQUsRilPN\nv3SchO0lRw9Ru86x1khnVDx+duq4BiDFcvlSAcyjLACJvjvoyTLJiA+TQFdmrear\njMiZNE25pT2yWP1NUndJxPcvVtfBW48kPOmvkY4WlqP5bAwCXwbsKrCgk6xbsp12\new==\n-----END PRIVATE KEY-----",
//                 jwk: {
//                     crv: "P-521",
//                     x: "AYHOB2c_v3wWwu5ZhMMNADtzSvcFWTw2dFRJ7GlBSxGKU82_dJyE7SVHD1G7zrHWSGdUPH526rgGIMVy-VIBzKMs",
//                     y: "AIm-O-jJMsmID5NAV2at5quMyJk0TbmlPbJY_U1Sd0nE9y9W18FbjyQ86a-RjhaWo_lsDAJfBuwqsKCTrFuynXZ7",
//                     d: "AYsgGu2kRxQwodqoGvbE1BiDROYxwBZ5jPMVnk_7p4uSOLTaoVeV8dKQ65glfZm66BbXxGtF1XyrjAMcX2eizP8i",
//                     kty: "EC",
//                 },
//                 publicKey: "-----BEGIN PUBLIC KEY-----\nMIGbMBAGByqGSM49AgEGBSuBBAAjA4GGAAQBgc4HZz+/fBbC7lmEww0AO3NK9wVZ\nPDZ0VEnsaUFLEYpTzb90nITtJUcPUbvOsdZIZ1Q8fnbquAYgxXL5UgHMoywAib47\n6MkyyYgPk0BXZq3mq4zImTRNuaU9slj9TVJ3ScT3L1bXwVuPJDzpr5GOFpaj+WwM\nAl8G7CqwoJOsW7Kddns=\n-----END PUBLIC KEY-----",
//             },
//             ps256: {
//                 token: "eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.iOeNU4dAFFeBwNj6qdhdvm-IvDQrTa6R22lQVJVuWJxorJfeQww5Nwsra0PjaOYhAMj9jNMO5YLmud8U7iQ5gJK2zYyepeSuXhfSi8yjFZfRiSkelqSkU19I-Ja8aQBDbqXf2SAWA8mHF8VS3F08rgEaLCyv98fLLH4vSvsJGf6ueZSLKDVXz24rZRXGWtYYk_OYYTVgR1cg0BLCsuCvqZvHleImJKiWmtS0-CymMO4MMjCy_FIl6I56NqLE9C87tUVpo1mT-kbg5cHDD8I7MjCW5Iii5dethB4Vid3mZ6emKjVYgXrtkOQ-JyGMh6fnQxEFN1ft33GX2eRHluK9eg",
//                 privateKey: k,
//                 jwk: B,
//                 publicKey: L,
//             },
//             ps384: {
//                 token: "eyJhbGciOiJQUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.Lfe_aCQme_gQpUk9-6l9qesu0QYZtfdzfy08w8uqqPH_gnw-IVyQwyGLBHPFBJHMbifdSMxPjJjkCD0laIclhnBhowILu6k66_5Y2z78GHg8YjKocAvB-wSUiBhuV6hXVxE5emSjhfVz2OwiCk2bfk2hziRpkdMvfcITkCx9dmxHU6qcEIsTTHuH020UcGayB1-IoimnjTdCsV1y4CMr_ECDjBrqMdnontkqKRIM1dtmgYFsJM6xm7ewi_ksG_qZHhaoBkxQ9wq9OVQRGiSZYowCp73d2BF3jYMhdmv2JiaUz5jRvv6lVU7Quq6ylVAlSPxeov9voYHO1mgZFCY1kQ",
//                 privateKey: k,
//                 jwk: B,
//                 publicKey: L,
//             },
//             ps512: {
//                 token: "eyJhbGciOiJQUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.J5W09-rNx0pt5_HBiydR-vOluS6oD-RpYNa8PVWwMcBDQSXiw6-EPW8iSsalXPspGj3ouQjAnOP_4-zrlUUlvUIt2T79XyNeiKuooyIFvka3Y5NnGiOUBHWvWcWp4RcQFMBrZkHtJM23sB5D7Wxjx0-HFeNk-Y3UJgeJVhg5NaWXypLkC4y0ADrUBfGAxhvGdRdULZivfvzuVtv6AzW6NRuEE6DM9xpoWX_4here-yvLS2YPiBTZ8xbB3axdM99LhES-n52lVkiX5AWg2JJkEROZzLMpaacA_xlbUz_zbIaOaoqk8gB5oO7kI6sZej3QAdGigQy-hXiRnW_L98d4GQ",
//                 privateKey: k,
//                 jwk: B,
//                 publicKey: L,
//             },
//         };

//     for(const alg in N){
//         const {token,secret,privateKey} = N[alg]
//         // valid jika tidak null
//         console.log(alg,decode(token,secret||privateKey)!==null)
//     }
// }
