import Link from "next/link"
import { authUserSession } from "@/libs/auth-libs"

/**
 * Komponen UserActionButton berisi tombol yang berguna untuk mengganti
 * tindakan pengguna. Jika pengguna sudah login, maka tombol akan
 * menampilkan "Sign Out" dan mengarahkan ke /api/auth/signout. Jika
 * pengguna belum login, maka tombol akan menampilkan "Sign In" dan
 * mengarahkan ke /api/auth/signin.
 *
 * Komponen ini juga menampilkan link ke halaman dashboard jika pengguna
 * sudah login.
 *
 * @returns {JSX.Element} Komponen UserActionButton yang berisi tombol
 * tindakan pengguna.
 */
const UserActionButton = async() => {
    const user = await authUserSession();

    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex justify-between gap-2 text-color-orange">
            {
                user ? <Link href="/users/dashboard" className="py-1">Dashboard</Link> : null
            }
            <Link href={actionURL} className="bg-color-dongker text-color-orange py-1 px-12 inline-block">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton