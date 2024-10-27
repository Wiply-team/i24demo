import "./SectionHeader.scss";
import React from "react";
import Link from "../../../components/Routing/Link";
import Heading from "../../../widgets/Typography/Heading/Heading";
import translate from "../../../utilities/translate";
import translations from "./translations";
import PropTypes from "prop-types";
import { getLocales } from "../../../utilities/locales";

// trans :: String -> String -> String
const trans = translate(translations);

const SectionHeader = ({ locale, label, link }) => (
  <div className="homepage-section-header">
    <Link href={link}>
      <Heading level="2">{label}</Heading>
    </Link>
    <div className="direct-link">
      <Link href={link}>{trans(locale)("seeAll")}</Link>
    </div>
  </div>
);

const Placeholder = () => (
  <div className="homepage-section-header placeholder" />
);

SectionHeader.Placeholder = Placeholder;

SectionHeader.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

SectionHeader.Placeholder.propTypes = {};

export default SectionHeader;
