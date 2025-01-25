import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/app/libs/api-libs";
/**
 * Fungsi HomePage
 *
 * Fungsi ini digunakan untuk merender halaman utama aplikasi.
 * Fungsi ini melakukan fetch data anime dari API dan merender daftar anime
 * dengan detailnya.
 *
 * @returns {JSX.Element} Halaman utama aplikasi dengan daftar anime
 */

const Page = async ({ params }) => {
  const { keyword } = params;
  //Mendecoded keyword(e.g. %20 menjadi spasi)
  const decodedKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse(
    "anime",
    `q=${decodedKeyword}`
  );
  return (
    <>
      <section>
        <Header title={`Pencarian untuk ${decodedKeyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
