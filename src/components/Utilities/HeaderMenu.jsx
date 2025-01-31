/**
 * Komponen HeaderMenu berfungsi untuk menampilkan judul dalam format
 * yang telah ditentukan. Komponen ini menerima satu properti yaitu `title`,
 * yang akan dirender sebagai teks judul dengan styling tertentu.
 *
 * @param {{ title: string }} props - Properti yang berisi teks judul
 * yang akan dirender di dalam komponen.
 */

const HeaderMenu = ({  title  }) => {
    return(
        <div>
            <div className="p-8">
                <h3 className="text-center text-2xl font-bold text-orange">{title}</h3>
            </div>
        </div>
    )
}

export default HeaderMenu