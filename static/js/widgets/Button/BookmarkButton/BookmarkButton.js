import React from "react";
import BookmarkIcon from "../../../legacy_components/Icons/Article/BookmarkIcon";
import Base from "../Base";
import styles from "./BookmarkButton.module.css";
import PropTypes from "prop-types";

// BookmarkButton :: Props -> React.Component
const BookmarkButton = ({
  onClick,
  disabled = false,
  isActive = false,
  "aria-label": ariaLabel,
  height,
  width,
}) => (
  <Base disabled={disabled} onClick={onClick} aria-label={ariaLabel}>
    <div className={isActive ? styles.active : ""}>
      <BookmarkIcon height={height} width={width} />
    </div>
  </Base>
);

BookmarkButton.propTypes = {
  disabled: PropTypes.bool,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  "aria-label": PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default BookmarkButton;
