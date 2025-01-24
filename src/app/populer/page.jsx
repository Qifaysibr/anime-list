"use client";
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";

export default function Page() {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    );

    const data = await response.json();
    setTopAnime(data);
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
