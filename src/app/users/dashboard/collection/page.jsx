import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";

// import prisma from "@/libs/prisma";

const Page = async () => {
    const user = await authUserSession();
    // const collection = await prisma.collection.findMany({
        // where: { user_email: user.email },
    // });

    return (
        <section className="mt-4 px-6 w-full">
            <Header title={"My Collection"} />
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {/* {collection.map((collect, index) => { */}
                    {/* return ( */}
                        <Link  href={`/`} className="relative">
                            <Image
                                src=''
                                alt=''
                                width={350}
                                height={350}
                                className="w-full"
                            />
                            <div className="absolute flex items-center justify-center bottom-0 w-full bg-lime-700 h-16">
                                <h5 className="text-xl text-center">Judul Anime</h5>
                            </div>
                        </Link>
                        <Link  href={`/`} className="relative">
                            <Image
                                src=''
                                alt=''
                                width={350}
                                height={350}
                                className="w-full"
                            />
                            <div className="absolute flex items-center justify-center bottom-0 w-full bg-lime-700 h-16">
                                <h5 className="text-xl text-center">Judul Anime</h5>
                            </div>
                        </Link>
                        <Link  href={`/`} className="relative">
                            <Image
                                src=''
                                alt=''
                                width={350}
                                height={350}
                                className="w-full"
                            />
                            <div className="absolute flex items-center justify-center bottom-0 w-full bg-lime-700 h-16">
                                <h5 className="text-xl text-center">Judul Anime</h5>
                            </div>
                        </Link>
                        <Link  href={`/`} className="relative">
                            <Image
                                src=''
                                alt=''
                                width={350}
                                height={350}
                                className="w-full"
                            />
                            <div className="absolute flex items-center justify-center bottom-0 w-full bg-lime-700 h-16">
                                <h5 className="text-xl text-center">Judul Anime</h5>
                            </div>
                        </Link>
                    {/* ); */}
                {/* })} */}
            </div>
        </section>
    );
};

export default Page;