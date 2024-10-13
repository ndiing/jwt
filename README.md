## Constants

<dl>
<dt><a href="#signer">signer</a> : <code>Object</code></dt>
<dd><p>Objek untuk menandatangani data menggunakan berbagai algoritma.</p>
</dd>
<dt><a href="#verifier">verifier</a> : <code>Object</code></dt>
<dd><p>Objek untuk memverifikasi tanda tangan menggunakan berbagai algoritma.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#encode">encode(header, payload, secret)</a> ⇒ <code>string</code></dt>
<dd><p>Mengkodekan header dan payload menjadi token JWT menggunakan algoritma penandatanganan yang ditentukan.</p>
</dd>
<dt><a href="#decode">decode(token, secret)</a> ⇒ <code>Object</code> | <code>null</code></dt>
<dd><p>Menguraikan token JWT dan memverifikasi tanda tangan menggunakan kunci rahasia.</p>
</dd>
</dl>

<a name="signer"></a>

## signer : <code>Object</code>
Objek untuk menandatangani data menggunakan berbagai algoritma.

**Kind**: global constant  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| hs256 | <code>function</code> | Menandatangani data menggunakan HMAC SHA-256. |
| hs384 | <code>function</code> | Menandatangani data menggunakan HMAC SHA-384. |
| hs512 | <code>function</code> | Menandatangani data menggunakan HMAC SHA-512. |
| rs256 | <code>function</code> | Menandatangani data menggunakan RSA SHA-256. |
| rs384 | <code>function</code> | Menandatangani data menggunakan RSA SHA-384. |
| rs512 | <code>function</code> | Menandatangani data menggunakan RSA SHA-512. |
| es256 | <code>function</code> | Menandatangani data menggunakan ECDSA SHA-256. |
| es384 | <code>function</code> | Menandatangani data menggunakan ECDSA SHA-384. |
| es512 | <code>function</code> | Menandatangani data menggunakan ECDSA SHA-512. |
| ps256 | <code>function</code> | Menandatangani data menggunakan RSA PSS SHA-256. |
| ps384 | <code>function</code> | Menandatangani data menggunakan RSA PSS SHA-384. |
| ps512 | <code>function</code> | Menandatangani data menggunakan RSA PSS SHA-512. |

<a name="verifier"></a>

## verifier : <code>Object</code>
Objek untuk memverifikasi tanda tangan menggunakan berbagai algoritma.

**Kind**: global constant  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| hs256 | <code>function</code> | Memverifikasi tanda tangan menggunakan HMAC SHA-256. |
| hs384 | <code>function</code> | Memverifikasi tanda tangan menggunakan HMAC SHA-384. |
| hs512 | <code>function</code> | Memverifikasi tanda tangan menggunakan HMAC SHA-512. |
| rs256 | <code>function</code> | Memverifikasi tanda tangan menggunakan RSA SHA-256. |
| rs384 | <code>function</code> | Memverifikasi tanda tangan menggunakan RSA SHA-384. |
| rs512 | <code>function</code> | Memverifikasi tanda tangan menggunakan RSA SHA-512. |
| es256 | <code>function</code> | Memverifikasi tanda tangan menggunakan ECDSA SHA-256. |
| es384 | <code>function</code> | Memverifikasi tanda tangan menggunakan ECDSA SHA-384. |
| es512 | <code>function</code> | Memverifikasi tanda tangan menggunakan ECDSA SHA-512. |
| ps256 | <code>function</code> | Memverifikasi tanda tangan menggunakan RSA PSS SHA-256. |
| ps384 | <code>function</code> | Memverifikasi tanda tangan menggunakan RSA PSS SHA-384. |
| ps512 | <code>function</code> | Memverifikasi tanda tangan menggunakan RSA PSS SHA-512. |

<a name="encode"></a>

## encode(header, payload, secret) ⇒ <code>string</code>
Mengkodekan header dan payload menjadi token JWT menggunakan algoritma penandatanganan yang ditentukan.

**Kind**: global function  
**Returns**: <code>string</code> - Token JWT yang telah dikodekan.  

| Param | Type | Description |
| --- | --- | --- |
| header | <code>Object</code> | Objek header JWT yang berisi informasi algoritma dan tipe token. |
| payload | <code>Object</code> | Objek payload JWT yang berisi informasi yang ingin disimpan dalam token. |
| secret | <code>string</code> | Kunci rahasia yang digunakan untuk menandatangani token. |

<a name="decode"></a>

## decode(token, secret) ⇒ <code>Object</code> \| <code>null</code>
Menguraikan token JWT dan memverifikasi tanda tangan menggunakan kunci rahasia.

**Kind**: global function  
**Returns**: <code>Object</code> \| <code>null</code> - Objek payload jika token valid, atau null jika tidak valid.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | Token JWT yang ingin diuraikan. |
| secret | <code>string</code> | Kunci rahasia yang digunakan untuk memverifikasi token. |

