import { combineEpics, ofType } from "redux-observable";
import { ignoreElements, mergeMap, take } from "rxjs";
import { TCDATA_READY } from "../store/modules/consentManagement";
import { logObservableError } from "../utilities/logs";

// importMinuteScriptEpic :: Epic -> Observable Action _
export const importMinuteScriptEpic = (action$, state$, { document, logger }) =>
  action$.pipe(
    ofType(TCDATA_READY),
    take(1),
    mergeMap(
      () =>
        new Promise((resolve) => {
          const script = document.createElement("script");
          script.async = true;
          script.src = "//apv-launcher.minute.ly/api/launcher/MIN-60600.js";
          script.onload = () => resolve();

          document.querySelector("head").appendChild(script);
        })
    ),
    ignoreElements(),
    logObservableError("minute :: importMinuteScriptEpic", logger)
  );

export default combineEpics(importMinuteScriptEpic);
