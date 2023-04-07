import MealRandom from "@/components/ui/mealRandom/MealRandom";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dishes</title>
        <meta name="description" content="Dish home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <MealRandom />
      </main>
    </>
  );
}
