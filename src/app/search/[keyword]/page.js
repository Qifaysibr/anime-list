import AnimeList from "@/components/AnimeList";
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

const Page = async ({params}) => {
    const {keyword} = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );

  const searchAnime = await response.json();
  return (
    <>
      <section>
      <Header title={`Pencarian untuk ${keyword} ...`} />
      <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
