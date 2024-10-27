import styles from "./ShareButton.module.css";
import React, { useState } from "react";
import FacebookShareButton from "../SocialNetworks/FacebookShareButton";
import XShareButton from "../SocialNetworks/XShareButton";
import LinkedinShareButton from "../SocialNetworks/LinkedinShareButton";
import RedditShareButton from "../SocialNetworks/RedditShareButton";
import WhatsappShareButton from "../SocialNetworks/WhatsappShareButton";
import ShareButtonWidget from "../../../widgets/Button/ShareButton";
import { getLocales } from "../../../utilities/locales";
import translate from "../../../utilities/translate";
import translations from "./translations";
import useEscapePress from "../../../hooks/useEscapePress";
import PropTypes from "prop-types";
import { generateSharingUrl } from "../../../utilities/urls";

const trans = translate(translations);

// ShareButton :: Props -> React.Component
const ShareButton = ({ title, excerpt, url, height, width, locale }) => {
  const [isOpen, setIsOpen] = useState(false);
  const fixedUrl = generateSharingUrl(locale, url);

  useEscapePress(() => setIsOpen(false));

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      event.stopPropagation();

      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`${styles.wrapper} ${isOpen ? styles.open : ""}`}>
      <div className={styles.toggle}>
        <ShareButtonWidget
          height={height}
          width={width}
          onKeyDown={handleKeyDown}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? trans(locale)("close") : trans(locale)("open")}
        />
      </div>
      {isOpen ? (
        <div className={styles.menu}>
          <ul
            className={styles.list}
            onClick={(event) => event.stopPropagation()}
            aria-hidden={true}
          >
            <li>
              <div className={styles["button-wrapper"]}>
                <FacebookShareButton url={fixedUrl} />
              </div>
            </li>
            <li>
              <div className={styles["button-wrapper"]}>
                <XShareButton url={fixedUrl} title={title} />
              </div>
            </li>
            <li>
              <div className={styles["button-wrapper"]}>
                <LinkedinShareButton
                  url={fixedUrl}
                  title={title}
                  summary={excerpt}
                />
              </div>
            </li>
            <li>
              <div className={styles["button-wrapper"]}>
                <RedditShareButton url={fixedUrl} title={title} />
              </div>
            </li>
            <li>
              <div className={styles["button-wrapper"]}>
                <WhatsappShareButton url={fixedUrl} />
              </div>
            </li>
          </ul>
          <div className={styles["triangle-with-shadow"]} />
        </div>
      ) : null}
    </div>
  );
};

ShareButton.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default ShareButton;
