<a name="module_jwt"></a>

## jwt

* [jwt](#module_jwt)
    * [.signer](#module_jwt.signer)
    * [.verifier](#module_jwt.verifier)
    * [.encode(header, payload, secret)](#module_jwt.encode) ⇒ <code>string</code>
    * [.decode(token, secret)](#module_jwt.decode) ⇒ <code>Object</code> \| <code>null</code>

<a name="module_jwt.signer"></a>

### jwt.signer
Kumpulan fungsi untuk melakukan signing (penandatanganan) menggunakan berbagai algoritma.

**Kind**: static constant of [<code>jwt</code>](#module_jwt)  
<a name="module_jwt.verifier"></a>

### jwt.verifier
Kumpulan fungsi untuk melakukan verifikasi signature menggunakan berbagai algoritma.

**Kind**: static constant of [<code>jwt</code>](#module_jwt)  
<a name="module_jwt.encode"></a>

### jwt.encode(header, payload, secret) ⇒ <code>string</code>
Meng-encode header dan payload menjadi token JWT (JSON Web Token).

**Kind**: static method of [<code>jwt</code>](#module_jwt)  
**Returns**: <code>string</code> - - Token JWT dalam format string.  

| Param | Type | Description |
| --- | --- | --- |
| header | <code>Object</code> | Header JWT yang berisi informasi tentang algoritma dan tipe token. |
| payload | <code>Object</code> | Payload JWT yang berisi klaim atau data yang ingin disimpan dalam token. |
| secret | <code>string</code> | Kunci rahasia atau kunci privat untuk signing. |

<a name="module_jwt.decode"></a>

### jwt.decode(token, secret) ⇒ <code>Object</code> \| <code>null</code>
Meng-decode token JWT dan memverifikasi signature-nya.

**Kind**: static method of [<code>jwt</code>](#module_jwt)  
**Returns**: <code>Object</code> \| <code>null</code> - - Mengembalikan payload jika verifikasi berhasil, null jika gagal.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | Token JWT yang akan di-decode. |
| secret | <code>string</code> | Kunci rahasia atau kunci publik untuk verifikasi. |

