import React from "react";
import { Meal } from "@/types/meal";
import Image from "next/image";

interface MealCardProps {
  meal: Meal;
}

function MealCard({ meal }: MealCardProps) {
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
        />
      </div>
    </div>
  );
}

export default MealCard;
