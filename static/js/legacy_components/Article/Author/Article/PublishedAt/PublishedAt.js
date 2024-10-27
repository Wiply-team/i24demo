import React from "react";
import DateTime from "./../../../../../widgets/Temporal/DateTime";

// PublishedAt :: Props -> React.Component
const PublishedAt = ({ publishedAt, locale }) => (
  <span>
    <DateTime date={publishedAt} locale={locale} itemProp="datePublished" />
  </span>
);

export default PublishedAt;
