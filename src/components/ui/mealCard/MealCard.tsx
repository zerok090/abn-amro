import React from "react";
import type { Meal } from "@/types/meal";
import Image from "next/image";
import Link from "next/link";

interface MealCardProps {
  meal: Meal;
  toDetail?: boolean;
}

function MealCard({ meal, toDetail = true }: MealCardProps) {
  return (
    <div>
      <h2>{meal.strMeal}</h2>
      {/** @todo make img size dependent on container */}
      <div>
        <Image
          src={meal.strMealThumb}
          width={200}
          height={200}
          alt={meal.strMeal}
          priority
        />
      </div>
      {toDetail && <Link href={`/meal/${meal.idMeal}`}>Details</Link>}
    </div>
  );
}

export default MealCard;
