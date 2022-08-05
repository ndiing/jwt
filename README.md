<a name="module_JWT"></a>

## JWT
Nodejs JWT module### Install```npm install @ndiing/jwt```

**See**

- [https://www.rfc-editor.org/rfc/rfc7519.html](https://www.rfc-editor.org/rfc/rfc7519.html)
- [https://jwt.io/](https://jwt.io/)


* [JWT](#module_JWT)
    * [~encode(data, options)](#module_JWT..encode) ⇒ <code>String</code>
    * [~decode(data)](#module_JWT..decode) ⇒ <code>Object</code>
    * [~verify(data, options)](#module_JWT..verify) ⇒ <code>Boolean</code>

<a name="module_JWT..encode"></a>

### JWT~encode(data, options) ⇒ <code>String</code>
Encode data

**Kind**: inner method of [<code>JWT</code>](#module_JWT)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | - |
| options | <code>Object</code> | - |
| options.headers | <code>Object</code> | - |
| options.headers.alg | <code>String</code> | `HS256`,`HS384`,`HS512`,`RS256`,`RS384`,`RS512`,`ES256`,`ES384`,`ES512`,`PS256`,`PS384`,`PS512` |
| options.headers.typ | <code>String</code> | - |
| options.headers.secret | <code>String/Object</code> | used in `HS256`,`HS384`,`HS512` |
| options.headers.secret.publicKey | <code>String</code> | used in `RS256`,`RS384`,`RS512`,`ES256`,`ES384`,`ES512`,`PS256`,`PS384`,`PS512` |
| options.headers.secret.privateKey | <code>String</code> | used in `RS256`,`RS384`,`RS512`,`ES256`,`ES384`,`ES512`,`PS256`,`PS384`,`PS512` |

<a name="module_JWT..decode"></a>

### JWT~decode(data) ⇒ <code>Object</code>
Decode from token

**Kind**: inner method of [<code>JWT</code>](#module_JWT)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>String</code> | - |

<a name="module_JWT..verify"></a>

### JWT~verify(data, options) ⇒ <code>Boolean</code>
Verify token

**Kind**: inner method of [<code>JWT</code>](#module_JWT)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>String</code> | - |
| options | <code>Object</code> | - |
| options.headers | <code>Object</code> | - |
| options.headers.alg | <code>String</code> | `HS256`,`HS384`,`HS512`,`RS256`,`RS384`,`RS512`,`ES256`,`ES384`,`ES512`,`PS256`,`PS384`,`PS512` |
| options.headers.typ | <code>String</code> | - |
| options.headers.secret | <code>String/Object</code> | used in `HS256`,`HS384`,`HS512` |
| options.headers.secret.publicKey | <code>String</code> | used in `RS256`,`RS384`,`RS512`,`ES256`,`ES384`,`ES512`,`PS256`,`PS384`,`PS512` |
| options.headers.secret.privateKey | <code>String</code> | used in `RS256`,`RS384`,`RS512`,`ES256`,`ES384`,`ES512`,`PS256`,`PS384`,`PS512` |

