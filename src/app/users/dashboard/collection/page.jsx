import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";

const Page = async () => {
    const user = await authUserSession();
    const collection = await prisma.collection.findMany({
        where: { user_email: user.email },
    });
    console.log(collection)
    return (
        <section className="mt-4 px-6 w-full">
            <Header title={"My Collection"} />
            
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
                {collection.map((collect, index) => {
                    return (
                        <Link key={index} href={`/detail/${collect.anime_mal_id}`} className="relative w-[250]">
                            <Image
                                src={collect.anime_image}
                                alt='anime'
                                width={250}
                                height={250}
                                className=""
                            />
                            <div className="absolute flex items-center justify-center bottom-0 w-full bg-lime-700 h-16">
                                <h5 className="text-xl text-center">{collect.anime_title}</h5>
                            </div>
                        </Link>
                        
                     );
                 })} 
            </div>
        </section>
    );
};

export default Page;