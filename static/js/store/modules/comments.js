import {
  __,
  add,
  adjust,
  always,
  assoc,
  concat,
  dropLast,
  findIndex,
  ifElse,
  isNil,
  map,
  pathOr,
  pipe,
  prepend,
  prop,
  propEq,
  subtract,
  when,
} from "ramda";
import { validatedCommentStatus } from "../../utilities/constants";
import { safeDate } from "../../utilities/datetimes";
import { createReducer } from "../../utilities/miscellaneous";

// initial state
export const INITIAL_STATE = {
  total: 0,
  list: [],
  loading: false,
  deleting: false,
  page: 0,
  sending: false,
  error: false,
  commentToBeDeleted: null,
};

// action types
export const FETCH_COMMENTS = "article/comments/FETCH";
export const RECEIVED_COMMENTS = "article/comments/RECEIVED";
export const SEND_COMMENT = "article/comments/SEND_COMMENT";
export const RECEIVE_NEW_COMMENT = "article/comments/RECEIVED_NEW";
export const TOGGLE_COMMENT_THREAD = "article/comments/TOGGLE_THREAD";
export const TOGGLE_COMMENT_FORM_THREAD = "article/comments/TOGGLE_FORM_THREAD";
export const ERROR = "article/comments/ERROR";
export const LIKE_DISLIKE_ERROR = "article/comments/LIKE_DISLIKE_ERROR";
export const LIKE_DISLIKE_SUCCESS = "article/comments/LIKE_DISLIKE_SUCCESS";
export const DELETE_COMMENT = "article/comments/DELETE_COMMENT";
export const CONFIRM_DELETE = "article/comments/CONFIRM_DELETE";
export const CANCEL_DELETE = "article/comments/CANCEL_DELETE";
export const COMMENT_DELETED = "article/comments/COMMENT_DELETED";
export const LIKE_COMMENT = "article/comments/LIKE_COMMENT";
export const DISLIKE_COMMENT = "article/comments/DISLIKE_COMMENT";
export const UNLIKE_COMMENT = "article/comments/UNLIKE_COMMENT";
export const UNDISLIKE_COMMENT = "article/comments/UNDISLIKE_COMMENT";
export const CLEAN = "article/comments/CLEAN";

// fetchComments :: (Number) -> Action
export const fetchComments = (threadId = null) => ({
  type: FETCH_COMMENTS,
  threadId,
});

// receivedComments :: ([Comment], Number) -> Action
export const receivedComments = (list, total, threadId = null) => ({
  type: RECEIVED_COMMENTS,
  list,
  total,
  threadId,
});

// sendComment :: (String, Number, Function) -> Action
export const sendComment = (message, threadId = null, onSuccess) => ({
  type: SEND_COMMENT,
  message,
  threadId,
  onSuccess,
});

// receiveNewComment :: (Comment, Number) -> Action
export const receiveNewComment = (newComment, threadId = null) => ({
  type: RECEIVE_NEW_COMMENT,
  newComment,
  threadId,
});

// error :: Error -> Action
export const error = (er) => ({
  type: ERROR,
  error: er,
});

// likeDislikeError :: (Number, Error, Number) -> Action
export const likeDislikeError = (id, error, threadId = null) => ({
  type: LIKE_DISLIKE_ERROR,
  id,
  error,
  threadId,
});

// likeDislikeSuccess :: (Number, Number) -> Action
export const likeDislikeSuccess = (id, threadId = null) => ({
  type: LIKE_DISLIKE_SUCCESS,
  id,
  threadId,
});

// toggleCommentThread :: Number -> Action
export const toggleCommentThread = (commentId) => ({
  type: TOGGLE_COMMENT_THREAD,
  commentId,
});

// toggleCommentFormThread :: Number -> Action
export const toggleCommentFormThread = (commentId) => ({
  type: TOGGLE_COMMENT_FORM_THREAD,
  commentId,
});

// deleteComment :: Number -> Action
export const deleteComment = (id) => ({
  type: DELETE_COMMENT,
  id,
});

