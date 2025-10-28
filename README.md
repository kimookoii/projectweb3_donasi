# 💸 Web3 Donation App

Aplikasi donasi berbasis blockchain menggunakan **React** dan **Web3.js**, yang memungkinkan pengguna untuk mengirim donasi Ethereum (ETH) ke smart contract di jaringan blockchain.

---

## 🚀 Fitur Utama
- 🔗 **Integrasi MetaMask** untuk autentikasi dan transaksi.
- 💰 **Donasi langsung dengan ETH** ke smart contract.
- 📊 **Total donasi** ditampilkan secara real-time dari blockchain.
- 🧭 **Antarmuka sederhana** dan mudah digunakan.

---

## 🏗️ Teknologi yang Digunakan
- **React.js** — Framework frontend utama.
- **Web3.js** — Library untuk koneksi dan interaksi dengan blockchain.
- **MetaMask** — Wallet Ethereum untuk pengguna.
- **Smart Contract (Solidity)** — Backend berbasis blockchain (alamat kontrak disesuaikan).

---

## ⚙️ Instalasi & Penggunaan

### 1️⃣ Clone Repositori
```bash
git clone https://github.com/kimookoii/projectweb3_donasi.git
cd projectweb3_donasi
````

### 2️⃣ Instal Dependensi

```bash
npm install
```

### 3️⃣ Jalankan Aplikasi

```bash
npm start
```

Aplikasi akan berjalan di:

```
http://localhost:3000
```

---

## 🔧 Konfigurasi Kontrak Pintar

Edit alamat kontrak di dalam file `App.jsx`:

```javascript
const CONTRACT_ADDRESS = "0x974e97745728b0E011eA16E2C6DABeD8C9183D12";
```

Pastikan file `Donation.json` berisi **ABI kontrak pintar** yang sesuai dengan smart contract yang telah kamu deploy.

---

## 🪙 Cara Menggunakan

1. Pastikan **MetaMask** sudah terinstal dan aktif di browser.
2. Hubungkan wallet saat aplikasi dimuat.
3. Masukkan jumlah ETH yang ingin didonasikan.
4. Klik **Kirim Donasi**.
5. Total donasi akan otomatis diperbarui setelah transaksi berhasil.

---

## 🧠 Penjelasan Singkat

Aplikasi ini memanfaatkan Web3.js untuk berinteraksi dengan kontrak pintar Ethereum.

* Fungsi `donate()` dipanggil untuk mengirim ETH ke kontrak.
* Fungsi `totalDonations()` membaca total donasi yang tersimpan di blockchain.
* UI React menampilkan alamat wallet, total donasi, dan form input donasi secara real-time.

---

## ⚠️ Catatan Penting

* Pastikan jaringan di **MetaMask** sesuai dengan jaringan tempat kontrak dideploy.
* Jika MetaMask tidak terdeteksi, aplikasi akan menampilkan peringatan untuk menginstalnya.
* Donasi bersifat permanen (tidak dapat dikembalikan).

---

## 📄 Lisensi

Proyek ini dirilis di bawah **MIT License** — silakan digunakan, dimodifikasi, dan dikembangkan lebih lanjut.

---

## ✨ Kontributor

Dikembangkan oleh RKS3
💬 Dukung pengembangan proyek Web3 open-source!
