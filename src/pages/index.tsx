import Head from "next/head";
import useFetch from '@/hooks/useFetch';
import { Meal } from "@/types/meal";

export default function Home() {
  const { data, loading, error } = useFetch<Meal[]>('https://themealdb.com/api/json/v1/1/random.php');

  if (loading) {
    /** @todo loader component */
    return <p>Loading...</p>;
  }

  if (error) {
    /** @todo error component */
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <Head>
        <title>Dishes</title>
        <meta name="description" content="Dish home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={''}>
        {/** @todo implement container that shows a random meal */}
        <div>{JSON.stringify(data, null, 2)}</div>
      </main>
    </>
  );
}
