import {
  always,
  complement,
  compose,
  concat,
  converge,
  filter,
  head,
  identity,
  ifElse,
  isEmpty,
  join,
  map,
  pipe,
  split,
  tail,
  toUpper,
  when,
} from "ramda";
import { guessXAccount } from "../../utilities/miscellaneous";
import { safeDate } from "../../utilities/datetimes";
import Meta from "./Meta";
import React from "react";
import Title from "./Title";
import { connect } from "react-redux";
import translate from "../../utilities/translate";
import translations from "./translations";
import { i24LogoUrl, i24Name } from "../../utilities/constants";

// trans :: String -> String -> String
const trans = translate(translations);

const mapStateToProps = (state) => ({
  url: state.router.activeRoute.href,
  xAccount: guessXAccount(state.router.locale),
  locale: state.router.locale,
});

const descriptionOrDefault = (locale) =>
  ifElse(isEmpty, always(trans(locale)("metaDescription")), identity);

// toTitleCase :: String -> String
const toTitleCase = when(
  (title) => title !== i24Name,
  pipe(
    split(" "),
    filter(complement(isEmpty)),
    map(converge(concat, [compose(toUpper, head), tail])),
    join(" ")
  )
);

// pageTitleOrDefault :: String -> String
const pageTitleOrDefault = (title) =>
  title === i24Name ? title : `${title} - ${i24Name}`;

const View = ({
  title = i24Name,
  metas = [],
  description = "",
  imageUrl = i24LogoUrl,
  withDefaultTitle = true,
  robots = "index,follow,NOODP,noarchive,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
  videoUrl = null,
  type = "website",
  card = "summary_large_image",
  url,
  pubDate = "",
  children,
  status = 200,
  redirectLocation,
  xAccount,
  locale,
}) => (
  <div data-is="meta-renderer">
    <Title
      title={
        withDefaultTitle
          ? compose(pageTitleOrDefault, toTitleCase)(title)
          : title
      }
    />
    <Meta name="robots" content={robots} />
    <Meta
      name="title"
      content={
        withDefaultTitle
          ? compose(pageTitleOrDefault, toTitleCase)(title)
          : title
      }
    />
    <Meta
      name="description"
      content={descriptionOrDefault(locale)(description)}
    />
    <Meta
      name="pubdate"
      content={pubDate !== "" ? safeDate(pubDate).toISOString() : ""}
    />
    <Meta name="i24-status" content={status} />
    {redirectLocation ? (
      <Meta name="i24-redirect-location" content={redirectLocation} />
    ) : null}

    <Meta name="og:site_name" content="i24NEWS" />
    <Meta name="og:type" content={type} />
    <Meta name="og:url" content={url} />
    <Meta
      name="og:title"
      content={withDefaultTitle ? pageTitleOrDefault(title) : title}
    />
    <Meta
      name="og:description"
      content={descriptionOrDefault(locale)(description)}
    />
    {videoUrl ? (
      <Meta name="og:video" content={videoUrl} />
    ) : (
      <Meta name="og:image" content={imageUrl} />
    )}

    <Meta name="twitter:site" content={xAccount} />
    <Meta name="twitter:creator" content={xAccount} />
    <Meta
      name="twitter:title"
      content={withDefaultTitle ? pageTitleOrDefault(title) : title}
    />
    <Meta name="twitter:url" content={url} />
    <Meta
      name="twitter:description"
      content={descriptionOrDefault(locale)(description)}
    />
    <Meta name="twitter:card" content={card} />
    {videoUrl ? (
      <Meta name="twitter:player" content={videoUrl} />
    ) : (
      <Meta name="twitter:image" content={imageUrl} />
    )}

    {map(renderMeta, metas)}

    {children}
  </div>
);

const renderMeta = ({ name, content }) => (
  <Meta key={`meta_${name}_${content}`} name={name} content={content} />
);

export { Meta, Title };

export default connect(mapStateToProps)(View);
