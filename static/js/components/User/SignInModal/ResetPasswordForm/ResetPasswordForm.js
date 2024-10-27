import React, { useState, useEffect, useRef } from "react";
import styles from "./ResetPasswordForm.module.css";
import translate from "../../../../utilities/translate";
import translations from "./translations";
import Form from "../../../../widgets/Form";
import Input from "../../../../widgets/Form/Input";
import SubmitButton from "../../../../widgets/Button/SubmitButton";
import Error from "../../../../widgets/Form/Error";
import Loader from "../../../../widgets/Generic/Loader";
import CancelButton from "../../../../widgets/Button/CancelButton";
import ModalHeader from "../ModalHeader";
import PropTypes from "prop-types";
import { getLocales } from "../../../../utilities/locales";
import { isEmailValid } from "../../../../utilities/strings";
import useFocusInvalidInput from "../../../../hooks/useFocusInvalidInput";

const trans = translate(translations);

// ResetPasswordForm :: Props -> React.Component
const ResetPasswordForm = ({
  locale,
  isSuccess,
  requestPasswordReset,
  isSubmitting,
  onCancel,
  onClose,
  error,
}) => {
  const ref = useRef(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [formErrors, setFormErrors] = useState({});

  useFocusInvalidInput(formErrors);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  const handleSubmit = () => {
    const completeEmailError =
      emailError === "" && !isEmailValid(email)
        ? trans(locale)("errors.invalidEmail")
        : emailError;
    if (completeEmailError !== "") {
      setFormErrors({ email: completeEmailError });

      return;
    }

    setFormErrors({});
    requestPasswordReset(email);
  };

  return (
    <div id="reset-password-form" className={styles.wrapper}>
      <ModalHeader title={trans(locale)("reset")} />
      {!isSuccess ? (
        <Form noValidate={true} onSubmit={handleSubmit}>
          <Input
            locale={locale}
            ref={ref}
            type="email"
            name="email"
            label={trans(locale)("email")}
            value={email}
            onChange={setEmail}
            onError={setEmailError}
            error={formErrors.email}
            required={true}
            disabled={isSubmitting}
          />
          <p className={styles["mandatory-text"]}>
            {trans(locale)("mandatoryFields")}
          </p>
          {error ? <Error>{trans(locale)("error")}</Error> : null}
          <SubmitButton disabled={isSubmitting}>
            {!isSubmitting ? (
              trans(locale)("reset")
            ) : (
              <Loader size="small" color="white" />
            )}
          </SubmitButton>
          <CancelButton onClick={onCancel}>
            {trans(locale)("cancel")}
          </CancelButton>
        </Form>
      ) : (
        <>
          <p className={styles.success}>{trans(locale)("success")}</p>
          <CancelButton onClick={onClose}>{trans(locale)("back")}</CancelButton>
        </>
      )}
    </div>
  );
};

ResetPasswordForm.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  requestPasswordReset: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

export default ResetPasswordForm;
