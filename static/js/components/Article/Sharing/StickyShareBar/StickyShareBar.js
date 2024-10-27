import { getLocales } from "../../../../utilities/locales";
import styles from "./StickyShareBar.module.css";
import React from "react";
import PropTypes from "prop-types";
import FacebookShareButton from "../../../Sharing/SocialNetworks/FacebookShareButton";
import XShareButton from "../../../Sharing/SocialNetworks/XShareButton";
import LinkedinShareButton from "../../../Sharing/SocialNetworks/LinkedinShareButton";
import RedditShareButton from "../../../Sharing/SocialNetworks/RedditShareButton";
import WhatsappShareButton from "../../../Sharing/SocialNetworks/WhatsappShareButton";
import CommentButton from "../../CommentButton";
import BookmarkButton from "../../BookmarkButton";
import { generateSharingUrl } from "../../../../utilities/urls";

// StickyShareBar :: () -> React.Component
const StickyShareBar = ({
  id,
  title,
  excerpt,
  url,
  commentsDisabled,
  locale,
  isVisible,
}) => {
  const fixedUrl = generateSharingUrl(locale, url);

  return (
    <div className={`${styles.wrapper} ${isVisible ? styles.visible : ""}`}>
      <ul className={styles.list}>
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
        {!commentsDisabled ? (
          <li>
            <div className={styles["button-wrapper"]}>
              <CommentButton width={20} height={18} />
            </div>
          </li>
        ) : null}
        <li>
          <div className={styles["button-wrapper"]}>
            <BookmarkButton articleId={id} width={20} height={17} />
          </div>
        </li>
      </ul>
    </div>
  );
};

StickyShareBar.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  commentsDisabled: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default StickyShareBar;
