# Proyek Laravel dan React dengan PostgreSQL

Proyek ini adalah aplikasi web yang menggunakan Laravel sebagai backend dan React dengan Tailwind CSS sebagai frontend. Aplikasi ini terhubung ke database PostgreSQL.

## Prerequisites

Sebelum memulai, pastikan Anda telah menginstal:

- PHP
- Composer
- Node.js dan npm
- PostgreSQL

## Langkah-langkah Instalasi

1. **Restore Database PostgreSQL**
   - Pastikan Anda telah mengembalikan database PostgreSQL yang diperlukan. Database dapat ditemukan di folder `db`.

2. **Konfigurasi Environment**
   - Buka terminal dan navigasikan ke folder proyek.
   - Salin file `.env.example` menjadi `.env`:
     ```bash
     cp .env.example .env
     ```
   - Edit file `.env` dan masukkan konfigurasi PostgreSQL Anda:
     ```env
     DB_CONNECTION=pgsql
     DB_HOST=127.0.0.1
     DB_PORT=5432
     DB_DATABASE=nama_database
     DB_USERNAME=nama_pengguna
     DB_PASSWORD=kata_sandi
     ```

3. **Instalasi Dependensi Backend**
   - Jalankan perintah berikut untuk menginstal dependensi PHP:
     ```bash
     composer install
     ```


4. **Menjalankan Backend**
   - Jalankan server Laravel:
     ```bash
     php artisan serve
     ```
   - Backend akan berjalan di `http://localhost:8000`.

. **Migrasi Database apabila tidak ingin restore**
   - Jalankan migrasi untuk membuat tabel di database:
     ```bash
     php artisan migrate
     ```

     
## Menjalankan Frontend

1. **Navigasi ke Folder Frontend**
   - Masuk ke folder frontend:
     ```bash
     cd frontend
     ```

2. **Instalasi Dependensi Frontend**
   - Jalankan perintah berikut untuk menginstal dependensi Node.js:
     ```bash
     npm install
     ```

3. **Menjalankan Frontend**
   - Jalankan perintah berikut untuk memulai server pengembangan React:
     ```bash
     npm run dev
     ```
   - Frontend akan berjalan di `http://localhost:5174`.


Untuk melihat hasil tampilannya : 
`http://localhost:5174`

## Teknologi yang Digunakan

- **Backend**: Laravel
- **Frontend**: React, Tailwind CSS
- **Database**: PostgreSQL

