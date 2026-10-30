# Website Resmi AKSAVÈRA 26
### Proggram Studi Sistem Informasi — Universitas Hasanuddin

Selamat datang di repository resmi website angkatan **AKSAVÈRA 26** (Sistem Informasi Unhas 2026). Platform ini dibuat sebagai pusat informasi, direktori mahasiswa, album kenangan, serta wadah kolaborasi seluruh anggota angkatan.

---

## 📌 Fitur Utama

- **Directory Mahasiswa**: Daftar dan profil lengkap mahasiswa Sistem Informasi 2026.
- **Galeri & Kenangan**: Dokumentasi kegiatan, momen perkuliahan, dan agenda angkatan.
- **Informasi & Pengumuman**: Pusat berita seputar perkuliahan, tugas besar, dan kegiatan internal.
- **Struktur Organisasi**: Informasi pengurus angkatan dan divisi yang bertugas.

---

## 🛠️ Teknologi yang Digunakan

- **Frontend Framework**: [React.js](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: CSS Modules / Tailwind CSS
- **Linter & Tooling**: [Oxlint](https://oxc.rs/)
- **Icons & Assets**: SVG Favicon & Assets Manager

---

## 📂 Struktur Proyek

```text
SisforProject-26/
├── dist/                  # Build output untuk produksi
│   ├── assets/
│   ├── favicon.svg
│   ├── index.html
│   └── probe.html
├── node_modules/          # Dependency node
├── public/                # Aset publik statis
│   ├── favicon.svg
│   └── probe.html
├── src/                   # Source code utama
│   ├── assets/photos/     # Aset gambar & foto angkatan
│   ├── components/        # Komponen React reusable
│   ├── hooks/             # Custom React Hooks
│   ├── lib/               # Utility / Helper functions
│   ├── App.jsx            # Main Component App
│   ├── index.css          # Global styling
│   └── main.jsx           # Entry point React
├── .gitignore             # Ignore file Git
├── .oxlintrc.json         # Konfigurasi Oxlint
├── cleanup.log            # Log pembersihan proyek
├── index.html             # Template HTML utama
├── package-lock.json      # Dependency lockfile
├── package.json           # Manifest proyek & script
├── README.md              # Dokumentasi proyek
├── up.bat                 # Automation script (Windows)
└── vite.config.js         # Konfigurasi Vite