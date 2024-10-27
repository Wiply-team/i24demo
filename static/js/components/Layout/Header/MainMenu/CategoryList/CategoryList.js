import React from "react";
import styles from "./CategoryList.module.css";
import translate from "../../../../../utilities/translate";
import translations from "../../translations";
import Category from "./Category";
import { filterNavbarCategories } from "../../../../../utilities/miscellaneous";
import { resolveCategoryHighlightClassname } from "../../../../../utilities/displays";
import PropTypes from "prop-types";

const trans = translate(translations);

// CategoryList :: Props -> React.Component
const CategoryTree = ({ categories }) =>
  filterNavbarCategories(categories).map((category) => (
    <li key={category.id}>
      <Category
        link={category.link}
        label={category.name}
        isActive={category.active}
        highlightClassName={resolveCategoryHighlightClassname(category.id)}
      >
        {category.children.length > 0 ? (
          <ul className={`${styles.list} ${styles["sub-list"]}`}>
            <CategoryTree categories={category.children} />
          </ul>
        ) : null}
      </Category>
    </li>
  ));

// CategoryList :: Props -> React.Component
const CategoryList = ({ locale, categories, isHomePage }) => (
  <ul className={styles.list}>
    <li>
      <Category
        link={`/${locale}`}
        label={trans(locale)("topStories")}
        isActive={isHomePage}
      />
    </li>
    <CategoryTree categories={categories} />
  </ul>
);

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
      children: PropTypes.arrayOf(PropTypes.object),
    })
  ).isRequired,
};

export default CategoryList;
