import { LOAD, loaded } from "../store/modules/lazyComponents";
import { combineEpics, ofType } from "redux-observable";
import { map, mergeMap } from "rxjs";
import { logObservableError } from "../utilities/logs";

// loadComponentEpic :: Epic -> Observable Action.LOADED
export const loadComponentEpic = (
  action$,
  state$,
  { lazyComponentRegistry, logger }
) =>
  action$.pipe(
    ofType(LOAD),
    mergeMap(({ componentName }) =>
      Promise.all([componentName, lazyComponentRegistry.add(componentName)])
    ),
    map(([componentName, component]) => loaded(componentName, component)),
    logObservableError("lazyComponents :: loadComponentEpic", logger)
  );

export default combineEpics(loadComponentEpic);
