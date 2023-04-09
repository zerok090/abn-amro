import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Meal } from "@/types/meal";
import styles from "./MealCard.module.scss";

interface MealCardProps {
  meal: Meal;
  toDetail?: boolean;
}

function MealCard({ meal, toDetail = true }: MealCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={meal.strMealThumb}
          fill
          alt={meal.strMeal}
          priority
        />
      </div>
      <div className={styles.infoContainer}>
        <h3>{meal.strMeal}</h3>
        {toDetail && <Link href={`/meal/${meal.idMeal}`}>Details</Link>}
      </div>
    </div>
  );
}

export default MealCard;
