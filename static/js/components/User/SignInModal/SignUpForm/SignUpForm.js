import React, { useState, useEffect, useRef } from "react";
import styles from "./SignUpForm.module.css";
import translate from "../../../../utilities/translate";
import translations from "./translations";
import Form from "../../../../widgets/Form";
import Input from "../../../../widgets/Form/Input";
import SubmitButton from "../../../../widgets/Button/SubmitButton";
import Error from "../../../../widgets/Form/Error";
import Loader from "../../../../widgets/Generic/Loader";
import CancelButton from "../../../../widgets/Button/CancelButton";
import ModalHeader from "../ModalHeader";
import Checkbox from "../../../../widgets/Form/Checkbox";
import Link from "../../../Routing/Link";
import Recaptcha from "react-google-recaptcha";
import { passwordPattern } from "../../../../utilities/constants";
import PropTypes from "prop-types";
import { getLocales } from "../../../../utilities/locales";
import { isEmailValid, isPasswordValid } from "../../../../utilities/strings";
import useFocusInvalidInput from "../../../../hooks/useFocusInvalidInput";

const trans = translate(translations);

// SignUpForm :: Props -> React.Component
const SignUpForm = ({
  locale,
  isSuccess,
  signUp,
  isSubmitting,
  onCancel,
  onClose,
  error,
}) => {
  const ref = useRef(null);

  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [newsletter, setNewsletter] = useState(true);
  const [terms, setTerms] = useState(false);
  const [captcha, setCaptcha] = useState("");

  const [nicknameError, setNicknameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  useFocusInvalidInput(formErrors);

  const handleSubmit = () => {
    const termsError = !terms ? trans(locale)("errors.termsRequired") : "";
    const captchaError =
      captcha === "" ? trans(locale)("errors.captchaRequired") : "";
    const completePasswordError = !isPasswordValid(password)
      ? trans(locale)("errors.invalidPassword")
      : passwordError;
    const completeRepeatPasswordError =
      password !== repeatPassword
        ? trans(locale)("errors.passwordMismatch")
        : repeatPasswordError;
    const completeEmailError =
      emailError === "" && !isEmailValid(email)
        ? trans(locale)("errors.invalidEmail")
        : emailError;

    if (
      completeEmailError !== "" ||
      nicknameError !== "" ||
      completePasswordError !== "" ||
      completeRepeatPasswordError !== "" ||
      termsError !== "" ||
      captchaError !== ""
    ) {
      setFormErrors({
        nickname: nicknameError,
        email: completeEmailError,
        password: completePasswordError,
        repeatPassword: completeRepeatPasswordError,
        terms: termsError,
        captcha: captchaError,
      });

      if (
        captchaError !== "" &&
        termsError === "" &&
        completePasswordError === "" &&
        completeRepeatPasswordError === "" &&
        completeEmailError === ""
      ) {
        alert(captchaError);
      }

      return;
    }

    setFormErrors({});
    signUp(nickname, email, password, newsletter, captcha);
  };

  return (
    <div id="sign-up-form" className={styles.wrapper}>
      <ModalHeader title={trans(locale)("title")} />
      {!isSuccess ? (
        <Form noValidate={true} onSubmit={handleSubmit} ariaLive="assertive">
          <Input
            locale={locale}
            ref={ref}
            name="nickname"
            label={trans(locale)("nickname")}
            value={nickname}
            onChange={setNickname}
            onError={setNicknameError}
            error={formErrors.nickname}
            required={true}
            disabled={isSubmitting}
          />
          <Input
            locale={locale}
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
            pattern={passwordPattern}
            label={trans(locale)("password")}
            value={password}
            onChange={setPassword}
            onError={setPasswordError}
            error={formErrors.password}
            required={true}
            disabled={isSubmitting}
            instructions={trans(locale)("passwordFormat")}
          />
          <Input
            locale={locale}
            type="password"
            name="repeatPassword"
            label={trans(locale)("repeatPassword")}
            value={repeatPassword}
            onChange={setRepeatPassword}
            onError={setRepeatPasswordError}
            error={formErrors.repeatPassword}
            required={true}
            disabled={isSubmitting}
          />
          <Checkbox
            name="newsletter"
            label={trans(locale)("newsletter")}
            checked={newsletter}
            onChange={setNewsletter}
            disabled={isSubmitting}
          />
          <Checkbox
            name="terms"
            label={
              <span className={styles["link-wrapper"]}>
                <Link
                  href={trans(locale)("termsUrl")}
                  variant="inline-underlined"
                >
                  {trans(locale)("terms")}
                </Link>
              </span>
            }
            error={formErrors.terms}
            checked={terms}
            onChange={setTerms}
            required={true}
            disabled={isSubmitting}
          />
          <div id="g-recaptcha">
            <Recaptcha
              sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_API_KEY}
              onChange={setCaptcha}
              onExpired={() => setCaptcha("")}
            />
            {formErrors.captcha ? (
              <Error role="alert">{formErrors.captcha}</Error>
            ) : null}
          </div>
          <p className={styles["mandatory-text"]}>
            {trans(locale)("mandatoryFields")}
          </p>
          {error ? <Error>{trans(locale)("error")}</Error> : null}
          <SubmitButton disabled={isSubmitting}>
            {!isSubmitting ? (
              trans(locale)("submit")
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
          <h3 className={styles["success-title"]}>
            {trans(locale)("welcome", { nickname: nickname })}
          </h3>
          <p className={styles.success}>{trans(locale)("welcomeText")}</p>
          <CancelButton onClick={onClose}>{trans(locale)("back")}</CancelButton>
        </>
      )}
    </div>
  );
};

SignUpForm.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  signUp: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

export default SignUpForm;
