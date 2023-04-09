import React from "react";
import useFetch from "@/hooks/useFetch";
import type { Meals } from "@/types/meal";
import MealCard from "@/components/ui/mealCard/MealCard";

function MealRandom() {
  const { data, loading, error } = useFetch<Meals>(
    "https://themealdb.com/api/json/v1/1/random.php"
  );

  if (loading) {
    /** @todo loader component */
    return <p>Loading...</p>;
  }

  if (error) {
    /** @todo error component */
    return <p>{error.message}</p>;
  }

  if (!data || !data.meals.length) {
    /** @todo no result component */
    return <p>No result</p>;
  }

  const meal = data.meals[0];

  return <MealCard meal={meal} />;
}

export default MealRandom;
