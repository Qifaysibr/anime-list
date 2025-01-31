import Image from "next/image";
import Link from "next/link";
/**
 * Component AnimeList
 *
 * Menerima properti api yang berisi data anime. Kemudian, component ini akan
 * merender daftar anime dengan gambar dan judulnya.
 *
 * @param {{ data: { mal_id: number, title: string, images: { webp: { image_url: string } } }[] }} api
 * @returns {JSX.Element}
 */
const AnimeList = ({ api }) => {
  let index = 0
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4  px-4 ">
      {api.data?.map((anime) => {
        return (
          <Link
            href={`/detail/${anime.mal_id}`}
            className="bg-orange-200 cursor-pointer hover:text-amber-500 rounded-lg"
            // key={anime.mal_id}
            key={`${anime.mal_id}-${index++}`} //index++ untuk menghindari key duplikat
          >
            <Image
              className="aspect-square w-full rounded-lg object-cover group-hover:opacity-75 xl:aspect-[7/8]"
              src={anime.images.webp.image_url}
              width={600}
              height={400}
              alt="anime"
            />
            <h3 className="font-bold md:text-xl text-md p-4 text-orange">{anime.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
