import "./Information.scss";
import React from "react";
import Tag from "../../../../../widgets/Typography/Tag";
import Title from "../../../../../widgets/Typography/Title";
import RelativeTimeWithIcon from "../../../../../widgets/Temporal/RelativeTimeWithIcon";
import BookmarkButton from "../../../BookmarkButton";
import ShareButton from "../../../../Sharing/ShareButton";
import PropTypes from "prop-types";
import { getLocales } from "../../../../../utilities/locales";
import Text from "../../../../../widgets/Typography/Text";
import { isDefined } from "../../../../../utilities/strings";
import translate from "../../../../../utilities/translate";
import translations from "./translations";

const trans = translate(translations);

const titleSizeMapping = {
  large: "extra-large",
};

// sponsoredArticles :: Article -> [Article]
const sponsoredArticles = (article) =>
  article.positionedContents.filter((content) => {
    const now = new Date();

    return (
      content.isSponsored &&
      now >= new Date(content.startedAt) &&
      now <= new Date(content.finishedAt)
    );
  });

// getSponsoredArticleTag :: (Article, String) -> React.Component
const getSponsoredArticleTag = (article, locale) => {
  const articles = sponsoredArticles(article);

  if (articles.length === 1) {
    return (
      <Tag variant="sponsored">
        {isDefined(articles[0].sponsoredTitle)
          ? articles[0].sponsoredTitle
          : trans(locale)("sponsored")}
      </Tag>
    );
  }

  // if there are multiple sponsored articles,we show the "sponsored" tag
  // as we can't resolve which title we should use.
  if (articles.length > 1) {
    return <Tag variant="sponsored">{trans(locale)("sponsored")}</Tag>;
  }

  return <Tag>{article.category.name}</Tag>;
};

const Information = ({
  article,
  locale,
  size = "default",
  variant = "default",
  showSponsored = false,
}) => (
  <div
    className={`article-information-wrapper size-${size} variant-${variant}`}
  >
    <div className="article-information">
      <div className="article-category">
        {showSponsored ? (
          getSponsoredArticleTag(article, locale)
        ) : (
          <Tag>{article.category.name}</Tag>
        )}
      </div>
      <Title size={titleSizeMapping[size]}>{article.title}</Title>
      <div className="article-excerpt">
        <Text>{article.excerpt}</Text>
      </div>
    </div>
    <div className="article-bottom">
      {["author", "author-full-date"].includes(variant) ? (
        <span className="signature-name">
          {article.signatures
            .map((signature) => signature.authorName)
            .join(", ")}
        </span>
      ) : null}
      <div className="date-wrapper">
        <div className="sr-only">
          <Text size="small">
            {trans(locale)("readingTime", { time: article.readingTime })}
          </Text>
        </div>
        <div className="date">
          <RelativeTimeWithIcon
            date={article.updatedAt}
            locale={locale}
            variant={
              ["author-full-date", "full-date"].includes(variant)
                ? "full"
                : "default"
            }
          />
        </div>
        {["author-full-date", "full-date"].includes(variant) ? (
          <div className="mobile-date">
            <RelativeTimeWithIcon date={article.updatedAt} locale={locale} />
          </div>
        ) : null}
        <div className="article-actions">
          <BookmarkButton articleId={article.id} height={16} width={16} />
          <ShareButton
            url={article.frontendUrl}
            title={article.title.replace(/\s/g, " ")}
            excerpt={article.excerpt}
            height={16}
            width={16}
          />
        </div>
      </div>
    </div>
  </div>
);

Information.propTypes = {
  article: PropTypes.object.isRequired,
  locale: PropTypes.oneOf(getLocales()).isRequired,
  size: PropTypes.oneOf(["large", "default", "small"]),
  variant: PropTypes.oneOf([
    "default",
    "author",
    "full-date",
    "author-full-date",
  ]),
};

const Placeholder = ({ size = "default" }) => (
  <div className={`article-information-wrapper placeholder size-${size}`} />
);

Information.Placeholder = Placeholder;

export default Information;
