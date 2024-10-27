import React, { useRef, useEffect, useState } from "react";
import styles from "./MainCategories.module.css";
import translations from "../../../translations";
import Logo from "../Logo";
import PropTypes from "prop-types";
import { sum } from "ramda";
import layout from "../../../../../../styles/variables/layout.module.css";
import CategorySelector from "../CategorySelector";
import translate from "../../../../../../utilities/translate";
import { filterNavbarCategories } from "../../../../../../utilities/miscellaneous";
import { resolveCategoryHighlightClassname } from "../../../../../../utilities/displays";
import { getLocales } from "../../../../../../utilities/locales";

const trans = translate(translations);

// formatLayoutVariable :: String -> Number
const formatLayoutVariable = (variable) =>
  Number(layout[variable].replace("px", ""));

// calculateTextWidth :: String -> Number
const calculateTextWidth = (text) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = styles["categories-font"];

  return context.measureText(text).width;
};

// calculateCategoriesWidth :: [Category] -> Number
const calculateCategoriesWidth = (categories) =>
  categories.reduce((totalWidth, category) => {
    const categoryWidth = calculateTextWidth(category.name.toUpperCase());
    const gapWidth = formatLayoutVariable("gap-m");

    return totalWidth + categoryWidth + gapWidth;
  }, 0);

// getDisplayedAndHiddenCategories :: (Array, Number, Number, String) -> Number
const getDisplayedAndHiddenCategories = (
  categories,
  categoriesWidth,
  allowedWidth,
  locale
) =>
  categoriesWidth > allowedWidth
    ? categories.reduce(
        (acc, category) => {
          const categoryWidth = calculateTextWidth(category.name.toUpperCase());
          const gapWidth = formatLayoutVariable("gap-m");
          const totalWidth = acc.currentWidth + categoryWidth + gapWidth;

          return {
            currentWidth: totalWidth,
            hiddenCategories:
              totalWidth > allowedWidth
                ? [...acc.hiddenCategories, category]
                : acc.hiddenCategories,
            displayedCategories:
              totalWidth <= allowedWidth
                ? [...acc.displayedCategories, category]
                : acc.displayedCategories,
          };
        },
        {
          currentWidth: sum([
            formatLayoutVariable("gap-m"),
            calculateTextWidth(trans(locale)("more")),
          ]),
          hiddenCategories: [],
          displayedCategories: [],
        }
      )
    : {
        hiddenCategories: [],
        displayedCategories: categories,
      };

// MainCategories :: Props -> React.Component
const MainCategories = ({ locale, isHomePage, allCategories }) => {
  const ref = useRef(null);
  const [hiddenCategories, setHiddenCategories] = useState([]);
  const [displayedCategories, setDisplayedCategories] = useState([]);

  useEffect(() => {
    if (ref.current && allCategories.length > 0) {
      const navBarCategories = [
        {
          id: 0,
          link: `/${locale}`,
          name: trans(locale)("topStories"),
          active: isHomePage,
          children: [],
        },
        ...filterNavbarCategories(allCategories),
      ];
      const { hiddenCategories, displayedCategories } =
        getDisplayedAndHiddenCategories(
          navBarCategories,
          calculateCategoriesWidth(navBarCategories),
          ref.current ? ref.current.offsetWidth : 0,
          locale
        );

      setHiddenCategories(hiddenCategories);
      setDisplayedCategories(displayedCategories);
    }
  }, [allCategories]);

  return (
    <ul ref={ref} className={styles.list} id="header-main-categories">
      {allCategories.length > 0 ? (
        <>
          <li className={styles.mobile}>
            <Logo label={trans(locale)("topStories")} />
          </li>
          {displayedCategories.map((category) => (
            <li key={category.id}>
              <CategorySelector
                link={category.link}
                label={category.name}
                isActive={category.active}
                highlightClassName={resolveCategoryHighlightClassname(
                  category.id
                )}
                subCategories={category.children.map((category) => ({
                  link: category.link,
                  isActive: category.active ?? false,
                  label: category.name,
                }))}
              />
            </li>
          ))}
          {hiddenCategories.length > 0 ? (
            <li>
              <CategorySelector.More
                locale={locale}
                categories={hiddenCategories}
              />
            </li>
          ) : null}
        </>
      ) : null}
    </ul>
  );
};

MainCategories.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  isHomePage: PropTypes.bool.isRequired,
  allCategories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
      children: PropTypes.arrayOf(PropTypes.object).isRequired,
    })
  ).isRequired,
};

export default MainCategories;
