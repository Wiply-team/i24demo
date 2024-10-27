import { equals } from "ramda";

// enLocale :: String
export const enLocale = "en";

// frLocale :: String
export const frLocale = "fr";

// arLocale :: String
export const arLocale = "ar";

// heLocale :: String
export const heLocale = "he";

// localeToNews :: Object
export const localeToNews = {
  ar: "أخبار",
  fr: "actu",
  en: "news",
  he: "news",
};

// localeToProfiles :: Object
export const localeToProfiles = {
  ar: "",
  fr: "profils",
  en: "profiles",
  he: "",
};

// localeToChannels :: Object
export const localeToChannels = {
  ar: "القنوات",
  fr: "canaux",
  en: "channels",
  he: "channels",
};

// getLocales :: () -> Array
export const getLocales = () => [enLocale, frLocale, arLocale, heLocale];

// isArabic :: String -> Boolean
export const isArabic = equals(arLocale);

// isEnglish :: String -> Boolean
export const isEnglish = equals(enLocale);

// isFrench :: String -> Boolean
export const isFrench = equals(frLocale);

// isHebrew :: String -> Boolean
export const isHebrew = equals(heLocale);
