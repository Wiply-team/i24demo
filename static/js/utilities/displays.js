import {
  T,
  always,
  any,
  cond,
  either,
  equals,
  pipe,
  prop,
  test as regexTest,
} from "ramda";

// isMobileViewport :: Window -> Boolean
export const isMobileViewport = (window) => 480 >= window.outerWidth;

// isSmallViewport :: Window -> Boolean
export const isSmallViewport = (window) => 600 >= window.innerWidth;

// isDesktopViewport :: Window -> Boolean
export const isDesktopViewport = (window) => 768 < window.innerWidth;

// isLargeDesktopViewport :: Window -> Boolean
export const isLargeDesktopViewport = (window) => 1280 >= window.innerWidth;

// isWebView :: Object -> Boolean
export const isWebView = pipe(
  prop("pathname"),
  either(regexTest(/webview/), regexTest(/live-shows/))
);

// isIsraelAtWarCategory :: Number -> Boolean
export const isIsraelAtWarCategory = (id) =>
  any(equals(id))([269, 271, 273, 321]);

// isIsraelAtWarTag :: String -> Boolean
export const isIsraelAtWarTag = (slug) =>
  any(equals(slug.toLowerCase()))([
    // en tags
    "idf",
    "tel-aviv-attack",
    "lebanon",
    "hamas",
    "israel-iran",
    "hezbollah",
    "gaza",
    "israel",
    "middle-east",
    "west-bank",
    "israelatwar",
    "israel-at-war",
    // fr tags
    "israel-en-guerre",
    // ar tags
    "إسرائيل",
    "غزة",
    "هجوم-حماس",
    "حماس",
  ]);

// shouldDisplayMissingPersonList :: String -> Boolean
export const shouldDisplayMissingPersonList = (slug) =>
  any(equals(slug.toLowerCase()))([
    // en slug
    "1699539583-not-just-a-number-the-names-and-faces-of-the-239-israelis-abducted-to-gaza",
    // fr slug
    "1699539742-les-239-personnes-enlevees-a-gaza-ont-un-visage-et-un-nom",
    // ar slug
    "1699539877-ليس-مجرد-رقم-أسماء-ووجوه-239-إسرائيلي-ا-اختطفوا-في-غزة",
  ]);

// resolveCategoryHighlightClassname :: Number -> String
export const resolveCategoryHighlightClassname = cond([
  [isIsraelAtWarCategory, always("highlighted-category")],
  [T, always("")],
]);
