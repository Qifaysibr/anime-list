====+> Anime list Project <+====

#Sesi 1
------

1. web ini menampilkan list anime yang mana datanya diambil(fetch) dengan api 'jikan'(open source api untuk list anime) https://docs.api.jikan.moe/
            ```
            const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
            );

            const anime = await response.json();
            ```

2. Jika menggunakan image dari CDN atau source luar maka harus menambahkan domain nya ke next.config.mjs
            images: {
                domains: ['cdn.myanimelist.net'],
                },

3. Dalam nextjs kita bebas menentukan structure  folder, best practice nya component dipisah dari app folder. Folder app digunakan untuk routing sedangkan component untuk sumber component yang akan diimport. Dalam nextjs routing ditentukan oleh struktur folder. Di dalam folder yang dijadikan routing harus ada file bernama page.js
           ```
            src
            ├── app
            │   ├── favicon.ico
            │   ├── globals.css
            │   ├── layout.js
            │   ├── page.js                     /
            │   ├── populer                     /populer
            │   │   └── page.js
            │   └── search                      /search
            │       └── page.js
            └── components
                ├── AnimeList
                │   └── index.js
                ├── Navbar
                │   └── index.js
                └── Utilities
            ```

4. Gunakan ```"<Link><Link/>"``` alih-alih ```"<a><a/>"``` agar ketika mengunjungi link tersebut page tidak di reload secara keseluruhan 
            ```import Link from "next/link";```


#Sesi 2
------
1. Melakukan reusability component dengan 
	a.memindahkan mapping data ke AnimeList sehingga mempermudah pengiriman data API
	b.membuat component Header 
	c.membuat component InputSearch
2. Membuat fungsi pencarian anime menggunakan 
	a.hook useRef untuk membuat referensi ke elemen input, 
	b.hook useRouter untuk mengakses objek router dari Next.js.
	
3. Membuat folder [keyword] berisi page.js yang menampilkan halaman pencarian.
	-> penamaan folder dengan [] berfungsi untuk membuat segment yang dynamic
	
4. Menambahkan attribute onKeyDown pada input search untuk melakukan pencarian ketika key Enter ditekan.

####  alur pencarian

1. **Event Handling**: Saat user menekan tombol "Enter" di input pencarian, event `onKeyDown` dipicu dan memanggil fungsi `handleSearch` yang telah diatur sebagai handler untuk event tersebut.
2. **DOM Manipulasi**: Fungsi `handleSearch` mengakses nilai dari input pencarian menggunakan `searchRef.current.value`, yang merupakan referensi ke elemen input yang telah diatur menggunakan hook `useRef`.
3. **Parameter Ekstraksi**: Fungsi `handleSearch` mengekstrak nilai dari input pencarian dan mengatur parameter kata kunci yang akan digunakan dalam URL.
4. **Router Navigasi**: Fungsi `handleSearch` memanggil metode `push` dari objek router, yang merupakan instance dari Next.js Router, untuk mengarahkan ke halaman pencarian dengan parameter kata kunci.
5. **URL Pembentukan**: Parameter kata kunci diatur sebagai path parameter dalam URL, contohnya `/search/naruto`, menggunakan sintaks template string.
6. **Router Pengalihan**: Router mengarahkan ke halaman pencarian dengan URL yang telah diatur menggunakan metode `push`.
7. **Halaman Rendering**: Halaman pencarian di-render oleh Next.js menggunakan metode `getServerSideProps` atau `getStaticProps`, tergantung pada konfigurasi yang telah diatur.
8. **Data Fetching**: Halaman pencarian melakukan fetching data dari API atau sumber data lainnya menggunakan parameter kata kunci yang telah diatur.
9. **Hasil Pencarian Rendering**: Hasil pencarian di-render di halaman pencarian menggunakan data yang telah di-fetch.

Sesi 3
------
1. Menambahkan color pallete ke theme tailwind
	`tailwind.config.mjs` =>     theme - extend - colors    
2. Membuat halaman loading
	di nextjs membuat halaman loading cukup dengan membuat file loading.js di folder app
3. Membuat halaman not found
	di nextjs membuat halaman loading cukup dengan membuat file not-found.js di folder app
4. Mencegah melakukan pencarian ketika field input kosong
	`if (!keyword) return;`
	


Sesi 4
------
1. Membuat pagination
    - menggunakan `'use client'` agar bisa menggunakan client components(useState, useEffect, onClick dll)
	- menambahkan attribute disabled pada button agar page tidak kurang dari 1 dan tidak lebih dari halaman paling akhir
	
2. Decode keyword
	- `const decodedKeyword = decodeURI(keyword);` merubah "bahasa" yang dipahami url menjadi human readable contohnya kayak %20 menjadi space
	
3. Gunakan .jsx jika berupa komponennya yang dirender di browser selain itu pake .js

Sesi 5
------
1. Meningkatkan reusabilitas API call
	memindahkan pemanggilan API ke folder lib, sehingga mempermudah pemanggilan
2. Menambahkan halaman detail anime
	- Peringkat
	- Score
	- Episode
	- Studio
	- Genre
3. Menampilkan trailer youtube menggunakan library `react/youtube`
	- menampilkan trailer youtube bagi api yang memiliki url trailer youtube
	- menampilkan text `trailer tidak tersedia untuk anime ini` bagi api yang tidak memiliki url trailer youtube


