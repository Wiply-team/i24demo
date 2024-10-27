import "./Breadcrumb.scss";
import Link from "../../components/Routing/Link";
import React from "react";
import ArrowIcon from "../Icons/ArrowIcon";
import BreadcrumbSchemaInjector from "./BreadcrumbSchemaInjector";
import translate from "../../utilities/translate";
import translations from "./translations";

const trans = translate(translations);

// generateCrumbsForLocale :: (String, Array) -> Array
const generateCrumbsForLocale = (locale, crumbs) => [
  { label: trans(locale)("homepage"), link: `/${locale}` },
  ...crumbs,
];

// Breadcrumb :: Props -> React.Component
export default ({ locale, crumbs }) => {
  const localizedCrumbs = generateCrumbsForLocale(locale, crumbs);

  return (
    <nav className="breadcrumb" aria-label={trans(locale)("breadcrumb")}>
      <BreadcrumbSchemaInjector crumbs={localizedCrumbs} />
      <div className="container container-page">
        <ul>
          {localizedCrumbs.map(({ label, link }, key) => (
            <React.Fragment key={key}>
              <li>
                {key !== 0 ? (
                  <ArrowIcon className="arrow-icon" width={10} height={10} />
                ) : null}
              </li>
              {link ? (
                <li>
                  <Link href={link}>{label}</Link>
                </li>
              ) : (
                <li aria-current="page">
                  <span>{label}</span>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </nav>
  );
};
