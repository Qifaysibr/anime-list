import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./libs/api-libs";
/**
 * Fungsi HomePage
 * 
 * Fungsi ini digunakan untuk merender halaman utama aplikasi.
 * Fungsi ini melakukan fetch data anime dari API dan merender daftar anime
 * dengan detailnya.
 * 
 * @returns {JSX.Element} Halaman utama aplikasi dengan daftar anime
 */

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  return (
    <>
      {/* anime populer */}
      <section>
      <Header title="Paling populer" linkHref="/populer" linkTitle="lihat semua" />
      <AnimeList api={topAnime} />
      </section>
      
    </>
  );
};

export default Page;
