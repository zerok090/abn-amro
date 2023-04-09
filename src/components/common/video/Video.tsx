import React from "react";

interface VideoProps {
  src: string;
  width?: number;
  height?: number;
}

function getYoutubeId(url: string) {
  return url.match(/watch\?v=(.*)/);
}

function Video({ src, width = 560, height = 315 }: VideoProps) {
  const youtubeId = getYoutubeId(src);

  return (
    <>
      {youtubeId && youtubeId[1] ? (
          <iframe
            width={width}
            height={height}
            src={`https://youtube.com/embed/${youtubeId[1]}`}
          ></iframe>
      ) : null}
    </>
  );
}

export default Video;