#### Sesi 6 & 7
------
1. Membuat fitur rekomendasi anime
	1. Pertama, fungsi `getNestedAnimeResponse` digunakan untuk mengambil data anime rekomendasi dari API. Fungsi ini menerima dua parameter: endpoint yang berisi endpoint API(`resource `) untuk mengambil data anime rekomendasi, dan key(`objectProperty`) yang menentukan kunci untuk mengakses data anime rekomendasi dalam respons API.
	1. Kemudian, hasil dari `getNestedAnimeResponse` disimpan dalam variabel recommendedAnime.
	1. Selanjutnya, fungsi `reproduce` dipanggil untuk memproses data anime rekomendasi. Fungsi ini menerima dua parameter: `data` yang berisi data anime rekomendasi, dan `gap` yang menentukan jumlah anime yang akan direkomendasikan. Fungsi ini kemudian menghasilkan daftar anime yang direkomendasikan.
	1. Setelah itu, hasil dari reproduce disimpan kembali dalam variabel recommendedAnime.
	1. Terakhir, dalam render komponen, recommendedAnime digunakan sebagai data untuk menampilkan daftar anime rekomendasi menggunakan komponen AnimeList.






`map`: Method map mengembalikan array baru dengan hasil operasi yang dilakukan pada setiap elemen. Jika operasi tersebut mengembalikan array, maka hasilnya akan menjadi array of array (array 2 dimensi). 

`flatMap`: Method flatMap juga mengembalikan array baru dengan hasil operasi yang dilakukan pada setiap elemen. Namun, jika operasi tersebut mengembalikan array, maka hasilnya akan menjadi array yang "datar" (array 1 dimensi / tidak ada array of array).


#### Sesi 8 - Autentikasi

**Proses autentikasi :**

1. **Konfigurasi Autentikasi**: Next-Auth diatur dengan Github Provider pada file `auth.js`.
2. **Autentikasi dengan Github**: Pengguna diarahkan ke halaman autentikasi Github dan memasukkan kredensial.
3. **Pengiriman Token**: Github mengirimkan token akses ke aplikasi.
4. **Autentikasi dengan Next-Auth**: Fungsi `getServerSession` digunakan untuk autentikasi dengan Next-Auth pada file `src/libs/auth-libs.js`.
5. **Penggunaan Sesi Pengguna**: Sesi pengguna disimpan pada server dan digunakan untuk mengakses data pengguna.

Teknologi yang digunakan:

* Next-Auth
* Github Provider
* getServerSession

File yang terkait:

* `auth.js`
* `src/libs/auth-libs.js`
* `src/app/users/dashboard/page.jsx`



#### Sesi 9
1. Membuat component My collection dan mengguanakan fungsi router.back() untuk kembali ke halaman sebelumnya. 

> Fungsi router.back() adalah sebuah metode yang digunakan dalam perpustakaan routing Next.js (atau mungkin React Router) untuk mengarahkan pengguna ke halaman sebelumnya dalam riwayat navigasi.
Secara teknis, ketika router.back() dipanggil, perpustakaan routing akan melakukan hal-hal berikut:
1. Membaca riwayat navigasi yang disimpan dalam browser (biasanya dalam bentuk array atau stack).
2. Mengambil URL halaman sebelumnya dari riwayat navigasi.
3. Mengarahkan pengguna ke URL tersebut menggunakan metode `pushState` atau `replaceState` dari API History browser.
4. Dengan demikian, pengguna akan kembali ke halaman sebelumnya tanpa memuat ulang seluruh aplikasi. Fungsi ini sangat berguna untuk membuat tombol "Kembali" yang fungsional dalam aplikasi web.


### Sesi 10 - Database
**Langkah 1: Menginstal Prisma**

* Jalankan perintah `npm install @prisma/client` di terminal untuk menginstal Prisma.
* Pastikan Prisma terinstal dengan benar sebelum melanjutkan ke langkah berikutnya.

**Langkah 2: Membuat File Konfigurasi Prisma**

* File konfigurasi Prisma ini akan digunakan untuk mendefinisikan model data dan mengatur koneksi database.

**Langkah 3: Mendefinisikan Model Data**

* Di dalam file konfigurasi Prisma, definisikan model data yang akan digunakan oleh aplikasi.
* Model data adalah struktur data yang terdiri dari atribut dan relasi.

**Langkah 4: Mengatur Koneksi Database**

* Di dalam file konfigurasi Prisma, atur koneksi database dengan menambahkan konfigurasi koneksi database.
* Pastikan koneksi database diatur dengan benar sebelum melanjutkan ke langkah berikutnya.

**Langkah 5: Menggunakan Prisma Client**

* Setelah koneksi database diatur, gunakan Prisma Client untuk menghubungkan aplikasi dengan database.
* Prisma Client adalah library yang digunakan untuk mengakses database melalui Prisma.

**Langkah 6: Menggunakan Prisma di Aplikasi**

* Terakhir, gunakan Prisma di aplikasi untuk mengakses data dari database.
* Gunakan metode yang disediakan oleh Prisma Client, seperti `findMany`, `findFirst`, `create`, `update`, dan `delete`.

**prisma.js**
 kode yang digunakan untuk mengatur koneksi database di `src/libs/prisma.js`:
```javascript
import { PrismaClient } from "@prisma/client";

let prisma;

if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}

export default prisma;
```
### Sesi 11 - Comment

1. Membuat fitur komentar
   - Pada halaman detail anime, komentar dapat terlihat oleh siapa saja walaupun user tidak login
   >>Proses pengambilan comment dari database menggunakan Prisma Client dengan menggunakan metode `findMany` dan mengirimkan query berupa `WHERE` dengan kondisi `animeId` sama dengan `id` anime yang sedang dibuka.
   - User yang telah login dapat menambahkan komentar pada halaman detail anime
   - Pada halaman ./dashboard/comment, user dapat melihat semua komentar yang telah ditambahkan oleh user tersebut
   >>Proses pengambilan comment dari database menggunakan Prisma Client dengan menggunakan metode `findMany` dan mengirimkan query berupa `WHERE` dengan kondisi `userId` sama dengan `id` user yang sedang login.
   