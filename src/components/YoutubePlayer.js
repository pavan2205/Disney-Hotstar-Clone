import React from "react";
import YouTube from "react-youtube";

const YoutubePlayer = () => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div style={{ width: "300px", height: "300px" }}>
      <YouTube videoId="_r7JImM1AX4" opts={opts} />
    </div>
  );
};

export default YoutubePlayer;
