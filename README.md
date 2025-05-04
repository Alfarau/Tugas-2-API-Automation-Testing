Tugas-2-API-Automation
=======================

Tugas Bootcamp AfterOffice
Nama: Alfarau Al Ababil
Email: alfarau.id@gmail.com

------------------------------------
Deskripsi Proyek
------------------------------------
Proyek ini adalah bagian dari tugas bootcamp yang berfokus pada API automation testing menggunakan framework Mocha dan library Chai. 
Script ini digunakan untuk menguji fitur Create Booking dari sebuah RESTful API.

------------------------------------
Tools & Library yang Digunakan
------------------------------------
- Node.js
- Mocha
- Chai
- Supertest (untuk HTTP assertions)
- Mochawesome (untuk membuat laporan hasil test)

------------------------------------
Struktur Folder
------------------------------------
API/
├── script/
│   └── api-bookings.js   (script test utama)
├── reports/              (opsional, lokasi report mochawesome)

------------------------------------
Cara Menjalankan Test
------------------------------------
Pastikan sudah menjalankan:
npm install

Untuk menjalankan test:
npx mocha .\API\script\api-bookings.js

Untuk menjalankan test sekaligus membuat report:
npx mocha .\API\script\api-bookings.js --reporter mochawesome

Laporan akan tersimpan di folder 'mochawesome-report' dalam format HTML dan JSON.

------------------------------------
Fitur yang Diuji
------------------------------------
Create Booking:
- Mengirim request POST /booking
- Memverifikasi status code 200 OK
- Memastikan response sesuai dengan data input
- Menyimpan booking ID dari response

------------------------------------
Catatan
------------------------------------
- Gunakan environment API yang sesuai saat test.
- Pastikan nilai dalam BOOKING_DATA sesuai kebutuhan.

------------------------------------
Terima kasih!
