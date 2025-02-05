'use client'
import {useState} from 'react'
// import {Alert, Button} from "@material-tailwind/react";
import {useRouter} from "next/navigation";

const CommentInput = ({anime_mal_id, user_email, username, anime_title}) => {
    const [comment, setComment] = useState('')
    const [isAdded, setIsAdded] = useState(false);
    const [open, setOpen] = useState(true);

    const router = useRouter();
    const handleInput = (event) => {
        setComment(event.target.value)
    }

    const handlePosting = async (event) => {
        event.preventDefault();

        const data = {anime_mal_id, user_email, comment, username, anime_title};

        const response = await fetch("/api/v1/comment", {
            method: "POST",
            body: JSON.stringify(data),
        });
        const postComment = await response?.json();
        if (postComment.isAdded) {
            setIsAdded(true);
            setComment('')
            router.refresh()
        }
    };


    return (
        <div className='flex flex-col md:flex-row gap-2 pt-10 md:py-20'>
            {isAdded && (
                <div className="absolute top-0 right-0 mt-20">
                    {open && (
                        <div
                            className="flex items-center border-l-4 border-[#2ec946] bg-[#2ec946]/60 font-medium text-white px-4 py-2 rounded-b-md">
                            <span>Komentar berhasil ditambahkan</span>
                            <button
                                className="ml-8 text-white"
                                onClick={() => setOpen(false)}
                            >
                                X
                            </button>
                        </div>
                    )}
                    {isAdded && setTimeout(() => {
                        setOpen(false);
                        setIsAdded(false)
                    }, 5000)}`
                </div>
            )}
            <textarea
                value={comment}
                onChange={handleInput}
                placeholder="Masukkan komentar"
                className="w-96 rounded-lg h-36"
            />
            <button onClick={handlePosting} className="py-2 px-3 bg-orange  mt-2 md:mt-0 self-center">Posting komentar
            </button>
            ;
        </div>
    )
}
export default CommentInput

