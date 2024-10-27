import styles from "./Advert.module.css";
import React, { useRef } from "react";
import PropTypes from "prop-types";
import Link from "../../../../widgets/Link/Link";
import translate from "../../../../utilities/translate";
import translations from "../../translations";
import { getLocales } from "../../../../utilities/locales";

const trans = translate(translations);

// Advert :: Props -> React.Component
const Advert = ({
  locale,
  id,
  minHeight,
  viewport = "all",
  align = "center",
}) => {
  const ref = useRef(null);

  const skipAdvert = () => {
    if (ref.current) {
      ref.current.tabIndex = 0;
      ref.current.focus();
      ref.current.tabIndex = -1;
    }
  };

  return (
    <div className={`${styles.wrapper} ${styles[viewport]}  ${styles[align]}`}>
      <div className={styles.skip}>
        <Link href="#" onClick={skipAdvert}>
          {trans(locale)("skip")}
        </Link>
      </div>
      <div
        className={styles.advert}
        style={{ minHeight: minHeight > 0 ? `${minHeight}px` : 0 }}
      >
        <div data-aaad="true" data-aa-adunit={id} />
      </div>
      <div ref={ref} />
    </div>
  );
};

Advert.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  id: PropTypes.string.isRequired,
  minHeight: PropTypes.number,
  viewport: PropTypes.oneOf(["all", "desktop", "mobile"]),
  align: PropTypes.oneOf(["center", "start", "end", "end-start"]),
};

export default Advert;
