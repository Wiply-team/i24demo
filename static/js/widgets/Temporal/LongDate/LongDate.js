import React from "react";
import ClientOnly from "../../../legacy_components/ClientOnly";
import {
  ISODate,
  safeDate,
  localeISOToDateLocale,
} from "../../../utilities/datetimes";
import { enLocale } from "../../../utilities/locales";

// calendarDate :: (Date|String, String) -> String
const calendarDate = (date, locale = enLocale) =>
  safeDate(date).toLocaleDateString(localeISOToDateLocale(locale), {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

// LongDate :: Props -> React.Component
const LongDate = ({ date, locale, itemProp }) => (
  <time dateTime={ISODate(date)} itemProp={itemProp}>
    <ClientOnly>{calendarDate(date, locale)}</ClientOnly>
  </time>
);

export default LongDate;
