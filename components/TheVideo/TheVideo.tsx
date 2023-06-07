import React from "react";

type TheVideoProps = {
  source: string;
};

const TheVideo = ({ source }: TheVideoProps) => {
  return (
    <video
      className="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700"
      controls
    >
      <source src={source} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default TheVideo;
