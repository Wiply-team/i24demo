import { BehaviorSubject, Subject, mergeMap } from "rxjs";
import { apply, compose, pipe, values } from "ramda";
import adapex from "./adapex";
import antiAdBlocker from "./antiAdBlocker";
import categories from "./categories";
import { combineEpics } from "redux-observable";
import consentManagement from "./consentManagement";
import errorBoundary from "./errorBoundary";
import facebookPixel from "./facebookPixel";
import googleTags from "./googleTags";
import header from "./header";
import intersectionObserver from "./intersectionObserver";
import lazyComponents from "./lazyComponents";
import lazyResources from "./lazyResources";
import metas from "./metas";
import minute from "./minute";
import router from "./router";
import scripts from "./scripts";
import session from "./session";
import taboola from "./taboola";
import teads from "./teads";
import toastr from "./toastr";
import user from "./user";

// When adding a new set of epics you should decide if the epic is needed on
// the whole app or just on some pages. If it's needed on the whole app you can
// add it under the list of static epics else, you can add it under the list of
// async epics and load it using the ResourceLoader component (see other async
// epics examples).

// staticEpics :: Object
const staticEpics = {
  adapex,
  antiAdBlocker,
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
  minute,
  router,
  session,
  taboola,
  teads,
  toastr,
  user,
};

// asyncEpics :: Object
const asyncEpics = {
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
  channels: () => import("./channels"),
  comment: () => import("./comment"),
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
  schedules: () => import("./schedules"),
  specialPage: () => import("./specialPage"),
  tag: () => import("./tag"),
  tags: () => import("./tags"),
  topArticles: () => import("./topArticles"),
  x: () => import("./x"),
  activateAccount: () => import("./activateAccount"),
};

export const consentManagementTcData$ = new Subject("TCData");
export const intersectionObserverTargetChange$ = new Subject(
  "IntersectionObserverTargetChange"
);
export const brightcoveVideoPlayed$ = new Subject("BrightcoveVideoPlayed");

// createEpicResigtry :: _ -> EpicRegistry
export default () =>
  pipe(
    compose(apply(combineEpics), values),
    (staticEpics) => {
      return new BehaviorSubject(staticEpics);
    },
    (epic$) => ({
      _epic$: epic$,
      _rootEpic: combineEpics((action$, state$, dependencies) =>
        epic$.pipe(mergeMap((epic) => epic(action$, state$, dependencies)))
      ),
      _loadedEpics: { ...staticEpics },

      getRootEpic: function () {
        return this._rootEpic;
      },

      addAll: async function () {
        for (let key in asyncEpics) {
          await this.add(key);
        }
      },

      add: async function (key) {
        if (!key || this._loadedEpics[key]) {
          return;
        }

        if (!asyncEpics[key]) {
          throw new Error(`Invalid epic ${key}.`);
        }

        const epic = await asyncEpics[key]();

        // Again the same check to avoid double imports in case of the same
        // epic requested multiple times in a very short timespan.
        if (this._loadedEpics[key]) {
          return;
        }

        this._loadedEpics[key] = epic;

        this._epic$.next(epic.default);
      },
    })
  )(staticEpics);
