import adapex from "./adapex";
import app from "./app";
import categories from "./categories";
import { combineReducers } from "redux";
import consentManagement from "./consentManagement";
import errorBoundary from "./errorBoundary";
import { evolve } from "ramda";
import facebookPixel from "./facebookPixel";
import googleTags from "./googleTags";
import header from "./header";
import intersectionObserver from "./intersectionObserver";
import lazyComponents from "./lazyComponents";
import lazyResources from "./lazyResources";
import metas from "./metas";
import router from "./router";
import scripts from "./scripts";
import session from "./session";
import taboola from "./taboola";
import toastr from "./toastr";

// When adding a new reducer you should decide if the reducer is needed on the
// whole app or just on some pages. If it's needed on the whole app you add it
// under the list of static reducers else, you can add it under the list of
// async reducers and load it using the ResourceLoader component (see other
// async reducers examples).

const staticReducers = {
  adapex,
  app,
  scripts,
  categories,
  consentManagement,
  errorBoundary,
  facebookPixel,
  googleTags,
  header,
  intersectionObserver,
  lazyComponents,
  lazyResources,
  metas,
  router,
  session,
  taboola,
  toastr,
};

const asyncReducers = {
  areas: () => import("./areas"),
  article: () => import("./article"),
  articlesWidgets: () => import("./articlesWidgets"),
  asideNewsFeed: () => import("./asideNewsFeed"),
  author: () => import("./author"),
  authors: () => import("./authors"),
  banner: () => import("./banner"),
  biographies: () => import("./biographies"),
  biography: () => import("./biography"),
  bookmarks: () => import("./bookmarks"),
  breakingNews: () => import("./breakingNews"),
  brightcoveVideo: () => import("./brightcoveVideo"),
  brightcoveRadio: () => import("./brightcoveRadio"),
  category: () => import("./category"),
  channel: () => import("./channel"),
  comments: () => import("./comments"),
  contact: () => import("./contact"),
  events: () => import("./events"),
  facebook: () => import("./facebook"),
  featuredCategories: () => import("./featuredCategories"),
  headlines: () => import("./headlines"),
  homepage: () => import("./homepage"),
  latestVideos: () => import("./latestVideos"),
  leadership: () => import("./leadership"),
  legalTexts: () => import("./legalTexts"),
  liveUpdatingShowList: () => import("./liveUpdatingShowList"),
  marketingShows: () => import("./marketingShows"),
  missingPersons: () => import("./missingPersons"),
  newsFeed: () => import("./newsFeed"),
  newsletter: () => import("./newsletter"),
  pageNotFound: () => import("./pageNotFound"),
  pagination: () => import("./pagination"),
  profile: () => import("./profile"),
  resetPassword: () => import("./resetPassword"),
  search: () => import("./search"),
  schedule: () => import("./schedule"),
  specialPage: () => import("./specialPage"),
  tag: () => import("./tag"),
  tags: () => import("./tags"),
  topArticles: () => import("./topArticles"),
  x: () => import("./x"),
  activateAccount: () => import("./activateAccount"),
};

const debugState = (logger, reducerRegistry) =>
  evolve({
    reduce: (reduce) => (state, action) => {
      logger.log("ACTION:", action);
      const newState = reduce(state, action);
      logger.log("NEW STATE:", newState);

      return newState;
    },
  })(reducerRegistry);

// createReducerRegistry :: Logger -> ReducerRegistry
export default function (logger) {
  const reducers = { ...staticReducers };

  let combinedReducer = combineReducers(reducers);

  const registry = {
    getReducerMap: () => reducers,

    reduce: (state, action) => {
      return combinedReducer(state, action);
    },

    addAll: async function () {
      for (let key in asyncReducers) {
        await this.add(key);
      }
    },

    add: async (key) => {
      if (!key || reducers[key]) {
        return;
      }

      if (!asyncReducers[key]) {
        throw new Error(`Invalid reducer ${key}.`);
      }

      const reducer = await asyncReducers[key]();

      // Again the same check to avoid double imports in case of the same
      // reducer requested multiple times in a very short timespan.
      if (reducers[key]) {
        return;
      }

      reducers[key] = reducer.default;

      combinedReducer = combineReducers(reducers);
    },
  };

  return Number(process.env.REACT_APP_DEBUG_STATE)
    ? debugState(logger, registry)
    : registry;
}
