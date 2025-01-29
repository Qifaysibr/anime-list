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
