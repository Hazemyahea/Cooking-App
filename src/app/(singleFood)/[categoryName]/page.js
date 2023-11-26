import Search from "@/components/Search";
import Image from "next/image";
import Link from "next/link";

async function getData(categoryName) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
    console.log(error);
  }
  const categories = res.json();

  return categories;
}

export async function generateMetadata({ params }) {
  const Category = await params.categoryName;

  return {
    title: Category,
  };
}

export default async function Home({ params }) {
  const Category = params.categoryName;
  const categoryName = await getData(Category);
  const foods = categoryName.meals;
  return (
    <div className="flex gap-8 flex-wrap">
      {foods.map((food) => {
        return (
          <div className=" relative" key={food.idMeal}>
            <Link href={`/${Category}/${food.strMeal}`}>
              <Image
                src={food.strMealThumb}
                alt="Food Image"
                width={200}
                height={200}
                className="rounded-md"
              />
            </Link>
            <div className=" bg-orange-400 text-white p-1 absolute bottom-0">
              <p className=" font-thin">{food.strMeal}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
