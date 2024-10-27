import React from "react";
import styles from "./End.module.css";
import LiveLink from "./LiveLink";

// End :: Props -> React.Component
const End = () => (
  <ul className={styles.list}>
    <li>
      <LiveLink />
    </li>
  </ul>
);

export default End;
