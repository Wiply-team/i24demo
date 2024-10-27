import "./ArticlePage.scss";
import React from "react";
import Divider from "../../../../widgets/Layout/Divider";
import Horizontal from "../../../../components/Article/List/Horizontal";
import Vertical from "../../../../components/Article/List/Vertical";
import { multipleOf4 } from "../../../../utilities/miscellaneous";
import { isIsraelAtWarCategory } from "../../../../utilities/displays";
import HTMLWidgetRenderer from "../../../../components/HTMLWidgetRenderer";
import { ArticleListMobileAdvert } from "../../../../components/Adverts";

// ArticlePage :: Props -> React.Component
const ArticlePage = ({
  page,
  articles = [],
  variant = "default",
  id = null,
  locale = null,
}) => (
  <div
    id={`category-page-${page}`}
    className="component-article-list"
    data-page={page}
  >
    <section className="columns">
      {articles.map((article, idx) => (
        <React.Fragment key={article.id}>
          <div className="column col-12">
            {page === 1 && idx === 0 ? (
              <>
                <div className="hide-sm">
                  <Horizontal article={article} variant={variant} />
                </div>
                <div className="show-sm">
                  <Vertical size="large" article={article} variant={variant} />
                </div>
              </>
            ) : (
              <Horizontal article={article} variant={variant} />
            )}
          </div>
          {page === 1 && idx === 2 && isIsraelAtWarCategory(id) ? (
            <div className="column col-12 hide-sm show-xl">
              <div className="widget-wrapper">
                <HTMLWidgetRenderer.Counters locale={locale} />
              </div>
              <Divider />
            </div>
          ) : null}
          {page === 1 && idx === 3 && isIsraelAtWarCategory(id) ? (
            <div className="column col-12 col-sm-12 show-sm">
              <div className="widget-wrapper">
                <HTMLWidgetRenderer.Counters locale={locale} />
              </div>
              <Divider />
            </div>
          ) : null}
          {page === 1 &&
          idx !== 3 &&
          multipleOf4(idx + 1) &&
          isIsraelAtWarCategory(id) ? (
            <div className="column col-12 col-sm-12 show-sm">
              <div className="ads">
                <ArticleListMobileAdvert />
              </div>
              <Divider />
            </div>
          ) : null}
          {page > 1 && multipleOf4(idx + 1) && isIsraelAtWarCategory(id) ? (
            <div className="column col-12 col-sm-12 show-sm">
              <div className="ads">
                <ArticleListMobileAdvert />
              </div>
              <Divider />
            </div>
          ) : null}
          {multipleOf4(idx + 1) && !isIsraelAtWarCategory(id) ? (
            <div className="column col-12 col-sm-12 show-sm">
              <div className="ads">
                <ArticleListMobileAdvert />
              </div>
              <Divider />
            </div>
          ) : null}
        </React.Fragment>
      ))}
    </section>
  </div>
);

export default ArticlePage;
