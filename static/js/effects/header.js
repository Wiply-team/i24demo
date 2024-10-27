import {
  BREADCRUMB_LOADED,
  HIDE_NATIVE_APP_BANNER,
  INIT_NATIVE_APP_BANNER,
  INJECT_ARTICLE_SCHEMA,
  INJECT_AUTHOR_SCHEMA,
  INJECT_BRIGHTCOVE_VIDEO_SCHEMA,
  INJECT_IMAGE_PRELOAD_HINTS,
  INJECT_SCHEMA,
  INJECT_TIMELINE_SCHEMA,
  INJECT_YOUTUBE_SCHEMA,
  injectSchema,
  showNativeAppBanner,
  toggleCollapsed,
} from "../store/modules/header";
import {
  F,
  T,
  __,
  add,
  always,
  both,
  complement,
  compose,
  cond,
  defaultTo,
  either,
  equals,
  find,
  forEach,
  gt,
  gte,
  has,
  head,
  ifElse,
  includes,
  isEmpty,
  isNil,
  last,
  nth,
  path,
  pathEq,
  pathOr,
  pipe,
  prop,
  propEq,
  replace,
  reverse,
  filter as rfilter,
  split,
  startsWith,
  test as testRegex,
  trim,
  tryCatch,
  unless,
  when,
} from "ramda";
import { FIND_ROUTE, ROUTE_FOUND } from "../store/modules/router";
import {
  getBrightcoveEmbedUrl,
  resolveBrightcovePosterSrc,
} from "../utilities/media/videos";
import {
  ISODate,
  toComputerDate,
  toComputerDateTime,
} from "../utilities/datetimes";
import { isWebView } from "../utilities/displays";
import { isEnglish, isHebrew } from "../utilities/locales";
import { logObservableError } from "../utilities/logs";
import { substringToMatch } from "../utilities/strings";
import {
  applyQueryParamsToUrl,
  buildErrorLink,
  getQueryParamsFromUrl,
} from "../utilities/urls";
import { combineEpics, ofType } from "redux-observable";
import {
  debounceTime,
  filter,
  forkJoin,
  fromEvent,
  ignoreElements,
  map,
  mergeMap,
  switchMap,
  take,
  takeUntil,
  tap,
  withLatestFrom,
} from "rxjs";
import { HYDRATION_COMPLETED } from "../store/modules/app";
import serialize from "serialize-javascript";

// setLanguageCookieEpic :: Epic -> Action _
export const setLanguageCookieEpic = (action$, state$, { document, logger }) =>
  action$.pipe(
    ofType(ROUTE_FOUND, HYDRATION_COMPLETED),
    take(1),
    withLatestFrom(state$),
    tap(
      ([_, state]) =>
        (document.cookie = `i24news-last-language=${state.router.locale};Path=/;Max-Age=31536000;SameSite=Lax`)
    ),
    ignoreElements(),
    logObservableError("header :: setLanguageCookieEpic", logger)
  );

// toggleCollapsedEpic :: Epic -> Action _
export const toggleCollapsedEpic = (action$, state$, { logger, window }) =>
  fromEvent(window, "scroll").pipe(
    debounceTime(10),
    withLatestFrom(state$),
    filter(
      ([_, state]) =>
        !pathEq(true, ["category", "subCategoriesMenuOpened"], state) &&
        !pathEq(true, ["schedule", "weekMenuOpened"], state)
    ),
    map(([event]) => event.target.documentElement.scrollTop),
    map(toggleCollapsed),
    logObservableError("header :: toggleCollapsedEpic", logger)
  );

// resolveCanonicalHref :: String -> String
const resolveCanonicalHref = (href) =>
  pipe(
    getQueryParamsFromUrl,
    cond([
      [
        both(has("page"), compose(gt(__, 1), prop("page"))),
        ({ page }) =>
          applyQueryParamsToUrl({ page })(substringToMatch("?")(href)),
      ],
      [T, () => substringToMatch("?")(href)],
    ])
  )(href);

// resolveNotFoundCanonicalHref :: (String, String) -> String
const resolveNotFoundCanonicalHref = (origin, locale) =>
  `${origin}${buildErrorLink(404, locale)}`;

