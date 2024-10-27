import React from "react";
import styles from "./LiveLink.module.css";
import translate from "../../../../../../utilities/translate";
import translations from "./translations";
import ExternalLink from "../../../../../Routing/ExternalLink";
import LiveIcon from "../../../../../../legacy_components/Icons/Menu/LiveIcon";
import { getLocales } from "../../../../../../utilities/locales";
import PropTypes from "prop-types";

const trans = translate(translations);

// LiveLink :: Props -> React.Component
const LiveLink = ({ locale }) => (
  <div className={styles.wrapper}>
    <ExternalLink
      href={`${trans(locale)("link")}`}
      aria-label={trans(locale)("label")}
    >
      <div className={styles.label}>
        <LiveIcon height={25} />
        <span className={styles["label-text"]}>{trans(locale)("label")}</span>
      </div>
    </ExternalLink>
  </div>
);

LiveLink.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
};

export default LiveLink;
