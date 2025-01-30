import { getServerSession } from "next-auth";
import { authOptions } from "../../auth";

/**
 * Fungsi ini digunakan untuk mengautentikasi sesi pengguna.
 * 
 * Fungsi ini memanggil `getServerSession` dengan opsi autentikasi yang telah dikonfigurasi
 * untuk mendapatkan sesi pengguna yang sedang aktif. Jika sesi ditemukan, 
 * fungsi ini akan mengembalikan objek pengguna dari sesi tersebut. 
 * Jika tidak ada sesi yang ditemukan, fungsi ini akan mengembalikan `undefined`.
 * 
 * @returns {Object|undefined} Objek pengguna dari sesi aktif atau `undefined` jika tidak ada sesi.
 */

export async function authUserSession() {
    const session = await getServerSession(authOptions);
    return session?.user;
}