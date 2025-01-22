import Image from "next/image";
import Link from "next/link";
const AnimeList = ({title, images, genres, id}) => {
    return (
            <Link href={`/detail/${id}`} className="bg-orange-200 cursor-pointer">
                <Image className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]" src={images} width={600} height={400} alt="anime"/>
                <h3 className="font-bold md:text-xl text-md p-4">{title}</h3>
                <h5 className="text-sm pl-4">{genres}</h5>
            </Link>
    )
}

export default AnimeList