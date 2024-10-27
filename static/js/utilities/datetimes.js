import {
  T,
  __,
  always,
  call,
  concat,
  cond,
  join,
  pipe,
  repeat,
  takeLast,
  tap,
  tryCatch,
  when,
} from "ramda";
import { enLocale, heLocale, isEnglish } from "./locales";
import { indexedMap } from "./miscellaneous";

// safeDate :: String|Number|DateTime|void -> DateTime
export const safeDate = tryCatch(
  pipe(
    (rawDate) => new Date(rawDate), // can throw when the rawDate is invalid
    tap((date) => date.toISOString()) // can throw when the rawDate is out of bound
  ),
  () => new Date()
);

// oneDayMs :: void -> Int
// returns the count of miliseconds in one day
const oneDayMs = always(24 * 60 * 60 * 1000);

// getStartOfIsoWeek :: any -> Date
// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
export const getStartOfIsoWeek = (date) =>
  pipe((d) => new Date(d.getTime() - ((d.getDay() + 6) % 7) * oneDayMs()))(
    safeDate(date)
  );

// currentWeek:: void -> [Date]
// constitute an array from the current week day
export const currentWeek = () =>
  pipe(
    repeat(__, 7),
    indexedMap((day, index) => new Date(day.getTime() + index * oneDayMs()))
  )(getStartOfIsoWeek());

// getSchedulesDayName :: String -> Date -> String
export const getSchedulesDayName = (locale) => (day) =>
  locale === heLocale
    ? day.toLocaleString(enLocale, { weekday: "long" }).toLowerCase()
    : day.toLocaleString(locale, { weekday: "long" }).toLowerCase();

// getSchedulesWeekDays :: String -> [String]
// @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/toLocaleString
export const getSchedulesWeekDays = (locale) =>
  currentWeek().map(getSchedulesDayName(locale));

// localeISOToDateLocale :: String -> String
export const localeISOToDateLocale = cond([
  [isEnglish, always("en-US")],
  [T, (locale) => locale],
]);

// padStart :: (Integer, String) -> String -> String
export const padStart = (targetLength, padString) =>
  when(
    (string) => string.length < targetLength,
    (string) =>
      call(
        pipe(
          () => repeat(padString, targetLength),
          join(""),
          concat(__, string),
          takeLast(targetLength)
        )
      )
  );

// padStartTwoZeros :: String -> String
export const padStartTwoZeros = padStart(2, "0");

// toComputerDate :: (Date|String, String) -> String
// Format a date according to local time
export const toComputerDate = (date, separator = "") =>
  pipe((d) =>
    join(separator, [
      d.getFullYear(),
      padStartTwoZeros(String(d.getMonth() + 1)),
      padStartTwoZeros(String(d.getDate())),
    ])
  )(safeDate(date));

// toComputerTime :: (Date|String, String) -> String
// Format a date according to local time
export const toComputerTime = (date, separator = "") =>
  pipe((d) =>
    join(separator, [
      padStartTwoZeros(String(d.getHours())),
      padStartTwoZeros(String(d.getMinutes())),
      padStartTwoZeros(String(d.getSeconds())),
    ])
  )(safeDate(date));

// toComputerDateTime :: (Date|String, String, String) -> String
// Format a date according to local time
export const toComputerDateTime = (
  date,
  dateSeparator = "-",
  timeSeparator = ":"
) =>
  pipe((d) =>
    join("T", [
      toComputerDate(d, dateSeparator),
      toComputerTime(d, timeSeparator),
    ])
  )(safeDate(date));

// ISODate :: Date|String -> String
export const ISODate = (date) => safeDate(date).toISOString();

// isSameDate :: (Date, Date) -> Boolean
export const isSameDate = (firstDate, secondDate) =>
  safeDate(firstDate).setSeconds(0) === safeDate(secondDate).setSeconds(0);
