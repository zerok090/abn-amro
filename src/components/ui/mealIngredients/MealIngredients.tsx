import { Meal } from "@/types/meal";
import React from "react";

type MappedIngredient = {
  ingredient: string;
  measurment: string;
};

type MealKey = keyof Meal;

interface MealIngredientsProps {
  meal: Meal;
}

function getIngredientsArray(meal: Meal) {
  const keysMeal = Object.keys(meal) as Array<MealKey>;
  return keysMeal.reduce((result, currentKey) => {
    if (!meal[currentKey] || meal[currentKey] === "") return result;
    if (!currentKey.includes("strIngredient")) return result;

    const index = currentKey.substring(13);
    const measurementKey = `strMeasure${index}` as MealKey;

    const ingredient = meal[currentKey];
    const measurment = meal[measurementKey];

    result.push({ ingredient, measurment });
    return result;
  }, [] as MappedIngredient[]);
}

function MealIngredients({ meal }: MealIngredientsProps) {
  const ingredientsArray = getIngredientsArray(meal);
  return (
    <>
      <ul>
        {ingredientsArray.map((ingredient, index) => {
          return (
            <li key={index}>
              <strong>{ingredient.measurment}</strong> {ingredient.ingredient}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MealIngredients;
