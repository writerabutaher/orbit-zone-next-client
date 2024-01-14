"use client";

import { useAuth } from "@/providers/AuthProvider";
import { getCategory } from "@/utils/api/category";
import { saveVehicle } from "@/utils/api/vehicle";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import UploadImage from "./UploadImage";

const AddProductForm = () => {
  const { user } = useAuth();
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // get all categories
  const { data: categories = [] as CategoryType[] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await getCategory();
      return response.code === "success" ? response.data : [];
    },
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VehicleFormType>();

  const handleForm = async (data: VehicleFormType) => {
    const carData = {
      ...data,
      seller_info: {
        name: user?.displayName as string,
        email: user?.email as string,
        number: data.seller_info.number,
        address: data.seller_info.address,
      },
      image: image as string,
    };

    const response = await saveVehicle(carData);

    if (response.code === "success") {
      reset();
      toast.success("Successfully upload vehicle");
    } else {
      console.error(response.error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className="grid max-w-screen-lg gap-4 mx-auto sm:grid-cols-2"
    >
      <div>
        <label
          htmlFor="name"
          className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
        >
          Name*
        </label>
        <input
          value={user?.displayName as string}
          readOnly
          id="name"
          className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-purple-300 focus:ring"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
        >
          Email*
        </label>
        <input
          value={user?.email as string}
          readOnly
          id="email"
          className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-purple-300 focus:ring"
        />
      </div>
      <div>
        <label
          htmlFor="number"
          className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
        >
          Phone Number*
        </label>
        <input
          {...register("seller_info.number", {
            required: "*phone number is required",
          })}
          id="number"
          className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-purple-300 focus:ring"
        />
        {errors.seller_info?.number && (
          <p className="text-right text-error">
            {errors.seller_info.number.message}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="location"
          className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
        >
          Current Location*
        </label>
        <input
          {...register("seller_info.address", {
            required: "*seller_info.address is required",
          })}
          id="location"
          className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-purple-300 focus:ring"
        />
        {errors.seller_info?.address && (
          <p className="text-right text-error">
            {errors.seller_info.address.message}
          </p>
        )}
      </div>

      <h1 className="col-span-2 mt-6 text-xl font-semibold">Vehicle Info</h1>
      <div>
        <label
          htmlFor="company"
          className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
        >
          Company Name*
        </label>
        <input
          id="company"
          {...register("company", {
            required: "*company name is required",
          })}
          className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-purple-300 focus:ring"
        />
        {errors.company && (
          <p className="text-right text-error">{errors.company.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="model"
          className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
        >
          Vehicle Model*
        </label>
        <input
          {...register("model", {
            required: "*vehicle model is required",
          })}
          id="model"
          className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-purple-300 focus:ring"
        />
        {errors.model && (
          <p className="text-right text-error">{errors.model.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="year"
          className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
        >
          Uses Year*
        </label>
        <input
          {...register("year", {
            required: "*use year is required",
          })}
          id="year"
          className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-purple-300 focus:ring"
        />
        {errors.year && (
          <p className="text-right text-error">{errors.year.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="price"
          className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
        >
          Sell Price*
        </label>
        <input
          {...register("price", {
            required: "*sell price is required",
          })}
          id="price"
          className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-purple-300 focus:ring"
        />
        {errors.year && (
          <p className="text-right text-error">{errors.year.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="category"
          className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
        >
          Category*
        </label>
        <select
          {...register("category_id", {
            required: "*vehicle category is required",
          })}
          id="category"
          className="w-full px-3 py-2 text-gray-800 uppercase transition duration-100 border rounded outline-none bg-gray-50 ring-purple-300 focus:ring"
        >
          {categories?.map((category, i) => (
            <option key={i} value={category?._id} className="uppercase">
              {category?.name}
            </option>
          ))}
        </select>
        {errors.category_id && (
          <p className="text-right text-error">{errors.category_id.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="condition"
          className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
        >
          Condition*
        </label>
        <select
          {...register("condition", {
            required: "*condition is required",
          })}
          id="condition"
          className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-purple-300 focus:ring"
        >
          <option value="">Please select</option>
          <option value="Excellent">New</option>
          <option value="Excellent">Excellent</option>
          <option value="Excellent">Good</option>
          <option value="Excellent">Fair</option>
          <option value="Excellent">Poor</option>
        </select>
        {errors.condition && (
          <p className="text-right text-error">{errors.condition.message}</p>
        )}
      </div>

      <UploadImage
        image={image}
        setImage={setImage}
        loading={loading}
        setLoading={setLoading}
      />

      <fieldset className="grid grid-cols-2 gap-4">
        <legend className="inline-block mb-2 text-sm text-gray-800 sm:text-base">
          Upload*
        </legend>

        <div>
          <input
            {...register("advertise", {
              required: "*advertise is required",
            })}
            type="radio"
            name="advertise"
            value="false"
            id="false"
            className="peer hidden [&:checked_+_label_svg]:block"
            defaultChecked
          />

          <label
            htmlFor="false"
            className="block p-3 text-sm font-medium bg-white border border-gray-100 rounded-lg shadow-sm cursor-pointer hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
          >
            <div className="flex items-center justify-between">
              <p className="text-gray-700">Standard</p>

              <svg
                className="hidden w-5 h-5 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </label>
        </div>

        <div>
          <input
            {...register("advertise", {
              required: "*advertise is required",
            })}
            type="radio"
            name="advertise"
            value="true"
            id="true"
            className="peer hidden [&:checked_+_label_svg]:block"
          />

          <label
            htmlFor="true"
            className="block p-3 text-sm font-medium bg-white border border-gray-100 rounded-lg shadow-sm cursor-pointer hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
          >
            <div className="flex items-center justify-between">
              <p className="text-gray-700">Advertise</p>

              <svg
                className="hidden w-5 h-5 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </label>
        </div>

        {errors.advertise && (
          <p className="col-span-2 text-right text-error">
            {errors.advertise.message}
          </p>
        )}
      </fieldset>

      <div className="sm:col-span-2">
        <label
          htmlFor="description"
          className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
        >
          Description
        </label>
        <textarea
          name="description"
          className="w-full h-32 px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-purple-300 focus:ring"
        ></textarea>
      </div>

      <div className="flex items-center justify-between sm:col-span-2">
        <button
          type={loading ? "button" : "submit"}
          disabled={loading ? true : false}
          className={`inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 rounded-lg outline-none  md:text-base ${
            loading
              ? "bg-gray-200"
              : "bg-purple-500 ring-purple-300 hover:bg-purple-600 focus-visible:ring active:bg-purple-700"
          }`}
        >
          {loading ? "Loading..." : "Add Vehicle"}
        </button>

        <span className="text-sm text-gray-500">*Required</span>
      </div>
    </form>
  );
};

export default AddProductForm;