// confirmDelete :: (Number, Number) -> Action
export const confirmDelete = (id, threadId = null) => ({
  type: CONFIRM_DELETE,
  id,
  threadId,
});

// cancelDelete :: () -> Action
export const cancelDelete = always({ type: CANCEL_DELETE });

// commentDeleted :: (Comment, Number) -> Action
export const commentDeleted = (deletedComment, threadId = null) => ({
  type: COMMENT_DELETED,
  deletedComment,
  threadId,
});

// likeComment :: (Number, Number) -> Action
export const likeComment = (id, threadId = null) => ({
  type: LIKE_COMMENT,
  id,
  threadId,
});

// dislikeComment :: (Number, Number) -> Action
export const dislikeComment = (id, threadId = null) => ({
  type: DISLIKE_COMMENT,
  id,
  threadId,
});

// unlikeComment :: (Number, Number) -> Action
export const unlikeComment = (id, threadId = null) => ({
  type: UNLIKE_COMMENT,
  id,
  threadId,
});

// undislikeComment :: (Number, Number) -> Action
export const undislikeComment = (id, threadId = null) => ({
  type: UNDISLIKE_COMMENT,
  id,
  threadId,
});

// clean :: () -> Action
export const clean = always({ type: CLEAN });

// formatCommentToList :: Comment -> Comment
const formatCommentToList = (comment) => ({
  id: comment.id,
  isFetchingLikeDislike: false,
  message: comment.message,
  at: safeDate(comment.createdAt),
  author: {
    image: pathOr(null, ["user", "image", "href"], comment),
    id: pathOr(null, ["user", "id"], comment),
    name: comment.user ? comment.user.name : null,
  },
  authorHash: comment.authorHash,
  validated: comment.status === validatedCommentStatus,
  likes: comment.likes,
  dislikes: comment.dislikes,
  liked: comment.liked,
  disliked: comment.disliked,
  previousLikes: null,
  previousLikedStatus: null,
  previousDislikes: null,
  previousDislikedStatus: null,
  isDeleted: comment.isDeleted,
  thread: {
    list: [],
    isOpen: false,
    isFormOpen: false,
    loading: false,
    sending: false,
    page: 0,
    total: Number(comment.totalReplies),
  },
});

// updateListElementById :: (Number, Function) -> Array -> Array
const updateListElementById = (id, callable) => (list) =>
  pipe(findIndex(propEq(id, "id")), (i) =>
    when(
      () => i >= 0,
      (list) => callable(i, list)
    )(list)
  )(list);

// updateMain :: (Object, Function, Number) -> Object
const updateMain = (state, callable, id) =>
  pipe(
    prop("list"),
    updateListElementById(id, (i, list) => adjust(i, callable, list)),
    assoc("list", __, state)
  )(state);

// updateReply :: (Object, Function, Number, Number) -> Object
const updateReply = (state, callable, id, threadId) =>
  pipe(
    prop("list"),
    updateListElementById(threadId, (i, list) =>
      adjust(
        i,
        (comment) => ({
          ...comment,
          thread: updateMain(comment.thread, callable, id),
        }),
        list
      )
    ),
    assoc("list", __, state)
  )(state);

// updateComment :: (Object, Function, Number, Number) -> Object
const updateComment = (state, callable, id, threadId = null) =>
  ifElse(
    isNil,
    () => updateMain(state, callable, id),
    () => updateReply(state, callable, id, threadId)
  )(threadId);

// shouldAddNewComment :: (Number, Number) -> Boolean
const shouldAddNewThreadComment = (total, totalLoaded) =>
  !(totalLoaded === 0 && total > 0);

// shouldDropLastComment :: (Number, Number) -> Boolean
const shouldDropLastComment = (total, totalLoaded) => totalLoaded < total;

