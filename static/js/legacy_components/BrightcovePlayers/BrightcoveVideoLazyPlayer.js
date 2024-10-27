import "./BrightcoveVideoLazyPlayer.scss";
import { compose, defaultTo, find, pipe, propOr } from "ramda";
import {
  initBrightcoveLazyVideo,
  playBrightcoveLazyVideo,
} from "../../store/modules/brightcoveVideo";
import Image from "./../Image";
import React from "react";
import ResourceLoader from "../../components/ResourceLoader";
import VideoSchemaInjector from "./VideoSchemaInjector";
import { componentDidMount } from "../../components/Lifecycles";
import { connect } from "react-redux";
import {
  isLiveStream,
  resolveBrightcovePosterSrc,
} from "../../utilities/media/videos";
import LazyComponent from "../../components/LazyComponent";
import translate from "../../utilities/translate";
import translations from "./translations";
import PropTypes from "prop-types";
import VideoPlayButton from "../../widgets/Button/VideoPlayButton";

// trans :: String -> String -> String
const trans = translate(translations);

const BrightcoveVideoPlayer = LazyComponent("BrightcoveVideoPlayer");

// mapStateToProps :: State -> Props
const mapStateToProps = (state, { videoId }) => ({
  posterSrc: resolveBrightcovePosterSrc(state.router.locale, videoId),
  lazy: compose(
    propOr(true, "lazy"),
    defaultTo({}),
    find((video) => video.id === videoId)
  )(state.brightcoveVideo.videos),
  locale: state.router.locale,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  initBrightcoveLazyVideo: compose(dispatch, initBrightcoveLazyVideo),
  playBrightcoveLazyVideo: compose(dispatch, playBrightcoveLazyVideo),
});

// didMount :: Props -> Action
const didMount = ({ initBrightcoveLazyVideo, videoId }) =>
  initBrightcoveLazyVideo(videoId);

const View = ({
  autoPlay = false,
  className = "",
  initBrightcoveLazyVideo,
  lazy,
  muted,
  playBrightcoveLazyVideo,
  posterSrc,
  videoId,
  locale,
  variant = "default",
  ...restProps
}) => (
  <>
    <VideoSchemaInjector videoId={videoId} />
    {!lazy ? (
      <BrightcoveVideoPlayer
        injectSchema={false}
        {...restProps}
        locale={locale}
        videoId={videoId}
        muted={autoPlay ? true : muted}
        lazy={true}
        className={`${className} brightcove-lazy-player`}
      />
    ) : (
      <div
        className="brightcove-lazy-player"
        data-video-id={videoId}
        data-video-auto-play={autoPlay}
      >
        <Image
          lazy={true}
          src={posterSrc}
          alt={"Video poster"}
          className="video-poster"
        />
        {isLiveStream(videoId) ? (
          <div className={`poster-live ${variant}`}>
            {trans(locale)("live")}
          </div>
        ) : null}
        <div className="play-button-wrapper">
          <VideoPlayButton
            onClick={() => playBrightcoveLazyVideo(videoId)}
            aria-label={trans(locale)("play")}
          />
        </div>
      </div>
    )}
  </>
);

// lifecycles :: React.Component -> React.Component
const lifecycles = pipe(componentDidMount(didMount, true))(View);

// BrightcoveVideoLazyPlayer :: Props -> React.Component
const BrightcoveVideoLazyPlayer = connect(
  mapStateToProps,
  mapDispatchToProps
)(lifecycles);

// Wrapper :: Props -> React.Component
const Wrapper = (props) => (
  <ResourceLoader reducers={["brightcoveVideo"]} epics={["brightcoveVideo"]}>
    <BrightcoveVideoLazyPlayer {...props} />
  </ResourceLoader>
);

const Placeholder = () => <div className="brightcove-lazy-player" />;

View.propTypes = {
  variant: PropTypes.oneOf(["large", "default"]),
};

Wrapper.Placeholder = Placeholder;

export default Wrapper;