// addCanonicalLink :: Document -> String -> _
const addCanonicalLink = (document) => (href) => {
  var linkEl = document.createElement("link");
  linkEl.rel = "canonical";
  linkEl.href = href;
  document.head.appendChild(linkEl);
};

// injectCanonicalLinkEpic :: Epic -> Action _
export const injectCanonicalLinkEpic = (
  action$,
  _,
  { document, location, logger }
) =>
  action$.pipe(
    ofType(ROUTE_FOUND),
    take(1),
    takeUntil(action$.pipe(ofType(HYDRATION_COMPLETED))),
    map(
      ifElse(
        compose(equals("404"), prop("name")),
        ({ params }) =>
          resolveNotFoundCanonicalHref(location.origin, params.locale),
        () => resolveCanonicalHref(location.href)
      )
    ),
    tap(addCanonicalLink(document)),
    ignoreElements(),
    logObservableError("header :: injectCanonicalLinkEpic", logger)
  );

export const enNewsMediaOrganizationSchema = serialize(
  {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: "i24 NEWS",
    legalName: "i24 NEWS",
    alternateName: "i24",
    url: "https://www.i24news.tv/en",
    logo: "https://cdn.one.accedo.tv/files/5a9413bf1de1c4000cc9fe08?sessionKey=01FFY88HAKAVC2J4X2QKT0PR6A18FD65D8F9#asset",
    address: "Jaffa Port, Tel Aviv",
    areaServed:
      "Israel, France (including the French West Indies), Belgium, Luxembourg, Switzerland, Italy, Spain, Portugal, Poland, Germany and across the African continent. ",
    award: "International Emmy Awards Current Affairs & News",
    founder: "Frank Melloul",
    foundingDate: "17 July 2013",
    foundingLocation: "Jaffa Port, Tel Aviv, Israel",
    owns: "Patrick Drahi",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "contact@i24news.tv",
        availableLanguage: "Hebrew, English, Spanish, French, Arabic",
      },
    ],
    sameAs: [
      "https://x.com/i24news_en?lang=en",
      "https://www.facebook.com/i24newsEN/",
      "https://www.instagram.com/i24news/?hl=en",
      "https://www.youtube.com/channel/UCvHDpsWKADrDia0c99X37vg",
      "https://www.linkedin.com/company/i24news/?originalSubdomain=il",
      "https://en.wikipedia.org/wiki/I24_News",
      "https://soundcloud.com/user-612210501",
    ],
  },
  { isJSON: true, ignoreFunction: true }
);

export const heNewsMediaOrganizationSchema = serialize(
  {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: "i24 NEWS",
    legalName: "i24 NEWS",
    alternateName: "i24",
    url: "https://www.i24news.tv/he",
    logo: "https://cdn.one.accedo.tv/files/5a9413bf1de1c4000cc9fe08?sessionKey=01FFY88HAKAVC2J4X2QKT0PR6A18FD65D8F9#asset",
    address: "נמל יפו, תל אביב",
    areaServed:
      "Israel, France (including the French West Indies), Belgium, Luxembourg, Switzerland, Italy, Spain, Portugal, Poland, Germany and across the African continent. ",
    award: "International Emmy Awards Current Affairs & News",
    founder: "Frank Melloul",
    foundingDate: "17 July 2013",
    foundingLocation: "נמל יפו, תל אביב, ישראל",
    owns: "Patrick Drahi",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "contact@i24news.tv",
        availableLanguage: "Hebrew, English, Spanish, French, Arabic",
      },
    ],
    sameAs: [
      "https://x.com/i24news_HE",
      "https://www.facebook.com/i24newsHE/",
      "https://www.instagram.com/i24news_HE",
      "https://www.youtube.com/user/i24news_HE",
      "https://www.linkedin.com/company/i24news",
      "https://he.wikipedia.org/wiki/I24NEWS",
    ],
  },
  { isJSON: true, ignoreFunction: true }
);

