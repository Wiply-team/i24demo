import styles from "./BottomNavbar.module.css";
import Link from "../../Routing/Link";
import ExternalLink from "../../Routing/ExternalLink";
import React, { useState, useEffect } from "react";
import translate from "../../../utilities/translate";
import translations from "./translations";
import NewsIcon from "../../../legacy_components/Icons/Menu/NewsIcon";
import TimelineIcon from "../../../legacy_components/Icons/Menu/TimelineIcon";
import LiveIcon from "../../../legacy_components/Icons/Menu/LiveIcon";
import HeadphonesIcon from "../../../legacy_components/Icons/Menu/HeadphonesIcon";
import ShowsIcon from "../../../legacy_components/Icons/Menu/ShowsIcon";
import { arLocale, getLocales } from "../../../utilities/locales";
import CloseIcon from "../../../legacy_components/Icons/CloseIcon";
import Button from "../../../widgets/Button/Base";
import { StickyAdvert } from "../../Adverts";
import PropTypes from "prop-types";
import ClientOnly from "../../../legacy_components/ClientOnly";

// trans :: String -> String -> String
const trans = translate(translations);

// BottomNavbar :: Props -> React.Component
const BottomNavbar = ({
  locale,
  isHomePage,
  isNewsfeedPage,
  isLiveRadioPage,
  isShowsPage,
  isArticlePage,
  isAdvertOpen,
  closeAdvert,
}) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [animationCounter, setAnimationCounter] = useState(0);

  useEffect(() => {
    setShouldAnimate(arLocale === locale);
  }, [locale]);

  useEffect(() => {
    if (animationCounter < 30) {
      setTimeout(() => setAnimationCounter(animationCounter + 1), 2000);
    } else {
      setShouldAnimate(false);
    }
  }, [animationCounter]);

  return (
    <div className={styles.wrapper}>
      {isAdvertOpen && (isArticlePage || isNewsfeedPage || isLiveRadioPage) ? (
        <div>
          <StickyAdvert />
          <div className={styles["close-advert-button"]}>
            <Button
              onClick={closeAdvert}
              aria-label={trans(locale)("closeAdvert")}
            >
              <CloseIcon width={12} height={12} />
            </Button>
          </div>
        </div>
      ) : null}
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li
            className={`${styles["list-item"]} ${
              isHomePage ? styles.active : ""
            }`}
          >
            <div>
              <Link href={`/${locale}`} variant="block">
                <div className={styles["link-wrapper"]}>
                  <NewsIcon width={24} height={20} />
                  <span>{trans(locale)("topStoriesLabel")}</span>
                </div>
              </Link>
            </div>
          </li>
          <li
            className={`${styles["list-item"]} ${
              isNewsfeedPage ? styles.active : ""
            }`}
          >
            <div>
              <Link href={trans(locale)("newsLink")} variant="block">
                <div className={styles["link-wrapper"]}>
                  <TimelineIcon width={24} height={20} />
                  <span>{trans(locale)("newsLabel")}</span>
                </div>
              </Link>
            </div>
          </li>
          <li className={styles["list-item"]}>
            <div>
              <ExternalLink href={trans(locale)("liveLink")} variant="block">
                <ClientOnly
                  fallback={
                    <div className={styles["link-wrapper"]}>
                      <LiveIcon width={24} height={20} />
                      <span>{trans(locale)("liveLabel")}</span>
                    </div>
                  }
                >
                  <div
                    className={`${styles["link-wrapper"]} ${
                      shouldAnimate ? styles.wiggle : ""
                    }`}
                  >
                    <LiveIcon width={24} height={20} />
                    <span>
                      {shouldAnimate && animationCounter % 2
                        ? trans(locale)("liveFree")
                        : trans(locale)("liveLabel")}
                    </span>
                  </div>
                </ClientOnly>
              </ExternalLink>
            </div>
          </li>
          <li
            className={`${styles["list-item"]} ${
              isLiveRadioPage ? styles.active : ""
            }`}
          >
            <div>
              <Link href={trans(locale)("radioLink")} variant="block">
                <div className={styles["link-wrapper"]}>
                  <HeadphonesIcon width={24} height={20} />
                  <span>{trans(locale)("radioLabel")}</span>
                </div>
              </Link>
            </div>
          </li>
          <li
            className={`${styles["list-item"]} ${
              isShowsPage ? styles.active : ""
            }`}
          >
            <div>
              <Link href={trans(locale)("showsLink")} variant="block">
                <div className={styles["link-wrapper"]}>
                  <ShowsIcon width={24} height={20} />
                  <span>{trans(locale)("showsLabel")}</span>
                </div>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

BottomNavbar.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  isHomePage: PropTypes.bool.isRequired,
  isNewsfeedPage: PropTypes.bool.isRequired,
  isLiveRadioPage: PropTypes.bool.isRequired,
  isShowsPage: PropTypes.bool.isRequired,
  isArticlePage: PropTypes.bool.isRequired,
  isAdvertOpen: PropTypes.bool.isRequired,
  closeAdvert: PropTypes.func.isRequired,
};

export default BottomNavbar;
