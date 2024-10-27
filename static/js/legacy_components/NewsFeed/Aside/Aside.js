import "./Aside.scss";
import { isLoadingFirstPage } from "../../../utilities/paginations";
import Link from "../../../components/Routing/Link";
import List from "../List";
import Overlay from "../../Loader/Overlay";
import React from "react";
import translate from "../../../utilities/translate";
import translations from "../translations";
import Heading from "../../../widgets/Typography/Heading";

// trans :: String -> String -> String
const trans = translate(translations);

// Aside :: Props -> React.Component
export default ({ locale, isFetching, newsFeed }) => (
  <section data-is="aside-newsfeed">
    <Heading level="2">{trans(locale)("title")}</Heading>

    <div className="timeline">
      {isLoadingFirstPage(isFetching, newsFeed) ? (
        <Overlay />
      ) : (
        <List pages={{ 1: newsFeed }} page={1} />
      )}
    </div>

    {!isLoadingFirstPage(isFetching, newsFeed) ? (
      <div className="more white">
        <Link href={`/${locale}/${trans(locale)("slug")}`}>
          {trans(locale)("more")}
        </Link>
      </div>
    ) : null}
  </section>
);
