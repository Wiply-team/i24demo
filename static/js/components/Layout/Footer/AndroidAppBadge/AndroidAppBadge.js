import React from "react";
import translate from "../../../../utilities/translate";
import translations from "./translations";
import ExternalLink from "../../../Routing/ExternalLink";
import { T, always, cond } from "ramda";
import googlePlayBadgeArImage from "../../../../assets/images/mobile-apps/google-play-badge-ar.png";
import googlePlayBadgeEnImage from "../../../../assets/images/mobile-apps/google-play-badge-en.png";
import googlePlayBadgeFrImage from "../../../../assets/images/mobile-apps/google-play-badge-fr.png";
import { isArabic, isFrench } from "../../../../utilities/locales";

const trans = translate(translations);

// getLocalizedGooglePlayBadge :: String -> String
const getLocalizedGooglePlayBadge = cond([
  [isArabic, always(googlePlayBadgeArImage)],
  [isFrench, always(googlePlayBadgeFrImage)],
  [T, always(googlePlayBadgeEnImage)],
]);

const AndroidAppBadge = ({ locale }) => (
  <ExternalLink href={process.env.REACT_APP_LINK_GOOGLE_PLAY}>
    <img
      alt={trans(locale)("label")}
      src={getLocalizedGooglePlayBadge(locale)}
      width={120}
      height={35}
      loading="lazy"
    />
  </ExternalLink>
);

export default AndroidAppBadge;
