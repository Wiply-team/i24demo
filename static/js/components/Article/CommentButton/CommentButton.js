import Base from "../../../widgets/Button/CommentButton";
import React from "react";
import translate from "../../../utilities/translate";
import translations from "./translations";
import PropTypes from "prop-types";
import { getLocales } from "../../../utilities/locales";

const trans = translate(translations);

// CommentButton :: Props -> React.Component
const CommentButton = ({ scrollToCommentBox, locale, width, height }) => (
  <Base
    width={width}
    height={height}
    onClick={scrollToCommentBox}
    href="#article-comments"
    aria-label={trans(locale)("label")}
  />
);

CommentButton.propTypes = {
  scrollToCommentBox: PropTypes.func.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  locale: PropTypes.oneOf(getLocales()).isRequired,
};

export default CommentButton;
