import BrightcoveVideoLazyPlayer from "../../../BrightcovePlayers/BrightcoveVideoLazyPlayer";
import React from "react";
import { pipe } from "ramda";
import translate from "../../../../utilities/translate";
import translations from "./translations";

// trans :: String -> String -> String
const trans = translate(translations);

// countHours :: Number -> Number
const countHours = (milliseconds) =>
  Math.floor(milliseconds / (60 * 60 * 1000));

// countMinutes :: Number -> Number
const countMinutes = (milliseconds) => Math.floor(milliseconds / (60 * 1000));

// getMinutesLabel :: String -> Number -> String
const getMinutesLabel = (locale) =>
  pipe(countMinutes, (minutesCount) =>
    0 === minutesCount
      ? trans(locale)("lessThanAMinute")
      : 1 === minutesCount
      ? trans(locale)("minuteDuration")
      : trans(locale)("minutesDuration", { minutes: minutesCount })
  );

// getHoursLabel :: String -> Number -> String
const getHoursLabel = (locale) => (hoursCount) =>
  1 === hoursCount
    ? trans(locale)("hourDuration")
    : trans(locale)("hoursDuration", { hours: hoursCount });

// getDurationLabel :: String -> Number -> String
const getDurationLabel = (locale) =>
  pipe(
    (duration) => ({
      duration,
      hoursCount: countHours(duration),
    }),
    (context) =>
      0 === context.hoursCount
        ? getMinutesLabel(locale)(context.duration)
        : getHoursLabel(locale)(context.hoursCount)
  );

const Video = ({ locale, focusVideo, isFocused, isPlayed, video, onEnd }) => (
  <div
    className={`sticker-latest-videos ${isFocused ? "active" : ""}`}
    onMouseEnter={() => focusVideo(video.id)}
  >
    <div className="tag-container">
      {isFocused && !isPlayed ? (
        <span className="tag">{getDurationLabel(locale)(video.duration)}</span>
      ) : null}
      <BrightcoveVideoLazyPlayer
        locale={locale}
        videoId={video.id}
        onEnd={onEnd}
      />
    </div>
    <div className="desc">
      <p className="title">{video.title}</p>
    </div>
  </div>
);

export default Video;
