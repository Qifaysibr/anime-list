'use client'
import { useRouter } from 'next/navigation';

/**
 * Komponen Page untuk menampilkan halaman 404 yang responsif dan interaktif.
 * 
 * Halaman ini menampilkan pesan kesalahan "Page Not Found" dengan nomor 404 yang besar dan mencolok,
 * serta tombol yang memungkinkan pengguna untuk kembali ke halaman utama.
 * 
 * Elemen-elemen dalam halaman ini diatur menggunakan Flexbox untuk memastikan pusat konten,
 * dan menggunakan kombinasi kelas Tailwind CSS untuk styling yang responsif dan menarik.
 * 
 * @returns {JSX.Element} Elemen JSX yang mewakili halaman 404.
 */

const Page = () => {
  const router = useRouter();

  const handleGoBack = (e) => {
    e.preventDefault()
    router.back();
  }
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-dongker">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      {/* <Link href="/" className="mt-5"> */}
        <button onClick={handleGoBack} className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0" />
          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            Pulang
          </span>
        </button>
      {/* </Link> */}
    </main>
  );
};

export default Page;
