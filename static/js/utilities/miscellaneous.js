import {
  T,
  addIndex,
  always,
  compose,
  cond,
  equals,
  identity,
  map,
  prop,
  propOr,
  toLower,
  sortBy,
  evolve,
  pipe,
  isEmpty,
  when,
  filter,
  propEq,
} from "ramda";
import { isArabic, isFrench, isEnglish, isHebrew } from "./locales";
import { buildVideoImage } from "./media/videos";
import { safeDate } from "./datetimes";
import { buildImage } from "./media/images";

// createReducer :: (Object, Object) -> Function
// Redux utilities
export const createReducer =
  (initialState, handlers) =>
  (state = initialState, action = {}) =>
    propOr(identity, prop("type", action), handlers)(state, action);

// indexedMap :: Function -> Array -> Array
export const indexedMap = addIndex(map);

// isEscKey :: KeyboardEvent -> Boolean
export const isEscKey = compose(equals("escape"), toLower, propOr("", "key"));

// guessXAccount :: String -> String
export const guessXAccount = cond([
  [isFrench, always(process.env.REACT_APP_X_ACCOUNT_FR)],
  [isEnglish, always(process.env.REACT_APP_X_ACCOUNT_EN)],
  [isArabic, always(process.env.REACT_APP_X_ACCOUNT_AR)],
  [isHebrew, always(process.env.REACT_APP_X_ACCOUNT_HE)],
  [T, always(process.env.REACT_APP_X_ACCOUNT_EN)],
]);

// formatArticle :: (String, Content) -> Object
export const formatArticle = (locale, article) => ({
  category: article.category,
  excerpt: article.excerpt,
  id: article.id,
  image: article.videoId
    ? buildVideoImage(locale, article.videoId)
    : buildImage(article.image),
  featured: article.featured,
  frontendUrl: article.frontendUrl,
  readingTime: article.readingTime,
  title: article.title,
  videoId: article.videoId,
  publishedAt: article.publishedAt,
  updatedAt: article.updatedAt,
  signatures: article.signatures || [],
  positionedContents: article.positionedContents || [],
});

// formatNewsArticle :: (String, Content) -> Object
export const formatNewsArticle = (locale, article) => ({
  category: article.category,
  excerpt: article.excerpt,
  id: article.id,
  image: cond([
    [
      (article) => article.videoId,
      (article) => buildVideoImage(locale, article.videoId),
    ],
    [(article) => article.image, (article) => buildImage(article.image)],
    [T, always(null)],
  ])(article),
  featured: article.featured,
  frontendUrl: article.frontendUrl,
  readingTime: article.readingTime,
  title: article.title,
  videoId: article.videoId,
  publishedAt: article.publishedAt,
  updatedAt: article.updatedAt,
});

// formatNews :: (String, News) -> Object
export const formatNews = (locale, news) => ({
  id: news.id,
  title: news.title,
  content: news.content ? formatNewsArticle(locale, news.content) : null,
  startedAt: safeDate(news.startedAt),
  status: news.status,
});

// multipleOf4 :: Number -> Boolean
export const multipleOf4 = (n) => 0 !== n && n % 4 === 0;

// filterNavbarCategories :: [Category] -> [Category]
export const filterNavbarCategories = pipe(
  filter(propEq(true, "navbar")),
  sortBy(prop("navbarPosition")),
  map((category) =>
    when(
      () => !isEmpty(category.children),
      evolve({
        children: compose(
          sortBy(prop("navbarPosition")),
          filter(propEq(true, "navbar"))
        ),
      })
    )(category)
  )
);
