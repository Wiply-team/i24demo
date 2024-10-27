import "./ReadingTime.scss";
import React from "react";
import translate from "../../utilities/translate";
import translations from "./translations";
import TimerIcon from "../../legacy_components/Icons/Article/TimerIcon";
import Text from "../Typography/Text";

// trans :: String -> String -> String
const trans = translate(translations);

// ReadingTime :: Props -> React.Component
const ReadingTime = ({ time, locale }) =>
  time ? (
    <div className="widget-reading-time">
      <TimerIcon />
      <Text size="small">{trans(locale)("readingTime", { time: time })}</Text>
    </div>
  ) : null;

export default ReadingTime;
