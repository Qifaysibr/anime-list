import Link from "next/link";
/**
 * Komponen Header berfungsi sebagai judul dan link navigasi yang umum digunakan di
 * dalam aplikasi. Komponen ini menerima tiga buah props: `title`, `linkHref`, dan
 * `linkTitle`. `title` digunakan sebagai teks judul. `linkHref` dan `linkTitle`
 * digunakan untuk membuat link navigasi. Jika `linkHref` dan `linkTitle` tidak
 * diisi, maka link tidak akan di render.
 */
const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between p-4 items-center">
      <h1 className="text-2xl font-bold text-slate-300">{title}</h1>
      {linkHref && linkTitle
      ?
      <Link
        href={linkHref}
        className="md:text-xl text-sm underline hover:text-indigo-500 text-slate-300 transition-all px-4"
      >
        {linkTitle}
      </Link>
      : 
      null}
    </div>
  );
};

export default Header;