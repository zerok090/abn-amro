import React from "react";
import useFetch from "@/hooks/useFetch";
import { Meals } from "@/types/meal";
import MealCard from "@/components/ui/mealCard/MealCard";
import Link from "next/link";

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
    return <p>No result</p>
  }

  const meal = data.meals[0];
  
  return (
    <div>
      {/** @todo implement container that shows a random meal */}
      <div className="">
        <MealCard meal={meal} />
        <Link href={`/meal/${meal.idMeal}`}>Details</Link>
      </div>
    </div>
  );
}

export default MealRandom;
