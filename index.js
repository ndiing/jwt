const crypto = require("@ndiing/crypto");

// https://www.rfc-editor.org/rfc/rfc7519.html

// data=payload
function encode(data, options = {}) {
    let { headers } = options;
    headers = JSON.stringify(headers);
    headers = crypto.base64UrlEncode(headers);
    data = JSON.stringify(data);
    data = crypto.base64UrlEncode(data);
    const message = `${headers}.${data}`;
    let signature = sign(message, options);
    return `${message}.${signature}`;
}
// data=token
function decode(data) {
    // let headers
    // let signature
    [headers, data, signature] = data.split(".");
    data = crypto.base64UrlDecode(data);
    data = JSON.parse(data);
    return data;
}
function sign(data, options = {}) {
    const { headers, secret } = options;
    return crypto.hmac(data, { algorithm: "sha256", key: secret, encoding: "base64url" });
}
function verify(data, options = {}) {
    let headers;
    let signature;
    [headers, data, signature] = data.split(".");
    return signature == sign(`${headers}.${data}`, options);
}

module.exports = {
    encode,
    decode,
    sign,
    verify,
};
// # JWT
// ### Install
// ```
// npm install @ndiing/jwt
// ```
// // ### Usage
// var headers = {
//     alg: "HS256",
//     typ: "JWT",
// };
// var data = {
//     sub: "1234567890",
//     name: "John Doe",
//     iat: 1516239022,
// };
// var secret = "your-256-bit-secret";
// var options = { headers, secret };

// var encoded = encode(data, options);
// console.log(encoded);
// console.log(decode(encoded));
// console.log(verify(encoded, options));
