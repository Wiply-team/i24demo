import { FETCH_LATEST_BANNER, bannerReceived } from "../store/modules/banner";
import { combineEpics, ofType } from "redux-observable";
import { complement, isNil, prop } from "ramda";
import { filter, map, mergeMap, withLatestFrom } from "rxjs";
import { logObservableError } from "../utilities/logs";

// fetchLatestBannerEpic :: Epic -> Observable Action.BANNER_RECEIVED
export const fetchLatestBannerEpic = (action$, state$, { fetchApi, logger }) =>
  action$.pipe(
    ofType(FETCH_LATEST_BANNER),
    withLatestFrom(state$),
    mergeMap(([_, state]) =>
      fetchApi(`/v2/${state.router.locale}/banners/current`)
    ),
    map(prop("body")),
    filter(complement(isNil)),
    map(bannerReceived),
    logObservableError("banner :: fetchLatestBannerEpic", logger)
  );

export default combineEpics(fetchLatestBannerEpic);
