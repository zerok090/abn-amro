import Head from "next/head";
import MealRandom from "@/components/ui/mealRandom/MealRandom";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage - Random Dish</title>
        <meta name="description" content="Dish home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.mealRandomContainer}>
        <h1>Meals we think you will like</h1>
        <MealRandom />
        <MealRandom />
        <MealRandom />
        <MealRandom />
        <MealRandom />
        <MealRandom />
      </section>
    </>
  );
}
