## Classes

<dl>
<dt><a href="#Signer">Signer</a></dt>
<dd></dd>
<dt><a href="#Verifier">Verifier</a></dt>
<dd></dd>
<dt><a href="#JWT">JWT</a></dt>
<dd></dd>
</dl>

<a name="Signer"></a>

## Signer
**Kind**: global class  

* [Signer](#Signer)
    * [.HS256()](#Signer.HS256)
    * [.HS384()](#Signer.HS384)
    * [.HS512()](#Signer.HS512)
    * [.RS256()](#Signer.RS256)
    * [.RS384()](#Signer.RS384)
    * [.RS512()](#Signer.RS512)
    * [.ES256()](#Signer.ES256)
    * [.ES384()](#Signer.ES384)
    * [.ES512()](#Signer.ES512)
    * [.PS256()](#Signer.PS256)
    * [.PS384()](#Signer.PS384)
    * [.PS512()](#Signer.PS512)

<a name="Signer.HS256"></a>

### Signer.HS256()
**Kind**: static method of [<code>Signer</code>](#Signer)  
<a name="Signer.HS384"></a>

### Signer.HS384()
**Kind**: static method of [<code>Signer</code>](#Signer)  
<a name="Signer.HS512"></a>

### Signer.HS512()
**Kind**: static method of [<code>Signer</code>](#Signer)  
<a name="Signer.RS256"></a>

### Signer.RS256()
**Kind**: static method of [<code>Signer</code>](#Signer)  
<a name="Signer.RS384"></a>

### Signer.RS384()
**Kind**: static method of [<code>Signer</code>](#Signer)  
<a name="Signer.RS512"></a>

### Signer.RS512()
**Kind**: static method of [<code>Signer</code>](#Signer)  
<a name="Signer.ES256"></a>

### Signer.ES256()
**Kind**: static method of [<code>Signer</code>](#Signer)  
<a name="Signer.ES384"></a>

### Signer.ES384()
**Kind**: static method of [<code>Signer</code>](#Signer)  
<a name="Signer.ES512"></a>

### Signer.ES512()
**Kind**: static method of [<code>Signer</code>](#Signer)  
<a name="Signer.PS256"></a>

### Signer.PS256()
**Kind**: static method of [<code>Signer</code>](#Signer)  
<a name="Signer.PS384"></a>

### Signer.PS384()
**Kind**: static method of [<code>Signer</code>](#Signer)  
<a name="Signer.PS512"></a>

### Signer.PS512()
**Kind**: static method of [<code>Signer</code>](#Signer)  
<a name="Verifier"></a>

## Verifier
**Kind**: global class  

* [Verifier](#Verifier)
    * [.HS256()](#Verifier.HS256)
    * [.HS384()](#Verifier.HS384)
    * [.HS512()](#Verifier.HS512)
    * [.RS256()](#Verifier.RS256)
    * [.RS384()](#Verifier.RS384)
    * [.RS512()](#Verifier.RS512)
    * [.ES256()](#Verifier.ES256)
    * [.ES384()](#Verifier.ES384)
    * [.ES512()](#Verifier.ES512)
    * [.PS256()](#Verifier.PS256)
    * [.PS384()](#Verifier.PS384)
    * [.PS512()](#Verifier.PS512)

<a name="Verifier.HS256"></a>

### Verifier.HS256()
**Kind**: static method of [<code>Verifier</code>](#Verifier)  
<a name="Verifier.HS384"></a>

### Verifier.HS384()
**Kind**: static method of [<code>Verifier</code>](#Verifier)  
<a name="Verifier.HS512"></a>

### Verifier.HS512()
**Kind**: static method of [<code>Verifier</code>](#Verifier)  
<a name="Verifier.RS256"></a>

### Verifier.RS256()
**Kind**: static method of [<code>Verifier</code>](#Verifier)  
<a name="Verifier.RS384"></a>

### Verifier.RS384()
**Kind**: static method of [<code>Verifier</code>](#Verifier)  
<a name="Verifier.RS512"></a>

### Verifier.RS512()
**Kind**: static method of [<code>Verifier</code>](#Verifier)  
<a name="Verifier.ES256"></a>

### Verifier.ES256()
**Kind**: static method of [<code>Verifier</code>](#Verifier)  
<a name="Verifier.ES384"></a>

### Verifier.ES384()
**Kind**: static method of [<code>Verifier</code>](#Verifier)  
<a name="Verifier.ES512"></a>

### Verifier.ES512()
**Kind**: static method of [<code>Verifier</code>](#Verifier)  
<a name="Verifier.PS256"></a>

### Verifier.PS256()
**Kind**: static method of [<code>Verifier</code>](#Verifier)  
<a name="Verifier.PS384"></a>

### Verifier.PS384()
**Kind**: static method of [<code>Verifier</code>](#Verifier)  
<a name="Verifier.PS512"></a>

### Verifier.PS512()
**Kind**: static method of [<code>Verifier</code>](#Verifier)  
<a name="JWT"></a>

## JWT
**Kind**: global class  

* [JWT](#JWT)
    * [.encode(data, options)](#JWT.encode) ⇒ <code>Any</code>
    * [.decode(data, options)](#JWT.decode) ⇒ <code>Any</code>
    * [.sign(data, options)](#JWT.sign) ⇒ <code>Any</code>
    * [.verify(data, signature, options)](#JWT.verify) ⇒ <code>Any</code>

<a name="JWT.encode"></a>

### JWT.encode(data, options) ⇒ <code>Any</code>
**Kind**: static method of [<code>JWT</code>](#JWT)  

| Param | Type |
| --- | --- |
| data | <code>\*</code> | 
| options | <code>\*</code> | 

<a name="JWT.decode"></a>

### JWT.decode(data, options) ⇒ <code>Any</code>
**Kind**: static method of [<code>JWT</code>](#JWT)  

| Param | Type |
| --- | --- |
| data | <code>\*</code> | 
| options | <code>\*</code> | 

<a name="JWT.sign"></a>

### JWT.sign(data, options) ⇒ <code>Any</code>
**Kind**: static method of [<code>JWT</code>](#JWT)  

| Param | Type |
| --- | --- |
| data | <code>\*</code> | 
| options | <code>\*</code> | 

<a name="JWT.verify"></a>

### JWT.verify(data, signature, options) ⇒ <code>Any</code>
**Kind**: static method of [<code>JWT</code>](#JWT)  

| Param | Type |
| --- | --- |
| data | <code>\*</code> | 
| signature | <code>\*</code> | 
| options | <code>\*</code> | 

