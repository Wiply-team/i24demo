import React from "react";
import ClientOnly from "../../../legacy_components/ClientOnly";
import {
  ISODate,
  safeDate,
  localeISOToDateLocale,
} from "../../../utilities/datetimes";
import { enLocale } from "../../../utilities/locales";

// calendarDateTime :: (Date|String, String) -> String
const calendarDateTime = (date, locale = enLocale) =>
  safeDate(date).toLocaleString(localeISOToDateLocale(locale), {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

// DateTime :: Props -> React.Component
const DateTime = ({ date, locale, itemProp }) => (
  <time dateTime={ISODate(date)} itemProp={itemProp}>
    <ClientOnly>{calendarDateTime(date, locale)}</ClientOnly>
  </time>
);

export default DateTime;
