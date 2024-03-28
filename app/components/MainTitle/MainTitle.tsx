import React from 'react';
import styles from "./MainTitle.module.css";

export function MainTitle(): JSX.Element {
  return (
    <div><h1 className={styles.title}>
    Welcome to <a href="https://nextjs.org">QLU Robotics Club</a>
  </h1></div>
  );
}
