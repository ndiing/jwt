# @ndiinginc/jwt

Library JWT ringan berbasis modul `crypto` bawaan Node.js — tanpa dependency eksternal. Mendukung sign, decode, dan verify token dengan berbagai algoritma HMAC, RSA, ECDSA, dan RSA-PSS.

## Fitur

- Zero dependency, murni pakai `crypto` Node.js
- Mendukung 12 algoritma signing:
    - **HMAC**: `HS256`, `HS384`, `HS512`
    - **RSA**: `RS256`, `RS384`, `RS512`
    - **ECDSA**: `ES256`, `ES384`, `ES512`
    - **RSA-PSS**: `PS256`, `PS384`, `PS512`
- Verifikasi signature pakai `crypto.timingSafeEqual` untuk algoritma HMAC (mencegah timing attack)
- Validasi klaim `exp` (expiration) dan `nbf` (not before) otomatis saat `verify`

## Instalasi

```bash
npm install @ndiinginc/jwt
```

## Penggunaan

### Sign (membuat token)

```js
const { sign } = require("@ndiinginc/jwt");

const token = sign({ alg: "HS256", typ: "JWT" }, { sub: "1234567890", name: "Ndiing", exp: Math.floor(Date.now() / 1000) + 3600 }, "secret-key-kamu");

console.log(token);
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxx.yyyyy
```

### Verify (memverifikasi token)

```js
const { verify } = require("@ndiinginc/jwt");

try {
    const { header, payload, verified } = verify(token, "secret-key-kamu");
    console.log(header, payload, verified);
} catch (err) {
    console.error(err.message);
    // INVALID_SIGNATURE, INVALID_EXP, INVALID_NBF, dll.
}
```

### Decode (tanpa verifikasi)

Berguna kalau cuma butuh baca isi token tanpa memvalidasi signature.

```js
const { decode } = require("@ndiinginc/jwt");

const { header, payload, signature, data } = decode(token);
console.log(payload);
```

## Contoh dengan RSA (RS256)

```js
const { sign, verify } = require("@ndiinginc/jwt");
const crypto = require("crypto");

const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
});

const token = sign({ alg: "RS256", typ: "JWT" }, { sub: "user-1" }, privateKey);
const result = verify(token, publicKey);
```

> Untuk `RS*`, `ES*`, dan `PS*`, parameter `secret` pada `sign` adalah **private key** dan pada `verify` adalah **public key**.

## API Reference

### `sign(header, payload, secret)`

| Parameter | Tipe                            | Keterangan                                                      |
| --------- | ------------------------------- | --------------------------------------------------------------- |
| `header`  | `Object`                        | Wajib punya properti `alg` (salah satu algoritma yang didukung) |
| `payload` | `Object`                        | Klaim/data yang mau disisipkan ke token                         |
| `secret`  | `String \| Buffer \| KeyObject` | Secret key (HMAC) atau private key (RSA/ECDSA/PSS)              |

Return: `String` — token JWT (`header.payload.signature`).

Melempar error: `INVALID_HEADER`, `INVALID_PAYLOAD`, `INVALID_SECRET`, `INVALID_ALGORITHM`.

### `decode(token)`

| Parameter | Tipe     | Keterangan                |
| --------- | -------- | ------------------------- |
| `token`   | `String` | Token JWT yang mau dibaca |

Return: `{ data, header, payload, signature }` — **tidak** memverifikasi signature maupun klaim.

Melempar error: `INVALID_TOKEN`.

### `verify(token, secret)`

| Parameter | Tipe                            | Keterangan                                        |
| --------- | ------------------------------- | ------------------------------------------------- |
| `token`   | `String`                        | Token JWT yang mau diverifikasi                   |
| `secret`  | `String \| Buffer \| KeyObject` | Secret key (HMAC) atau public key (RSA/ECDSA/PSS) |

Return: `{ header, payload, verified }`.

Melempar error: `INVALID_TOKEN`, `INVALID_SECRET`, `INVALID_ALGORITHM`, `INVALID_SIGNATURE`, `INVALID_EXP_CLAIM`, `INVALID_EXP`, `INVALID_NBF_CLAIM`, `INVALID_NBF`.

## Daftar Algoritma yang Didukung

| Algoritma                   | Tipe Key               | Keterangan                       |
| --------------------------- | ---------------------- | -------------------------------- |
| `HS256` / `HS384` / `HS512` | Shared secret (string) | HMAC dengan SHA-256/384/512      |
| `RS256` / `RS384` / `RS512` | RSA key pair           | RSASSA-PKCS1-v1_5                |
| `ES256` / `ES384` / `ES512` | EC key pair            | ECDSA, encoding `ieee-p1363`     |
| `PS256` / `PS384` / `PS512` | RSA key pair           | RSASSA-PSS, salt length = digest |

## Catatan Keamanan

- Selalu tentukan `alg` secara eksplisit di sisi consumer (jangan percaya `alg` dari token orang lain begitu saja) untuk menghindari algorithm confusion attack — pastikan pemanggil `verify` sudah tahu algoritma apa yang diharapkan.
- Verifikasi HMAC pakai `timingSafeEqual`, tapi verifikasi RSA/ECDSA/PSS mengandalkan `crypto.verify` bawaan Node.js.
- Klaim `exp` dan `nbf` divalidasi otomatis kalau ada di payload; kalau tidak ada, tidak divalidasi (token dianggap tidak punya batas waktu).

## Lisensi

MIT
