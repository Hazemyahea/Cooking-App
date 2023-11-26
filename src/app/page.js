import Search from "@/components/Search";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const categories = res.json();

  return categories;
}
export default async function Home() {
  const data = await getData();
  const categories = data.categories;
  return (
    <div className="flex gap-8 flex-wrap">
      {categories.map((cate) => {
        return (
          <Link
            href={`${cate.strCategory}`}
            key={cate.idCategory}
            className=" relative"
          >
            <div className=" w-52 relative">
              <Image
                src={cate.strCategoryThumb}
                width={500}
                height={500}
                alt="Categort image"
                className=" w-full"
              />
            </div>
            <p className=" absolute bg-orange-600 p-2 text-slate-200 rounded-md  bottom-0 hover:bg-orange-500">
              {cate.strCategory}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
