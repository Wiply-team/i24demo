import "./Widget.scss";
import {
  T,
  always,
  assoc,
  compose,
  cond,
  curry,
  defaultTo,
  evolve,
  isEmpty,
  keys,
  pick,
  pipe,
  prop,
  reduce,
  tryCatch,
} from "ramda";
import ImageRenditionPreview from "../../Image/Rendition/Preview";
import LazyComponent from "../../../components/LazyComponent";
import React from "react";
import SocialCookieException from "../../../components/Article/SocialCookieException";
import Widget from "./index";
import YouTubeWidget from "../../YouTube";
import { playlistEndScreen } from "../../../utilities/media/videos";
import ClientOnly from "../../ClientOnly";

const BrightcoveVideoPlayerWidget = LazyComponent("BrightcoveVideoLazyPlayer");
const FacebookPostWidget = LazyComponent("FacebookPost");
const TweetWidget = LazyComponent("Tweet");

// is :: String -> Props -> Boolean
const is =
  (type) =>
  ({ component }) =>
    type === component.type;

// renderChildren :: (String, [Children]) -> React.Component
const renderChildren = (parentId, children) =>
  children.map((child, index) => (
    <Widget
      component={child}
      id={`${parentId}-${index}`}
      key={`${parentId}-${index}`}
    />
  ));

// getOptionsFromOriginalHtmlMarkup :: String -> Object
const getOptionsFromOriginalHtmlMarkup = tryCatch(
  pipe(
    (html) =>
      new DOMParser()
        .parseFromString(html, "text/html")
        .querySelector("blockquote.twitter-tweet"),
    compose(pick(["cards", "conversation"]), prop("dataset"))
  ),
  always({})
);

// Tweet :: Props -> React.Component
const Tweet = ({ component, nonIABVendorsAuthorized }) => (
  <ClientOnly
    fallback={
      <SocialCookieException
        href={`https://x.com/i/web/status/${component.id}`}
      />
    }
  >
    {nonIABVendorsAuthorized ? (
      <blockquote className="tweet" data-is="component-tweet">
        <TweetWidget
          tweetId={component.id}
          options={getOptionsFromOriginalHtmlMarkup(component.html)}
        />
      </blockquote>
    ) : (
      <SocialCookieException
        href={`https://x.com/i/web/status/${component.id}`}
      />
    )}
  </ClientOnly>
);

// FacebookPost :: Props -> React.Component
const FacebookPost = ({ component, nonIABVendorsAuthorized }) => (
  <ClientOnly fallback={<SocialCookieException href={component.href} />}>
    {nonIABVendorsAuthorized ? (
      <FacebookPostWidget href={component.href} props={component.props} />
    ) : (
      <SocialCookieException href={component.href} />
    )}
  </ClientOnly>
);

// Text :: Props -> React.Component
const Text = ({ component }) => component.text;

// Paragraph :: Props -> React.Component
const Paragraph = ({ component, id }) => (
  <p className={component.props.className} data-is="component-paragraph">
    {renderChildren(id, component.children)}
  </p>
);

// Link :: Props -> React.Component
const Link = ({ component, id }) => (
  <a
    data-is="component-link"
    href={component.props.href}
    title={component.props.title}
    target={component.props.target}
    className={component.props.className}
  >
    {renderChildren(id, component.children)}
  </a>
);

// CaptionedImage :: Props -> React.Component
const CaptionedImage = ({ component }) => (
  <figure data-is="component-image-wrapper">
    <ImageRenditionPreview
      src={component.src}
      alt={component.credit || component.caption}
    />
    <figcaption className="text-lighten">
      <span className="caption">{component.caption}</span>
      <span className="credit">{component.credit}</span>
    </figcaption>
  </figure>
);

