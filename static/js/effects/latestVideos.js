import {
  FETCH_LATEST_VIDEOS,
  NEXT,
  PLAY_NEXT_VIDEO,
  PREVIOUS,
  RECEIVE_LATEST_VIDEOS,
  error,
  focusVideo,
  receiveLatestVideos,
} from "../store/modules/latestVideos";
import { combineEpics, ofType } from "redux-observable";
import { logObservableErrorAndTriggerAction } from "../utilities/logs";
import { defaultTo, gte, length, map as fmap, nth, pipe, prop } from "ramda";
import { filter, map, mergeMap, withLatestFrom } from "rxjs";
import { playBrightcoveLazyVideo } from "../store/modules/brightcoveVideo";

// formatVideo :: Object -> Object
const formatVideo = (item) => ({
  id: item.id,
  title: item.title,
  duration: item.duration,
});

// fetchLatestVideosEpic :: Epic -> Observable Action.RECEIVED_LATEST_VIDEOS
export const fetchLatestVideosEpic = (action$, state$, { fetchApi, logger }) =>
  action$.pipe(
    ofType(FETCH_LATEST_VIDEOS),
    withLatestFrom(state$),
    mergeMap(([_, state]) =>
      fetchApi(`/v2/${state.router.locale}/brightcove/top-videos`)
    ),
    withLatestFrom(state$),
    map(([videos, _]) =>
      pipe(
        defaultTo([]),
        fmap((video) => formatVideo(video)),
        receiveLatestVideos
      )(videos.body)
    ),
    logObservableErrorAndTriggerAction(
      "latestVideos :: fetchLatestVideosEpic",
      error,
      logger
    )
  );

// focusVideoEpic :: Epic -> Observable Action.FOCUS_VIDEO
export const focusVideoEpic = (action$, state$) =>
  action$.pipe(
    ofType(RECEIVE_LATEST_VIDEOS, PREVIOUS, NEXT),
    withLatestFrom(state$),
    // This filter is enabling the auto-focusing of the videos if there are at least two videos in the current page.
    // When there are less than 2 videos no video will be focused by default.
    filter(([action, state]) =>
      gte(length(state.latestVideos.list), state.latestVideos.activeIndex + 1)
    ),
    map(([action, state]) =>
      pipe(
        nth(state.latestVideos.activeIndex + 1),
        prop("id"),
        focusVideo
      )(state.latestVideos.list)
    )
  );

// playNextVideoEpic :: Epic -> Observable Action.PLAY_BRIGHTCOVE_LAZY_VIDEO
export const playNextVideoEpic = (action$, state$) =>
  action$.pipe(
    ofType(PLAY_NEXT_VIDEO),
    withLatestFrom(state$),
    filter(([_, state]) => state.latestVideos.playedVideo),
    map(([_, state]) => playBrightcoveLazyVideo(state.latestVideos.playedVideo))
  );

export default combineEpics(
  fetchLatestVideosEpic,
  focusVideoEpic,
  playNextVideoEpic
);
