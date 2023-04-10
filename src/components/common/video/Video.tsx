import React from "react";

interface VideoProps {
  src: string;
  width?: number | string;
  height?: number | string;
}

function getYoutubeId(url: string) {
  return url.match(/watch\?v=(.*)/);
}

function Video({ src, width = '100%', height = '100%' }: VideoProps) {
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
