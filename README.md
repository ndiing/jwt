<a name="module_JWT"></a>

## JWT
### Install```npm install @ndiing/jwt```

**See**: [./test.js](./test.js)  

* [JWT](#module_JWT)
    * [~Signer](#module_JWT..Signer)
        * [.HS256(data, options)](#module_JWT..Signer.HS256) ⇒ <code>String</code>
        * [.HS384(data, options)](#module_JWT..Signer.HS384) ⇒ <code>String</code>
        * [.HS512(data, options)](#module_JWT..Signer.HS512) ⇒ <code>String</code>
        * [.RS256(data, options)](#module_JWT..Signer.RS256) ⇒ <code>String</code>
        * [.RS384(data, options)](#module_JWT..Signer.RS384) ⇒ <code>String</code>
        * [.RS512(data, options)](#module_JWT..Signer.RS512) ⇒ <code>String</code>
        * [.ES256(data, options)](#module_JWT..Signer.ES256) ⇒ <code>String</code>
        * [.ES384(data, options)](#module_JWT..Signer.ES384) ⇒ <code>String</code>
        * [.ES512(data, options)](#module_JWT..Signer.ES512) ⇒ <code>String</code>
        * [.PS256(data, options)](#module_JWT..Signer.PS256) ⇒ <code>String</code>
        * [.PS384(data, options)](#module_JWT..Signer.PS384) ⇒ <code>String</code>
        * [.PS512(data, options)](#module_JWT..Signer.PS512) ⇒ <code>String</code>
    * [~Verifier](#module_JWT..Verifier)
        * [.HS256(data, options)](#module_JWT..Verifier.HS256) ⇒ <code>Boolean</code>
        * [.HS384(data, options)](#module_JWT..Verifier.HS384) ⇒ <code>Boolean</code>
        * [.HS512(data, options)](#module_JWT..Verifier.HS512) ⇒ <code>Boolean</code>
        * [.RS256(data, options)](#module_JWT..Verifier.RS256) ⇒ <code>Boolean</code>
        * [.RS384(data, options)](#module_JWT..Verifier.RS384) ⇒ <code>Boolean</code>
        * [.RS512(data, options)](#module_JWT..Verifier.RS512) ⇒ <code>Boolean</code>
        * [.ES256(data, options)](#module_JWT..Verifier.ES256) ⇒ <code>Boolean</code>
        * [.ES384(data, options)](#module_JWT..Verifier.ES384) ⇒ <code>Boolean</code>
        * [.ES512(data, options)](#module_JWT..Verifier.ES512) ⇒ <code>Boolean</code>
        * [.PS256(data, options)](#module_JWT..Verifier.PS256) ⇒ <code>Boolean</code>
        * [.PS384(data, options)](#module_JWT..Verifier.PS384) ⇒ <code>Boolean</code>
        * [.PS512(data, options)](#module_JWT..Verifier.PS512) ⇒ <code>Boolean</code>
    * [~JWT](#module_JWT..JWT)
        * [.encode(data, options)](#module_JWT..JWT.encode) ⇒ <code>String</code>
        * [.decode(data, options)](#module_JWT..JWT.decode) ⇒ <code>Object</code>
        * [.sign(data, options)](#module_JWT..JWT.sign) ⇒ <code>String</code>
        * [.verify(data, signature, options)](#module_JWT..JWT.verify) ⇒ <code>Boolean</code>

<a name="module_JWT..Signer"></a>

### JWT~Signer
**Kind**: inner class of [<code>JWT</code>](#module_JWT)  

* [~Signer](#module_JWT..Signer)
    * [.HS256(data, options)](#module_JWT..Signer.HS256) ⇒ <code>String</code>
    * [.HS384(data, options)](#module_JWT..Signer.HS384) ⇒ <code>String</code>
    * [.HS512(data, options)](#module_JWT..Signer.HS512) ⇒ <code>String</code>
    * [.RS256(data, options)](#module_JWT..Signer.RS256) ⇒ <code>String</code>
    * [.RS384(data, options)](#module_JWT..Signer.RS384) ⇒ <code>String</code>
    * [.RS512(data, options)](#module_JWT..Signer.RS512) ⇒ <code>String</code>
    * [.ES256(data, options)](#module_JWT..Signer.ES256) ⇒ <code>String</code>
    * [.ES384(data, options)](#module_JWT..Signer.ES384) ⇒ <code>String</code>
    * [.ES512(data, options)](#module_JWT..Signer.ES512) ⇒ <code>String</code>
    * [.PS256(data, options)](#module_JWT..Signer.PS256) ⇒ <code>String</code>
    * [.PS384(data, options)](#module_JWT..Signer.PS384) ⇒ <code>String</code>
    * [.PS512(data, options)](#module_JWT..Signer.PS512) ⇒ <code>String</code>

<a name="module_JWT..Signer.HS256"></a>

#### Signer.HS256(data, options) ⇒ <code>String</code>
**Kind**: static method of [<code>Signer</code>](#module_JWT..Signer)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| options | <code>Object</code> | 
| options.secret | <code>String/Object</code> | 

<a name="module_JWT..Signer.HS384"></a>

#### Signer.HS384(data, options) ⇒ <code>String</code>
**Kind**: static method of [<code>Signer</code>](#module_JWT..Signer)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| options | <code>Object</code> | 
| options.secret | <code>String/Object</code> | 

<a name="module_JWT..Signer.HS512"></a>

#### Signer.HS512(data, options) ⇒ <code>String</code>
**Kind**: static method of [<code>Signer</code>](#module_JWT..Signer)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| options | <code>Object</code> | 
| options.secret | <code>String/Object</code> | 

<a name="module_JWT..Signer.RS256"></a>

#### Signer.RS256(data, options) ⇒ <code>String</code>
**Kind**: static method of [<code>Signer</code>](#module_JWT..Signer)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| options | <code>Object</code> | 
| options.secret | <code>String/Object</code> | 

<a name="module_JWT..Signer.RS384"></a>

#### Signer.RS384(data, options) ⇒ <code>String</code>
**Kind**: static method of [<code>Signer</code>](#module_JWT..Signer)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| options | <code>Object</code> | 
| options.secret | <code>String/Object</code> | 

<a name="module_JWT..Signer.RS512"></a>

#### Signer.RS512(data, options) ⇒ <code>String</code>
**Kind**: static method of [<code>Signer</code>](#module_JWT..Signer)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| options | <code>Object</code> | 
| options.secret | <code>String/Object</code> | 

<a name="module_JWT..Signer.ES256"></a>

#### Signer.ES256(data, options) ⇒ <code>String</code>
**Kind**: static method of [<code>Signer</code>](#module_JWT..Signer)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| options | <code>Object</code> | 
| options.secret | <code>String/Object</code> | 

<a name="module_JWT..Signer.ES384"></a>

#### Signer.ES384(data, options) ⇒ <code>String</code>
**Kind**: static method of [<code>Signer</code>](#module_JWT..Signer)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| options | <code>Object</code> | 
| options.secret | <code>String/Object</code> | 

<a name="module_JWT..Signer.ES512"></a>

#### Signer.ES512(data, options) ⇒ <code>String</code>
**Kind**: static method of [<code>Signer</code>](#module_JWT..Signer)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| options | <code>Object</code> | 
| options.secret | <code>String/Object</code> | 

<a name="module_JWT..Signer.PS256"></a>

#### Signer.PS256(data, options) ⇒ <code>String</code>
**Kind**: static method of [<code>Signer</code>](#module_JWT..Signer)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| options | <code>Object</code> | 
| options.secret | <code>String/Object</code> | 

<a name="module_JWT..Signer.PS384"></a>

#### Signer.PS384(data, options) ⇒ <code>String</code>
**Kind**: static method of [<code>Signer</code>](#module_JWT..Signer)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| options | <code>Object</code> | 
| options.secret | <code>String/Object</code> | 

<a name="module_JWT..Signer.PS512"></a>

#### Signer.PS512(data, options) ⇒ <code>String</code>
**Kind**: static method of [<code>Signer</code>](#module_JWT..Signer)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| options | <code>Object</code> | 
| options.secret | <code>String/Object</code> | 

<a name="module_JWT..Verifier"></a>

### JWT~Verifier
**Kind**: inner class of [<code>JWT</code>](#module_JWT)  

* [~Verifier](#module_JWT..Verifier)
    * [.HS256(data, options)](#module_JWT..Verifier.HS256) ⇒ <code>Boolean</code>
    * [.HS384(data, options)](#module_JWT..Verifier.HS384) ⇒ <code>Boolean</code>
    * [.HS512(data, options)](#module_JWT..Verifier.HS512) ⇒ <code>Boolean</code>
    * [.RS256(data, options)](#module_JWT..Verifier.RS256) ⇒ <code>Boolean</code>
    * [.RS384(data, options)](#module_JWT..Verifier.RS384) ⇒ <code>Boolean</code>
    * [.RS512(data, options)](#module_JWT..Verifier.RS512) ⇒ <code>Boolean</code>
    * [.ES256(data, options)](#module_JWT..Verifier.ES256) ⇒ <code>Boolean</code>
    * [.ES384(data, options)](#module_JWT..Verifier.ES384) ⇒ <code>Boolean</code>
    * [.ES512(data, options)](#module_JWT..Verifier.ES512) ⇒ <code>Boolean</code>
    * [.PS256(data, options)](#module_JWT..Verifier.PS256) ⇒ <code>Boolean</code>
    * [.PS384(data, options)](#module_JWT..Verifier.PS384) ⇒ <code>Boolean</code>
    * [.PS512(data, options)](#module_JWT..Verifier.PS512) ⇒ <code>Boolean</code>

<a name="module_JWT..Verifier.HS256"></a>

#### Verifier.HS256(data, options) ⇒ <code>Boolean</code>
**Kind**: static method of [<code>Verifier</code>](#module_JWT..Verifier)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| options | <code>Object</code> | 
| options.secret | <code>String/Object</code> | 

<a name="module_JWT..Verifier.HS384"></a>

#### Verifier.HS384(data, options) ⇒ <code>Boolean</code>
**Kind**: static method of [<code>Verifier</code>](#module_JWT..Verifier)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| options | <code>Object</code> | 
| options.secret | <code>String/Object</code> | 

<a name="module_JWT..Verifier.HS512"></a>

#### Verifier.HS512(data, options) ⇒ <code>Boolean</code>
**Kind**: static method of [<code>Verifier</code>](#module_JWT..Verifier)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| options | <code>Object</code> | 
| options.secret | <code>String/Object</code> | 

<a name="module_JWT..Verifier.RS256"></a>

#### Verifier.RS256(data, options) ⇒ <code>Boolean</code>
**Kind**: static method of [<code>Verifier</code>](#module_JWT..Verifier)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| options | <code>Object</code> | 
| options.secret | <code>String/Object</code> | 

<a name="module_JWT..Verifier.RS384"></a>

#### Verifier.RS384(data, options) ⇒ <code>Boolean</code>
**Kind**: static method of [<code>Verifier</code>](#module_JWT..Verifier)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| options | <code>Object</code> | 
| options.secret | <code>String/Object</code> | 

<a name="module_JWT..Verifier.RS512"></a>

#### Verifier.RS512(data, options) ⇒ <code>Boolean</code>
**Kind**: static method of [<code>Verifier</code>](#module_JWT..Verifier)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| options | <code>Object</code> | 
| options.secret | <code>String/Object</code> | 

<a name="module_JWT..Verifier.ES256"></a>

#### Verifier.ES256(data, options) ⇒ <code>Boolean</code>
**Kind**: static method of [<code>Verifier</code>](#module_JWT..Verifier)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| options | <code>Object</code> | 
| options.secret | <code>String/Object</code> | 

<a name="module_JWT..Verifier.ES384"></a>

#### Verifier.ES384(data, options) ⇒ <code>Boolean</code>
**Kind**: static method of [<code>Verifier</code>](#module_JWT..Verifier)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| options | <code>Object</code> | 
| options.secret | <code>String/Object</code> | 

<a name="module_JWT..Verifier.ES512"></a>

#### Verifier.ES512(data, options) ⇒ <code>Boolean</code>
**Kind**: static method of [<code>Verifier</code>](#module_JWT..Verifier)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| options | <code>Object</code> | 
| options.secret | <code>String/Object</code> | 

<a name="module_JWT..Verifier.PS256"></a>

#### Verifier.PS256(data, options) ⇒ <code>Boolean</code>
**Kind**: static method of [<code>Verifier</code>](#module_JWT..Verifier)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| options | <code>Object</code> | 
| options.secret | <code>String/Object</code> | 

<a name="module_JWT..Verifier.PS384"></a>

#### Verifier.PS384(data, options) ⇒ <code>Boolean</code>
**Kind**: static method of [<code>Verifier</code>](#module_JWT..Verifier)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| options | <code>Object</code> | 
| options.secret | <code>String/Object</code> | 

<a name="module_JWT..Verifier.PS512"></a>

#### Verifier.PS512(data, options) ⇒ <code>Boolean</code>
**Kind**: static method of [<code>Verifier</code>](#module_JWT..Verifier)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| options | <code>Object</code> | 
| options.secret | <code>String/Object</code> | 

<a name="module_JWT..JWT"></a>

### JWT~JWT
**Kind**: inner class of [<code>JWT</code>](#module_JWT)  

* [~JWT](#module_JWT..JWT)
    * [.encode(data, options)](#module_JWT..JWT.encode) ⇒ <code>String</code>
    * [.decode(data, options)](#module_JWT..JWT.decode) ⇒ <code>Object</code>
    * [.sign(data, options)](#module_JWT..JWT.sign) ⇒ <code>String</code>
    * [.verify(data, signature, options)](#module_JWT..JWT.verify) ⇒ <code>Boolean</code>

<a name="module_JWT..JWT.encode"></a>

#### JWT.encode(data, options) ⇒ <code>String</code>
**Kind**: static method of [<code>JWT</code>](#module_JWT..JWT)  

| Param | Type |
| --- | --- |
| data | <code>Object</code> | 
| options | <code>Object</code> | 
| options.headers | <code>Object</code> | 
| options.headers.alg | <code>String</code> | 
| options.headers.typ | <code>String</code> | 
| options.secret | <code>String/Object</code> | 
| options.secret.privateKey | <code>String/Object</code> | 

<a name="module_JWT..JWT.decode"></a>

#### JWT.decode(data, options) ⇒ <code>Object</code>
**Kind**: static method of [<code>JWT</code>](#module_JWT..JWT)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| options | <code>Object</code> | 

<a name="module_JWT..JWT.sign"></a>

#### JWT.sign(data, options) ⇒ <code>String</code>
**Kind**: static method of [<code>JWT</code>](#module_JWT..JWT)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| options | <code>Object</code> | 

<a name="module_JWT..JWT.verify"></a>

#### JWT.verify(data, signature, options) ⇒ <code>Boolean</code>
**Kind**: static method of [<code>JWT</code>](#module_JWT..JWT)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| signature | <code>String</code> | 
| options | <code>Object</code> | 

