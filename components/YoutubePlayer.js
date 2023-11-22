import React from "react";

export default function YoutubePlayer() {
  return (
    <div className="">
      <div className="flex justify-center">
        <iframe
          className="w-[300px] sm:w-[560px] h-[169px] sm:h-[315px] object-cover"
          src="https://www.youtube.com/embed/7CC5jd3XPkY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
