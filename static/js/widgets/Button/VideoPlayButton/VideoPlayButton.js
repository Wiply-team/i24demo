import styles from "./VideoPlayButton.module.css";
import React from "react";
import PropTypes from "prop-types";
import PlayIcon from "../../../legacy_components/Icons/Radio/PlayIcon";

// VideoPlayButton :: Props -> React.Component
const VideoPlayButton = ({ onClick, "aria-label": ariaLabel }) => (
  <div className={styles.wrapper}>
    <button className={styles.button} onClick={onClick} aria-label={ariaLabel}>
      <PlayIcon />
    </button>
  </div>
);

VideoPlayButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  "aria-label": PropTypes.string.isRequired,
};

export default VideoPlayButton;
