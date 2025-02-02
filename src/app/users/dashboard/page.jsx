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
        <div className="text-gray-50">
            <h1>Dashboard</h1>
            <h3>Welcome, {user?.name.toUpperCase()}</h3>
            <Image className="rounded-2xl" src={user?.image} alt={user?.name} width={300} height={300} />

            <div className="flex flex-wrap gap-4 py-8">
                <Link className="text-orange p-4 bg-emerald-700 text-xl" href="/users/dashboard/collection">My Collection</Link>
                <Link className="text-orange p-4 bg-emerald-700 text-xl" href="/users/dashboard/comment">My Comments</Link>
            </div>
        </div>
    );
}

export default Page