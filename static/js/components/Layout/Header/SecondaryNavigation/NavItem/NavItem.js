import styles from "./NavItem.module.css";
import Link from "../../../../Routing/Link";
import React from "react";
import PropTypes from "prop-types";

// NavItem :: Props -> React.Component
const NavItem = ({ link, label, isActive, highlightClassName = "" }) => (
  <div
    className={`${styles.wrapper} ${isActive ? styles.active : ""} ${
      styles[highlightClassName] ?? ""
    }`}
  >
    <Link href={link}>{label}</Link>
    <hr />
  </div>
);

NavItem.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  highlightClassName: PropTypes.string,
};

export default NavItem;
