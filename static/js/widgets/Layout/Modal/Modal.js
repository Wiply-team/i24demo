import React, { useEffect, useRef } from "react";
import styles from "./Modal.module.css";
import CloseIcon from "../../../legacy_components/Icons/CloseIcon";
import Button from "../../Button/Base";
import useEscapePress from "../../../hooks/useEscapePress";
import PropTypes from "prop-types";
import LogoIcon from "../../../legacy_components/Icons/LogoIcon";
import { getLocales, isArabic, isHebrew } from "../../../utilities/locales";

const Modal = ({ children, isOpen, onClose, onCloseLabel, locale }) => {
  const ref = useRef(null);
  useEscapePress(onClose);

  useEffect(() => {
    if (ref.current && isOpen) {
      ref.current.focus();
    }

    document.body.style.overflowY = isOpen ? "hidden" : "visible";
  }, [isOpen]);

  return (
    <div
      className={`${isArabic(locale) || isHebrew(locale) ? "rtl" : "ltr"} ${
        styles.wrapper
      } ${isOpen ? styles.open : ""}`}
    >
      <div className={styles.background} />
      <div
        className={styles.body}
        role={isOpen ? "dialog" : "none"}
        aria-labelledby="modal-title"
        aria-modal="true"
        ref={ref}
        tabIndex={0}
      >
        <div className={styles["close-button"]}>
          <Button onClick={onClose} aria-label={onCloseLabel}>
            <CloseIcon width={14} height={14} />
          </Button>
        </div>
        <div className={styles.logo}>
          <LogoIcon width={30} height={30} />
        </div>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onCloseLabel: PropTypes.string.isRequired,
  locale: PropTypes.oneOf(getLocales()).isRequired,
};

export default Modal;
