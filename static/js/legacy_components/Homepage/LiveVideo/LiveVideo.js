import LazyComponent from "../../../components/LazyComponent";
import React, { useState } from "react";

const BrightcoveLiveVideoPlayer = LazyComponent("BrightcoveLiveVideoPlayer");

const LiveVideo = ({ locale, id }) => {
  const [closed, setClosed] = useState(false);

  return closed ? null : (
    <BrightcoveLiveVideoPlayer
      pictureInPicture="pinned"
      locale={locale}
      muted={true}
      autoPlay={false}
      videoId={id}
      onClose={() => setClosed(true)}
    />
  );
};

export default LiveVideo;
