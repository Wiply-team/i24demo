import React from "react";
import Link from "../../Link";
import PropTypes from "prop-types";
import CommentsIcon from "../../../legacy_components/Icons/Comment/CommentsIcon";

// CommentButton :: Props -> React.Component
const CommentButton = ({
  href,
  onClick,
  "aria-label": ariaLabel,
  height,
  width,
}) => (
  <Link href={href} onClick={onClick} aria-label={ariaLabel}>
    <CommentsIcon height={height} width={width} />
  </Link>
);

CommentButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  href: PropTypes.string.isRequired,
  "aria-label": PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default CommentButton;
