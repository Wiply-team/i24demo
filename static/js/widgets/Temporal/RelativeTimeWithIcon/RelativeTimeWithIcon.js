import "./RelativeTimeWithIcon.scss";
import React from "react";
import ClockIcon from "../../../legacy_components/Icons/Article/ClockIcon";
import RelativeTime from "../RelativeTime";

// RelativeTimeWithIcon :: Props -> React.Component
const RelativeTimeWithIcon = ({
  date,
  locale,
  itemProp,
  variant = "default",
}) => (
  <div className="widget-temporal-relative-time-with-icon">
    <ClockIcon height={16} />
    <RelativeTime
      date={date}
      locale={locale}
      itemProp={itemProp}
      variant={variant}
    />
  </div>
);

export default RelativeTimeWithIcon;
