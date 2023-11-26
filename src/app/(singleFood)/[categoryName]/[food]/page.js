import Image from "next/image";
import { Suspense } from "react";
async function getMeal(m) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${m}`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }

    const food = await res.json();

    return food;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function generateMetadata({ params, searchParams }, parent) {
  const food = await params.food;

  return {
    title: food,
  };
}

export default async function SingleFood({ params }) {
  const par = params.food;
  const the_food = await getMeal(par);
  console.log(the_food.meals[0].idMeal);
  return (
    <div className=" flex flex-col lg:flex-row   lg:space-x-5">
      <div className=" relative flex-1">
        <Image
          src={the_food.meals[0].strMealThumb}
          width={500}
          height={400}
          alt="food Iamge"
          className="im"
        />

        <p className=" absolute bg-red-500 text-lg text-white p-2 rounded-sm top-1 left-1">
          {the_food.meals[0].strArea}
        </p>
      </div>
      <div className=" flex-1 p-4 space-y-6">
        <h1 className=" text-5xl font-bold">{the_food.meals[0].strMeal}</h1>
        <p className="">{the_food.meals[0].strInstructions}</p>
        <h3 className=" text-2xl bg-orange-300 text-white p-2">ingredients</h3>
        <ul className=" flex flex-wrap gap-8 text-lg p-3">
          <li>{the_food.meals[0].strIngredient1}</li>
          <li>{the_food.meals[0].strIngredient2}</li>
          <li>{the_food.meals[0].strIngredient3}</li>
          <li>{the_food.meals[0].strIngredient4}</li>
          <li>{the_food.meals[0].strIngredient5}</li>
          <li>{the_food.meals[0].strIngredient6}</li>
          <li>{the_food.meals[0].strIngredient7}</li>
        </ul>
      </div>
    </div>
  );
}
