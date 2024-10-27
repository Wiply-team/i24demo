import { T, __, always, cond, includes, join, pathOr } from "ramda";
import { isArabic, isFrench, isEnglish, isHebrew } from "../locales";

// newsletterEndScreen :: String
export const newsletterEndScreen = "newsletter";

// playlistEndScreen :: String
export const playlistEndScreen = "playlist";

// guessLiveVideoStreamId :: String -> String
export const guessLiveVideoStreamId = cond([
  // put ids for localized players here
  [isFrench, always(process.env.REACT_APP_BRIGHTCOVE_LIVE_STREAM_VIDEO_ID_FR)],
  [isEnglish, always(process.env.REACT_APP_BRIGHTCOVE_LIVE_STREAM_VIDEO_ID_EN)],
  [isHebrew, always(process.env.REACT_APP_BRIGHTCOVE_LIVE_STREAM_VIDEO_ID_HE)],
  [T, always(process.env.REACT_APP_BRIGHTCOVE_LIVE_STREAM_VIDEO_ID_AR)],
]);

// isLiveStream :: String -> Boolean
export const isLiveStream = includes(__, [
  process.env.REACT_APP_BRIGHTCOVE_ARTICLE_LIVE_STREAM_VIDEO_ID_FR,
  process.env.REACT_APP_BRIGHTCOVE_ARTICLE_LIVE_STREAM_VIDEO_ID_EN,
  process.env.REACT_APP_BRIGHTCOVE_ARTICLE_LIVE_STREAM_VIDEO_ID_AR,
]);

// resolvePlayerIdentifier :: Element -> String
export const resolvePlayerIdentifier = (element) =>
  join("_", [
    pathOr("default", ["dataset", "player"], element),
    pathOr("default", ["dataset", "embed"], element),
  ]);

// getBrightcoveEmbedUrl :: Object -> String
export const getBrightcoveEmbedUrl = ({ id }) =>
  `https://players.brightcove.net/${process.env.REACT_APP_BRIGHTCOVE_ACCOUNT_ID}/default_default/index.html?videoId=${id}`;

export const resolveBrightcovePosterSrc = (locale, videoId) =>
  `${process.env.REACT_APP_API_BASE_URL}/${locale}/brightcove/${videoId}/poster`;

// guessBrightcoveTopVideosPlaylistId :: string -> string
export const guessBrightcoveTopVideosPlaylistId = cond([
  [
    isFrench,
    always(process.env.REACT_APP_BRIGHTCOVE_PLAYLIST_TOP_VIDEOS_ID_FR),
  ],
  [
    isEnglish,
    always(process.env.REACT_APP_BRIGHTCOVE_PLAYLIST_TOP_VIDEOS_ID_EN),
  ],
  [
    isArabic,
    always(process.env.REACT_APP_BRIGHTCOVE_PLAYLIST_TOP_VIDEOS_ID_AR),
  ],
  [
    isHebrew,
    always(process.env.REACT_APP_BRIGHTCOVE_PLAYLIST_TOP_VIDEOS_ID_HE),
  ],
  [T, always(process.env.REACT_APP_BRIGHTCOVE_PLAYLIST_TOP_VIDEOS_ID_EN)],
]);

// buildVideoImage :: (String, String) -> Object
export const buildVideoImage = (locale, videoId) => ({
  src: `${process.env.REACT_APP_API_BASE_URL}/${locale}/brightcove/${videoId}/poster`,
  alt: "",
});
