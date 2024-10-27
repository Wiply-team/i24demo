import styles from "./Link.module.css";
import React from "react";
import PropTypes from "prop-types";

const Link = ({
  href,
  children,
  title,
  target,
  rel,
  onClick,
  tabIndex,
  role,
  "aria-label": ariaLabel,
  variant = "inline",
}) => (
  <a
    className={`${styles.link} ${styles[variant]}`}
    href={href}
    target={target}
    rel={rel}
    title={title}
    tabIndex={tabIndex}
    role={role}
    aria-label={ariaLabel}
    onClick={
      onClick
        ? (e) => {
            e.preventDefault();
            onClick(e);
          }
        : undefined
    }
  >
    {children}
  </a>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  onClick: PropTypes.func,
  tabIndex: PropTypes.number,
  role: PropTypes.string,
  variant: PropTypes.oneOf(["inline", "inline-underlined", "block"]),
  "aria-label": PropTypes.string,
};

export default Link;