// newsMediaOrganizationSchema :: String -> String | Null
export const newsMediaOrganizationSchema = cond([
  [isEnglish, always(enNewsMediaOrganizationSchema)],
  [isHebrew, always(heNewsMediaOrganizationSchema)],
  [T, always(null)],
]);

export const injectNewsMediaOrganizationSchemaEpic = (
  action$,
  state$,
  { logger }
) =>
  action$.pipe(
    ofType(ROUTE_FOUND),
    take(1),
    takeUntil(action$.pipe(ofType(HYDRATION_COMPLETED))),
    withLatestFrom(state$),
    filter(
      ([_, state]) =>
        isEnglish(state.router.locale) || isHebrew(state.router.locale)
    ),
    filter(([_, state]) => state.router.activeRoute.name === "homepage"),
    map(([_, state]) =>
      injectSchema(newsMediaOrganizationSchema(state.router.locale))
    ),
    logObservableError(
      "header :: injectNewsMediaOrganizationSchemaEpic",
      logger
    )
  );

// resolveVideoDuration :: Number -> String
const resolveVideoDuration = pipe(
  (duration) => Math.floor(duration / 1000),
  ifElse(
    gte(__, 60),
    (duration) => `PT${Math.floor(duration / 60)}M${duration % 60}S`,
    (duration) => `PT${duration % 60}S`
  )
);

// isStringValid :: String -> Boolean
const isStringValid = compose(
  complement(isEmpty),
  trim,
  replace("/(\\n)+/g", "")
);

// generateBrightcoveVideoSchema :: BrightcoveVideo -> String
const generateBrightcoveVideoSchema = (video) =>
  serialize(
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: video.name,
      description: isStringValid(video.description)
        ? video.description
        : video.name,
      thumbnailUrl: pathOr(null, ["images", "poster", "src"], video),
      uploadDate: toComputerDate(video.created_at, "-"),
      duration: resolveVideoDuration(video.duration ?? 0),
      publisher: {
        "@type": "Organization",
        name: "i24 NEWS",
        logo: {
          "@type": "ImageObject",
          url: "https://yt3.ggpht.com/ytc/AAUvwnij-uZkbeQI1YKo37I042hL_RbXCg00R4sBVuO4Dw=s48-c-k-c0xffffffff-no-rj-mo",
          width: 48,
          height: 48,
        },
      },
      contentUrl: video.source ? video.source.src : null,
      embedUrl: getBrightcoveEmbedUrl(video),
    },
    { isJSON: true, ignoreFunction: true }
  );

export const injectBrightcoveVideoSchemaEpic = (
  action$,
  state$,
  { fetchApi, logger }
) =>
  action$.pipe(
    ofType(ROUTE_FOUND),
    take(1),
    takeUntil(action$.pipe(ofType(HYDRATION_COMPLETED))),
    withLatestFrom(state$),
    filter(([_, state]) =>
      includes(state.router.activeRoute.name, [
        "articleAr",
        "articleEn",
        "articleFr",
        "articleHe",
      ])
    ),
    switchMap(() =>
      action$.pipe(
        ofType(INJECT_BRIGHTCOVE_VIDEO_SCHEMA),
        takeUntil(action$.pipe(ofType(FIND_ROUTE, ROUTE_FOUND))),
        withLatestFrom(state$),
        mergeMap(([action, state]) =>
          forkJoin([
            fetchApi(
              `/v2/${state.router.locale}/brightcove/videos/${action.videoId}`
            ),
            fetchApi(
              `/v2/${state.router.locale}/brightcove/videos/${action.videoId}/source`
            ),
          ])
        ),
        map(([video, source]) =>
          injectSchema(
            generateBrightcoveVideoSchema({
              ...video.body,
              source: source.body,
            })
          )
        )
      )
    ),
    logObservableError("header :: injectBrightcoveVideoSchemaEpic", logger)
  );

// resolveYoutubeVideoDescription :: YoutubeVideo -> String
const resolveYoutubeVideoDescription = cond([
  [
    compose(isStringValid, pathOr("", ["snippet", "description"])),
    path(["snippet", "description"]),
  ],
  [T, path(["snippet", "title"])],
]);

