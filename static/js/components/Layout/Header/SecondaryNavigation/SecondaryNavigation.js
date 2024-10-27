import styles from "./SecondaryNavigation.module.css";
import NavItem from "./NavItem";
import React from "react";
import translate from "../../../../utilities/translate";
import translations from "./translations";
import commonTranslations from "../translations";
import { filterNavbarCategories } from "../../../../utilities/miscellaneous";
import { resolveCategoryHighlightClassname } from "../../../../utilities/displays";
import { mergeDeepLeft } from "ramda";
import { getLocales } from "../../../../utilities/locales";
import PropTypes from "prop-types";

// trans :: String -> String -> String
const trans = translate(mergeDeepLeft(translations, commonTranslations));

// SecondaryNavigation :: Props -> React.Component
const SecondaryNavigation = React.memo(
  ({ categories, isHomePage, locale, move, collapsed }) => (
    <nav
      className={`${styles.wrapper} ${move ? styles.move : ""} ${
        collapsed ? styles.collapsed : ""
      }`}
      aria-label={trans(locale)("label")}
    >
      <ul>
        <li>
          <NavItem
            link={`/${locale}`}
            label={trans(locale)("topStories")}
            isActive={isHomePage}
          />
        </li>
        {filterNavbarCategories(categories).map((category) => (
          <li key={category.id}>
            <NavItem
              link={category.link}
              label={category.name}
              isActive={category.active}
              highlightClassName={resolveCategoryHighlightClassname(
                category.id
              )}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
);

SecondaryNavigation.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  isHomePage: PropTypes.bool.isRequired,
  move: PropTypes.bool.isRequired,
  collapsed: PropTypes.bool.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default SecondaryNavigation;
