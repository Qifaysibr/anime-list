// import Image from "next/image";
// import Link from "next/link";
// import {HoverEffect} from "@/components/ui/card-hover-effect";
/**
 * Component AnimeList
 *
 * Menerima properti api yang berisi data anime. Kemudian, component ini akan
 * merender daftar anime dengan gambar dan judulnya.
 *
 * @param {{ data: { mal_id: number, title: string, images: { webp: { image_url: string } } }[] }} api
 * @returns {JSX.Element}
 */
// const AnimeList = ({ api }) => {
//   let index = 0
//   return (
//
//     <div className="grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6 md:gap-12  px-4 ">
//       {api.data?.map((anime) => {
//         return (
//           <Link
//             href={`/detail/${anime.mal_id}`}
//             className="bg-orange-200 cursor-pointer hover:text-amber-500 rounded-lg"
//             // key={anime.mal_id}
//             key={`${anime.mal_id}-${index++}`} //index++ untuk menghindari key duplikat
//           >
//             <Image
//               className="aspect-square w-full rounded-lg object-cover group-hover:opacity-75 xl:aspect-[7/8]"
//               src={anime.images.webp.image_url}
//               width={600}
//               height={400}
//               alt="anime"
//             />
//             <h3 className="font-bold md:text-xl text-md p-4 text-orange">{anime.title}</h3>
//           </Link>
//         );
//       })}
//     </div>
//   );
// };
import { HoverEffect } from "@/components/ui/card-hover-effect";

const AnimeList = ({ api }) => {
  // let index = 0;
  const items = api.data.map((anime) => ({
    link: `/detail/${anime.mal_id}`,
    image: anime.images.webp.image_url,
    title: anime.title,
  }));

  return (
    <div className=" ">
      <HoverEffect items={items} />
    </div>
  );
};

export default AnimeList;
