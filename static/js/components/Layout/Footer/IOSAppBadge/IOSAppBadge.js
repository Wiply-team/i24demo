import React from "react";
import translate from "../../../../utilities/translate";
import translations from "./translations";
import ExternalLink from "../../../Routing/ExternalLink";
import { T, always, cond } from "ramda";
import appleStoreBadgeArImage from "../../../../assets/images/mobile-apps/apple-store-badge-ar.png";
import appleStoreBadgeEnImage from "../../../../assets/images/mobile-apps/apple-store-badge-en.png";
import appleStoreBadgeFrImage from "../../../../assets/images/mobile-apps/apple-store-badge-fr.png";
import { isArabic, isFrench } from "../../../../utilities/locales";

const trans = translate(translations);

// getLocalizedAppleStoreBadge :: String -> String
const getLocalizedAppleStoreBadge = cond([
  [isArabic, always(appleStoreBadgeArImage)],
  [isFrench, always(appleStoreBadgeFrImage)],
  [T, always(appleStoreBadgeEnImage)],
]);

const IOSAppBadge = ({ locale }) => (
  <ExternalLink href={process.env.REACT_APP_LINK_APPLE_ITUNES}>
    <img
      alt={trans(locale)("label")}
      src={getLocalizedAppleStoreBadge(locale)}
      width={120}
      height={40}
      loading="lazy"
    />
  </ExternalLink>
);

export default IOSAppBadge;
