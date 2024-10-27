import React, { useState, useEffect, useRef } from "react";
import styles from "./CommentInput.module.css";
import SendIcon from "../../../legacy_components/Icons/Comment/SendIcon";
import CommentsIcon from "../../../legacy_components/Icons/Comment/CommentsIcon";
import { isEmpty } from "ramda";
import PropTypes from "prop-types";

const CommentInput = ({
  label,
  buttonLabel,
  value,
  onChange,
  disabled = false,
}) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const onPlaceholderClick = () => setIsActive(true);
  const onInputFocus = () => setIsActive(true);
  const onInputBlur = () => setIsActive(isEmpty(value ?? "") ? false : true);

  useEffect(() => {
    if (isActive && ref && ref.current) {
      ref.current.focus();
    }
  }, [isActive]);

  return (
    <div className={styles.wrapper}>
      {!isActive ? (
        <button className={styles.placeholder} onClick={onPlaceholderClick}>
          <CommentsIcon />
          <span className={styles["placeholder-text"]}>{label}</span>
          <SendIcon />
        </button>
      ) : (
        <div className={styles["input-wrapper"]}>
          <input
            ref={ref}
            className={styles.input}
            type="text"
            required={true}
            aria-label={label}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
            value={value}
            onChange={(event) => onChange(event.target.value)}
          />
          <button
            className={styles["submit-button"]}
            onClick={() => {}}
            disabled={disabled}
            aria-label={buttonLabel}
          >
            <SendIcon />
          </button>
        </div>
      )}
    </div>
  );
};

CommentInput.propTypes = {
  label: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default CommentInput;