// generateYoutubeVideoSchema :: Object -> String
const generateYoutubeVideoSchema = (video) =>
  serialize(
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: video.snippet.title ?? "",
      description: resolveYoutubeVideoDescription(video),
      thumbnailUrl: pathOr(
        null,
        ["snippet", "thumbnails", "default", "url"],
        video
      ),
      uploadDate: toComputerDate(video.snippet.publishedAt, "-"),
      duration: video.contentDetails.duration ?? "PT0S",
      publisher: {
        "@type": "Organization",
        name: "i24 NEWS",
        logo: {
          "@type": "ImageObject",
          url: "https://yt3.ggpht.com/ytc/AAUvwnij-uZkbeQI1YKo37I042hL_RbXCg00R4sBVuO4Dw=s48-c-k-c0xffffffff-no-rj-mo",
          width: 48,
          height: 48,
        },
      },
      contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
      embedUrl: `https://www.youtube.com/embed/${video.id}`,
    },
    { isJSON: true, ignoreFunction: true }
  );

// resolveYoutubeVideoIdFromEmbedUrl :: String -> String
const resolveYoutubeVideoIdFromEmbedUrl = pipe(split("/"), last);

export const injectYoutubeVideoSchemaEpic = (
  action$,
  state$,
  { fetchApi, logger }
) =>
  action$.pipe(
    ofType(ROUTE_FOUND),
    take(1),
    withLatestFrom(state$),
    filter(([_, state]) =>
      includes(state.router.activeRoute.name, [
        "articleAr",
        "articleEn",
        "articleFr",
        "articleHe",
      ])
    ),
    switchMap(() =>
      action$.pipe(
        ofType(INJECT_YOUTUBE_SCHEMA),
        takeUntil(action$.pipe(ofType(ROUTE_FOUND, FIND_ROUTE))),
        withLatestFrom(state$),
        mergeMap(([action, state]) =>
          fetchApi(
            `/v2/${
              state.router.locale
            }/youtube/videos/${resolveYoutubeVideoIdFromEmbedUrl(action.src)}`
          )
        ),
        map((video) => injectSchema(generateYoutubeVideoSchema(video.body)))
      )
    ),
    logObservableError("header :: injectYoutubeVideoSchemaEpic", logger)
  );

// generateArticleSchema :: (String, Object) -> String
const generateArticleSchema = (locale, content) =>
  serialize(
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": content.frontendUrl,
      },
      headline: content.title,
      description: content.excerpt,
      contentLocation: pipe(
        cond([
          [compose(isNil, prop("metaLocation")), prop("metaLocation")],
          [
            compose(isNil, path(["category", "location"])),
            path(["category", "location"]),
          ],
          [T, always(null)],
        ]),
        unless(isNil, (location) => ({ "@type": "Place", name: location }))
      )(content),
      image: content.image
        ? content.image.src
        : content.video
        ? resolveBrightcovePosterSrc(locale, content.video)
        : null,
      author:
        content.signatures.length === 1
          ? {
              "@type":
                content.signatures[0].type === "organization"
                  ? "Organization"
                  : "Person",
              name: content.signatures[0].authorName,
              url:
                content.signatures[0].type === "person" &&
                content.signatures[0].frontendUrl
                  ? content.signatures[0].frontendUrl
                  : null,
            }
          : content.signatures.map((signature) => ({
              "@type":
                signature.type === "organization" ? "Organization" : "Person",
              name: signature.authorName,
              url: signature.frontendUrl ?? null,
            })),
      publisher: {
        "@type": "Organization",
        name: "i24news",
        logo: {
          "@type": "ImageObject",
          url: "https://yt3.ggpht.com/ytc/AAUvwnij-uZkbeQI1YKo37I042hL_RbXCg00R4sBVuO4Dw=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
      },
      datePublished: ISODate(content.publishedAt),
      dateModified: ISODate(content.updatedAt),
    },
    { isJSON: true, ignoreFunction: true }
  );

