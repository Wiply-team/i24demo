import { F, T, always, cond, lt, lte } from "ramda";
import { createReducer } from "../../utilities/miscellaneous";

export const INITIAL_STATE = {
  showNativeAppBanner: false,
  nativeAppLink: null,
  scrollTop: null,
  collapsed: false,
};

export const TOGGLE_COLLAPSED = "header/TOGGLE_COLLAPSED";
export const BREADCRUMB_LOADED = "header/BREADCRUMB_LOADED";
export const INIT_NATIVE_APP_BANNER = "header/INIT_NATIVE_APP_BANNER";
export const SHOW_NATIVE_APP_BANNER = "header/SHOW_NATIVE_APP_BANNER";
export const HIDE_NATIVE_APP_BANNER = "header/HIDE_NATIVE_APP_BANNER";
export const INJECT_IMAGE_PRELOAD_HINTS = "header/INJECT_IMAGE_PRELOAD_HINTS";
export const INJECT_ARTICLE_SCHEMA = "header/INJECT_ARTICLE_SCHEMA";
export const INJECT_BRIGHTCOVE_VIDEO_SCHEMA =
  "header/INJECT_BRIGHTCOVE_VIDEO_SCHEMA";
export const INJECT_TIMELINE_SCHEMA = "header/INJECT_TIMELINE_SCHEMA";
export const INJECT_YOUTUBE_SCHEMA = "header/INJECT_YOUTUBE_SCHEMA";
export const INJECT_SCHEMA = "header/INJECT_SCHEMA";
export const INJECT_AUTHOR_SCHEMA = "header/INJECT_AUTHOR_SCHEMA";

// toggleCollapsed :: Number -> Action
export const toggleCollapsed = (scrollTop) => ({
  type: TOGGLE_COLLAPSED,
  scrollTop: scrollTop ?? 0,
});

// breadcrumbLoaded :: Array -> Action
export const breadcrumbLoaded = (crumbs) => ({
  type: BREADCRUMB_LOADED,
  crumbs,
});

// initNativeAppBanner :: () -> Action
export const initNativeAppBanner = always({ type: INIT_NATIVE_APP_BANNER });

// showNativeAppBanner :: String -> Action
export const showNativeAppBanner = (link) => ({
  type: SHOW_NATIVE_APP_BANNER,
  link,
});

// hideNativeAppBanner :: () -> Action
export const hideNativeAppBanner = always({ type: HIDE_NATIVE_APP_BANNER });

// injectArticleSchema :: Object -> Action.INJECT_ARTICLE_SCHEMA
export const injectArticleSchema = (article) => ({
  type: INJECT_ARTICLE_SCHEMA,
  article,
});

// injectBrightcoveVideoSchema :: String -> Action
export const injectBrightcoveVideoSchema = (videoId) => ({
  type: INJECT_BRIGHTCOVE_VIDEO_SCHEMA,
  videoId,
});

// injectTimelineSchema :: (Array, String) -> Action
export const injectTimelineSchema = (events, location) => ({
  type: INJECT_TIMELINE_SCHEMA,
  events,
  location,
});

// injectAuthorSchema :: Object -> Action
export const injectAuthorSchema = (author) => ({
  type: INJECT_AUTHOR_SCHEMA,
  author,
});

// injectYoutubeSchema :: String -> Action.INJECT_YOUTUBE_SCHEMA
export const injectYoutubeSchema = (src) => ({
  type: INJECT_YOUTUBE_SCHEMA,
  src,
});

// injectSchema :: String -> Action
export const injectSchema = (schema) => ({
  type: INJECT_SCHEMA,
  schema,
});

// injectImagePreloadHints :: (String, [Source]) -> Action
export const injectImagePreloadHints = (src, sources) => ({
  type: INJECT_IMAGE_PRELOAD_HINTS,
  src,
  sources,
});

export default createReducer(INITIAL_STATE, {
  [TOGGLE_COLLAPSED]: (state, { scrollTop }) => ({
    ...state,
    scrollTop: Math.max(0, scrollTop),
    collapsed: cond([
      [lt(state.scrollTop), T],
      [lte(0), F],
      [T, () => state.collapsed],
    ])(scrollTop),
  }),

  [SHOW_NATIVE_APP_BANNER]: (state, { link }) => ({
    ...state,
    showNativeAppBanner: true,
    nativeAppLink: link,
  }),

  [HIDE_NATIVE_APP_BANNER]: (state) => ({
    ...state,
    showNativeAppBanner: false,
  }),
});
