import React from "react";
import styles from "./Error.module.scss";

interface ErrorProps {
  error: Error;
}

function Error({ error }: ErrorProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{error.name}</h2>
      <p className={styles.description}>{error.message}</p>
    </div>
  );
}

export default Error;
