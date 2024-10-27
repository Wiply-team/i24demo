import DateTime from "./../../../../../widgets/Temporal/DateTime";
import React from "react";
import translate from "../../../../../utilities/translate";
import translations from "./translations";
import ClientOnly from "../../../../ClientOnly";
import { isSameDate } from "../../../../../utilities/datetimes";

// trans :: String -> String -> String
const trans = translate(translations);

// LastRevision :: Props -> React.Component
const LastRevision = ({ locale, publishedAt, updatedAt }) =>
  !isSameDate(publishedAt, updatedAt) ? (
    <span>
      <ClientOnly>
        {trans(locale)("lastRevision")}
        &nbsp;
        <DateTime date={updatedAt} locale={locale} itemProp="dateModified" />
      </ClientOnly>
    </span>
  ) : null;

export default LastRevision;