// BrightcoveVideo :: Props -> React.Component
const CaptionedBrightcoveVideo = ({ component, locale }) => (
  <figure data-is="component-video-wrapper">
    <BrightcoveVideoPlayerWidget
      autoPlay={component.autoPlay}
      videoId={component.id}
      endScreenType={playlistEndScreen}
      locale={locale}
    />
    <figcaption className="text-lighten">
      <span className="caption">{component.description}</span>
      {null !== component.credit && !isEmpty(component.credit) ? (
        <span className="credit">{component.credit}</span>
      ) : null}
    </figcaption>
  </figure>
);

// Heading :: Props -> React.Component
const Heading = ({ component, id }) =>
  React.createElement(
    `h${component.size}`,
    {
      "data-is": "component-heading",
      className: component.props.className,
    },
    renderChildren(id, component.children)
  );

// Emphasis :: Props -> React.Component
const Emphasis = ({ component, id }) => (
  <em className={component.props.className} data-is="component-emphasis">
    {renderChildren(id, component.children)}
  </em>
);

// Strong :: Props -> React.Component
const Strong = ({ component, id }) => (
  <strong className={component.props.className} data-is="component-strong">
    {renderChildren(id, component.children)}
  </strong>
);

// Italic :: Props -> React.Component
const Italic = ({ component, id }) => (
  <i className={component.props.className} data-is="component-italic">
    {renderChildren(id, component.children)}
  </i>
);

// Bold :: Props -> React.Component
const Bold = ({ component, id }) => (
  <b className={component.props.className} data-is="component-bold">
    {renderChildren(id, component.children)}
  </b>
);

// Underline :: Props -> React.Component
const Underline = ({ component, id }) => (
  <u className={component.props.className} data-is="component-underline">
    {renderChildren(id, component.children)}
  </u>
);

// Quote :: Props -> React.Component
const Quote = ({ component, id }) => (
  <blockquote className={component.props.className} data-is="component-quote">
    {renderChildren(id, component.children)}
  </blockquote>
);

// Figure :: Props -> React.Component
const Figure = ({ component, id }) => (
  <figure className={component.props.className} data-is="component-figure">
    {renderChildren(id, component.children)}
  </figure>
);

// Figcaption :: Props -> React.Component
const Figcaption = ({ component, id }) => (
  <figcaption
    className={component.props.className}
    data-is="component-figcaption"
  >
    {renderChildren(id, component.children)}
  </figcaption>
);

// Img :: Props -> React.Component
const Img = ({ component }) => (
  <ImageRenditionPreview
    data-is="component-img"
    className={component.props.className}
    src={component.props.src}
    alt={component.props.alt}
    title={component.props.title}
  />
);

// YoutubeVideo :: Props -> React.Component
const YoutubeVideo = ({ component }) => <YouTubeWidget src={component.src} />;

// renameKeys :: {a: b} -> {a: *} -> {b: *}
const renameKeys = curry((keysMap, obj) =>
  reduce((acc, key) => assoc(keysMap[key] || key, obj[key], acc), {}, keys(obj))
);

// convertPropsToReactProps :: Object -> Object
const convertPropsToReactProps = renameKeys({ class: "className" });

// Widget :: Component -> React.Component
export default pipe(
  evolve({
    component: evolve({
      props: compose(convertPropsToReactProps, defaultTo({})),
    }),
  }),
  cond([
    [is("bold"), Bold],
    [is("brightcoveVideo"), CaptionedBrightcoveVideo],
    [is("emphasis"), Emphasis],
    [is("facebookPost"), FacebookPost],
    [is("figcaption"), Figcaption],
    [is("figure"), Figure],
    [is("subHeading"), Heading],
    [is("captionedImage"), CaptionedImage],
    [is("img"), Img],
    [is("italic"), Italic],
    [is("link"), Link],
    [is("paragraph"), Paragraph],
    [is("quote"), Quote],
    [is("strong"), Strong],
    [is("text"), Text],
    [is("tweet"), Tweet],
    [is("underline"), Underline],
    [is("youtubeVideo"), YoutubeVideo],
    [T, always(null)],
  ])
);
