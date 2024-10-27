import "./Error.scss";
import Breadcrumb from "../Breadcrumb";
import Head from "../Head";
import Link from "../../components/Routing/Link";
import React from "react";
import { defaultTo } from "ramda";
import translate from "../../utilities/translate";
import translations from "./translations";
import ExternalLink from "../../components/Routing/ExternalLink";

// trans :: String -> String -> String
const trans = translate(translations);

// Error :: Props -> React.Component
export default ({ locale, code, critical = false }) => (
  <Head status={code}>
    <div className="container container-page error-page">
      {code === "204" ? null : (
        <Breadcrumb crumbs={[{ label: trans(locale)(`http${code}.title`) }]} />
      )}
      {code === "204" ? null : (
        <p className="error-code">{defaultTo("Oops!", code)}</p>
      )}
      <p>
        {code
          ? trans(locale)(`http${code}.content`)
          : trans(locale)(`default.content`)}
      </p>

      <span className="legacy-button deep-blue back-button">
        {
          // When a critical error occurs we want the app to reload when clicking
          // on the back button
          critical ? (
            <ExternalLink href={`/${locale}`} openInNewPage={false}>
              {trans(locale)("back")}
            </ExternalLink>
          ) : (
            <Link href={`/${locale}`}>{trans(locale)("back")}</Link>
          )
        }
      </span>
    </div>
  </Head>
);
