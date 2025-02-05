import Image from "next/image"
import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";
/**
 * Komponen halaman Dashboard yang menampilkan data pengguna yang sedang login.
 * Komponen ini mengautentikasi sesi pengguna menggunakan fungsi authUserSession
 * dan menampilkan data pengguna yang sedang login.
 *
 * @returns {JSX.Element} Komponen halaman Dashboard yang menampilkan data pengguna.
 */
const Page = async() => {
    const user = await authUserSession();
    console.log(user);
    return (
        <div className="flex flex-col justify-center items-center mt-20">
        <div className="text-gray-50 py-2">
            <h1 className="text-3xl font-bold py-2">Dashboard</h1>
            <h3 className="py-2">Welcome &nbsp; , {user?.name ? user.name[0].toUpperCase() + user.name.slice(1) : ''}</h3>
            <Image className="rounded-2xl" src={user?.image} alt={user?.name} width={300} height={300} />

            <div className="flex flex-wrap gap-4 py-8">
                <Link className="text-gray-300 p-4 bg-blue-800 text-xl rounded-bl-3xl hover:bg-blue-800/70" href="/users/dashboard/collection">My Collection</Link>
                <Link className="text-gray-300 p-4 bg-blue-800 text-xl rounded-tr-3xl hover:bg-blue-800/70" href="/users/dashboard/comment">My Comments</Link>
            </div>
        </div>
        </div>
    );
}

export default Page