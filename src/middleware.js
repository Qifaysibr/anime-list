export{ default } from 'next-auth/middleware'


// sebuah objek config dengan sebuah properti matcher yang memiliki nilai [/users/:path*].

// Properti matcher

// matcher: Ini adalah sebuah properti yang digunakan untuk menentukan pola URL yang akan di-middleware-kan oleh Next.js.
// [/users/:path*]: Ini adalah sebuah array yang berisi pola URL yang akan di-middleware-kan. Dalam hal ini, kita memiliki satu pola URL yang berupa /users/:path*.
// Pola URL /users/:path* berarti bahwa Next.js akan melakukan middleware pada semua URL yang dimulai dengan /users/ dan diikuti oleh satu atau lebih path parameter (ditandai dengan :path*).
export const config = {
    matcher: ['/users/:path*']
}