// generateBreadcrumbSchema :: (String, Object) -> String
const generateBreadcrumbSchema = (location, crumbs) =>
  serialize(
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((crumb, key) => ({
        "@type": "ListItem",
        position: add(1)(key),
        name: crumb.label,
        item: crumb.link ? `${location.origin}${crumb.link}` : location.href,
      })),
    },
    { isJSON: true, ignoreFunction: true }
  );

export const injectArticleSchemaEpic = (action$, state$, { logger }) =>
  action$.pipe(
    ofType(ROUTE_FOUND),
    take(1),
    takeUntil(action$.pipe(ofType(HYDRATION_COMPLETED))),
    withLatestFrom(state$),
    filter(([_, state]) =>
      includes(state.router.activeRoute.name, [
        "articleAr",
        "articleEn",
        "articleFr",
        "articleHe",
      ])
    ),
    switchMap(() =>
      action$.pipe(
        ofType(INJECT_ARTICLE_SCHEMA),
        takeUntil(action$.pipe(ofType(ROUTE_FOUND, FIND_ROUTE))),
        withLatestFrom(state$),
        map(([{ article }, state]) =>
          injectSchema(generateArticleSchema(state.router.locale, article))
        )
      )
    ),
    logObservableError("header :: injectArticleSchemaEpic", logger)
  );

export const injectBreadcrumbSchemaEpic = (
  action$,
  state$,
  { location, logger }
) =>
  action$.pipe(
    ofType(ROUTE_FOUND),
    take(1),
    takeUntil(action$.pipe(ofType(HYDRATION_COMPLETED))),
    switchMap(() =>
      action$.pipe(
        ofType(BREADCRUMB_LOADED),
        takeUntil(action$.pipe(ofType(ROUTE_FOUND, FIND_ROUTE))),
        map(({ crumbs }) =>
          injectSchema(generateBreadcrumbSchema(location, crumbs))
        )
      )
    ),
    logObservableError("header :: injectBreadcrumbSchemaEpic", logger)
  );

// resolveStartDate :: Array -> String
const resolveStartDate = compose(prop("startedAt"), last);

// resolveEndDate :: Array -> String
const resolveEndDate = compose(prop("startedAt"), head);

// generateLiveBlogPostingSchema :: (Array, String) -> String
const generateLiveBlogPostingSchema = (newsFeed, location) =>
  pipe(
    () => ({
      "@context": "https://schema.org",
      "@type": "LiveBlogPosting",
      "@id": "https://www.i24news.tv/en/news",
      about: {
        "@type": "Event",
        startDate: compose(
          (date) => toComputerDate(date, "-"),
          resolveStartDate
        )(newsFeed),
        name: "News Feed",
        location: { "@type": "Place", name: location },
      },
      coverageStartTime: compose(
        toComputerDateTime,
        resolveStartDate
      )(newsFeed),
      coverageEndTime: compose(toComputerDateTime, resolveEndDate)(newsFeed),
      headline: "News Feed",
      description:
        "Tune into i24NEWS for global news broadcasting live from around the world bringing you the day’s biggest stories from the U.S., Europe, and the Middle East. i24NEWS provides a unique voice in international news with its focus on Israel and the Middle East as well as covering all the major issues in global and domestic news, including in the United States",
      contentLocation: { "@type": "Place", name: location },
      liveBlogUpdate: reverse(newsFeed).map((news) => ({
        "@type": "BlogPosting",
        headline: news.title,
        datePublished: toComputerDateTime(news.startedAt),
        articleBody: "",
      })),
    }),
    (schema) => serialize(schema, { isJSON: true, ignoreFunction: true })
  )();

export const injectLiveBlogPostingSchemaEpic = (action$, state$, { logger }) =>
  action$.pipe(
    ofType(ROUTE_FOUND),
    take(1),
    takeUntil(action$.pipe(ofType(HYDRATION_COMPLETED))),
    withLatestFrom(state$),
    switchMap(() =>
      action$.pipe(
        ofType(INJECT_TIMELINE_SCHEMA),
        take(1),
        takeUntil(action$.pipe(ofType(ROUTE_FOUND, FIND_ROUTE))),
        map(({ events, location }) =>
          injectSchema(generateLiveBlogPostingSchema(events, location))
        )
      )
    ),
    logObservableError("header :: injectLiveBlogPostingSchemaEpic", logger)
  );

