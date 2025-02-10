'use client'
import {useState} from 'react'
import {useRouter} from "next/navigation";
import toast from 'react-hot-toast';

const CommentInput = ({anime_mal_id, user_email, username, anime_title}) => {
    const [comment, setComment] = useState('')

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


        //Ketika ingin menggunakan Toast dari react-hot-toast harus menambahkan component <Toaster/> di layout.jsx
        if (response.ok) {
        toast.success('Komentar berhasil ditambahkan.', {
            style: {
              border: '1px dashed #713200',
              padding: '16px',
              color: '#713200',
            },
            iconTheme: {
              primary: '#713200',
              secondary: '#FFFAEE',
            },
          });
          } else {
            toast.error('Gagal menambahkan komentar', {
              duration: 5000,
              position: 'top-right',
            });
          }

        const postComment = await response?.json();
        if (postComment) {
            setComment('')
            router.refresh()
        }
    };


    return (
        <div className='flex flex-col md:flex-row gap-2 pt-10 md:py-20'>
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

