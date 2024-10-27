import { compose, ifElse, isEmpty, isNil, last, path, pipe } from "ramda";
import React from "react";
import SubCategoriesMenu from "./SubCategoriesMenu";
import AbstractPage from "../AbstractArticleList";
import ArticlePage from "./ArticlePage";
import LazyComponent from "../../../components/LazyComponent";
import Loader from "../../../widgets/Generic/Loader";
import Pagination from "../../../legacy_components/Pagination";
import translate from "../../../utilities/translate";
import translations from "./translations";

const PageNotFound = LazyComponent("PageNotFound");

// trans :: String -> String -> String
const trans = translate(translations);

// createBreadcrumb :: Category -> array
const createBreadcrumb = ifElse(
  compose(isNil, path(["parent"])),
  (category) => [{ label: category.name }],
  (category) => [
    { label: category.parent.name, link: category.parent.frontendUrl },
    { label: category.name },
  ]
);

// resolveTitle :: (Category, string) -> string
const resolveTitle = (category, locale) =>
  pipe(
    (category) => (category.parent ? category.parent.name : category.name),
    (title) =>
      last(new URL(category.frontendUrl).pathname.split("/")) ===
      "israel-at-war"
        ? `${title} - ${trans(locale)("liveUpdates")}`
        : title
  )(category);

// Category :: Props -> React.Component
const Category = ({ isFetching, category, lastRevision, redirected, locale }) =>
  isFetching ? (
    <Loader />
  ) : category ? (
    <>
      <SubCategoriesMenu />
      <AbstractPage
        className={
          !isEmpty(category.tree.children) ? "with-page-menu-hide-xl" : null
        }
        metaTitle={category.metaTitle}
        metaDescription={category.metaDescription}
        crumbs={createBreadcrumb(category)}
        title={resolveTitle(category, locale)}
        subTitle={category.parent ? category.name : null}
        headlinesId={category.id}
        id={category.id}
        lastRevision={lastRevision}
        redirected={redirected}
        frontendUrl={category.frontendUrl}
      >
        <Pagination
          renderPage={(page) => (
            <ArticlePage
              id={category.id}
              locale={locale}
              page={page}
              size={24}
              variant="author-full-date"
            />
          )}
        />
      </AbstractPage>
    </>
  ) : (
    <PageNotFound />
  );

export default Category;
