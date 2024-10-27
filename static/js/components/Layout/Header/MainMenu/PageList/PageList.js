import React from "react";
import styles from "./PageList.module.css";
import ExternalLink from "../../../../Routing/ExternalLink";
import PlayIcon from "../../../../../legacy_components/Icons/Menu/PlayIcon";
import Link from "../../../../Routing/Link";
import ShowsIcon from "../../../../../legacy_components/Icons/Menu/ShowsIcon";
import translate from "../../../../../utilities/translate";
import translations from "./translations";
import SchedulesIcon from "../../../../../legacy_components/Icons/Menu/SchedulesIcon";
import ChannelsIcon from "../../../../../legacy_components/Icons/Menu/ChannelsIcon";
import {
  getLocales,
  isEnglish,
  isFrench,
} from "../../../../../utilities/locales";
import ProfilesIcon from "../../../../../legacy_components/Icons/Menu/ProfilesIcon";
import { getSchedulesDayName } from "../../../../../utilities/datetimes";
import PropTypes from "prop-types";

const trans = translate(translations);

// PageList :: Props -> React.Component
const PageList = ({ locale }) => (
  <ul className={styles.list}>
    <li>
      <ExternalLink href={trans(locale)("videosLink")}>
        <div className={styles.wrapper}>
          <PlayIcon />
          {trans(locale)("videosLabel")}
        </div>
      </ExternalLink>
    </li>
    <li>
      <Link href={trans(locale)("showsLink")}>
        <div className={styles.wrapper}>
          <ShowsIcon />
          {trans(locale)("showsLabel")}
        </div>
      </Link>
    </li>
    <li>
      <Link
        href={`${trans(locale)("schedulesLink")}/${getSchedulesDayName(locale)(
          new Date()
        )}`}
      >
        <div className={styles.wrapper}>
          <SchedulesIcon />
          {trans(locale)("schedulesLabel")}
        </div>
      </Link>
    </li>
    <li>
      <Link href={trans(locale)("channelsLink")}>
        <div className={styles.wrapper}>
          <ChannelsIcon />
          {trans(locale)("channelsLabel")}
        </div>
      </Link>
    </li>
    {isEnglish(locale) || isFrench(locale) ? (
      <li>
        <Link href={trans(locale)("profilesLink")}>
          <div className={styles.wrapper}>
            <ProfilesIcon />
            {trans(locale)("profilesLabel")}
          </div>
        </Link>
      </li>
    ) : null}
  </ul>
);

PageList.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
};

export default PageList;
