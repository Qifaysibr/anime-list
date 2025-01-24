import Link from "next/link";
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