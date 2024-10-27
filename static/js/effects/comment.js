import {
  CONFIRM_DELETE,
  COMMENT_DELETED,
  DISLIKE_COMMENT,
  FETCH_COMMENTS,
  LIKE_COMMENT,
  SEND_COMMENT,
  TOGGLE_COMMENT_THREAD,
  UNDISLIKE_COMMENT,
  UNLIKE_COMMENT,
  commentDeleted,
  error,
  fetchComments,
  likeDislikeError,
  likeDislikeSuccess,
  receiveNewComment,
  receivedComments,
} from "../store/modules/comments";
import {
  T,
  __,
  allPass,
  complement,
  compose,
  cond,
  defaultTo,
  equals,
  find,
  ifElse,
  isEmpty,
  isNil,
  join,
  path,
  pathEq,
  pathOr,
  pipe,
  propEq,
  propOr,
} from "ramda";
import { combineEpics, ofType } from "redux-observable";
import { filter, map, mergeMap, tap, withLatestFrom } from "rxjs";
import { validatedCommentStatus } from "../utilities/constants";
import {
  logObservableError,
  logObservableErrorAndTriggerAction,
} from "../utilities/logs";
import { jsonStringify } from "../utilities/strings";

// resolvePage :: (Object, Number) => Number
const resolvePage = (commentsState, threadId) =>
  ifElse(
    isNil,
    () => commentsState.page,
    () =>
      compose(
        pathOr(1, ["thread", "page"]),
        find(propEq(threadId, "id"))
      )(commentsState.list)
  )(threadId);

// fetchCommentsEpic :: Epic -> Observable Action.RECEIVED_COMMENTS
export const fetchCommentsEpic = (action$, state$, { fetchApi, logger }) =>
  action$.pipe(
    ofType(FETCH_COMMENTS),
    withLatestFrom(state$),
    filter(([_, state]) => state.article.content.id),
    mergeMap(([{ threadId }, state]) =>
      Promise.all([
        fetchApi(
          join("", [
            `/v2/${state.router.locale}/comments`,
            `?page=${resolvePage(state.comments, threadId)}`,
            `&contentId=${state.article.content.id}`,
            "&limit=3",
            "&sort=-createdAt",
            "&countable=1",
            threadId ? `&threadId=${threadId}` : "",
          ])
        ),
        threadId,
      ])
    ),
    map(([response, threadId]) => ({
      comments: propOr([], "body")(response),
      total: defaultTo(0, response.headers.get("Total-Result")),
      threadId,
    })),
    map(({ comments, total, threadId }) =>
      receivedComments(comments, total, threadId)
    ),
    logObservableErrorAndTriggerAction(
      "comment :: fetchCommentsEpic",
      error,
      logger
    )
  );

// fetchCommentsWhenCommentDeletedEpic :: Epic -> Observable Action.FETCH_COMMENTS
export const fetchCommentsWhenCommentDeletedEpic = (
  action$,
  state$,
  { logger }
) =>
  action$.pipe(
    ofType(COMMENT_DELETED),
    filter(
      ({ deletedComment }) => deletedComment.status !== validatedCommentStatus
    ),
    map(({ threadId }) => fetchComments(threadId)),
    logObservableError("comment :: fetchCommentsWhenCommentDeletedEpic", logger)
  );

// sendCommentEpic :: Epic -> Observable Action.RECEIVED_NEW_COMMENT
export const sendCommentEpic = (action$, state$, { fetchApi, logger }) =>
  action$.pipe(
    ofType(SEND_COMMENT),
    withLatestFrom(state$),
    mergeMap(([{ message, threadId, onSuccess }, state]) =>
      Promise.all([
        fetchApi(`/v2/${state.router.locale}/comments`, {
          method: "POST",
          body: jsonStringify({
            message,
            content: state.article.content.id,
            thread: threadId,
          }),
        }),
        threadId,
        onSuccess,
      ])
    ),
    tap(([response, threadId, onSuccess]) => onSuccess()),
    map(([response, threadId]) => receiveNewComment(response.body, threadId)),
    logObservableErrorAndTriggerAction(
      "comment :: sendCommentEpic",
      error,
      logger
    )
  );

