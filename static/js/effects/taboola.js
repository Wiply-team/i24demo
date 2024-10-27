import {
  PUSH_AD,
  PUSH_PAGE_NAVIGATION,
  SCRIPT_IMPORTED,
  adPushed,
  pageNavigationPushed,
  scriptImported,
} from "../store/modules/taboola";
import { combineEpics, ofType } from "redux-observable";
import { combineLatest, map, mergeMap, take, tap, withLatestFrom } from "rxjs";
import { isMobileViewport } from "../utilities/displays";
import { logObservableError } from "../utilities/logs";
import {
  T,
  always,
  compose,
  cond,
  equals,
  isNil,
  not,
  nthArg,
  omit,
  pickBy,
  when,
  pipe,
} from "ramda";
import { HYDRATION_COMPLETED } from "../store/modules/app";
import { TCDATA_READY } from "../store/modules/consentManagement";

// stripNullValues :: Object -> Object
const stripNullValues = pickBy(compose(not, isNil, nthArg(0)));

// importTaboolaScriptEpic :: Epic -> Observable Action SCRIPT_IMPORTED
export const importTaboolaScriptEpic = (
  action$,
  state$,
  { document, logger, window }
) =>
  action$.pipe(
    ofType(TCDATA_READY),
    take(1),
    mergeMap(
      () =>
        new Promise((resolve) => {
          window._taboola = window._taboola || [];
          !(function (e, f, u, i) {
            if (!document.getElementById(i)) {
              e.async = 1;
              e.src = u;
              e.id = i;
              e.onload = () => resolve();
              f.parentNode.insertBefore(e, f);
            }
          })(
            document.createElement("script"),
            document.getElementsByTagName("script")[0],
            "//cdn.taboola.com/libtrc/i24news-networkil/loader.js",
            "tb_loader_script"
          );

          if (
            window.performance &&
            typeof window.performance.mark == "function"
          ) {
            window.performance.mark("tbl_ic");
          }
        })
    ),
    map(scriptImported),
    logObservableError("taboola :: importTaboolaScriptEpic", logger)
  );

// pushTaboolaPageNavigationEpic :: Epic -> _
export const pushTaboolaPageNavigationEpic = (
  action$,
  state$,
  { location, logger, taboola, getTaboolaTrc }
) =>
  combineLatest([
    action$.pipe(ofType(SCRIPT_IMPORTED)),
    action$.pipe(ofType(PUSH_PAGE_NAVIGATION, HYDRATION_COMPLETED)),
  ]).pipe(
    withLatestFrom(state$),
    // We need to inform Taboola in case we make a page navigation via the SPA.
    // This information doesn't have to be sent on the first page navigation
    // (browser navigation) but only on the following ones (SPA page
    // transitions that are not requiring a full page load).
    tap(
      when(
        ([_, state]) => state.taboola.pageNavigations > 0,
        pipe(
          // We need to do this fix because next-up ad on the article page
          // not being able to render when navigating between pages.
          // ATM, Taboola is not in capacity to fix this issue on their script.
          // We should remove it as soon as Taboola fix it on its side to avoid unwanted behaviors in the future.
          () => {
            const taboolaTrc = getTaboolaTrc();

            if (!isNil(taboolaTrc.FloatingUnitGenerator)) {
              taboolaTrc.FloatingUnitGenerator.isFloatingUnitOn = false;
            }
          },
          () => taboola().push({ notify: "newPageLoad" })
        )
      )
    ),
    map(([_, state]) => state.taboola.currentAdType),
    // Push page information (page type and canonical url)
    tap((adType) =>
      taboola().push({
        [adType]: "auto",
        url: location.href,
      })
    ),
    map(pageNavigationPushed),
    logObservableError("taboola :: pushTaboolaPageNavigationEpic", logger)
  );

// resolveTaboolaMode :: (Object, String) -> String
const resolveTaboolaMode = cond([
  [(window) => isMobileViewport(window), always("thumbnail-d")],
  [
    (_, name) => equals(name, "taboola-below-main-column-thumbnails"),
    always("thumbnails-c-mid"),
  ],
  [
    (_, name) => equals(name, "mid-article-thumbnails"),
    always("mid-article-thumbnails"),
  ],
  [T, always("thumbnails-c")],
]);

// pushTaboolaAdEpic :: Epic -> _
export const pushTaboolaAdEpic = (action$, _, { logger, taboola, window }) =>
  action$.pipe(
    ofType(PUSH_AD),
    tap(({ name, targetType, ...restProps }) =>
      taboola().push({
        container: name,
        mode: resolveTaboolaMode(window, name),
        target_type: targetType,
        ...stripNullValues(restProps),
      })
    ),
    map((action) =>
      adPushed({
        ...omit(["type"], action),
      })
    ),
    logObservableError("taboola :: pushTaboolaAdEpic", logger)
  );

export default combineEpics(
  importTaboolaScriptEpic,
  pushTaboolaPageNavigationEpic,
  pushTaboolaAdEpic
);
