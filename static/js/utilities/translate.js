import {
  T,
  __,
  always,
  cond,
  equals,
  pathOr,
  pipe,
  reduce,
  replace,
  split,
  toLower,
  toPairs,
} from "ramda";
import { arLocale, frLocale, heLocale } from "./locales";

// resolveTranslationPath :: String -> String -> Array
const resolveTranslationPath = (key) => (locale) =>
  pipe(
    toLower,
    cond([
      [equals(arLocale), always("arabic")],
      [equals(frLocale), always("french")],
      [equals(heLocale), always("hebrew")],
      [T, always("english")],
    ]),
    (language) => [language, ...split(".", key)]
  )(locale);

// replaceParam :: Object -> String -> String
const replaceParams = (params) => (translationString) =>
  reduce(
    (translationString, [param, value]) =>
      replaceParam(translationString, param, value),
    translationString,
    toPairs(params)
  );

// replaceParam :: (String, String, String) -> String
const replaceParam = (translationString, param, value) =>
  replace(new RegExp(`{{ ${param} }}`, "g"), value, translationString);

// translate :: Object -> String -> (String, Object) -> String
const translate =
  (translations) =>
  (locale) =>
  (key, params = {}) =>
    pipe(
      resolveTranslationPath(key),
      pathOr("", __, translations),
      replaceParams(params)
    )(locale);

export default translate;
