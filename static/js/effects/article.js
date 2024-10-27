import {
  ARTICLE_RECEIVED,
  CLEAN,
  FETCH_ARTICLE,
  SCROLL_TO_COMMENT_BOX,
  articleReceived,
  error,
  hideShareIcons,
  showShareIcons,
  updateReadingProgress,
} from "../store/modules/article";
import { INIT_BRIGHTCOVE_LAZY_VIDEO } from "../store/modules/brightcoveVideo";
import {
  T,
  __,
  allPass,
  always,
  anyPass,
  apply,
  complement,
  cond,
  divide,
  equals,
  evolve,
  gt,
  identity,
  includes,
  isNil,
  lt,
  multiply,
  pathOr,
  pick,
  pipe,
  prop,
  subtract,
  test as testRegex,
  values,
} from "ramda";
import { combineEpics, ofType } from "redux-observable";
import {
  debounceTime,
  filter,
  fromEvent,
  ignoreElements,
  map,
  mergeMap,
  switchMap,
  takeUntil,
  tap,
  withLatestFrom,
} from "rxjs";
import {
  logObservableError,
  logObservableErrorAndTriggerAction,
} from "../utilities/logs";
import {
  setCurrentCategory,
  unsetCurrentCategory,
} from "../store/modules/categories";
import { HYDRATION_COMPLETED } from "../store/modules/app";
import { OBSERVER_BRIGHTCOVE_VIDEO } from "../store/dependencies/observersRegistry/registries";
import { injectArticleSchema } from "../store/modules/header";
import { safeDate } from "../utilities/datetimes";

// isArticleRoute :: String -> Boolean
const isArticleRoute = includes(__, [
  "articleAr",
  "articleEn",
  "articleFr",
  "articleHe",
]);

// formatSingleArticle :: Article -> Object
const formatSingleArticle = (article) => ({
  title: article.title,
  id: article.id,
  image: article.image
    ? {
        src: article.image.href,
        alt: article.coverCaption || article.image.legend,
        credit: article.image.credit,
      }
    : { src: "", alt: "", credit: "" },
  videoCover: article.videoCover
    ? {
        id: article.videoCover.id,
        description: article.coverCaption || article.videoCover.description,
        credit: article.videoCover.credit,
      }
    : null,
  signatures: article.signatures || [],
  frontendUrl: article.frontendUrl,
  updatedAt: safeDate(article.updatedAt),
  createdAt: safeDate(article.createdAt),
  publishedAt: safeDate(article.publishedAt),
  metaTitle: article.metaTitle || article.title,
  metaDescription: article.metaDescription || article.title,
  commentsDisabled: article.commentsDisabled,
  numberOfComments: article.numberOfComments,
  tags: article.tags || [],
  category: article.category,
  hasEvents: article.hasEvents,
  excerpt: article.excerpt,
  readingTime: article.readingTime,
  slug: article.slug,
  components: article.parsedBody,
});

// shouldRedirect :: (Location, Article) -> Boolean
const shouldRedirect = (location, article) =>
  decodeURI(new URL(article.frontendUrl).pathname) !==
  decodeURI(location.pathname);

// fetchArticleEpic :: Epic -> Observable Action ARTICLE_RECEIVED
export const fetchArticleEpic = (
  action$,
  state$,
  { fetchApi, location, logger }
) =>
  action$.pipe(
    ofType(FETCH_ARTICLE),
    withLatestFrom(state$),
    mergeMap(([{ slug }, state]) =>
      fetchApi(`/v2/${state.router.locale}/contents/${slug}`)
    ),
    map(prop("body")),
    filter(complement(isNil)),
    map((article) =>
      articleReceived(
        formatSingleArticle(article),
        shouldRedirect(location, article)
      )
    ),
    logObservableErrorAndTriggerAction(
      "article :: fetchArticleEpic",
      error,
      logger
    )
  );

// updateArticleUrl :: Epic -> Observable Action _
export const updateArticleUrl = (action$, state$, { logger, history }) =>
  action$.pipe(
    ofType(ARTICLE_RECEIVED),
    filter(({ shouldRedirect }) => shouldRedirect),
    map(({ content }) => new URL(content.frontendUrl)),
    tap((expectedUrl) =>
      history.replaceState(history.state, "", expectedUrl.pathname)
    ),
    ignoreElements(),
    logObservableError("article :: updateArticleUrl", logger)
  );

// displayShareButtonOnScrollEpic :: Epic -> Observable Action *
export const displayShareButtonOnScrollEpic = (
  action$,
  state$,
  { document, logger, window }
) =>
  action$.pipe(
    ofType(ARTICLE_RECEIVED, HYDRATION_COMPLETED),
    withLatestFrom(state$),
    filter(([{ type }, state]) =>
      anyPass([
        equals(ARTICLE_RECEIVED),
        allPass([
          equals(HYDRATION_COMPLETED),
          () => isArticleRoute(state.router.activeRoute.name),
        ]),
      ])(type)
    ),
    switchMap(() =>
      fromEvent(window, "scroll").pipe(
        debounceTime(15),
        takeUntil(action$.pipe(ofType(CLEAN))),
        map(() => document.querySelector("article .components")),
        filter(complement(isNil)),
        map((content) => content.getBoundingClientRect()),
        map((bcr) =>
          bcr.top < 80 && bcr.bottom > 240 ? showShareIcons() : hideShareIcons()
        ),
        logObservableError("article :: displayShareButtonOnScrollEpic", logger)
      )
    )
  );

