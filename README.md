# JWT
### Install
```
npm install @ndiing/jwt
```
### Usage

```js
const jwt = require('@ndiing/jwt')
var headers = {
    alg: "HS256",
    typ: "JWT",
};
var data = {
    sub: "1234567890",
    name: "John Doe",
    iat: 1516239022,
};
var secret = "your-256-bit-secret";
var options = { headers, secret };

var encoded = encode(data, options);
console.log(encoded);
console.log(decode(encoded));
console.log(verify(encoded, options));
```