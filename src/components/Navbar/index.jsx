import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Komponen Navbar berfungsi sebagai navigasi utama aplikasi.
 * 
 * Komponen ini menampilkan logo aplikasi yang mengarahkan ke halaman utama,
 * menyediakan input pencarian anime, dan menampilkan tombol aksi pengguna
 * yang memungkinkan pengguna untuk masuk, keluar, atau mengakses dashboard.
 * 
 * @returns {JSX.Element} Elemen JSX yang mewakili navigasi aplikasi.
 */

/******  06a2fe60-85f2-4d64-9404-ee748cde68ee  *******/
const Navbar = () => {
  return (
    <header className="bg-green-800">
      <div className="flex justify-between p-4 md:flex-row flex-col gap-2 md:items-center">
        <Link className="font-bold text-4xl text-white" href="/">
          SIA<small className="font-extralight">nimeList</small>
        </Link>
          
          <InputSearch/>
          <UserActionButton/>
        </div>
    </header>
  );
};

export default Navbar;