export const injectSchemaEpic = (action$, state$, { document, logger }) =>
  action$.pipe(
    ofType(INJECT_SCHEMA),
    tap(({ schema }) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = schema;

      document.body.prepend(script);
    }),
    ignoreElements(),
    logObservableError("header :: injectSchemaEpic", logger)
  );

// addImagePreloadHintLink :: Document -> (String, String|Null, String|Null, String|Null, String|Null) -> _
const addImagePreloadHintLink =
  (document) => (src, type, media, srcSet, sizes) => {
    var linkEl = document.createElement("link");
    linkEl.rel = "preload";
    linkEl.as = "image";
    linkEl.href = src;
    if (type) {
      linkEl.type = type;
    }
    if (media) {
      linkEl.media = media;
    }
    if (srcSet) {
      linkEl.imageSrcset = srcSet;
    }
    if (sizes) {
      linkEl.imageSizes = sizes;
    }

    document.head.appendChild(linkEl);
  };

export const injectImagePreloadHintsEpic = (
  action$,
  state$,
  { document, logger }
) =>
  action$.pipe(
    ofType(ROUTE_FOUND),
    take(1),
    takeUntil(action$.pipe(ofType(HYDRATION_COMPLETED))),
    switchMap(() =>
      action$.pipe(
        ofType(INJECT_IMAGE_PRELOAD_HINTS),
        takeUntil(action$.pipe(ofType(ROUTE_FOUND, FIND_ROUTE))),
        tap(({ src, sources }) =>
          pipe(
            // We only want to preload webp images as, the browser, is not smart
            // enough to load only the best supported media type and adding hints
            // for original images will result in preloading the image twice (webp
            // + original format).
            // In any case the browsers that support preload hints are only a
            // subset of the browsers that support the webp format so, adding
            // original formats preload hints will just give us disavantages.
            rfilter(propEq("image/webp", "type")),
            forEach((source) =>
              addImagePreloadHintLink(document)(
                src,
                source.type,
                source.media,
                source.srcSet,
                source.sizes
              )
            )
          )(sources)
        ),
        ignoreElements()
      )
    ),
    logObservableError("header :: injectImagePreloadHintsEpic", logger)
  );

// HIDE_NATIVE_APP_BANNER_KEY :: String
const HIDE_NATIVE_APP_BANNER_KEY = "i24news-hide-native-app-banner";

// HIDE_NATIVE_APP_BANNER_KEY_DURATION :: Number
// Number of seconds after which the hide native banne key will expire.
const HIDE_NATIVE_APP_BANNER_KEY_DURATION = 2629800;

// getCurrentTimestamp :: _ -> Number
const getCurrentTimestamp = () => new Date().getTime();

// isHideNativeAppBannerCookie :: String -> Boolean
// See https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
const isHideNativeAppBannerCookie = pipe(
  split("; "),
  find(startsWith(HIDE_NATIVE_APP_BANNER_KEY)),
  when(complement(isNil), compose(equals("true"), nth(1), split("="))),
  defaultTo(false)
);

// isHideNativeAppBannerStorage :: LocalStorage -> Boolean
const isHideNativeAppBannerStorage = when(
  complement(isNil),
  ifElse(
    pipe(
      (s) => s.getItem(HIDE_NATIVE_APP_BANNER_KEY),
      both(complement(isNil), gte(__, getCurrentTimestamp()))
    ),
    T,
    compose(F, (s) => s.removeItem(HIDE_NATIVE_APP_BANNER_KEY))
  )
);

