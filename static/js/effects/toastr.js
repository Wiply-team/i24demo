import { ADD_TOAST, CLOSE_TOAST, removeToast } from "../store/modules/toastr";
import { combineEpics, ofType } from "redux-observable";
import { delayWhen, filter, map, tap, timer } from "rxjs";
import { isNil } from "ramda";
import { logObservableError } from "../utilities/logs";

// autoCloseToastEpic :: Epic -> Observable Action.REMOVE_TOAST
export const autoCloseToastEpic = (action$, state$, { document, logger }) =>
  action$.pipe(
    ofType(ADD_TOAST),
    delayWhen(({ toast }) => timer(Number(toast.duration))),
    map((a) => ({
      ...a,
      element: document.querySelector(`.toastr #toast-${a.toast.id}`),
    })),
    filter(({ element }) => !isNil(element)),
    tap(({ element }) => element.classList.add("closing")),
    // wait for closing animation to complete
    delayWhen(() => timer(Number(450))),
    map(({ toast }) => removeToast(toast.id)),
    logObservableError("toastr :: autoCloseToastEpic", logger)
  );

// closeToastEpic :: Epic -> Observable Action.REMOVE_TOAST
export const closeToastEpic = (action$, state$, { document, logger }) =>
  action$.pipe(
    ofType(CLOSE_TOAST),
    map((a) => ({
      ...a,
      element: document.querySelector(`.toastr #toast-${a.id}`),
    })),
    filter(({ element }) => !isNil(element)),
    tap(({ element }) => element.classList.add("closing")),
    // wait for closing animation to complete
    delayWhen(() => timer(Number(450))),
    map(({ id }) => removeToast(id)),
    logObservableError("toastr :: closeToastEpic", logger)
  );

export default combineEpics(autoCloseToastEpic, closeToastEpic);
