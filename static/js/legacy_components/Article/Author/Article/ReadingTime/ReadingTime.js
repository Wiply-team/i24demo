import "./ReadingTime.scss";
import React from "react";
import ClockIcon from "./../../../../Icons/Article/ClockIcon";
import translate from "../../../../../utilities/translate";
import translations from "./translations";

// trans :: String -> String -> String
const trans = translate(translations);

// ReadingTime :: Props -> React.Component
const ReadingTime = ({ readingTime, locale }) => (
  <div className="article-reading-time">
    <ClockIcon />
    {trans(locale)("readingTime", { time: readingTime })}
  </div>
);

export default ReadingTime;
