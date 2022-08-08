<a name="JWT"></a>

## JWT
Nodejs JSON Web Token module### Install```npm i @ndiing/jwt```

**Kind**: global class  

* [JWT](#JWT)
    * [.encode(data, options)](#JWT.encode) ⇒ <code>String</code>
    * [.decode(data)](#JWT.decode) ⇒ <code>Object</code>
    * [.verify(data, options)](#JWT.verify) ⇒ <code>Boolean</code>

<a name="JWT.encode"></a>

### JWT.encode(data, options) ⇒ <code>String</code>
Encode data

**Kind**: static method of [<code>JWT</code>](#JWT)  

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

<a name="JWT.decode"></a>

### JWT.decode(data) ⇒ <code>Object</code>
Decode from token

**Kind**: static method of [<code>JWT</code>](#JWT)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>String</code> | - |

<a name="JWT.verify"></a>

### JWT.verify(data, options) ⇒ <code>Boolean</code>
Verify token

**Kind**: static method of [<code>JWT</code>](#JWT)  

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

