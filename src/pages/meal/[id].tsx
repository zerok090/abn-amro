import MealCard from "@/components/ui/mealCard/MealCard";
import useFetch from "@/hooks/useFetch";
import type { Meals, Meal as TMeal, KeyMeal } from "@/types/meal";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Meal.module.scss";

function getIngredientsArray(meal: TMeal) {
  const keysMeal = Object.keys(meal) as Array<KeyMeal>;
  return keysMeal.reduce((result, currentKey) => {
    if (!meal[currentKey] || meal[currentKey] === "") return result;
    if (!currentKey.includes("strIngredient")) return result;

    const index = currentKey.substring(13);
    const measurementKey = `strMeasure${index}` as KeyMeal;

    const ingredient = meal[currentKey];
    const measurment = meal[measurementKey];

    result.push(`${measurment} ${ingredient}`);
    return result;
  }, [] as string[]);
}

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
  const ingredientsArray = getIngredientsArray(meal);

  return (
    <>
      <Head>
        <title>{meal.strMeal}</title>
        <meta name="description" content="Dish detail" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <section>
          <MealCard meal={meal} toDetail={false} />
        </section>
        {videoId && videoId[1] ? (
          <section>
            <iframe
              width="560"
              height="315"
              src={`https://youtube.com/embed/${videoId[1]}`}
            ></iframe>
          </section>
        ) : null}
        <section>
          <ul>
            {ingredientsArray.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>;
            })}
          </ul>
        </section>
        <section>
          <p>{meal.strInstructions}</p>
        </section>
      </main>
    </>
  );
}
