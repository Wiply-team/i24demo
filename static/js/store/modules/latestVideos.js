import {
  T,
  __,
  always,
  compose,
  cond,
  dec,
  gt,
  gte,
  identity,
  lt,
  lte,
} from "ramda";
import { createReducer } from "../../utilities/miscellaneous";
import { isSmallViewport } from "../../utilities/displays";

export const INITIAL_STATE = {
  focusedVideo: null,
  playedVideo: null,
  fetching: true,
  list: [],
  activeIndex: 0,
  error: false,
};

export const FETCH_LATEST_VIDEOS = "latestVideos/FETCH";
export const RECEIVE_LATEST_VIDEOS = "latestVideos/RECEIVE";
export const CLEAN = "latestVideos/CLEAN";
export const ERROR = "latestVideos/ERROR";
export const NEXT = "latestVideos/next";
export const PLAY_NEXT_VIDEO = "latestVideos/PLAY_NEXT_VIDEO";
export const PREVIOUS = "latestVideos/previous";
export const FOCUS_VIDEO = "latestVideos/FOCUS_VIDEO";
export const PLAY_VIDEO = "latestVideos/PLAY_VIDEO";

export const fetchLatestVideos = always({
  type: FETCH_LATEST_VIDEOS,
});
export const receiveLatestVideos = (videos) => ({
  type: RECEIVE_LATEST_VIDEOS,
  videos: videos || [],
});
export const clean = always({ type: CLEAN });
export const error = always({ type: ERROR });

// next :: Boolean -> Number -> Action
export const next = (viewportWidth) => ({
  type: NEXT,
  viewportWidth,
});

// previous :: Boolean -> Number -> Action
export const previous = (viewportWidth) => ({
  type: PREVIOUS,
  viewportWidth,
});

// focusVideo :: String -> () -> Action
export const focusVideo = (videoId) => ({
  type: FOCUS_VIDEO,
  videoId,
});

// playVideo :: String -> () -> Action
export const playVideo = (videoId) => ({
  type: PLAY_VIDEO,
  videoId,
});

// playNextVideo :: (String, Number) -> () -> Action
export const playNextVideo = (currentVideoId, viewportWidth) => ({
  type: PLAY_NEXT_VIDEO,
  currentVideoId,
  viewportWidth,
});

// Number -> Number -> Number
const ensureIndex = (max) =>
  cond([
    [gt(__, max - 1), always(0)],
    [lt(__, 0), always(max - 1)],
    [T, identity],
  ]);

// maxIndex :: ([Video], Boolean) -> Number
const maxIndex = (collection, viewportWidth) =>
  cond([
    [gte(600), always(collection.length)],
    [gte(1280), always(collection.length - 1)],
    [T, always(collection.length - 2)],
  ])(viewportWidth);

// Number -> Number -> Number
const nextActiveIndex = (max) =>
  cond([
    [lte(__, 1), always(0)],
    [gte(__, max), always(max - 1)],
    [T, compose(dec, identity)],
  ]);

export default createReducer(INITIAL_STATE, {
  [FETCH_LATEST_VIDEOS]: (state) => ({
    ...state,
    fetching: true,
  }),

  [RECEIVE_LATEST_VIDEOS]: (state, { videos }) => ({
    ...state,
    list: videos,
    activeIndex: 0,
    fetching: false,
    error: false,
  }),

  [CLEAN]: always(INITIAL_STATE),

  [NEXT]: (state, { viewportWidth }) => ({
    ...state,
    activeIndex: ensureIndex(maxIndex(state.list, viewportWidth))(
      state.activeIndex + 1
    ),
  }),

  [PREVIOUS]: (state, { viewportWidth }) => ({
    ...state,
    activeIndex: ensureIndex(maxIndex(state.list, viewportWidth))(
      state.activeIndex - 1
    ),
  }),

  [FOCUS_VIDEO]: (state, { videoId }) => ({
    ...state,
    focusedVideo: videoId,
  }),

  [PLAY_VIDEO]: (state, { videoId }) => ({
    ...state,
    playedVideo: videoId,
  }),

  [PLAY_NEXT_VIDEO]: (state, { currentVideoId, viewportWidth }) => ({
    ...state,
    activeIndex: isSmallViewport(viewportWidth)
      ? ensureIndex(maxIndex(state.list, viewportWidth))(state.activeIndex + 1)
      : nextActiveIndex(maxIndex(state.list, viewportWidth))(
          state.list.findIndex((video) => video.id === currentVideoId) + 1
        ),
    focusedVideo:
      state.list.findIndex((video) => video.id === currentVideoId) + 1 ===
      state.list.length
        ? state.list[
            state.list.findIndex((video) => video.id === currentVideoId)
          ].id
        : state.list[
            state.list.findIndex((video) => video.id === currentVideoId) + 1
          ].id,
    playedVideo:
      state.list.findIndex((video) => video.id === currentVideoId) + 1 ===
      state.list.length
        ? null
        : state.list[
            state.list.findIndex((video) => video.id === currentVideoId) + 1
          ].id,
  }),

  [ERROR]: (state) => ({
    ...state,
    error: true,
  }),
});
