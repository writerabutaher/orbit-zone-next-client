import { getCategory } from "@/utils/api/category";
import Link from "next/link";

const Categories = async () => {
  const categories = await getCategory();

  return (
    <div className="container px-4 mx-auto my-20">
      <h1 className="py-8 text-3xl font-semibold text-center lg:text-5xl">
        See Our Some Categories
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.code === "success" &&
          categories.data?.slice(0, 6).map((category, i) => {
            return (
              <Link
                key={i}
                href={`category/${category._id}`}
                className="relative flex items-end w-full bg-black group h-96"
              >
                <img
                  alt="image"
                  src={category.image}
                  className="absolute inset-0 object-cover w-full h-full transition-opacity group-hover:opacity-90"
                />

                <div className="relative w-full p-6 tracking-widest text-center text-white transition-colors bg-red-700 group-hover:bg-black sm:w-2/3">
                  <h3 className="text-lg uppercase">{category.name}</h3>
                  <p className="mt-1 text-xs font-medium uppercase">See More</p>
                </div>
              </Link>
            );
          })}
      </div>

      <div className="flex justify-center pt-12">
        <Link
          href={"/category"}
          className="px-6 py-4 text-2xl font-semibold text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:ring-1 focus:ring-offset-1 focus:ring-purple-700"
        >
          All Category
        </Link>
      </div>
    </div>
  );
};

export default Categories;
