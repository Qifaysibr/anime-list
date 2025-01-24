import Image from "next/image";
import Link from "next/link";
const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4  px-4 ">
      {api.data?.map((anime) => {
        return (
          <Link
            href={`/detail/${anime.mal_id}`}
            className="bg-orange-200 cursor-pointer hover:text-amber-500 rounded-lg"
            key={anime.mal_id}
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
