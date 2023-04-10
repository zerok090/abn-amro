import React from "react";
import styles from "./Loading.module.scss";

interface LoadingProps {
  message?: string;
}

function Loading({ message = "Loading..." }: LoadingProps) {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
      <div className={styles.message}>{message}</div>
    </div>
  );
}

export default Loading;
