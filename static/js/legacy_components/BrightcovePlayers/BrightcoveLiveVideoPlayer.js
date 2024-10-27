import BrightcovePlayer from "./Player";
import LiveVideo from "./LiveVideo";
import React from "react";
import ResourceLoader from "../../components/ResourceLoader";
import { isEnglish, isFrench, isHebrew } from "../../utilities/locales";
import { always, cond, T } from "ramda";

// guessLiveVideoPlayerId :: String -> String
export const guessLiveVideoPlayerId = cond([
  // put ids for localized players here
  [isFrench, always(process.env.REACT_APP_BRIGHTCOVE_LIVE_STREAM_PLAYER_ID_FR)],
  [
    isEnglish,
    always(process.env.REACT_APP_BRIGHTCOVE_LIVE_STREAM_PLAYER_ID_EN),
  ],
  [isHebrew, always(process.env.REACT_APP_BRIGHTCOVE_LIVE_STREAM_PLAYER_ID_HE)],
  [T, always(process.env.REACT_APP_BRIGHTCOVE_LIVE_STREAM_PLAYER_ID_AR)],
]);

export default (props) => (
  <ResourceLoader reducers={["brightcoveVideo"]} epics={["brightcoveVideo"]}>
    <BrightcovePlayer playerId={guessLiveVideoPlayerId(props.locale)}>
      <LiveVideo
        {...props}
        playerId={guessLiveVideoPlayerId(props.locale)}
        accountId={process.env.REACT_APP_BRIGHTCOVE_ACCOUNT_ID}
      />
    </BrightcovePlayer>
  </ResourceLoader>
);
