import React, { useEffect, useMemo } from "react";
import Label from "../Label";
import PropTypes from "prop-types";
import styles from "./Input.module.css";
import uniqid from "uniqid";
import Error from "../Error";
import translate from "../../../utilities/translate";
import translations from "../../../translations/form";
import { enLocale, getLocales } from "../../../utilities/locales";

// trans :: String -> String -> String
const trans = translate(translations);

const Input = React.forwardRef(
  (
    {
      locale = enLocale,
      name,
      value,
      onChange,
      onError = () => {},
      type = "text",
      label,
      required = false,
      disabled = false,
      error = "",
      instructions,
      pattern,
      "aria-label": ariaLabel,
    },
    ref
  ) => {
    useEffect(() => {
      if (required && (value === null || value.length === 0)) {
        onError(trans(locale)("errors.requiredField", { label }));
      } else {
        onError("");
      }
    }, [value]);

    const id = useMemo(() => uniqid(), [name]);
    const errorId = useMemo(() => uniqid(), [error]);

    const handleChange = (event) => {
      onChange(event.target.value);
    };

    return (
      <div className={styles.wrapper}>
        <Label htmlFor={id} required={required}>
          {label}
        </Label>
        <input
          ref={ref}
          className={styles.input}
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
          disabled={disabled}
          pattern={pattern}
          aria-describedby={error ? errorId : undefined}
          aria-label={ariaLabel}
          aria-required={required}
          aria-invalid={error !== ""}
        />
        {instructions ? (
          <span className={styles.instructions}>{instructions}</span>
        ) : null}
        {error !== "" ? <Error id={errorId}>{error}</Error> : null}
      </div>
    );
  }
);

Input.propTypes = {
  locale: PropTypes.oneOf(getLocales()),
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onError: PropTypes.func,
  type: PropTypes.string,
  label: PropTypes.node.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  instructions: PropTypes.string,
  pattern: PropTypes.string,
  "aria-label": PropTypes.string,
};

export default Input;
