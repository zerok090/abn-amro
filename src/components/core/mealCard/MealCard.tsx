import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Meal } from "@/types/meal";
import Card from "@/components/common/card/Card";

interface MealCardProps {
  meal: Meal;
  toDetail?: boolean;
}

function MealCard({ meal, toDetail = true }: MealCardProps) {
  const detailSrc = toDetail ? `/meal/${meal.idMeal}` : undefined;

  return (
    <Card
      src={meal.strMealThumb}
      alt={meal.strMeal}
      title={meal.strMeal}
      detailSrc={detailSrc}
    />
  );
}

export default MealCard;
