import React from "react";
import styles from "./NoResult.module.scss";

interface NoResultProps {
  title?: string;
  description?: string;
}

function NoResult({ title = "No results found", description }: NoResultProps) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default NoResult;
