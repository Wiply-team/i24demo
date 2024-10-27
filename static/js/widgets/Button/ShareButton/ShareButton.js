import React from "react";
import ShareIcon from "../../../legacy_components/Icons/SocialMedia/ShareIcon";
import Base from "../Base";
import PropTypes from "prop-types";

// ShareButton :: Props -> React.Component
const ShareButton = ({
  onKeyDown,
  onClick,
  height,
  width,
  "aria-label": ariaLabel,
}) => (
  <Base aria-label={ariaLabel} onClick={onClick} onKeyDown={onKeyDown}>
    <ShareIcon height={height} width={width} />
  </Base>
);

ShareButton.propTypes = {
  onKeyDown: PropTypes.func,
  onClick: PropTypes.func.isRequired,
  "aria-label": PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ShareButton;
