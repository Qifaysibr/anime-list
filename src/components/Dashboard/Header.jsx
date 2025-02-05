"use client"
import {  Backspace  } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
const Header = ({title}) => {
    const router = useRouter()

    
/**
 * Fungsi handleBack menangani event klik pada tombol kembali. Fungsi ini 
 * mencegah aksi default dari event yang terjadi dan mengarahkan pengguna 
 * kembali ke halaman sebelumnya menggunakan router dari Next.js.
 *
 * @param {Event} event - Objek event DOM yang dipicu oleh pengguna ketika 
 * tombol kembali diklik.
 */
    const handleBack = (event) => {
        event.preventDefault()
        router.back()
    }
    return (
        <div className="flex justify-between items-center m-4">
            <button onClick={handleBack} className="text-white"><Backspace size={32} /></button>
            <h3 className="text-2xl font-bold text-orange mb-4">{title}</h3>
            </div>
    )
}

export default Header