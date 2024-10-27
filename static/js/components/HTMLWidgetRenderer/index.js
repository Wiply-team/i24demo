import { T, cond, equals } from "ramda";
import React from "react";
import { arLocale, frLocale, heLocale } from "../../utilities/locales";
import ClientOnly from "../../legacy_components/ClientOnly";
import View from "./HTMLWidgetRenderer";
import translate from "../../utilities/translate";
import translations from "./translations";

const trans = translate(translations);

// HTMLWidgetRenderer :: Props -> React.Component
const HTMLWidgetRenderer = (props) => (
  <ClientOnly>
    <View {...props} />
  </ClientOnly>
);

// resolveCounterWidgetIdFromLocale :: String -> String
const resolveCounterWidgetIdFromLocale = cond([
  [equals(frLocale), () => 3],
  [equals(arLocale), () => 5],
  [equals(heLocale), () => 9],
  [T, () => 1],
]);

HTMLWidgetRenderer.Counters = ({ locale }) => (
  <HTMLWidgetRenderer
    locale={locale}
    id={resolveCounterWidgetIdFromLocale(locale)}
    title={trans(locale)("counterTitle")}
  />
);

export default HTMLWidgetRenderer;