// comments :: (State, Action *) -> State
export default createReducer(INITIAL_STATE, {
  [FETCH_COMMENTS]: (state, { threadId }) => ({
    ...state,
    ...ifElse(
      isNil,
      () => ({
        ...state,
        loading: true,
        page: add(state.page, 1),
      }),
      () =>
        updateComment(
          state,
          (comment) => ({
            ...comment,
            thread: {
              ...comment.thread,
              loading: true,
              page: add(comment.thread.page, 1),
            },
          }),
          threadId
        )
    )(threadId),
    error: false,
  }),

  [RECEIVED_COMMENTS]: (state, { list, total, threadId }) => ({
    ...state,
    ...ifElse(
      isNil,
      () => ({
        ...state,
        list: concat(state.list, map(formatCommentToList)(list)),
        total: total,
        loading: false,
      }),
      () =>
        updateComment(
          state,
          (comment) => ({
            ...comment,
            thread: {
              ...comment.thread,
              list: concat(comment.thread.list, map(formatCommentToList)(list)),
              isOpen:
                comment.thread.list.length === 0 ? true : comment.thread.isOpen,
              loading: false,
              total,
            },
          }),
          threadId
        )
    )(threadId),
    error: false,
  }),

  [SEND_COMMENT]: (state, { threadId }) => ({
    ...state,
    ...ifElse(
      isNil,
      () => ({
        ...state,
        sending: true,
      }),
      () =>
        updateComment(
          state,
          (comment) => ({
            ...comment,
            thread: {
              ...comment.thread,
              sending: true,
            },
          }),
          threadId
        )
    )(threadId),
    error: false,
  }),

  [RECEIVE_NEW_COMMENT]: (state, { newComment, threadId }) =>
    ifElse(
      isNil,
      () => ({
        ...state,
        total: add(state.total, 1),
        sending: false,
        list: pipe(
          prepend(formatCommentToList(newComment)),
          when(
            () => shouldDropLastComment(state.total, state.list.length),
            dropLast(1)
          )
        )(state.list),
      }),
      () =>
        updateComment(
          state,
          (comment) => ({
            ...comment,
            thread: {
              ...comment.thread,
              list: pipe(
                when(
                  () =>
                    shouldAddNewThreadComment(
                      comment.thread.total,
                      comment.thread.list.length
                    ),
                  prepend(formatCommentToList(newComment))
                ),
                when(
                  () =>
                    shouldDropLastComment(
                      comment.thread.total,
                      comment.thread.list.length
                    ),
                  dropLast(1)
                )
              )(comment.thread.list),
              isOpen: comment.thread.total === 0 ? true : comment.thread.isOpen,
              sending: false,
              total: add(comment.thread.total, 1),
            },
          }),
          threadId
        )
    )(threadId),

  [ERROR]: (state) => ({
    ...state,
    error: true,
    sending: false,
    loading: false,
    deleting: false,
  }),

  [TOGGLE_COMMENT_THREAD]: (state, { commentId }) =>
    updateComment(
      state,
      (comment) => ({
        ...comment,
        thread: {
          ...comment.thread,
          isOpen: !comment.thread.isOpen,
          list: map((threadComment) => ({
            ...threadComment,
          }))(comment.thread.list),
        },
      }),
      commentId
    ),

  [TOGGLE_COMMENT_FORM_THREAD]: (state, { commentId }) =>
    updateComment(
      state,
      (comment) => ({
        ...comment,
        thread: {
          ...comment.thread,
          isFormOpen: !comment.thread.isFormOpen,
        },
      }),
      commentId
    ),

  [DELETE_COMMENT]: (state, { id }) => ({
    ...state,
    commentToBeDeleted: id,
  }),

  [CANCEL_DELETE]: (state) => ({
    ...state,
    commentToBeDeleted: null,
  }),

  [CONFIRM_DELETE]: (state) => ({
    ...state,
    error: false,
    deleting: true,
  }),

  [COMMENT_DELETED]: (state, { deletedComment, threadId }) => ({
    ...state,
    ...ifElse(
      isNil,
      () =>
        deletedComment.status !== validatedCommentStatus
          ? { page: 0, loading: true, list: [] }
          : {
              list: updateListElementById(deletedComment.id, (i, list) =>
                adjust(i, () => formatCommentToList(deletedComment), list)
              )(state.list),
            },
      () =>
        updateComment(
          state,
          (comment) => ({
            ...comment,
            thread:
              deletedComment.status !== validatedCommentStatus
                ? { ...comment.thread, page: 0, loading: true, list: [] }
                : {
                    ...comment.thread,
                    list: updateListElementById(deletedComment.id, (i, list) =>
                      adjust(i, () => formatCommentToList(deletedComment), list)
                    )(comment.thread.list),
                  },
          }),
          threadId
        )
    )(threadId),
    commentToBeDeleted: null,
    deleting: false,
    error: false,
  }),

  [LIKE_COMMENT]: (state, { id, threadId }) => ({
    ...updateComment(
      state,
      (comment) => ({
        ...comment,
        isFetchingLikeDislike: true,
        previousLikes: comment.likes,
        previousDislikes: comment.dislikes,
        previousDislikedStatus: comment.disliked,
        previousLikedStatus: comment.liked,
        likes: add(comment.likes, 1),
        liked: true,
        dislikes: comment.disliked
          ? subtract(comment.dislikes, 1)
          : comment.dislikes,
        disliked: false,
      }),
      id,
      threadId
    ),
    error: false,
  }),

  [DISLIKE_COMMENT]: (state, { id, threadId }) => ({
    ...updateComment(
      state,
      (comment) => ({
        ...comment,
        isFetchingLikeDislike: true,
        previousLikes: comment.likes,
        previousDislikes: comment.dislikes,
        previousDislikedStatus: comment.disliked,
        previousLikedStatus: comment.liked,
        likes: comment.liked ? subtract(comment.likes, 1) : comment.likes,
        liked: false,
        dislikes: add(comment.dislikes, 1),
        disliked: true,
      }),
      id,
      threadId
    ),
    error: false,
  }),

  [UNLIKE_COMMENT]: (state, { id, threadId }) => ({
    ...updateComment(
      state,
      (comment) => ({
        ...comment,
        isFetchingLikeDislike: true,
        previousLikes: comment.likes,
        previousDislikes: comment.dislikes,
        previousDislikedStatus: comment.disliked,
        previousLikedStatus: comment.liked,
        likes: subtract(comment.likes, 1),
        liked: false,
      }),
      id,
      threadId
    ),
    error: false,
  }),

  [UNDISLIKE_COMMENT]: (state, { id, threadId }) => ({
    ...updateComment(
      state,
      (comment) => ({
        ...comment,
        isFetchingLikeDislike: true,
        previousLikes: comment.likes,
        previousDislikes: comment.dislikes,
        previousDislikedStatus: comment.disliked,
        previousLikedStatus: comment.liked,
        dislikes: subtract(comment.dislikes, 1),
        disliked: false,
      }),
      id,
      threadId
    ),
    error: false,
  }),

  [LIKE_DISLIKE_ERROR]: (state, { id, threadId }) => ({
    ...updateComment(
      state,
      (comment) => ({
        ...comment,
        isFetchingLikeDislike: false,
        likes: comment.previousLikes,
        liked: comment.previousLikedStatus,
        dislikes: comment.previousDislikes,
        disliked: comment.previousDislikedStatus,
        previousLikes: null,
        previousLikedStatus: null,
        previousDislikes: null,
        previousDislikedStatus: null,
      }),
      id,
      threadId
    ),
    error: true,
  }),

  [LIKE_DISLIKE_SUCCESS]: (state, { id, threadId }) => ({
    ...updateComment(
      state,
      (comment) => ({
        ...comment,
        isFetchingLikeDislike: false,
        previousLikes: null,
        previousLikedStatus: null,
        previousDislikes: null,
        previousDislikedStatus: null,
      }),
      id,
      threadId
    ),
    error: false,
  }),

  [CLEAN]: always(INITIAL_STATE),
});
