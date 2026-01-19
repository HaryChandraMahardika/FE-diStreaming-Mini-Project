# diStreaming 🎬

Platform streaming film modern dan responsif yang dibangun dengan teknologi web terbaru. Aplikasi ini memberikan pengalaman pengguna yang mulus untuk menjelajahi koleksi film, mencari film berdasarkan genre favorit, dan menambahkan film kedalam daftar watchlist.

---

## 🔗 Link Demo

| Aplikasi               | URL                                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------------------ |
| **Frontend (Website)** | [https://fe-distreaming-harychandra.vercel.app/](https://fe-distreaming-harychandra.vercel.app/)                     |
| **Backend (API)**      | [http://203.194.115.210:8008/api/movies](http://203.194.115.210:8008/api/movies) |
| **Backend (API)**      | [http://203.194.115.210:8008/api/categories](http://203.194.115.210:8008/api/categories) |

---

## 🔑 Akun Demo

Gunakan akun berikut untuk login akun dan mencoba menjadi user, login dapat mengggunakan email atau username dan password:

| Email           | Username     | Password     |
| ----------------| ------------ |------------- |
| `andi@mail.com` | `andiz`      | `password123`|

> [!TIP]
> Anda juga bisa mendaftar akun baru melalui halaman **Register** untuk mencoba fitur autentikasi.

---

## ✨ Fitur & Dokumentasi API

### 1. 👤 Autentikasi (Authentication)

Sistem login dan registrasi yang aman untuk mengakses fitur admin.

#### 📝 Register (Daftar Akun Baru)

**Endpoint:** `POST /api/v1/register`

**Request Body:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `fullname` | string | ✅ | Nama lengkap pengguna |
| `username` | string | ✅ | username pengguna (harus unik) |
| `email` | string | ✅ | Email (harus unik) |
| `password` | string | ✅ | Password (min. 8 karakter) |
| `password_confirmation` | string | ✅ | Konfirmasi password |

**Contoh Input:**

```json
{
  "fullname": "John Doe",
  "username": "johndoe",
  "email": "john@mail.com",
  "password": "password123",
  "password_confirmation": "password123"
}
```

#### 🔐 Login

**Endpoint:** `POST /api/v1/login`

**Request Body:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string | ✅ | Email terdaftar |
| `username` | string | ✅ | username terdaftar |
| `password` | string | ✅ | Password akun |

> [!Note]
> Dapat memilih antara menggunakan email atau username untuk loginnya 

**Contoh Input:**

```json
{
  "email": "budisu@mail.com",
  "password": "password123"
}
```

```json
{
  "username": "budisu",
  "password": "password123"
}
```


### 2. 🎬 List (Movies)

#### 📋 Daftar Film dengan Search, Filter & Pagination

**Endpoint:** `GET /api/movies`

**Contoh URL Lengkap (dengan semua parameter):**

```
https://fe-distreaming-harychandra.vercel.app/movies?category_id=3&sort_by=rating&order=asc
```

**Query Parameters:**
| Parameter | Type | Default | Description | Contoh |
|-----------|------|---------|-------------|--------|
| `search` | string | - | Cari berdasarkan judul film | `the` → Menampilkan film dengan judul mengandung "the" |
| `genre` | integer | - | Filter berdasarkan ID genre | `1` → Hanya genre Action |
| `sort_by` | string | `id` | Kolom untuk sorting | `title`, `rating`, `release_year` |
| `order_by` | string | `desc` | Urutan sorting | `asc` (A-Z), `desc` (Z-A) |
| `page` | integer | `1` | Halaman pagination | `2` → Halaman kedua |


> [!NOTE]
> **Contoh Penggunaan:**
>
> - Cari film "Avatar": `movies?search=avatar`
> - Film Action saja: `movies?category_id=1`
> - Urutkan berdasarkan rating terendah: `movies?sort_by=rating&order=asc`
> - Urutkan berdasarkan judul dari Z-A : `?sort_by=rating&sort_order=desc`

---

#### 📖 Detail Film Berdasarkan id

**Endpoint:** `GET /api/movies/{id}`

**Contoh:** `GET /api/movies/1`


#### 📋 Daftar Genre/Categories

**Endpoint:** `GET /api/categories`

**Response:**

```json
{
  "status": "success",
  "data": [
    { "id": 1, "name": "Action" },
    { "id": 2, "name": "Drama" },
    { "id": 3, "name": "Horror" }
  ]
}
```


## 🛠️ Teknologi yang Digunakan

| Layer                  | Teknologi                                   | Deskripsi                                              |
| ---------------------- | ------------------------------------------- | ------------------------------------------------------ |
| **Frontend Framework** | [React 19](https://react.dev/)              | Library UI terbaru untuk antarmuka interaktif          |
| **Build Tool**         | [Vite](https://vitejs.dev/)                 | Tooling frontend yang super cepat                      |
| **Styling**            | [Tailwind CSS v4](https://tailwindcss.com/) | Framework CSS utility-first                            |
| **Routing**            | [React Router v7](https://reactrouter.com/) | Navigasi aplikasi dinamis                              |
| **State Management**   | React Context API                           | Pengelolaan status autentikasi global                  |
| **HTTP Client**        | [Axios](https://axios-http.com/)            | Komunikasi data dengan API Backend                     |
| **Backend**            | Laravel (PHP)                               | Framework PHP untuk REST API                           |
| **Database**           | VPS Rumahweb.com dan phpMyAdmin             | Database cloud dengan MySQL dan deploy server Backend  |
| **Frontend**           | Vercel                                      | Platform deployment modern                             |

---

## 📂 Struktur Proyek

```
Frontend-Distreaming
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ vercel.json
├─ netlify.toml
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ component
│  │  ├─ Banner.jsx
│  │  ├─ DownloadBanner.jsx
│  │  ├─ FeatureSection.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Hero.jsx
│  │  ├─ JustRelease.jsx
│  │  ├─ MovieCard.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ PopularWeek.jsx
│  │  ├─ SearchBar.jsx
│  ├─ hooks
│  │  ├─ useAuth.jsx
│  │  ├─ useCategory.jsx
│  │  ├─ useHomeUser.jsx
│  │  ├─ useLogin.jsx
│  │  ├─ useMovieDetail.jsx
│  │  ├─ useMovieList.jsx
│  │  ├─ useMovies.jsx
│  │  ├─ useProfile.jsx
│  │  ├─ useRegister.jsx
│  ├─ pages
│  │  ├─ Category.jsx
│  │  ├─ Home.jsx
│  │  ├─ HomeGues.jsx
│  │  ├─ HomeUser.jsx
│  │  ├─ Login.jsx
│  │  ├─ MovieDetail.jsx
│  │  ├─ MovieList.jsx
│  │  ├─ Profile.jsx
│  │  ├─ Register.jsx
│  ├─ route
│     ├─ ProtectedRoute.jsx
|
└─ vite.config.js

```

---

## 🚀 Cara Menjalankan Lokal

1. **Clone repository:**

   ```bash
   git clone https://github.com/HaryChandraMahardika/FE-diStreaming-Mini-Project.git
   cd distreaming
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Setup environment:**

   ```bash
   cp .env.example .env
   ```

   Edit file `.env` dan isi dengan:

   ```
   VITE_API_BASE_URL=URL_YANG_DIGUNAKAN
   ```

4. **Jalankan development server:**

   ```bash
   npm run dev
   ```

5. **Buka browser:** Sesuai URL localhost dari project yang dijalankan.

---

## 📝 Catatan untuk Penguji

> [!IMPORTANT]
>
> - Gunakan akun demo atau daftar akun baru untuk mengakses fitur user.
> - Pastikan koneksi internet stabil karena aplikasi menggunakan API dari Vercel.

---

## 👨‍💻 Pengembang

Dikembangkan oleh **Hary Chandra Mahardika** .

© 2026 diStreaming. All rights reserved.