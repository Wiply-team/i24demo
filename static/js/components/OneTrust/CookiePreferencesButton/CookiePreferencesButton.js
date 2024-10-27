import React from "react";
import translate from "../../../utilities/translate";
import translations from "./translations";
import styles from "./CookiePreferencesButton.module.css";

// trans :: String -> String -> String
const trans = translate(translations);

// the onClick handler of that button is automatically binded by one trust SDK
// and will open the OneTrust panel for the user to change its settings.
//
// CookiePreferencesButton :: Props -> React.Component
const CookiePreferencesButton = ({ locale }) => (
  <button className={`ot-sdk-show-settings ${styles.button}`}>
    {trans(locale)("label")}
  </button>
);

export default CookiePreferencesButton;
