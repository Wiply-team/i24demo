import React, { useState, useMemo, useRef } from "react";
import Link from "../../../Routing/Link";
import Button from "../../../../widgets/Button/Base";
import styles from "./Dropdown.module.css";
import DirectionAware from "../../../../widgets/Layout/DirectionAware/DirectionAware";
import ArrowIcon from "../../../../legacy_components/Icons/ArrowIcon";
import ExternalLink from "../../../Routing/ExternalLink";
import useEscapePress from "../../../../hooks/useEscapePress";
import useTabPress from "../../../../hooks/useTabPress";
import translate from "../../../../utilities/translate";
import translations from "./translations";
import uniqid from "uniqid";
import { getLocales } from "../../../../utilities/locales";
import PropTypes from "prop-types";

const trans = translate(translations);

const Dropdown = ({ locale, children }) => {
  const ref = useRef(null);
  const menuId = useMemo(() => uniqid(), [children]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEscapePress(() => setIsMenuOpen(false));
  useTabPress((event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  });

  return (
    <div
      className={`${styles.wrapper} ${isMenuOpen ? styles.opened : ""}`}
      ref={ref}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          ...child.props,
          locale,
          menuId,
          isMenuOpen,
          setIsMenuOpen,
        })
      )}
    </div>
  );
};

const Toggle = ({ locale, menuId, isMenuOpen, setIsMenuOpen, children }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      event.stopPropagation();

      setIsMenuOpen(!isMenuOpen);
    }
  };

  return (
    <div className={styles["toggle-wrapper"]} aria-controls={menuId}>
      {children}
      <button
        className={styles.toggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isMenuOpen}
        aria-label={trans(locale)("toggle")}
        // Asked by accessibility audit team, need to clarify this point in order to remove it
        onClick={() => {}}
      >
        <DirectionAware direction="bottom">
          <ArrowIcon width={5} aria-label={trans(locale)("toggleIcon")} />
        </DirectionAware>
      </button>
    </div>
  );
};

const Menu = ({ menuId, children }) => (
  <div className={styles["menu-wrapper"]}>
    <ul id={menuId} className={styles.menu}>
      {children}
    </ul>
  </div>
);

const ItemLink = ({ href, children, isActive }) => (
  <li className={`${styles.item} ${isActive ? styles.active : ""}`}>
    <div className={styles["link-wrapper"]}>
      <Link href={href}>{children}</Link>
    </div>
  </li>
);

const ItemExternalLink = ({ href, children, isActive }) => (
  <li className={`${styles.item} ${isActive ? styles.active : ""}`}>
    <div className={styles["link-wrapper"]}>
      <ExternalLink href={href}>{children}</ExternalLink>
    </div>
  </li>
);

const ItemButton = ({ onClick, children }) => (
  <li className={`${styles.item} ${styles["button-wrapper"]}`}>
    <Button onClick={onClick}>
      <div className={styles.item}>{children}</div>
    </Button>
  </li>
);

Menu.Link = ItemLink;
Menu.ExternalLink = ItemExternalLink;
Menu.Button = ItemButton;

Dropdown.Toggle = Toggle;
Dropdown.Menu = Menu;

Dropdown.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.oneOfType([
      PropTypes.shape({
        type: PropTypes.oneOf([Toggle, Menu]),
      }),
    ]),
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          type: PropTypes.oneOf([Toggle, Menu]),
        }),
      ])
    ),
  ]).isRequired,
};

Dropdown.Toggle.propTypes = {
  children: PropTypes.node.isRequired,
};

Dropdown.Menu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.oneOfType([
      PropTypes.shape({
        type: PropTypes.oneOf([ItemLink, ItemExternalLink, ItemButton]),
      }),
    ]),
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          type: PropTypes.oneOf([ItemLink, ItemExternalLink, ItemButton]),
        }),
      ])
    ),
  ]).isRequired,
};

Dropdown.Menu.Link.propTypes = {
  href: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

Dropdown.Menu.ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

Dropdown.Menu.Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Dropdown;
