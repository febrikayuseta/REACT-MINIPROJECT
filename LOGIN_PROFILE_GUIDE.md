# Login & Profile System - Panduan Penggunaan

## 🎯 Fitur yang Telah Ditambahkan

### 1. **Authentication Context** (`src/context/AuthContext.tsx`)
- Menyediakan state management untuk autentikasi
- Fitur login dan signup menggunakan ReqRes API
- Penyimpanan token di localStorage
- Custom hook `useAuth()` untuk akses data user

### 2. **Login Page** (`/login`)
- Form login dan signup
- Integrasi dengan ReqRes API
- Demo account yang siap digunakan:
  - Email: `eve.holt@reqres.in`
  - Password: `cityslicka`

### 3. **Profile Page** (`/profile`)
- Menampilkan informasi profil user
- Avatar, nama, email, dan ID user
- Tombol logout
- Protected route (redirect ke login jika belum login)

### 4. **Header Update**
- Menampilkan avatar user ketika login
- Tombol Login ketika belum login
- Navigasi ke profile saat mengklik avatar

## 🚀 Cara Menggunakan

### Login
1. Kunjungi `http://localhost:3000/login`
2. Gunakan demo account:
   - Email: `eve.holt@reqres.in`
   - Password: `cityslicka`
3. Atau create account baru dengan email yang valid

### Melihat Profile
1. Setelah login, klik avatar di header
2. Atau kunjungi `http://localhost:3000/profile` langsung

### Logout
1. Di halaman profile, klik tombol "Logout"

## 📁 Struktur File Baru

```
src/
├── context/
│   └── AuthContext.tsx          # Auth state management
├── pages/
│   ├── LoginPage.tsx            # Login & Signup form
│   └── ProfilePage.tsx          # User profile page
└── app/
    ├── login/
    │   └── page.tsx             # Route /login
    └── profile/
        └── page.tsx             # Route /profile
```

## 🔗 API yang Digunakan

### ReqRes API (https://reqres.in/)
- `POST /api/login` - Login user
- `POST /api/register` - Signup user
- `GET /api/users?page=1` - Fetch user data

## 🛡️ Security Features

- Token disimpan di localStorage
- Protected routes (redirect jika belum login)
- Client-side state management
- Logout menghapus semua data user

## 📝 Catatan

- Data user diambil dari ReqRes API
- Untuk production, pastikan menggunakan API server sendiri
- HTTPS harus digunakan untuk production
- Implement proper error handling untuk production

## 🎨 Styling

- Menggunakan Tailwind CSS
- Responsive design
- Modern UI dengan gradient dan shadow

Enjoy! 🎉
