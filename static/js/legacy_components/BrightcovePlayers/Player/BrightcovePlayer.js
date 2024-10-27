import React from "react";
import ScriptLoader from "../../ScriptLoader";

const resolveBrightcoveScriptSrc = (playerId) =>
  `https://players.brightcove.net/${process.env.REACT_APP_BRIGHTCOVE_ACCOUNT_ID}/${playerId}_default/index.min.js`;

export default ({ playerId, children }) => (
  <ScriptLoader src={resolveBrightcoveScriptSrc(playerId)}>
    {children}
  </ScriptLoader>
);
