import {authUserSession} from "@/libs/auth-libs";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";

const Page = async () => {
    const user = await authUserSession();
    const comments = await prisma.comment.findMany({
        where: {user_email: user.email},
    })
    console.log(comments)
    return (
        <div>
            <Header title={"My Comments"} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {comments.map(comment => {
                    return (
                        <Link href={`/detail/${comment.anime_mal_id}`} key={comment.id} className="bg-gray-200 p-4 rounded-lg overflow-auto min-h-20 max-h-28">
                            <div className="flex justify-between">
                            <h3 className="font-bold text-xl text-orange ">{comment?.anime_title}</h3>
                            <small className="font-extralight text-orange ">{comment.username}</small>
                            </div>
                                <p>{comment?.comment}</p>
                        </Link>)
                })
                }
            </div>
        </div>
    );
}

export default Page