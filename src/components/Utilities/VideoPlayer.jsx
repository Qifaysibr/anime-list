"use client";
import YouTube from "react-youtube";
import { XSquare } from "@phosphor-icons/react";
import { useState } from "react";
  /**
   * Komponen VideoPlayer untuk menampilkan video trailer anime.
   *
   * Menerima properti `youtubeId` yang berisi id video YouTube.
   *
   * Komponen ini akan menampilkan video trailer di bagian bawah kanan
   * layar. Saat video sedang diputar, maka akan ditampilkan tombol `X`
   * untuk menghentikan video. Jika video sedang dihentikan, maka akan
   * ditampilkan tombol "Tonton Trailer" untuk memutar video kembali.
   *
   * @param {{ youtubeId: string }} props - Properti yang berisi id video YouTube.
   * @returns {JSX.Element} Komponen yang menampilkan video trailer.
   */
const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-0 right-0">
        <button onClick={handleVideoPlayer}>
          <XSquare size={32} />
        </button>
        <YouTube
          videoId={youtubeId}
          opts={option}
          onReady={(event) => event.target.pauseVideo()}
        />
      </div>
    );
  };
  return isOpen ? <Player /> : <button onClick={handleVideoPlayer} className="fixed bottom-5 right-5 w-32 bg-slate-300"> Tonton Trailer</button>;
};

export default VideoPlayer;
