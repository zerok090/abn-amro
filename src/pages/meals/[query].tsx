import Head from "next/head";
import { useRouter } from "next/router";
import MealCard from "@/components/ui/mealCard/MealCard";
import useFetch from "@/hooks/useFetch";
import type { Meals } from "@/types/meal";
import styles from "./Meals.module.scss";

export default function Meals() {
  const router = useRouter();
  const { query } = router.query;

  const { data, loading, error } = useFetch<Meals>(
    `https://themealdb.com/api/json/v1/1/search.php?s=${query}`
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
    return <p>No meals found</p>;
  }

  return (
    <>
      <Head>
        <title>Meals</title>
        <meta name="description" content="Dish detail" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container}>
        {data.meals.map((meal) => {
            return <MealCard key={meal.idMeal} meal={meal} />
        })}
      </section>
    </>
  );
}
