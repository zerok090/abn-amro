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
  const videoId = meal.strYoutube.match(/watch\?v=(.*)/);
  const ingredients = ["1"];
  console.log(meal);

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
        {/** @todo: list of ingredients including measures, instructions */}
        {/** @todo get this into its own component */}
        {videoId !== null && videoId[1] ? (
          <iframe
            width="560"
            height="315"
            src={`https://youtube.com/embed/${videoId[1]}`}
          ></iframe>
        ) : null}
        <ul>{ingredients.map((ingredient) => null)}</ul>
        <details></details>
      </main>
    </>
  );
}
