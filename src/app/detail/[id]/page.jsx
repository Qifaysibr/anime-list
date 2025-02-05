import {getAnimeResponse} from "@/libs/api-libs";
import Image from "next/image";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import {authUserSession} from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import CommentInput from "@/components/AnimeList/CommentInput";
import CommentBox from "@/components/AnimeList/CommentBox";

/**
 * Halaman detail anime.
 *
 * Komponen ini menampilkan detail anime berupa judul, tahun, peringkat,
 * score, episode, studio, genre, gambar, dan sinopsis.
 *
 * Jika anime memiliki trailer di YouTube, maka komponen ini akan
 * menampilkan tombol "Tonton Trailer" yang akan membuka video trailer di
 * YouTube. Jika tidak memiliki trailer, maka komponen ini akan menampilkan
 * teks "Trailer tidak tersedia untuk anime ini".
 *
 * @param {{ id: number }} params - Properti yang berisi id anime.
 * @returns {JSX.Element} Komponen yang menampilkan detail anime.
 */
const Page = async ({params}) => {
    const {id} = await params;
    const anime = await getAnimeResponse(`anime/${id}`);
    const user = await authUserSession();
    const collection = await prisma.collection?.findFirst({
        where: {
            user_email: user?.email,
            anime_mal_id: id,
        },
    });

    const youtubeId = anime.data?.trailer.youtube_id;
    return (
        <div className="mx-12 sm:mx-20">
            <div className="py-16 flex justify-evenly">
                <h1 className="text-6xl font-extralight text-orange">
                    {anime.data.title} {anime.data.year && `- ${anime.data.year}`}
                </h1>

            </div>

            <div className="flex lg:flex-row flex-col justify-between">
                <div className=" px-4 flex gap-2 text-white h-14 overflow-x-auto">
                    <div className="w-36 flex flex-col justify-center items-center rounded border p-2">
                        <h3 className="font-bold">Peringkat</h3>
                        <p>{anime.data.rank}</p>
                    </div>
                    <div className="w-36 flex flex-col justify-center items-center rounded border p-2">
                        <h3 className="font-bold">Score</h3>
                        <p>{anime.data.score}</p>
                    </div>
                    <div className="w-36 flex flex-col justify-center items-center rounded border p-2">
                        <h3 className="font-bold">Episodes</h3>
                        <p>{anime.data.episodes}</p>
                    </div>
                    <div className="w-36 flex flex-col justify-center items-center rounded border p-2 min-w-fit">
                        <h3 className="font-bold">Studio</h3>
                        <p>{anime.data.studios[0]?.name}</p>
                    </div>
                    <div className=" flex flex-col justify-center items-center rounded border p-2 min-w-fit">
                        <h3 className="font-bold">Genres</h3>
                        <p>{anime.data.genres.map((genre) => genre.name).join(", ")}</p>
                    </div>
                </div>

                <div className="md:ml-4 flex flex-col justify-center items-center h-14 overflow-x-auto overflow">
                    {user && !collection ? (
                        <CollectionButton anime_mal_id={id} user_email={user?.email}
                                          anime_image={anime.data.images.webp.image_url}
                                          anime_title={anime.data.title}/>
                    ) : (
                        user && (
                            <button className="px-2 py-1 bg-white text-orange rounded">
                                Added to Collection
                            </button>
                        )
                    )}
                </div>
            </div>
            <div className="pt-4 px-4 flex gap-2 text-white md:flex-nowrap flex-wrap">
                <Image
                    className=" rounded object-cover min-w-fit"
                    src={anime.data.images.webp.image_url}
                    width={600}
                    height={400}
                    alt="anime"
                ></Image>
                <p className="first-letter:text-6xl first-letter:ml-6 md:ml-6">{anime.data.synopsis}</p>
            </div>


            <div className="pt-4 px-4 flex flex-col">
                <h3 className="text-xl font-bold text-orange mb-2">Komentar</h3>

                <CommentBox anime_mal_id={id}/>
                {user &&
                    <CommentInput anime_mal_id={id} user_email={user?.email} username={user?.name}
                                  anime_title={anime.data.title}/>
                }
            </div>


            <div>
                {youtubeId ? (
                    <VideoPlayer youtubeId={youtubeId}/>
                ) : (
                    <p className="fixed bottom-2 right-2 text-red-500 border rounded p-1">
                        Trailer tidak tersedia untuk anime ini
                    </p>
                )}
            </div>
        </div>
    );
};

export default Page;
