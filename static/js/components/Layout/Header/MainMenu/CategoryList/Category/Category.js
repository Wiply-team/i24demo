import React, { useState } from "react";
import styles from "./Category.module.css";
import Link from "../../../../../Routing/Link";
import Button from "../../../../../../widgets/Button/Base";
import DirectionAware from "../../../../../../widgets/Layout/DirectionAware";
import ArrowIcon from "../../../../../../legacy_components/Icons/ArrowIcon";
import PropTypes from "prop-types";
import translate from "../../../../../../utilities/translate";
import translations from "./translations";
import { getLocales } from "../../../../../../utilities/locales";

const trans = translate(translations);

// Category :: Props -> React.Component
const Category = ({
  link,
  locale,
  label,
  isActive,
  children,
  highlightClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles["dropdown-wrapper"]}>
      <div
        className={`${styles.wrapper} ${isActive ? styles.active : ""} ${
          styles[highlightClassName] ?? ""
        }`}
      >
        <div className={styles["link-wrapper"]}>
          <Link href={link}>{label}</Link>
        </div>
        {children ? (
          <div className={styles.button}>
            <Button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={
                isOpen ? trans(locale)("close") : trans(locale)("open")
              }
            >
              <DirectionAware direction={isOpen ? "up" : "bottom"}>
                <ArrowIcon />
              </DirectionAware>
            </Button>
          </div>
        ) : null}
      </div>
      {isOpen ? children : null}
    </div>
  );
};

Category.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  highlightClassName: PropTypes.string,
  children: PropTypes.node,
};

export default Category;
