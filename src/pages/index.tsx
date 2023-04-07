import Head from "next/head";
import useFetch from "@/hooks/useFetch";
import { Meals } from "@/types/meal";
import MealCard from "@/components/ui/mealCard/MealCard";
import Link from "next/link";

const NoResult = () => {
  return <p>No Result</p>;
};

export default function Home() {
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
    return <NoResult />;
  }

  const meal = data.meals[0];
  return (
    <>
      <Head>
        <title>Dishes</title>
        <meta name="description" content="Dish home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/** @todo get loading and error state in here for be inside of main */}
      <main className="">
        {/** @todo implement container that shows a random meal */}
        <div className="">
          <MealCard meal={meal} />
          <Link href={`/meal/${meal.idMeal}`}>
            Details
          </Link>
        </div>
      </main>
    </>
  );
}
