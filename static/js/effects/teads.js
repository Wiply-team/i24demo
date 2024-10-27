import { always, cond, equals } from "ramda";
import { combineEpics, ofType } from "redux-observable";
import { ignoreElements, mergeMap, take, withLatestFrom } from "rxjs";
import { TCDATA_READY } from "../store/modules/consentManagement";
import { arLocale, enLocale, frLocale } from "../utilities/locales";
import { logObservableError } from "../utilities/logs";

// importTeadsScriptEpic :: Epic -> Observable Action _
export const importTeadsScriptEpic = (action$, state$, { document, logger }) =>
  action$.pipe(
    ofType(TCDATA_READY),
    take(1),
    withLatestFrom(state$),
    mergeMap(
      ([_, state]) =>
        new Promise((resolve) => {
          const script = document.createElement("script");
          script.async = true;
          script.src = cond([
            [equals(arLocale), always("//a.teads.tv/page/172978/tag")],
            [equals(enLocale), always("//a.teads.tv/page/172975/tag")],
            [equals(frLocale), always("//a.teads.tv/page/172972/tag")],
          ])(state.router.locale);
          script.onload = () => resolve();

          document.querySelector("head").appendChild(script);
        })
    ),
    ignoreElements(),
    logObservableError("teads :: importTeadsScriptEpic", logger)
  );

export default combineEpics(importTeadsScriptEpic);
