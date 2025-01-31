/**
 * Komponen Pagination digunakan untuk mengelola navigasi halaman dalam tampilan daftar.
 * 
 * Komponen ini menerima tiga properti:
 * - `page`: Nomor halaman saat ini.
 * - `lastPage`: Nomor halaman terakhir yang tersedia.
 * - `setPage`: Fungsi untuk memperbarui nomor halaman saat ini.
 * 
 * Komponen ini menyediakan dua tombol untuk berpindah halaman, yaitu "Prev" dan "Next".
 * Tombol "Prev" akan dinonaktifkan jika halaman saat ini adalah halaman pertama, sedangkan
 * tombol "Next" akan dinonaktifkan jika halaman saat ini adalah halaman terakhir.
 * 
 * Setiap kali pengguna mengklik salah satu tombol navigasi, halaman akan berganti dan
 * tampilan akan bergulir ke atas secara halus (smooth scroll) untuk kenyamanan pengguna.
 * 
 * @param {number} page - Nomor halaman saat ini.
 * @param {number} lastPage - Nomor halaman terakhir.
 * @param {function} setPage - Fungsi untuk mengubah nomor halaman.
 * @returns {JSX.Element} Elemen JSX yang menampilkan kontrol paginasi.
 */

const Pagination = ({page, lastPage, setPage}) => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    const handleNextPage = () => { 
        setPage((prevState) => prevState + 1)
        scrollToTop()
     }
    const handlePrevPage = () => { 
        setPage((prevState) => prevState - 1)
        scrollToTop()
     }
    return(
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-orange text-2xl">
            <button onClick={handlePrevPage} disabled={page === 1} className="transition-all hover:text-amber-200">Prev</button>
            <p>{page} / {lastPage}</p>
            <button onClick={handleNextPage} disabled={page === lastPage} className="transition-all hover:text-amber-200">Next</button>
        </div>
    )
}

export default Pagination