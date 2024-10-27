import React, { useState, useEffect } from "react";
import Modal from "../../../widgets/Layout/Modal";
import { cond, equals } from "ramda";
import SignInForm from "./SignInForm";
import ResetPasswordForm from "./ResetPasswordForm";
import useHistoryChange from "../../../hooks/useHistoryChange";
import translate from "../../../utilities/translate";
import translations from "./translations";
import SignUpForm from "./SignUpForm";
import styles from "./SignInModal.module.css";
import PropTypes from "prop-types";
import { getLocales } from "../../../utilities/locales";

const trans = translate(translations);

// SignInModal :: Props -> React.Component
const SignInModal = ({ locale, isOpen, onClose }) => {
  const [openedPanel, setOpenedPanel] = useState(null);

  const onSignIn = () => setOpenedPanel("signIn");
  const onSignUp = () => setOpenedPanel("signUp");
  const onResetPassword = () => setOpenedPanel("resetPassword");

  useEffect(onSignIn, [isOpen]);

  useHistoryChange(onClose);

  return (
    <Modal>
      <Modal.Body
        locale={locale}
        isOpen={isOpen}
        onClose={onClose}
        onCloseLabel={trans(locale)("close")}
      >
        {isOpen ? (
          <div className={styles.wrapper}>
            {cond([
              [
                equals("signIn"),
                () => (
                  <SignInForm
                    onSignUp={onSignUp}
                    onResetPassword={onResetPassword}
                    onClose={onClose}
                  />
                ),
              ],
              [
                equals("signUp"),
                () => <SignUpForm onCancel={onSignIn} onClose={onClose} />,
              ],
              [
                equals("resetPassword"),
                () => (
                  <ResetPasswordForm onCancel={onSignIn} onClose={onClose} />
                ),
              ],
            ])(openedPanel)}
          </div>
        ) : null}
      </Modal.Body>
    </Modal>
  );
};

SignInModal.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SignInModal;
