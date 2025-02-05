import prisma from "@/libs/prisma"
export async function POST(request) {
    const {anime_mal_id, user_email , comment, username, anime_title} = await request.json()
    const data = {anime_mal_id, user_email, comment, username, anime_title}
    const createComment = await prisma.comment.create({data}) //prisma.(nama model/table/dataset).(method(data))

    if (!createComment) {
        return Response.json({status: 500, isAdded: false})
    } else {
        return Response.json({status: 200, isAdded: true})
    }

}