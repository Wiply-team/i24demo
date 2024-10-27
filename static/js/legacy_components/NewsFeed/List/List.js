import "./List.scss";
import {
  any,
  assoc,
  find,
  groupBy,
  keys,
  mapObjIndexed,
  not,
  pipe,
  propEq,
  propOr,
  reduce,
  values,
} from "ramda";
import { safeDate, toComputerDate } from "../../../utilities/datetimes";
import FlashIcon from "../../Icons/FlashIcon";
import ImageRenditionPreview from "../../Image/Rendition/Preview";
import Link from "../../../components/Routing/Link";
import React, { useMemo } from "react";
import translate from "../../../utilities/translate";
import translations from "../translations";
import LongDate from "../../../widgets/Temporal/LongDate";
import Time from "../../../widgets/Temporal/Time";
import ClientOnly from "../../ClientOnly";

// Formats News from :
// { 1: [{ startedAt: Date, title: String, ... }] }}
// to:
// { 1: [[{ at: Date, feed: [{ startedAt: Date, title: String ...}], renderDate: Bool}]] }
const formatNews = (pages) =>
  reduce(
    (acc, pageNumber) =>
      assoc(pageNumber, groupNewsByDay(acc, pages[pageNumber]), acc),
    {},
    keys(pages)
  );

// groupNewsByDay :: (Object, Array) -> Array
// Converts News from:
// [{ startedAt: Date, title: String, ... }]
// to:
// [{ at: Date, feed: [{ startedAt: Date, title: String ...}], renderDate: Bool}]
const groupNewsByDay = (currentPages, newsPage) =>
  pipe(
    groupBy((news) => toComputerDate(news.startedAt, "-")),
    mapObjIndexed((feed, day) => ({
      at: safeDate(day),
      feed,
      renderDate: shouldRenderDate(currentPages, safeDate(day)),
    })),
    values
  )(newsPage);

// containsDate :: Date :: [Object] -> Bool
const containsDate = (at) => (dates) => find(propEq(at, "at"))(dates);

// shouldRenderDate :: (Array, Date) -> Bool
const shouldRenderDate = (pages, at) =>
  pipe(values, any(containsDate(at)), not)(pages);

// trans :: String -> String -> String
const trans = translate(translations);

// NewsList :: Props -> React.Component
const NewsList = ({ newsList, locale }) => (
  <React.Fragment>
    {newsList.map((news) => (
      <div key={`news_${news.id}`} className="piece-of-news">
        <aside className="news-hour">
          <span className="bullet" />
          <Time date={news.startedAt} locale={locale} />
          {news.status === "breaking" ? (
            <span className="breaking">
              <span className="breaking-icon">
                <FlashIcon />
              </span>
              {trans(locale)("breaking")}
            </span>
          ) : null}
        </aside>
        <div className="news-content">
          {news.content ? (
            <Link href={news.content.frontendUrl} variant="block">
              <div className="news-content-link">
                <p>{news.title}</p>
                {news.content.image ? (
                  <ImageRenditionPreview
                    src={news.content.image.src}
                    alt={news.content.image.alt}
                  />
                ) : null}
                <span className="more-information">
                  {trans(locale)("content")}
                </span>
              </div>
            </Link>
          ) : (
            <p>{news.title}</p>
          )}
        </div>
      </div>
    ))}
  </React.Fragment>
);

// ClientList :: Props -> React.Component
const ClientList = ({ pages, page, locale }) => {
  const groupedNews = useMemo(() => formatNews(pages), [pages]);

  return (
    <React.Fragment>
      {propOr([], page, groupedNews).map((day, i) => (
        <React.Fragment key={`group_${i}`}>
          {day.renderDate === true ? (
            <div key={`day_${i}`} className="news-of-day">
              <LongDate date={day.at} locale={locale} />
            </div>
          ) : null}
          <NewsList newsList={day.feed} locale={locale} />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

// ServerList :: Props -> React.Component
const ServerList = ({ pages, page, locale }) => (
  <NewsList newsList={propOr([], page, pages)} locale={locale} />
);

// List :: Props -> React.Component
const List = ({ locale, pages, page }) => (
  <ClientOnly
    fallback={<ServerList pages={pages} page={page} locale={locale} />}
  >
    <ClientList pages={pages} page={page} locale={locale} />
  </ClientOnly>
);

export default List;
