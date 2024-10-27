import React from "react";
import Base from "../../../widgets/Link";
import PropTypes from "prop-types";

// ExternalLink :: Props -> React.Component
const ExternalLink = ({
  children,
  href,
  title,
  tabIndex,
  openInNewPage = true,
  variant = "inline",
  "aria-label": ariaLabel,
}) => (
  <Base
    href={href}
    title={title}
    tabIndex={tabIndex}
    target={openInNewPage ? "_blank" : "_self"}
    rel={openInNewPage ? "noopener noreferrer" : undefined}
    variant={variant}
    aria-label={ariaLabel}
  >
    {children}
  </Base>
);

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  openInNewPage: PropTypes.bool,
  tabIndex: PropTypes.number,
  variant: PropTypes.oneOf(["inline", "inline-underlined", "block"]),
  "aria-label": PropTypes.string,
};

export default ExternalLink;
