import Image from "next/image";
import AnimeList from "../components/AnimeList";
import Link from "next/link";

/**
 * Fungsi Home
 * 
 * Fungsi ini digunakan untuk merender halaman utama aplikasi.
 * Fungsi ini melakukan fetch data anime dari API dan merender daftar anime
 * dengan detailnya.
 * 
 * @returns {JSX.Element} Halaman utama aplikasi dengan daftar anime
 */

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );

  const anime = await response.json();
  // console.log(anime);
  return (
    <div>
      <div className="flex justify-between p-4 items-center">
        <h1 className="text-2xl font-bold">Paling Populer Di Indonesia</h1>
        <Link
          href="/populer"
          className="text-md underline hover:text-indigo-500 transition-all px-4"
        >
          Lihat Semua
        </Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 bg-slate-200 px-4">
        {anime.data.map((data) => {
                  const genres = data.genres.slice(0, 3).map(genre => genre.name).join(", ");
                  return (
                    <div key={data.mal_id} className="shadow-xl ">
                      <AnimeList
                        genres={genres}
                        title={data.title}
                        images={data.images.webp.image_url}
                        id={data.mal_id}
                      />
                    </div>
                  );
                })}
      </div>
    </div>
  );
};

export default Home;
