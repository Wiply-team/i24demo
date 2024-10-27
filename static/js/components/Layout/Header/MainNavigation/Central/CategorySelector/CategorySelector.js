import Button from "../../../../../../widgets/Button/Base";
import React from "react";
import styles from "./CategorySelector.module.css";
import Link from "../../../../../Routing/Link";
import Dropdown from "../../../Dropdown";
import PropTypes from "prop-types";
import translate from "../../../../../../utilities/translate";
import translations from "../../../translations";

const trans = translate(translations);

// CategorySelector :: Props -> React.Component
const CategorySelector = ({
  link,
  label,
  isActive,
  subCategories = [],
  highlightClassName = "",
}) =>
  subCategories.length > 0 ? (
    <div
      className={`${styles.wrapper} ${isActive ? styles.active : ""} ${
        styles[highlightClassName] ?? ""
      }`}
    >
      <Dropdown>
        <Dropdown.Toggle>
          <div className={styles["toggle-wrapper"]}>
            <Link href={link}>{label}</Link>
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {subCategories.map((subCategory) => (
            <Dropdown.Menu.Link
              key={subCategory.link}
              href={subCategory.link}
              isActive={subCategory.isActive}
            >
              {subCategory.label}
            </Dropdown.Menu.Link>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  ) : (
    <div
      className={`${styles.wrapper} ${isActive ? styles.active : ""} ${
        styles[highlightClassName] ?? ""
      }`}
    >
      <div className={styles["toggle-wrapper"]}>
        <Link href={link}>{label}</Link>
      </div>
    </div>
  );

// More :: Props -> React
const More = ({ locale, categories }) => (
  <div className={styles.wrapper}>
    <Dropdown>
      <Dropdown.Toggle>
        <div className={styles["toggle-wrapper"]}>
          <Button onClick={() => {}}> {trans(locale)("more")}</Button>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {categories.map((category) => (
          <Dropdown.Menu.Link
            key={category.link}
            href={category.link}
            isActive={category.active}
          >
            {category.name}
          </Dropdown.Menu.Link>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  </div>
);

CategorySelector.More = More;

CategorySelector.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  subCategories: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
    })
  ),
  highlightClassName: PropTypes.string,
};

CategorySelector.More.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default CategorySelector;
