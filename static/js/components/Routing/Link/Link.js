import React from "react";
import Base from "../../../widgets/Link";
import PropTypes from "prop-types";

// Link :: Props -> React.Component
const Link = ({
  children,
  changeRoute,
  href,
  title,
  tabIndex,
  role,
  variant = "inline",
  "aria-label": ariaLabel,
}) => (
  <Base
    href={href}
    title={title}
    tabIndex={tabIndex}
    onClick={() => changeRoute(href)}
    variant={variant}
    aria-label={ariaLabel}
    role={role}
  >
    {children}
  </Base>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  changeRoute: PropTypes.func.isRequired,
  tabIndex: PropTypes.number,
  role: PropTypes.string,
  variant: PropTypes.oneOf(["inline", "inline-underlined", "block"]),
  "aria-label": PropTypes.string,
};

export default Link;
