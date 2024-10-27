import "./Tags.scss";
import React from "react";
import { T, cond, isEmpty, map } from "ramda";
import Link from "../../../components/Routing/Link";
import { enLocale } from "../../../utilities/locales";

// resolveSlug = (String, String) -> String
const resolveSlug = (slug, locale) =>
  cond([
    [
      (slug) => enLocale === locale && slug === "israelatwar",
      () => "israel-at-war",
    ],
    [T, (slug) => slug],
  ])(slug);

// Tags :: Props -> React.Component
export default ({ locale, tags }) =>
  !isEmpty(tags) ? (
    <div className="tags">
      <ul>
        {map((tag) => (
          <li key={tag.id}>
            <Link href={`/${locale}/tags/${resolveSlug(tag.slug, locale)}`}>
              {tag.name}
            </Link>
          </li>
        ))(tags)}
      </ul>
    </div>
  ) : null;
