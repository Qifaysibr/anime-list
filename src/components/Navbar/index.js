import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-lime-500">
      <div className="flex justify-between p-4 md:flex-row flex-col gap-2 md:items-center">
        <Link className="font-bold text-2xl" href="/">
          AnimeList
        </Link>
          
          <InputSearch/>
        </div>
    </header>
  );
};

export default Navbar;
