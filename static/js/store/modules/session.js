import {
  always,
  append,
  complement,
  compose,
  equals,
  filter,
  uniq,
} from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

// session initial state
export const INITIAL_STATE = {
  isInitialized: false,
  user: null,
  bookmarks: [],
  isSignInModalOpen: false,
  isFetching: true,
  isSubmitting: false,
  isSuccessfullySubmitted: false,
  error: false,
  unverifiedError: false,
};

export const FETCH_USER = "session/FETCH_USER";
export const USER_RECEIVED = "session/USER_RECEIVED";
export const ANONYMOUS_USER_RECEIVED = "session/ANONYMOUS_USER_RECEIVED";

export const OPEN_SIGN_IN = "session/OPEN_SIGN_IN";
export const CLOSE_SIGN_IN = "session/CLOSE_SIGN_IN";
export const SIGN_IN = "session/SIGN_IN";
export const SIGNED_IN = "session/SIGNED_IN";
export const SIGN_UP = "session/SIGN_UP";
export const SIGNED_UP = "session/SIGNED_UP";
export const SIGN_OUT = "session/SIGN_OUT";
export const SIGNED_OUT = "session/SIGNED_OUT";
export const REQUEST_PASSWORD_RESET = "session/REQUEST_PASSWORD_RESET";
export const PASSWORD_RESET_REQUESTED = "session/PASSWORD_RESET_REQUESTED";

export const EDIT = "session/EDIT";

export const FETCH_BOOKMARKS = "session/FETCH_BOOKMARKS";
export const BOOKMARKS_RECEIVED = "session/BOOKMARKS_RECEIVED";
export const ADD_BOOKMARK = "session/ADD_BOOKMARK";
export const BOOKMARK_ADDED = "session/BOOKMARK_ADDED";
export const REMOVE_BOOKMARK = "session/REMOVE_BOOKMARK";
export const BOOKMARK_REMOVED = "session/BOOKMARK_REMOVED";

export const CLEAR = "session/CLEAR";
export const ERROR = "session/ERROR";
export const UNVERIFIED_ERROR = "session/UNVERIFIED_ERROR";

// fetchUser :: Boolean -> Action.LOAD_ME
export const fetchUser = (shouldRefreshToken) => ({
  type: FETCH_USER,
  shouldRefreshToken: true === shouldRefreshToken,
});

// userReceived :: (User, Boolean) -> Action.USER_RECEIVED
export const userReceived = (user, shouldRefreshToken) => ({
  type: USER_RECEIVED,
  user,
  shouldRefreshToken: true === shouldRefreshToken,
});

// anonymousUserReceived :: () -> Action.ANONYMOUS_USER
export const anonymousUserReceived = always({ type: ANONYMOUS_USER_RECEIVED });

// openSignIn :: () -> Action.OPEN_SIGN_IN
export const openSignIn = always({ type: OPEN_SIGN_IN });

// closeSignIn :: () -> Action.CLOSE_SIGN_IN
export const closeSignIn = always({ type: CLOSE_SIGN_IN });

// signIn :: (String, String) -> Action.SIGN_IN
export const signIn = (username, password) => ({
  type: SIGN_IN,
  username,
  password,
});

// signedIn :: () -> Action.SIGNED_IN
export const signedIn = always({ type: SIGNED_IN });

// signUp :: (String, String, String, Boolean) -> Action SIGN_UP
export const signUp = (
  nickname,
  email,
  password,
  newsletterSubscription,
  captcha
) => ({
  type: SIGN_UP,
  nickname,
  email,
  password,
  newsletterSubscription,
  captcha,
});

// signedUp :: () -> Action SIGNED_UP
export const signedUp = always({ type: SIGNED_UP });

// requestPasswordReset :: String -> Action.REQUEST_PASSWORD_RESET
export const requestPasswordReset = (email) => ({
  type: REQUEST_PASSWORD_RESET,
  email,
});

// passwordResetRequested :: () -> Action.PASSWORD_RESET_REQUESTED
export const passwordResetRequested = always({
  type: PASSWORD_RESET_REQUESTED,
});

// signOut :: () -> Action.SIGN_OUT
export const signOut = always({ type: SIGN_OUT });

// signedOut :: () -> Action.SIGNED_OUT
export const signedOut = always({ type: SIGNED_OUT });

// edit :: User -> Action.EDIT
export const edit = (user) => ({
  type: EDIT,
  user,
});

// fetchBookmarks :: [Number] -> Action.FETCH_BOOKMARKS
export const fetchBookmarks = always({ type: FETCH_BOOKMARKS });

// bookmarksReceived :: [Object] -> Action.BOOKMARKS_RECEIVED
export const bookmarksReceived = (bookmarks) => ({
  type: BOOKMARKS_RECEIVED,
  bookmarks,
});

