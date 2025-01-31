"use client";
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "@/libs/api-libs";

/**
 * Komponen Page untuk menampilkan daftar anime paling populer berdasarkan halaman.
 *
 * Komponen ini mengelola dua state: 'page' dan 'topAnime'. State 'page' digunakan
 * untuk melacak halaman saat ini, sedangkan 'topAnime' menyimpan data anime populer
 * yang diambil dari API.
 *
 * Fungsi 'fetchData' digunakan untuk melakukan fetching data anime populer dari API
 * berdasarkan halaman saat ini. Data yang diambil kemudian disimpan dalam state 'topAnime'.
 *
 * Hook 'useEffect' digunakan untuk memanggil fungsi 'fetchData' setiap kali nilai 'page' berubah,
 * memastikan data yang ditampilkan sesuai dengan halaman saat ini.
 *
 * Komponen ini merender judul halaman dengan komponen 'HeaderMenu', daftar anime dengan
 * komponen 'AnimeList', dan kontrol paginasi dengan komponen 'Pagination'.
 */

export default function Page() {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  /**
   * Fungsi untuk mengambil data anime paling populer berdasarkan halaman
   * yang diatur dalam state 'page'.
   *
   * Fungsi ini memanggil fungsi 'getAnimeResponse' untuk mengambil data anime
   * populer dari API berdasarkan halaman saat ini.
   *
   * Data yang diambil kemudian disimpan dalam state 'topAnime'.
   */
  const fetchData = async () => {
    const populerAnime = await getAnimeResponse ("top/anime", `page=${page}`);
    setTopAnime(populerAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <>
      <HeaderMenu title={`Anime paling populer #${page}`}/>
      <AnimeList api={topAnime} />
      <Pagination page={page} setPage={setPage} lastPage={topAnime.pagination?.last_visible_page} />
    </>
  );
}
