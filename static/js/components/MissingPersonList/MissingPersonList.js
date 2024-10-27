import "./MissingPersonList.scss";
import React from "react";
import { T, call, cond, isEmpty } from "ramda";
import Toast from "../../legacy_components/Toastr/Toast";
import translations from "./translations";
import translate from "../../utilities/translate";
import PropTypes from "prop-types";
import { getLocales } from "../../utilities/locales";
import Card from "./Card";
import Divider from "../../widgets/Layout/Divider";

// trans :: String -> String -> String
const trans = translate(translations);

// Placeholder :: () -> React.Component
const Placeholder = () => (
  <section className="missing-persons-list">
    <div className="missing-persons missing-persons-placeholder">
      <ul>
        <li>
          <Card.Placeholder />
        </li>
        <li>
          <Card.Placeholder />
        </li>
        <li>
          <Card.Placeholder />
        </li>
        <li>
          <Card.Placeholder />
        </li>
      </ul>
    </div>
    <Divider variant="thin" />
  </section>
);

// Persons :: Props -> React.Component
const Persons = ({ persons }) => (
  <div className="missing-persons">
    <ul>
      {persons.map((person) => (
        <li key={person.id}>
          <Card person={person} />
        </li>
      ))}
    </ul>
  </div>
);

// MissingPersonList :: Props -> React.Component
const MissingPersonList = ({ isFetching, persons, locale, error }) => (
  <section className="missing-persons-list">
    {error ? <Toast message={trans(locale)("error")} level="error" /> : null}
    {call(
      cond([
        [() => isFetching, () => <Placeholder />],
        [() => !isFetching && isEmpty(persons), () => null],
        [T, () => <Persons persons={persons} locale={locale} />],
      ])
    )}
  </section>
);

MissingPersonList.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.object).isRequired,
  locale: PropTypes.oneOf(getLocales()).isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

MissingPersonList.Placeholder = Placeholder;

export default MissingPersonList;