// invert :: Number -> Number
const invert = (x) => -x + 1;

// normalize :: Number -> Number
const normalize = cond([
  [lt(__, 0), always(0)],
  [gt(__, 1), always(1)],
  [T, identity],
]);

// updateProgressiveReadingBarEpic :: Epic -> Observable Action UPDATE_READING_PROGRESS
export const updateProgressiveReadingBarEpic = (
  action$,
  state$,
  { document, window }
) =>
  action$.pipe(
    ofType(ARTICLE_RECEIVED, HYDRATION_COMPLETED),
    withLatestFrom(state$),
    filter(([{ type }, state]) =>
      anyPass([
        equals(ARTICLE_RECEIVED),
        allPass([
          equals(HYDRATION_COMPLETED),
          () => isArticleRoute(state.router.activeRoute.name),
        ]),
      ])(type)
    ),
    switchMap(() =>
      fromEvent(window, "scroll").pipe(
        takeUntil(action$.pipe(ofType(CLEAN))),
        map(() => document.querySelector("section.cover-and-content")),
        filter(complement(isNil)),
        map(
          pipe(
            (article) => article.getBoundingClientRect(),
            pick(["bottom", "height"]),
            evolve({
              bottom: subtract(window.innerHeight),
              height: subtract(window.innerHeight),
            }),
            values,
            apply(divide),
            invert,
            normalize,
            multiply(100),
            updateReadingProgress
          )
        )
      )
    )
  );

// observeBrightcoveLazyVideoEpic :: Epic -> Observable Action _
export const observeBrightcoveLazyVideoEpic = (
  action$,
  state$,
  { intersectionObserversRegistry, logger, document }
) =>
  action$.pipe(
    ofType(INIT_BRIGHTCOVE_LAZY_VIDEO),
    filter(() => intersectionObserversRegistry.isSupported()),
    withLatestFrom(state$),
    tap(([{ videoId }, state]) => {
      const target = document.querySelector(
        `#article .brightcove-lazy-player[data-video-id="${videoId}"]`
      );

      const pageObserver = intersectionObserversRegistry.get(
        OBSERVER_BRIGHTCOVE_VIDEO
      );

      if (target && pageObserver) {
        pageObserver.observe(target);
      }
    }),
    ignoreElements(),
    logObservableError("article :: observeBrightcoveLazyVideoEpic", logger)
  );

// injectArticleSchemaEpic :: Epic -> [Observable Action INFORMATIONS_LOADED, Observable Action CONTENT_LOADED]
export const injectArticleSchemaEpic = (action$, state$, { logger }) =>
  action$.pipe(
    ofType(ARTICLE_RECEIVED),
    map(({ content }) => injectArticleSchema(content)),
    logObservableError("article :: injectArticleSchemaEpic", logger)
  );

// scrollToCommentBoxEpic :: Epic -> Observable Void
export const scrollToCommentBoxEpic = (
  action$,
  state$,
  { document, logger, window }
) =>
  action$.pipe(
    ofType(SCROLL_TO_COMMENT_BOX),
    map(() => document.querySelector("#article-comments")),
    filter(complement(isNil)),
    map(
      (element) => window.scrollY + element.getBoundingClientRect().top - 150
    ),
    tap((position) =>
      window.scroll({
        top: position,
        behavior: "smooth",
      })
    ),
    ignoreElements(),
    logObservableError("article :: scrollToCommentBoxEpic", logger)
  );

// updateActiveCategoryEpic :: Epic -> Action UPDATE_ACTIVE_CATEGORY
export const updateActiveCategoryEpic = (action$, state$, { logger }) =>
  action$.pipe(
    ofType(ARTICLE_RECEIVED),
    withLatestFrom(state$),
    // Because of some race condition with categories::deactivateAllCategoriesEpic
    // epic, the active category was cleaned before it was getting updated.
    // This, sometimes, was causing multiple menu items to be active (ex.
    // homepage + article category). In order to solve this issue we check if
    // the active route is a valid article route before updating active categories.
    filter(([_, state]) =>
      pipe(
        pathOr("", ["router", "activeRoute", "name"]),
        testRegex(/^article(En|Fr|Ar)$/)
      )(state)
    ),
    map(([{ content }]) =>
      setCurrentCategory(
        content.category.id,
        content.category.parent ? content.category.parent.id : null
      )
    ),
    logObservableError("article :: updateActiveCategoryEpic", logger)
  );

// deactivateCategoryEpic :: Epic -> Observable Action DEACTIVATE_ALL_CATEGORIES
export const deactivateCategoryEpic = (action$, state$, { logger }) =>
  action$.pipe(
    ofType(CLEAN),
    map(unsetCurrentCategory),
    logObservableError("article :: deactivateCategoryEpic", logger)
  );

export default combineEpics(
  fetchArticleEpic,
  displayShareButtonOnScrollEpic,
  updateProgressiveReadingBarEpic,
  updateArticleUrl,
  observeBrightcoveLazyVideoEpic,
  injectArticleSchemaEpic,
  scrollToCommentBoxEpic,
  updateActiveCategoryEpic,
  deactivateCategoryEpic
);
