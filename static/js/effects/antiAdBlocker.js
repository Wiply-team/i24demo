import { combineEpics, ofType } from "redux-observable";
import { ignoreElements, mergeMap, take } from "rxjs";
import { TCDATA_READY } from "../store/modules/consentManagement";
import { logObservableError } from "../utilities/logs";

// importAntiAdBlockerScriptEpic :: Epic -> Observable Action _
export const importAntiAdBlockerScriptEpic = (
  action$,
  state$,
  { document, logger }
) =>
  action$.pipe(
    ofType(TCDATA_READY),
    take(1),
    mergeMap(
      () =>
        new Promise((resolve) => {
          const script = document.createElement("script");
          script.async = true;
          script.src = "https://btloader.com/tag?o=5709550879506432&upapi=true";
          script.onload = () => resolve();

          document.querySelector("head").appendChild(script);
        })
    ),
    ignoreElements(),
    logObservableError("antiAdBlocker :: importAntiAdBlockerScriptEpic", logger)
  );

export default combineEpics(importAntiAdBlockerScriptEpic);
