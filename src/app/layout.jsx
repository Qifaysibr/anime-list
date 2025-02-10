import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SIAnime List",
  description: "Website Anime Indonesia",
};

/**
 * Komponen RootLayout berfungsi sebagai tata letak utama aplikasi.
 * 
 * Komponen ini mengatur struktur dasar dokumen HTML dengan elemen <html> dan <body>.
 * Pada elemen <body>, diterapkan kelas CSS untuk font dan latar belakang menggunakan
 * variabel CSS yang disediakan oleh font Geist dan Geist Mono.
 * 
 * Komponen ini juga memuat komponen Navbar dan anak-anak (children) yang diteruskan
 * sebagai properti, memungkinkan konten halaman yang dinamis di dalam kerangka tata letak ini.
 * 
 * @param {{ children: React.ReactNode }} props - Properti yang berisi elemen-elemen anak
 * yang akan dirender di dalam tata letak ini.
 */

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dongker ` }
      >
        <Navbar/>
        <Toaster/>
        {children}
      </body>
    </html>
  );
}
