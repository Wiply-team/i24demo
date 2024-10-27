import "./Article.scss";
import React from "react";
import {
  always,
  complement,
  compose,
  filter,
  ifElse,
  isNil,
  match,
  nth,
  path,
  pipe,
} from "ramda";
import Breadcrumb from "../Breadcrumb";
import Content from "./Content";
import Head from "../Head";
import { ArticleAdvertProvider } from "../../components/Adverts";
import { isDefined } from "../../utilities/strings";
import { getBrightcoveEmbedUrl } from "../../utilities/media/videos";

// createBreadcrumb :: (Object, String, String) -> array
const createBreadcrumb = pipe(
  (category, title, frontendUrl) => [
    resolveParentCategoryCrumb(category, frontendUrl),
    resolveMainCategoryCrumb(category, frontendUrl),
    { label: title },
  ],
  filter(complement(isNil))
);

// resolveParentCategoryCrumb :: Object -> array
const resolveParentCategoryCrumb = (category, frontendUrl) =>
  ifElse(compose(isNil, path(["parent"])), always(null), (category) => ({
    link: compose(
      nth(3),
      match(/^(https?:\/\/)?([^/]+)(\/[^/]+\/[^/]+\/[^/]+)/)
    )(frontendUrl),
    label: path(["parent", "name"])(category),
  }))(category);

// resolveMainCategoryCrumb :: Object -> array
const resolveMainCategoryCrumb = (category, frontendUrl) =>
  ifElse(
    compose(isNil, path(["parent"])),
    (category) => ({
      link: compose(
        nth(3),
        match(/^(https?:\/\/)?([^/]+)(\/[^/]+\/[^/]+\/[^/]+)/)
      )(frontendUrl),
      label: path(["name"])(category),
    }),
    (category) => ({
      link: compose(
        nth(3),
        match(/^(https?:\/\/)?([^/]+)(\/[^/]+\/[^/]+\/[^/]+\/[^/]+)/)
      )(frontendUrl),
      label: path(["name"])(category),
    })
  )(category);

// Article :: Props -> React.Component
const Article = ({
  category,
  description,
  frontendUrl,
  image,
  pageTitle,
  publishedAt,
  redirected,
  title,
  videoCover,
}) => (
  <>
    <ArticleAdvertProvider>
      <Head
        description={description}
        imageUrl={!videoCover && image ? image.src : null}
        pubDate={publishedAt}
        title={isDefined(pageTitle) ? pageTitle : title}
        type="article"
        videoUrl={videoCover ? getBrightcoveEmbedUrl(videoCover) : null}
        status={redirected ? 301 : 200}
        redirectLocation={redirected ? frontendUrl : null}
      >
        <div id="article" className="page-content">
          <Breadcrumb crumbs={createBreadcrumb(category, title, frontendUrl)} />
          <Content />
        </div>
      </Head>
    </ArticleAdvertProvider>
  </>
);

export default Article;