// deleteCommentEpic :: Epic -> Observable Action COMMENT_DELETED
export const deleteCommentEpic = (action$, state$, { fetchApi, logger }) =>
  action$.pipe(
    ofType(CONFIRM_DELETE),
    withLatestFrom(state$),
    mergeMap(([{ id, threadId }, state]) =>
      Promise.all([
        fetchApi(`/v2/${state.router.locale}/comments/${id}`, {
          method: "DELETE",
        }),
        threadId,
      ])
    ),
    map(([response, threadId]) => commentDeleted(response.body, threadId)),
    logObservableErrorAndTriggerAction(
      "comment :: deleteCommentEpic",
      error,
      logger
    )
  );

const likeDislikeComment = (fetchApi) =>
  cond([
    [
      equals(__, LIKE_COMMENT),
      (_, locale, id) =>
        fetchApi(`/v2/${locale}/comments/${id}/like`, { method: "POST" }),
    ],
    [
      equals(__, DISLIKE_COMMENT),
      (_, locale, id) =>
        fetchApi(`/v2/${locale}/comments/${id}/dislike`, { method: "POST" }),
    ],
    [
      equals(__, UNLIKE_COMMENT),
      (_, locale, id) =>
        fetchApi(`/v2/${locale}/comments/${id}/like`, { method: "DELETE" }),
    ],
    [
      equals(__, UNDISLIKE_COMMENT),
      (_, locale, id) =>
        fetchApi(`/v2/${locale}/comments/${id}/dislike`, { method: "DELETE" }),
    ],
    [
      T,
      (type) => {
        throw new Error(`Unsupported action type "${type}"`);
      },
    ],
  ]);

// likeDislikeCommentEpic :: Epic -> Observable Action.LIKE_DISLIKE_SUCCESS Action.LIKE_DISLIKE_ERROR
export const likeDislikeCommentEpic = (action$, state$, { fetchApi, logger }) =>
  action$.pipe(
    ofType(LIKE_COMMENT, DISLIKE_COMMENT, UNLIKE_COMMENT, UNDISLIKE_COMMENT),
    withLatestFrom(state$),
    mergeMap(([{ id, threadId, type }, state]) =>
      likeDislikeComment(fetchApi)(type, state.router.locale, id)
        .then(() => likeDislikeSuccess(id, threadId))
        .catch((err) => likeDislikeError(id, err, threadId))
    ),
    logObservableError("comment :: likeDislikeCommentEpic", logger)
  );

// fetchThreadCommentsIfEmptyWhenToggleThreadEpic :: Epic -> Observable Action.FETCH_COMMENTS
export const fetchThreadCommentsIfEmptyWhenToggleThreadEpic = (
  action$,
  state$,
  { logger }
) =>
  action$.pipe(
    ofType(TOGGLE_COMMENT_THREAD),
    withLatestFrom(state$),
    filter(([{ commentId }, state]) =>
      pipe(
        find(propEq(commentId, "id")),
        allPass([
          complement(isNil),
          pathEq(true, ["thread", "isOpen"]),
          compose(isEmpty, path(["thread", "list"])),
        ])
      )(state.comments.list)
    ),
    map(([{ commentId }]) => fetchComments(commentId)),
    logObservableError(
      "comment :: fetchThreadCommentsIfEmptyWhenToggleThreadEpic",
      logger
    )
  );

export default combineEpics(
  deleteCommentEpic,
  fetchCommentsEpic,
  fetchCommentsWhenCommentDeletedEpic,
  sendCommentEpic,
  likeDislikeCommentEpic,
  fetchThreadCommentsIfEmptyWhenToggleThreadEpic
);
