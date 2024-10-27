import { T, call, cond } from "ramda";
import Base from "../../../widgets/Button/BookmarkButton";
import React from "react";
import translate from "../../../utilities/translate";
import translations from "./translations";
import PropTypes from "prop-types";
import { getLocales } from "../../../utilities/locales";

const trans = translate(translations);

// BookmarkButton :: Props -> React.Component
const BookmarkButton = ({
  isSignedIn,
  isMarked,
  mark,
  unmark,
  signIn,
  articleId,
  isFetching,
  locale,
  width,
  height,
}) => (
  <Base
    disabled={isFetching}
    isActive={isMarked}
    width={width}
    height={height}
    onClick={cond([
      [() => isSignedIn && isMarked, () => unmark(articleId)],
      [() => isSignedIn && !isMarked, () => mark(articleId)],
      [T, () => signIn()],
    ])}
    aria-label={call(
      cond([
        [() => isSignedIn && isMarked, () => trans(locale)("unmark")],
        [() => isSignedIn && !isMarked, () => trans(locale)("mark")],
        [T, () => trans(locale)("signIn")],
      ])
    )}
  />
);

BookmarkButton.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
  isMarked: PropTypes.bool.isRequired,
  mark: PropTypes.func.isRequired,
  unmark: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  articleId: PropTypes.number.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  isFetching: PropTypes.bool.isRequired,
  locale: PropTypes.oneOf(getLocales()).isRequired,
};

export default BookmarkButton;
