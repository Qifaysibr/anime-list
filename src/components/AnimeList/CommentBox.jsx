import prisma from "@/libs/prisma";


const CommentBox = async ({anime_mal_id}) => {
    const comments = await prisma.comment.findMany({
        where: {
            anime_mal_id
        }
    })
    if (comments.length === 0) {
        return <p className="text-start text-gray-500/60">Belum ada komentar untuk anime ini</p>
    }
    return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {comments.map(comment => {
                    return <div key={comment.id} className="bg-gray-200 p-4 rounded-lg overflow-auto min-h-20 max-h-28">
                        <h5 className="font-bold text-orange">{comment?.username}</h5>
                        <p>{comment?.comment}</p>
                    </div>
                })
                }
            </div>
}
export default CommentBox