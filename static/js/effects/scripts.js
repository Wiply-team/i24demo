import { LOAD_SCRIPT, scriptLoaded } from "../store/modules/scripts";
import { combineEpics, ofType } from "redux-observable";
import { filter, map, mergeMap } from "rxjs";
import { isNil } from "ramda";
import { isRequestFromSSR } from "../utilities/urls";

// loadScriptEpic :: Epic -> Observable Action.SCRIPT_LOADED
export const loadScriptEpic = (action$, state$, { document, navigator }) =>
  action$.pipe(
    ofType(LOAD_SCRIPT),
    // Avoids to inject external scripts when request comes from the SSR
    // External scripts injection will only be done client side
    filter(() => !isRequestFromSSR(navigator.userAgent)),
    filter(({ src }) => isNil(document.getElementById(src))),
    mergeMap(
      ({ src }) =>
        new Promise((resolve) => {
          const script = document.createElement("script");
          script.async = true;
          script.id = src;
          script.src = src;
          script.onload = () => resolve(src);

          document.querySelector("body").appendChild(script);
        })
    ),
    map(scriptLoaded)
  );

export default combineEpics(loadScriptEpic);
