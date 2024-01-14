import { getVehiclesByCategory } from "@/utils/api/vehicle";
import { IoLogoModelS } from "react-icons/io";

const CarsByCategory = async ({ params }: { params: { id: string } }) => {
  const response = await getVehiclesByCategory({ id: params.id });

  return (
    <div className="px-4 py-10 mx-auto max-w-screen-2xl">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {response.code === "success" && response.data?.length! > 0 ? (
          response.data?.map((car, i) => (
            <div className="block p-4 rounded-lg shadow-md shadow-indigo-100">
              <div className="group">
                <img
                  alt="car"
                  src={car.image}
                  className="object-cover w-full h-56 transition duration-200 rounded-md group-hover:scale-105"
                />
              </div>

              <div className="mt-2">
                <div>
                  <div>
                    <p className="sr-only">Price</p>

                    <p className="text-sm text-gray-500">
                      $<span>{car.price}</span>
                    </p>
                  </div>

                  <div>
                    <p className="sr-only">Model</p>

                    <h1 className="font-medium capitalize">{car.model}</h1>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-8 mt-6 text-xs">
                  <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <IoLogoModelS className="text-indigo-600" size={"1rem"} />

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-gray-500">Company</p>

                      <p className="font-medium capitalize">{car.company}</p>
                    </div>
                  </div>
                  <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <IoLogoModelS className="text-indigo-600" size={"1rem"} />

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-gray-500">Uses Year</p>

                      <p className="font-medium capitalize">{car.year} year</p>
                    </div>
                  </div>
                  <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <IoLogoModelS className="text-indigo-600" size={"1rem"} />

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-gray-500">Condition</p>

                      <p className="font-medium capitalize">{car.condition}</p>
                    </div>
                  </div>
                  <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <IoLogoModelS className="text-indigo-600" size={"1rem"} />

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-gray-500">Owner</p>

                      <p className="font-medium capitalize">
                        {car.seller_info.name}
                      </p>
                    </div>
                  </div>
                  <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <IoLogoModelS className="text-indigo-600" size={"1rem"} />

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-gray-500">Number</p>

                      <p className="font-medium capitalize">
                        {car.seller_info.number}
                      </p>
                    </div>
                  </div>
                  <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <IoLogoModelS className="text-indigo-600" size={"1rem"} />

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-gray-500">Address</p>

                      <p className="font-medium capitalize">
                        {car.seller_info.address}
                      </p>
                    </div>
                  </div>

                  <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <IoLogoModelS className="text-indigo-600" size={"1rem"} />

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-gray-500">Email</p>

                      <p className="font-medium">{car.seller_info.email}</p>
                    </div>
                  </div>
                </div>

                <button className="relative inline-block mt-8 text-sm font-medium text-white group focus:outline-none focus:ring">
                  <span className="absolute inset-0 border border-indigo-600 group-active:border-indigo-500"></span>
                  <span className="block px-12 py-3 transition-transform bg-indigo-600 border border-indigo-600 active:border-indigo-500 active:bg-indigo-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                    Download
                  </span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="grid py-20 place-items-center col-span-full">
            <h1 className="text-4xl font-semibold text-center">
              There was no car found
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarsByCategory;
