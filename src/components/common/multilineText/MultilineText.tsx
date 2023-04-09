import React from "react";
import styles from "./MultilineText.module.scss";

interface MultilineTextProps {
  text: string;
}

function MultilineText({ text }: MultilineTextProps) {
  return <p className={styles.text}>{text}</p>;
}

export default MultilineText;
