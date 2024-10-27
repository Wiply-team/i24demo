import SocialLink from "../../../../../widgets/Author/SocialLink";
import Separator from "../../Separator";
import LinkSeparator from "./Separator";
import React from "react";
import styles from "./Links.module.css";

// Links :: Props -> React.Component
const Links = ({ links = [] }) =>
  links.length > 0 ? (
    <>
      <span className={styles["signature-separator"]}>
        <Separator />
      </span>
      <span className={styles["signature-links"]}>
        {links.map((link, index) => (
          <React.Fragment key={link}>
            {index > 0 ? <LinkSeparator /> : null}
            <span className={styles["social-link"]}>
              <SocialLink link={link} variant="block" />
            </span>
          </React.Fragment>
        ))}
      </span>
    </>
  ) : null;

export default Links;
