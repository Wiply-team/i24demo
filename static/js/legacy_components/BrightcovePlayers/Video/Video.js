import "./Video.scss";
import { T, cond } from "ramda";
import CloseIcon from "./../../Icons/CloseIcon";
import React from "react";
import translate from "../../../utilities/translate";
import translations from "../translations";

// resolveClassName = (String, String) -> String
const resolveClassName = (className, pictureInPicture) =>
  cond([
    [
      () => "pinned" === pictureInPicture,
      (className) => `${className} video-wrapper-pip`,
    ],
    [T, (className) => `${className} video-wrapper`],
  ])(className);

const trans = translate(translations);

// BrightcoveVideo :: Props -> React.Component
export default ({
  locale,
  className = "",
  accountId,
  playerId,
  videoId,
  // Accepts 'floating' or 'pinned', see https://player.support.brightcove.com/plugins/picture-picture-plugin-aka-floating-or-pinned.html
  // for more details.
  pictureInPicture,
  onClose,
}) => (
  <div className={resolveClassName(className, pictureInPicture)}>
    <video
      data-video-id={videoId}
      data-player={playerId}
      data-account={accountId}
      data-embed="default"
      data-application-id={true}
      className="brightcove-video video-js"
      controls={true}
      playsInline={true}
    ></video>
    {onClose ? (
      <button
        className="video-close-button"
        onClick={onClose}
        aria-label={trans(locale)("close")}
      >
        <CloseIcon width={10} height={10} />
      </button>
    ) : null}
  </div>
);
