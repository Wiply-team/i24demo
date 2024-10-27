import {
  __,
  always,
  append,
  find,
  findIndex,
  gte,
  ifElse,
  pipe,
  unless,
  update,
} from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

// INITIAL_STATE
export const INITIAL_STATE = {
  videos: [],
};

export const INIT_BRIGHTCOVE_LAZY_VIDEO =
  "brightcove-video/INIT_BRIGHTCOVE_LAZY_VIDEO";
export const INIT_BRIGHTCOVE_VIDEO = "brightcove-video/INIT_BRIGHTCOVE_VIDEO";
export const BRIGHTCOVE_VIDEO_READY = "brightcove-video/BRIGHTCOVE_VIDEO_READY";
export const DISPOSE_BRIGHTCOVE_VIDEO =
  "brightcove-video/DISPOSE_BRIGHTCOVE_VIDEO";
export const BRIGHTCOVE_VIDEO_DISPOSED =
  "brightcove-video/BRIGHTCOVE_VIDEO_DISPOSED";
export const BRIGHTCOVE_VIDEO_PLAYED =
  "brightcove-video/BRIGHTCOVE_VIDEO_PLAYED";
export const PLAY_BRIGHTCOVE_LAZY_VIDEO =
  "brightcove-video/PLAY_BRIGHTCOVE_LAZY_VIDEO";
export const CLEAR = "brightcove-video/CLEAR";

// initBrightcoveLazyVideo :: String -> Action
export const initBrightcoveLazyVideo = (videoId) => ({
  type: INIT_BRIGHTCOVE_LAZY_VIDEO,
  videoId,
});

// initBrightcoveVideo :: (String, Boolean, Boolean, Boolean, Boolean, Function) -> Action
export const initBrightcoveVideo = (
  videoId,
  lazy = false,
  autoPlay = false,
  muted = false,
  endScreenType = null,
  onEnd = () => {}
) => ({
  type: INIT_BRIGHTCOVE_VIDEO,
  videoId,
  lazy,
  autoPlay,
  muted,
  endScreenType,
  onEnd,
});

// playBrightcoveLazyVideo :: String -> Action
export const playBrightcoveLazyVideo = (videoId) => ({
  type: PLAY_BRIGHTCOVE_LAZY_VIDEO,
  videoId,
});

// videoReady :: (String, Boolean, Boolean, Boolean) -> Action
export const videoReady = (videoId, lazy, autoPlay, muted) => ({
  type: BRIGHTCOVE_VIDEO_READY,
  videoId,
  lazy,
  autoPlay,
  muted,
});

// disposeBrightcoveVideo :: String -> Action
export const disposeBrightcoveVideo = (videoId) => ({
  type: DISPOSE_BRIGHTCOVE_VIDEO,
  videoId,
});

// videoPlayed :: (String, String, Boolean) -> Action
export const videoPlayed = (playerId, videoId, endScreenType) => ({
  type: BRIGHTCOVE_VIDEO_PLAYED,
  playerId,
  videoId,
  endScreenType,
});

// clear :: () -> Action
export const clear = always({ type: CLEAR });

// videoDisposed :: () -> Action
export const videoDisposed = always({ type: BRIGHTCOVE_VIDEO_DISPOSED });

// upsertBrightcoveVideo :: Number -> Array -> Array
const upsertBrightcoveVideo =
  (videoId, lazy = false) =>
  (videos) =>
    pipe(
      findIndex((video) => video.id === videoId),
      ifElse(
        gte(__, 0),
        (index) => update(index, { id: videoId, lazy: false }, videos),
        () => append({ id: videoId, lazy }, videos)
      )
    )(videos);

export default createReducer(INITIAL_STATE, {
  [CLEAR]: always(INITIAL_STATE),
  [INIT_BRIGHTCOVE_LAZY_VIDEO]: (state, { videoId }) => ({
    ...state,
    videos: unless(
      find((video) => video.id === videoId),
      append({ id: videoId, lazy: true })
    )(state.videos),
  }),
  [INIT_BRIGHTCOVE_VIDEO]: (state, { videoId, lazy }) => ({
    ...state,
    videos: upsertBrightcoveVideo(videoId, lazy)(state.videos),
  }),
  [PLAY_BRIGHTCOVE_LAZY_VIDEO]: (state, { videoId }) => ({
    ...state,
    videos: upsertBrightcoveVideo(videoId)(state.videos),
  }),
});
