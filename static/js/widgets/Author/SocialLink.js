import { T, compose, cond, isEmpty, match, not, nth, unless } from "ramda";
import ExternalLink from "../../components/Routing/ExternalLink";
import React from "react";
import FacebookIcon from "./../../legacy_components/Icons/SocialMedia/FacebookIcon";
import XIcon from "./../../legacy_components/Icons/SocialMedia/XIcon";

// isFacebookLink :: String -> Boolean
const isFacebookLink = compose(
  not,
  isEmpty,
  match(/^(?:https?:\/\/)?(?:www\.)?facebook\.[a-z]{2,3}/i)
);

// isXLink :: String -> Boolean
const isXLink = compose(
  not,
  isEmpty,
  match(/^(?:https?:\/\/)?(?:www\.)?(?:twitter|x)\.[a-z]{2,3}/i)
);

// extractDomainNameFromUrl :: String -> String
const extractDomainNameFromUrl = compose(
  unless(isEmpty, nth(1)),
  match(/^(?:https?:\/\/)?(?:www\.)?([^:/\s]+)/i)
);

// SocialLink:: Props -> React.Component
const SocialLink = ({ link, variant }) => (
  <ExternalLink
    href={link}
    variant={variant}
    aria-label={cond([
      [isFacebookLink, () => "Facebook"],
      [isXLink, () => "Twitter/X"],
      [T, (link) => extractDomainNameFromUrl(link)],
    ])(link)}
  >
    {cond([
      [isFacebookLink, () => <FacebookIcon />],
      [isXLink, () => <XIcon />],
      [T, (link) => extractDomainNameFromUrl(link)],
    ])(link)}
  </ExternalLink>
);

export default SocialLink;
