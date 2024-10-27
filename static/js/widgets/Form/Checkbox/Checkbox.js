import React, { useMemo } from "react";
import styles from "./Checkbox.module.css";
import Label from "../Label";
import PropTypes from "prop-types";
import uniqid from "uniqid";
import Error from "../Error";

const Checkbox = ({
  name,
  checked,
  onChange,
  label,
  required = false,
  disabled = false,
  error = "",
}) => {
  const id = useMemo(() => uniqid(), [name]);
  const errorId = useMemo(() => uniqid(), [error]);

  const handleChange = (event) => {
    onChange(event.target.checked);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.line}>
        <input
          type="checkbox"
          className={styles.input}
          id={id}
          name={name}
          checked={checked}
          onChange={handleChange}
          aria-required={required}
          aria-describedby={error ? errorId : undefined}
          required={required}
          disabled={disabled}
          onClick={(event) => event.stopPropagation()}
          onKeyDown={(event) => event.stopPropagation()}
        />
        <Label htmlFor={id} required={required} variant="thin">
          {label}
        </Label>
      </div>
      {error !== "" ? <Error id={errorId}>{error}</Error> : null}
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.node.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Checkbox;
