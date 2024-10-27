import { always } from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

export const INITIAL_STATE = {
  isFetching: true,
  content: {
    category: {
      parent: null,
    },
    createdAt: null,
    components: [],
    excerpt: null,
    id: null,
    image: null,
    link: null,
    metaDescription: null,
    metaTitle: null,
    publishedAt: null,
    readingTime: 0,
    signatures: [],
    title: null,
    hasEvents: false,
    updatedAt: null,
    video: null,
    numberOfComments: 0,
    commentsDisabled: false,
  },
  redirected: false,
  readingProgress: 0,
  showShareIcons: false,
  error: null,
};

// action types
export const FETCH_ARTICLE = "article/FETCH_ARTICLE";
export const ARTICLE_RECEIVED = "article/ARTICLE_RECEIVED";
export const SCROLL_TO_COMMENT_BOX = "article/SCROLL_TO_COMMENT_BOX";
export const UPDATE_READING_PROGRESS = "article/UPDATE_READING_PROGRESS";
export const SHOW_SHARE_ICONS = "article/SHOW_SHARE_ICONS";
export const HIDE_SHARE_ICONS = "article/HIDE_SHARE_ICONS";
export const CLEAN = "article/CLEAN";
export const ERROR = "article/ERROR";

// fetchArticle :: String -> Action
export const fetchArticle = (slug) => ({
  type: FETCH_ARTICLE,
  slug,
});

// articleReceived :: (Object, Boolean) -> Action.ARTICLE_RECEIVED
export const articleReceived = (content, shouldRedirect) => ({
  type: ARTICLE_RECEIVED,
  content,
  shouldRedirect,
});

// scrollToCommentBox :: () -> Action.SCROLL_TO_COMMENT_BOX
export const scrollToCommentBox = always({ type: SCROLL_TO_COMMENT_BOX });

// updateReadingProgress :: Number -> Action
export const updateReadingProgress = (percentage) => ({
  type: UPDATE_READING_PROGRESS,
  percentage,
});

// showShareIcons :: () -> Action
export const showShareIcons = always({ type: SHOW_SHARE_ICONS });

// hideShareIcons :: () -> Action
export const hideShareIcons = always({ type: HIDE_SHARE_ICONS });

// clean :: () -> Action.CLEAN
export const clean = always({ type: CLEAN });

// error :: Error -> Action
export const error = (error) => ({
  type: ERROR,
  error,
});

// article :: (State, Action *) -> State
export default createReducer(INITIAL_STATE, {
  [FETCH_ARTICLE]: (state) => ({
    ...state,
    isFetching: true,
    error: null,
  }),

  [ARTICLE_RECEIVED]: (state, { content, shouldRedirect }) => ({
    ...state,
    isFetching: false,
    content,
    redirected: shouldRedirect,
    error: null,
  }),

  [UPDATE_READING_PROGRESS]: (state, { percentage }) => ({
    ...state,
    readingProgress: percentage,
  }),

  [SHOW_SHARE_ICONS]: (state) => ({
    ...state,
    showShareIcons: true,
  }),

  [HIDE_SHARE_ICONS]: (state) => ({
    ...state,
    showShareIcons: false,
  }),

  [ERROR]: (state, { error }) => ({
    ...state,
    isFetching: false,
    error,
  }),

  [CLEAN]: always(INITIAL_STATE),
});