// initNativeAppBannerEpic :: Epic -> Observable Action SHOW_NATIVE_APP_BANNER
export const initNativeAppBannerEpic = (
  action$,
  state$,
  { document, location, logger, navigator, window }
) =>
  action$.pipe(
    ofType(INIT_NATIVE_APP_BANNER),
    take(1),
    // The banner is not shown when navigating on webviews (special pages used
    // by native apps)
    filter(() => !isWebView(location)),
    // The banner is not shown when the user already closed it once (this
    // information is stored in a cookie or in the local storage).
    filter(
      complement(
        either(
          () => isHideNativeAppBannerCookie(document.cookie),
          tryCatch(() => isHideNativeAppBannerStorage(window.localStorage), F)
        )
      )
    ),
    // The banner is not shown when not on a supported mobile device. The
    // supported devices are Apple iPhones, Apple iPads and Android devices.
    // At the moment device detection is made via the user agent. This
    // technique might not be 100% perfect and might be improved in the future
    // in case we will encounter issues.
    // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent.
    map(() =>
      cond([
        [
          testRegex(/\b(iPad|iPhone|iPod)\b/),
          always(process.env.REACT_APP_LINK_APPLE_ITUNES),
        ],
        [
          testRegex(/\bAndroid\b/),
          always(process.env.REACT_APP_LINK_GOOGLE_PLAY),
        ],
      ])(navigator.userAgent)
    ),
    filter(complement(isNil)),
    map(showNativeAppBanner),
    logObservableError("header :: initNativeAppBanner", logger)
  );

// hideNativeAppBannerEpic :: Epic -> Observable Action SHOW_NATIVE_APP_BANNER
export const hideNativeAppBannerEpic = (
  action$,
  state$,
  { document, logger, window }
) =>
  action$.pipe(
    ofType(HIDE_NATIVE_APP_BANNER),
    // When the user closes the banner we add a cookie to avoid open the banner
    // again on the next visits. The cookie lasts 1 month and then the banner
    // will be shown again.
    tap(
      () =>
        (document.cookie = `${HIDE_NATIVE_APP_BANNER_KEY}=true; Max-Age=${HIDE_NATIVE_APP_BANNER_KEY_DURATION};`)
    ),
    // An entry in the local storage is also added as a fallback in case the
    // cookie is deleted before its expiration time (ex. with in-app Facebook
    // browser)
    tap(
      tryCatch(
        () =>
          window.localStorage.setItem(
            HIDE_NATIVE_APP_BANNER_KEY,
            getCurrentTimestamp() + HIDE_NATIVE_APP_BANNER_KEY_DURATION * 1000
          ),
        always(undefined)
      )
    ),
    ignoreElements(),
    logObservableError("header :: hideNativeAppBannerEpic", logger)
  );

export const injectAuthorSchemaEpic = (action$, _, { logger }) =>
  action$.pipe(
    ofType(ROUTE_FOUND),
    take(1),
    takeUntil(action$.pipe(ofType(HYDRATION_COMPLETED))),
    switchMap(() =>
      action$.pipe(
        ofType(INJECT_AUTHOR_SCHEMA),
        takeUntil(action$.pipe(ofType(ROUTE_FOUND, FIND_ROUTE))),
        map(({ author }) => injectSchema(generateAuthorSchema(author)))
      )
    ),
    logObservableError("header :: injectAuthorSchemaEpic", logger)
  );

// generateAuthorSchema :: Object -> String
const generateAuthorSchema = (author) =>
  serialize(
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: author.authorName,
      url: author.frontendUrl ?? null,
      image: author.image ? author.image.href : null,
      sameAs: author.links.length > 0 ? author.links.map((link) => link) : [],
      jobTitle: !isEmpty(author.jobTitle) ? author.jobTitle : null,
      worksFor: {
        "@type": "Organization",
        name: "i24NEWS",
      },
    },
    { isJSON: true, ignoreFunction: true }
  );

export default combineEpics(
  setLanguageCookieEpic,
  toggleCollapsedEpic,
  injectCanonicalLinkEpic,
  injectNewsMediaOrganizationSchemaEpic,
  injectBrightcoveVideoSchemaEpic,
  injectYoutubeVideoSchemaEpic,
  injectArticleSchemaEpic,
  injectBreadcrumbSchemaEpic,
  injectSchemaEpic,
  injectImagePreloadHintsEpic,
  injectAuthorSchemaEpic,
  initNativeAppBannerEpic,
  hideNativeAppBannerEpic,
  injectLiveBlogPostingSchemaEpic
);
