import React from "react";
import useFetch from "@/hooks/useFetch";
import type { Meals } from "@/types/meal";

import MealCard from "@/components/core/mealCard/MealCard";
import Loading from "@/components/common/loading/Loading";
import NoResult from "@/components/common/noResult/NoResult";
import Error from "@/components/common/error/Error";

function MealRandom() {
  const { data, loading, error } = useFetch<Meals>(
    "https://themealdb.com/api/json/v1/1/random.php"
  );

  if (loading) return <Loading />;
  if (error) return <Error error={error} />
  if (!data || !data.meals.length) return <NoResult />;

  const meal = data.meals[0];
  return <MealCard meal={meal} />;
}

export default MealRandom;
