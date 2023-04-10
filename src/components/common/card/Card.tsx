import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.scss";

interface CardProps {
  src: string;
  alt: string;
  title: string;
  detailSrc?: string;
}

function Card({ src, alt, title, detailSrc }: CardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={src}
          fill
          alt={alt}
          priority
          sizes="100vw (max-width: 400px),"
        />
      </div>
      <div className={styles.infoContainer}>
        <h3 className={styles.name}>{title}</h3>
        {detailSrc && (
          <Link className={styles.recipe} href={detailSrc}>
            Details
          </Link>
        )}
      </div>
    </div>
  );
}



export default Card;
