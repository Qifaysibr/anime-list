====+> Anime list Project <+====

Sesi 1
------

1. web ini menampilkan list anime yang mana datanya diambil(fetch) dengan api 'jikan'(open source api untuk list anime) https://docs.api.jikan.moe/
            const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
            );

            const anime = await response.json();

2. Jika menggunakan image dari CDN atau source luar maka harus menambahkan domain nya ke next.config.mjs
            images: {
                domains: ['cdn.myanimelist.net'],
                },

3. Dalam nextjs kita bebas menentukan structure  folder, best practice nya component dipisah dari app folder. Folder app digunakan untuk routing sedangkan component untuk sumber component yang akan diimport. Dalam nextjs routing ditentukan oleh struktur folder. Di dalam folder yang dijadikan routing harus ada file bernama page.js
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
