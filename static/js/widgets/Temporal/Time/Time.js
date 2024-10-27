import React from "react";
import ClientOnly from "../../../legacy_components/ClientOnly";
import {
  ISODate,
  safeDate,
  localeISOToDateLocale,
} from "../../../utilities/datetimes";
import { enLocale } from "../../../utilities/locales";

// calendarTime :: (Date|String, String) -> String
export const calendarTime = (date, locale = enLocale) =>
  safeDate(date).toLocaleTimeString(localeISOToDateLocale(locale), {
    hour: "2-digit",
    minute: "2-digit",
  });

// Time :: Props -> React.Component
const Time = ({ date, locale, itemProp }) => (
  <time dateTime={ISODate(date)} itemProp={itemProp}>
    <ClientOnly>{calendarTime(date, locale)}</ClientOnly>
  </time>
);

export default Time;
