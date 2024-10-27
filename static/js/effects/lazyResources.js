import {
  LOAD_RESOURCES,
  epicsLoaded,
  reducersLoaded,
} from "../store/modules/lazyResources";
import { combineEpics, ofType } from "redux-observable";
import { map, mergeMap } from "rxjs";
import { logObservableError } from "../utilities/logs";
import { map as rmap } from "ramda";

// loadReducersEpic :: Epic -> Observable Action REDUCERS_LOADED
export const loadReducersEpic = (
  action$,
  state$,
  { reducerRegistry, logger }
) =>
  action$.pipe(
    ofType(LOAD_RESOURCES),
    mergeMap(({ reducers }) =>
      Promise.all([
        ...rmap(async (reducer) => {
          await reducerRegistry.add(reducer);

          return reducer;
        }, reducers),
      ])
    ),
    map(reducersLoaded),
    logObservableError("epics :: lazyResources :: loadReducersEpic", logger)
  );

// loadEpicsEpic :: Epic -> Observable Action EPICS_LOADED
export const loadEpicsEpic = (action$, state$, { epicRegistry, logger }) =>
  action$.pipe(
    ofType(LOAD_RESOURCES),
    mergeMap(({ epics }) =>
      Promise.all([
        ...rmap(async (epic) => {
          await epicRegistry.add(epic);

          return epic;
        }, epics),
      ])
    ),
    map(epicsLoaded),
    logObservableError("epics :: lazyResources :: loadEpicsEpic", logger)
  );

export default combineEpics(loadReducersEpic, loadEpicsEpic);
