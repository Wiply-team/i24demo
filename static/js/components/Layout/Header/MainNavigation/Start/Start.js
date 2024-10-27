import React from "react";
import styles from "./Start.module.css";
import Logo from "./Logo";

// Start :: Props -> React.Component
const Start = () => (
  <ul className={styles.list}>
    <li>
      <Logo />
    </li>
  </ul>
);

export default Start;
