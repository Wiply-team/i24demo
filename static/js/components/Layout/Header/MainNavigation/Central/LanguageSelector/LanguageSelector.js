import React from "react";
import styles from "./LanguageSelector.module.css";
import Button from "../../../../../../widgets/Button/Base";
import Dropdown from "../../../Dropdown";
import { getLocales } from "../../../../../../utilities/locales";
import translate from "../../../../../../utilities/translate";
import translations from "./translations";
import PropTypes from "prop-types";

const trans = translate(translations);

// LanguageSelector :: Props -> React.Component
const LanguageSelector = ({ locale }) => (
  <div className={styles.wrapper}>
    <Dropdown>
      <Dropdown.Toggle>
        <Button onClick={() => {}} aria-label={trans(locale)("label")}>
          <span className={styles.locale}>{locale}</span>
        </Button>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {getLocales().map((l) => (
          <Dropdown.Menu.ExternalLink
            key={l}
            href={`/${l}`}
            openInNewPage={false}
            isActive={locale === l}
          >
            {trans(locale)(l)}
          </Dropdown.Menu.ExternalLink>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  </div>
);

LanguageSelector.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
};

export default LanguageSelector;
