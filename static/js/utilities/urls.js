import {
  T,
  __,
  always,
  assoc,
  complement,
  cond,
  ifElse,
  includes,
  isEmpty,
  isNil,
  juxt,
  keys,
  mergeRight,
  pickBy,
  pipe,
  reduce,
  split,
  when,
} from "ramda";
import { arLocale, enLocale, frLocale, heLocale } from "./locales";
import { substringFromMatch, substringToMatch } from "./strings";

// isRequestFromSSR :: String -> Boolean
export const isRequestFromSSR = (agent) =>
  agent.match(/^i24news-ssr$/i) !== null;

// getQueryParamsFromUrl :: String -> Object
// Extracts query parameters from url.
// Example:
// 'http://example.com?q=search&limit=10' -> { q: 'search', limit: '10' }
export const getQueryParamsFromUrl = ifElse(
  includes("?"),
  pipe(
    substringFromMatch("?"),
    split("&"),
    reduce(
      (acc, item) =>
        ifElse(
          complement(isEmpty),
          pipe(
            juxt([
              // extract query param name
              substringToMatch("="),
              // extract query param value
              substringFromMatch("="),
            ]),
            ([name, value]) => assoc(name, value, acc)
          ),
          always(acc)
        )(item),
      {}
    )
  ),
  always({})
);

// objectToQueryString :: Object ->
// Converts a simple key:value object in a url query string.
// Example:
// { q: 'search', limit: 10 } -> 'q=search&limit:10'
const objectToQueryString = (queryParameters) =>
  pipe(
    keys,
    reduce(
      (acc, key) =>
        isEmpty(acc)
          ? `${key}=${queryParameters[key]}`
          : `${acc}&${key}=${queryParameters[key]}`,
      ""
    )
  )(queryParameters);

// applyQueryParamsToUrl :: Object -> String -> String
export const applyQueryParamsToUrl = (queryParams) =>
  when(complement(isNil), (url) =>
    pipe(
      // Get query params from url
      getQueryParamsFromUrl,
      // Override query params
      mergeRight(__, queryParams),
      // Filter non null parameters
      pickBy(complement(isNil)),
      // Build url
      ifElse(
        complement(isEmpty),
        pipe(
          objectToQueryString,
          (queryString) => `${substringToMatch("?")(url)}?${queryString}`
        ),
        always(url)
      )
    )(url)
  );

// buildErrorLink :: (Number, String) -> String
export const buildErrorLink = cond([
  [
    (_, locale) => arLocale === locale,
    (code) => `/${arLocale}/${code}-${"صفحة"}`,
  ],
  [(_, locale) => frLocale === locale, (code) => `/${frLocale}/${code}-page`],
  [(_, locale) => heLocale === locale, (code) => `/${heLocale}/${code}-page`],
  [T, (code) => `/${enLocale}/${code}-page`],
]);

// generateSharingUrl :: (String, String) -> String
export const generateSharingUrl = (locale, url) =>
  locale === arLocale ? decodeURIComponent(url) : url;
