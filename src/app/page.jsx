import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";
import {BackgroundBeams} from "@/components/ui/background-beams";
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
  const topAnime = await getAnimeResponse("top/anime", "limit=12");
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  recommendedAnime = reproduce(recommendedAnime, 10)
  return (
    <div className="md:p-8">
        <BackgroundBeams className="absolute top-0 left-0 right-0 bottom-0 -z-50"/>
      <section>
      <Header title="Paling populer" linkHref="/populer" linkTitle="lihat semua" />
      <AnimeList api={topAnime} />
      </section>
        <section>
      <Header title="Rekomendasi"  />
      <AnimeList api={recommendedAnime} />
      </section>

    </div>
  );
};

export default Page;
