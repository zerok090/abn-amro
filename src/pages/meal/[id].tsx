import Head from "next/head";
import { useRouter } from "next/router";
import type { Meals } from "@/types/meal";
import useFetch from "@/hooks/useFetch";

import MealCard from "@/components/core/mealCard/MealCard";
import Video from "@/components/common/video/Video";
import MealIngredients from "@/components/core/mealIngredients/MealIngredients";
import MultilineText from "@/components/common/multilineText/MultilineText";
import Loading from "@/components/common/loading/Loading";
import NoResult from "@/components/common/noResult/NoResult";

import styles from "./Meal.module.scss";
import Error from "@/components/common/error/Error";

export default function Meal() {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading, error } = useFetch<Meals>(
    `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (!data || !data.meals || !data.meals.length) {
    return (
      <NoResult title="Not found" description="We could not find this meal" />
    );
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
      <div className={styles.container}>
        <section>
          <MealCard meal={meal} toDetail={false} />
        </section>
        {meal.strYoutube && meal.strYoutube !== "" ? (
          <section>
            <Video src={meal.strYoutube} />
          </section>
        ) : null}
        <section>
          <h2>Ingredients</h2>
          <MealIngredients meal={meal} />
        </section>
        <section>
          <h2>Instructions</h2>
          <MultilineText text={meal.strInstructions} />
        </section>
      </div>
    </>
  );
}
