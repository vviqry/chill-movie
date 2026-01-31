# CHILL - Platform Streaming Film & Series

Proyek web aplikasi platform streaming film dan series yang dibangun menggunakan React + Vite.

## 🎬 Tentang Proyek

CHILL adalah platform streaming yang menampilkan koleksi film dan series dengan tampilan modern dan responsif. Fitur utama meliputi:

- **Halaman Utama** - Hero banner, slider film melanjutkan nonton, top rating, trending, dan rilis baru
- **Halaman Login** - Form login dengan validasi
- **Halaman Register** - Form pendaftaran akun baru
- **Navigasi** - Header dengan menu navigasi dan dropdown profil
- **Footer** - Informasi genre dan bantuan

## 🚀 Cara Menjalankan

### Development
```bash
npm install
npm run dev
```
Buka http://localhost:5173 di browser.

### Production Build
```bash
npm run build
```
Hasil build ada di folder `dist/`.

## 📁 Struktur Folder

```
src/
├── components/
│   ├── common/      # Komponen umum (Button, Input, Logo, MovieCard)
│   ├── layout/      # Layout (Header, Footer)
│   └── sections/    # Section (Hero, MovieSlider)
├── pages/           # Halaman (Home, Login, Register)
├── assets/          # Asset gambar
├── App.jsx          # Komponen utama
├── main.jsx         # Entry point
└── index.css        # Style global
```

## 🛠️ Teknologi

- **React** - Library UI
- **Vite** - Build tool
- **React Router** - Navigasi halaman
- **CSS** - Styling dengan CSS variables

## 🌐 Demo

Deploy di Netlify: [chill-movie-project.netlify.app](https://chill-movie-project.netlify.app)

## 📝 Catatan

Proyek ini dibuat untuk Mission 5

---

© 2023 CHILL. All Rights Reserved.
