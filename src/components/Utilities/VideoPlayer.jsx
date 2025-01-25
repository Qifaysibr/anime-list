"use client";
import YouTube from "react-youtube";
import { XSquare } from "@phosphor-icons/react";
import { useState } from "react";
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
