import { getCategory } from "@/utils/api/category";

const Categories = async () => {
  const categories = await getCategory();

  return (
    <div className="container px-4 mx-auto my-20">
      <h1 className="py-8 text-3xl font-semibold text-center lg:text-4xl">
        See Our Some Categories
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.code === "success" &&
          categories.data?.map((category, i) => {
            return (
              <div
                key={i}
                className="relative flex items-end w-full bg-black group h-96"
              >
                <img
                  alt="image"
                  src="https://mechanicbase.com/wp-content/uploads/2019/08/supercar-e1611599041412.jpg"
                  className="absolute inset-0 object-cover w-full h-full transition-opacity group-hover:opacity-90"
                />

                <div className="relative w-full p-6 tracking-widest text-center text-white transition-colors bg-red-700 group-hover:bg-black sm:w-2/3">
                  <h3 className="text-lg uppercase">{category.name}</h3>
                  <p className="mt-1 text-xs font-medium uppercase">See More</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Categories;
