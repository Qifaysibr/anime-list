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
    //Mendecoded keyword(e.g. %20 menjadi spasi)
    const decodedKeyword = decodeURI(keyword);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`
  );

  const searchAnime = await response.json();
  return (
    <>
      <section>
      <Header title={`Pencarian untuk ${decodedKeyword}`}/>
      <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
