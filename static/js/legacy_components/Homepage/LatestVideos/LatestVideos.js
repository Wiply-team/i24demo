import "./LatestVideos.scss";
import Overlay from "../../Loader/Overlay";
import React from "react";
import Video from "./Video";
import translate from "../../../utilities/translate";
import translations from "./translations";
import Heading from "../../../widgets/Typography/Heading";
import Slider from "../../../widgets/Layout/Slider";

// trans :: String -> String -> String
const trans = translate(translations);

// LatestVideos :: Props -> React.Component
export default ({
  slideIndex = 0,
  videos,
  loading,
  locale,
  toNext,
  toPrevious,
  playVideo,
  playedVideo,
  focusVideo,
  focusedVideo,
  playNextVideo,
}) => (
  <div id="home-latest-videos">
    <Heading level="2" color="light" size="large">
      {trans(locale)("topVideos")}
    </Heading>

    <div className="container latest-videos">
      {loading ? (
        <Overlay inversed={true} />
      ) : (
        <Slider
          activeSlideIndex={slideIndex}
          focusedSlideIndex={videos.findIndex(
            (video) => video.id === focusedVideo
          )}
          onNext={toNext}
          onNextLabel={trans(locale)("next")}
          onPrevious={toPrevious}
          onPreviousLabel={trans(locale)("previous")}
        >
          {videos.map((video, index) => (
            <Slider.Slide key={index}>
              <Video
                video={video}
                locale={locale}
                playVideo={playVideo}
                focusVideo={focusVideo}
                isFocused={video.id === focusedVideo}
                isPlayed={video.id === playedVideo}
                onEnd={(player) => playNextVideo(video.id, player)}
              />
            </Slider.Slide>
          ))}
        </Slider>
      )}
    </div>
  </div>
);
