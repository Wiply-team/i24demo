import React, { useState, useEffect, useRef } from "react";
import styles from "./SignInForm.module.css";
import translate from "../../../../utilities/translate";
import Button from "../../../../widgets/Button/Base";
import translations from "./translations";
import Form from "../../../../widgets/Form";
import Input from "../../../../widgets/Form/Input";
import SubmitButton from "../../../../widgets/Button/SubmitButton";
import Link from "../../../Routing/Link";
import Error from "../../../../widgets/Form/Error";
import Loader from "../../../../widgets/Generic/Loader";
import ModalHeader from "../ModalHeader";
import PropTypes from "prop-types";
import { getLocales } from "../../../../utilities/locales";
import { isEmailValid } from "../../../../utilities/strings";
import useFocusInvalidInput from "../../../../hooks/useFocusInvalidInput";

const trans = translate(translations);

// SignInForm :: Props -> React.Component
const SignInForm = ({
  locale,
  signIn,
  onSignUp,
  onResetPassword,
  isSubmitting,
  isSuccess,
  onClose,
  error,
  unverifiedError,
}) => {
  const ref = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [formErrors, setFormErrors] = useState({});

  useFocusInvalidInput(formErrors);

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess]);

  const handleSubmit = () => {
    const completeEmailError =
      emailError === "" && !isEmailValid(email)
        ? trans(locale)("errors.invalidEmail")
        : emailError;
    if (completeEmailError !== "" || passwordError !== "") {
      setFormErrors({ email: completeEmailError, password: passwordError });

      return;
    }

    setFormErrors({});
    signIn(email, password);
  };

  return (
    <div id="sign-in-form" className={styles.wrapper}>
      <ModalHeader title={trans(locale)("signIn")} />
      <h3 className={styles.subtitle}>
        {trans(locale)("noAccountYet")}
        &nbsp;
        <span className={styles["sign-up-button"]}>
          <Button onClick={onSignUp}>{trans(locale)("signUp")}</Button>
        </span>
      </h3>
      <Form noValidate={true} onSubmit={handleSubmit} ariaLive="assertive">
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
        <Input
          locale={locale}
          type="password"
          name="password"
          label={trans(locale)("password")}
          value={password}
          onChange={setPassword}
          onError={setPasswordError}
          error={formErrors.password}
          required={true}
          disabled={isSubmitting}
        />
        <p className={styles["mandatory-text"]}>
          {trans(locale)("mandatoryFields")}
        </p>
        <p className={styles.text}>
          <span className={styles["link-wrapper"]}>
            <Button onClick={onResetPassword}>{trans(locale)("reset")}</Button>
          </span>
        </p>
        {error || unverifiedError ? (
          <Error>
            {unverifiedError
              ? trans(locale)("unverified")
              : trans(locale)("badCredentials")}
          </Error>
        ) : null}
        <SubmitButton disabled={isSubmitting}>
          {!isSubmitting ? (
            trans(locale)("signIn")
          ) : (
            <Loader size="small" color="white" />
          )}
        </SubmitButton>
      </Form>
      <p className={styles.text}>
        {trans(locale)("termsText")}
        &nbsp;
        <span className={styles["link-wrapper"]}>
          <Link href={trans(locale)("termsUrl")} variant="inline-underlined">
            {trans(locale)("terms")}
          </Link>
        </span>
      </p>
    </div>
  );
};

SignInForm.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  signIn: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
  onResetPassword: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  unverifiedError: PropTypes.bool.isRequired,
};

export default SignInForm;
