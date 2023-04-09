import MealCard from "@/components/ui/mealCard/MealCard";
import useFetch from "@/hooks/useFetch";
import type { Meals } from "@/types/meal";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Meal() {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading, error } = useFetch<Meals>(
    `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  if (loading) {
    /** @todo loader component */
    return <p>Loading...</p>;
  }

  if (error) {
    /** @todo error component */
    return <p>{error.message}</p>;
  }

  if (!data || !data.meals || !data.meals.length) {
    return <p>Meal not found</p>;
  }

  const meal = data.meals[0];
  return (
    <>
      <Head>
        <title>{meal.strMeal}</title>
        <meta name="description" content="Dish detail" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={""}>
        <MealCard meal={meal} toDetail={false} />
      </main>
    </>
  );
}
