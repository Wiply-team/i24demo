import Heading from "../../widgets/Typography/Heading/Heading";
import Horizontal from "../Article/List/Horizontal";
import React from "react";
import PropTypes from "prop-types";
import Vertical from "../Article/List/Vertical";
import { cond, equals } from "ramda";
import styles from "./ArticlesWidgets.module.css";

// ArticlesWidgets :: Props -> React.Component
const ArticlesWidgets = ({ widgets }) =>
  widgets.map((widget) => (
    <div
      key={widget.id}
      className={`${styles.wrapper} ${
        widget.backgroundColor ? styles["custom-wrapper"] : ""
      }`}
      style={
        widget.backgroundColor
          ? { backgroundColor: widget.backgroundColor }
          : null
      }
    >
      <Heading level="2">{widget.title}</Heading>
      {cond([
        [equals(1), () => <OneArticleTemplate article={widget.articles[0]} />],
        [equals(2), () => <EvenArticlesTemplate articles={widget.articles} />],
        [equals(3), () => <ThreeArticlesTemplate articles={widget.articles} />],
        [equals(4), () => <EvenArticlesTemplate articles={widget.articles} />],
      ])(widget.articles.length)}
    </div>
  ));

const OneArticleTemplate = ({ article }) => (
  <Horizontal article={article} variant="author-full-date" />
);

const EvenArticlesTemplate = ({ articles }) => (
  <div className="columns">
    {articles.map((article) => (
      <div key={article.id} className="column col-6 col-sm-12 col-xs-12">
        <Vertical article={article} variant="squared" size="small" />
      </div>
    ))}
  </div>
);

const ThreeArticlesTemplate = ({ articles }) => (
  <div className="columns">
    {articles.map((article) => (
      <div key={article.id} className="column col-4 col-sm-12 col-xs-12">
        <Vertical article={article} variant="squared" size="small" />
      </div>
    ))}
  </div>
);

ArticlesWidgets.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArticlesWidgets;
