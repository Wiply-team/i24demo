import React from "react";
import styles from "./LiveRadioLink.module.css";
import translate from "../../../../../../utilities/translate";
import translations from "./translations";
import Link from "../../../../../Routing/Link";
import HeadphonesIcon from "../../../../../../legacy_components/Icons/Menu/HeadphonesIcon";
import { getLocales } from "../../../../../../utilities/locales";
import PropTypes from "prop-types";

const trans = translate(translations);

// LiveRadioLink :: Props -> React.Component
const LiveRadioLink = ({ locale }) => (
  <div className={styles.wrapper}>
    <Link href={`${trans(locale)("link")}`} aria-label={trans(locale)("label")}>
      <div className={styles.label}>
        <HeadphonesIcon height={25} />
        <span className={styles["label-text"]}>{trans(locale)("label")}</span>
      </div>
    </Link>
  </div>
);

LiveRadioLink.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
};

export default LiveRadioLink;
