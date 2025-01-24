import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/Header";
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
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );

  const topAnime = await response.json();
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