// addBookmark :: Number -> Action.ADD_BOOKMARK
export const addBookmark = (id) => ({
  type: ADD_BOOKMARK,
  id,
});

// bookmarkAdded :: Number -> Action.BOOKMARK_ADDED
export const bookmarkAdded = (id) => ({
  type: BOOKMARK_ADDED,
  id,
});

// removeBookmark :: Number -> Action.REMOVE_BOOKMARK
export const removeBookmark = (id) => ({
  type: REMOVE_BOOKMARK,
  id,
});

// bookmarkRemoved :: Number -> Action.BOOKMARK_REMOVED
export const bookmarkRemoved = (id) => ({
  type: BOOKMARK_REMOVED,
  id,
});

// clear :: () -> Action.CLEAR
export const clear = always({ type: CLEAR });

// error :: Error -> Action.ERROR
export const error = always({ type: ERROR });

// error :: Error -> Action.UNVERIFIED_ERROR
export const unverifiedError = always({ type: UNVERIFIED_ERROR });

// session :: (State, Action *) -> State
export default createReducer(INITIAL_STATE, {
  [FETCH_USER]: (state) => ({
    ...state,
    isInitialized: false,
    isFetching: true,
  }),

  [USER_RECEIVED]: (state, { user }) => ({
    ...state,
    isInitialized: true,
    isFetching: false,
    user,
  }),

  [ANONYMOUS_USER_RECEIVED]: (state) => ({
    ...state,
    isInitialized: true,
    isFetching: false,
    user: null,
  }),

  [OPEN_SIGN_IN]: (state) => ({
    ...state,
    isSignInModalOpen: true,
  }),

  [CLOSE_SIGN_IN]: (state) => ({
    ...state,
    isSignInModalOpen: false,
  }),

  [SIGN_IN]: (state) => ({
    ...state,
    isSubmitting: true,
    isSuccessfullySubmitted: false,
    error: false,
    unverifiedError: false,
  }),

  [SIGNED_IN]: (state) => ({
    ...state,
    isSubmitting: false,
    isSuccessfullySubmitted: true,
    error: false,
    unverifiedError: false,
  }),

  [SIGN_UP]: (state) => ({
    ...state,
    isSubmitting: true,
    isSuccessfullySubmitted: false,
    error: false,
    unverifiedError: false,
  }),

  [SIGNED_UP]: (state) => ({
    ...state,
    isSubmitting: false,
    isSuccessfullySubmitted: true,
    error: false,
    unverifiedError: false,
  }),

  [SIGN_OUT]: (state) => ({
    ...state,
    isSubmitting: true,
    error: false,
    unverifiedError: false,
  }),

  [SIGNED_OUT]: (state) => ({
    ...state,
    isSubmitting: false,
    user: null,
    bookmarks: [],
    error: false,
    unverifiedError: false,
  }),

  [REQUEST_PASSWORD_RESET]: (state) => ({
    ...state,
    isSubmitting: true,
    isSuccessfullySubmitted: false,
    error: false,
    unverifiedError: false,
  }),

  [PASSWORD_RESET_REQUESTED]: (state) => ({
    ...state,
    isSubmitting: false,
    isSuccessfullySubmitted: true,
    error: false,
    unverifiedError: false,
  }),

  [FETCH_BOOKMARKS]: (state) => ({
    ...state,
    isFetching: true,
  }),

  [BOOKMARKS_RECEIVED]: (state, { bookmarks }) => ({
    ...state,
    bookmarks,
    isFetching: false,
  }),

  [ADD_BOOKMARK]: (state) => ({
    ...state,
    isSubmitting: true,
  }),

  [BOOKMARK_ADDED]: (state, { id }) => ({
    ...state,
    bookmarks: compose(uniq, append(id))(state.bookmarks),
    isSubmitting: false,
  }),

  [REMOVE_BOOKMARK]: (state) => ({
    ...state,
    isSubmitting: true,
  }),

  [BOOKMARK_REMOVED]: (state, { id }) => ({
    ...state,
    bookmarks: filter(complement(equals(id)), state.bookmarks),
    isSubmitting: false,
  }),

  [CLEAR]: (state) => ({
    ...state,
    isSubmitting: false,
    isSuccessfullySubmitted: false,
    error: false,
  }),

  [ERROR]: (state) => ({
    ...state,
    isFetching: false,
    isSubmitting: false,
    isSuccessfullySubmitted: false,
    error: true,
  }),

  [UNVERIFIED_ERROR]: (state) => ({
    ...state,
    isFetching: false,
    isSubmitting: false,
    isSuccessfullySubmitted: false,
    unverifiedError: true,
  }),
});
