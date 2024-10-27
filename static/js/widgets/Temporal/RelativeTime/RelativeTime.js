import React from "react";
import {
  safeDate,
  localeISOToDateLocale,
  ISODate,
} from "../../../utilities/datetimes";
import { cond, pipe, T } from "ramda";
import translate from "../../../utilities/translate";
import translations from "./translations";
import { enLocale, getLocales } from "../../../utilities/locales";
import ClientOnly from "../../../legacy_components/ClientOnly";
import PropTypes from "prop-types";

// calendarDate :: (Date|String, String, String) -> String
const calendarDate = (date, locale = enLocale, variant = "default") =>
  safeDate(date).toLocaleDateString(
    localeISOToDateLocale(locale),
    variant === "full"
      ? {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }
      : { day: "2-digit", month: "short", year: "numeric" }
  );

// msPerMinute :: Number
const msPerMinute = 60 * 1000;

// msPerHour :: Number
const msPerHour = msPerMinute * 60;

// elapsed :: (Number, Number) -> Number
const elapsed = (current, previous) => current - previous;

// trans :: String -> String -> String
const trans = translate(translations);

// timeSince :: (Number, Number, String, String) -> String
const timeSince = (now, at, locale, variant) =>
  pipe(
    elapsed,
    cond([
      [
        (currentTime) =>
          Math.round(currentTime / 1000) === 0 ||
          Math.round(currentTime / msPerMinute) < 1,
        () => trans(locale)("now"),
      ],
      [
        (currentTime) =>
          currentTime < msPerHour &&
          Math.round(currentTime / msPerMinute) === 1,
        (_currentTime) => trans(locale)("minute"),
      ],
      [
        (currentTime) => currentTime < msPerHour,
        (currentTime) =>
          trans(locale)("minutes", {
            minutes: Math.round(currentTime / msPerMinute),
          }),
      ],
      [
        (currentTime) =>
          Math.round(currentTime / msPerHour) <= 12 &&
          Math.round(currentTime / msPerHour) === 1,
        (_currentTime) => trans(locale)("hour"),
      ],
      [
        (currentTime) => Math.round(currentTime / msPerHour) <= 12,
        (currentTime) =>
          trans(locale)("hours", {
            hours: Math.round(currentTime / msPerHour),
          }),
      ],
      [T, () => calendarDate(at, locale, variant)],
    ])
  )(now, at);

// RelativeTime :: Props -> React.Component
const RelativeTime = ({ date, locale, itemProp, variant }) => (
  <time dateTime={ISODate(date)} itemProp={itemProp}>
    <ClientOnly>
      {timeSince(Date.now(), safeDate(date).getTime(), locale, variant)}
    </ClientOnly>
  </time>
);

RelativeTime.propTypes = {
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
    .isRequired,
  locale: PropTypes.oneOf(getLocales()).isRequired,
  itemProp: PropTypes.string,
  variant: PropTypes.oneOf(["default", "full"]),
};

export default RelativeTime;
