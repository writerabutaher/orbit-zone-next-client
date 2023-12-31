"use client";

import { useAuth } from "@/providers/AuthProvider";
import { useForm } from "react-hook-form";

const AddProductForm = () => {
  const { user } = useAuth();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VehicleFormType>();

  const handleForm = (data: VehicleFormType) => {
    console.table(data);
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
          {...register("seller_info.name", {
            required: "*name is required",
          })}
          value={user?.displayName!}
          id="name"
          className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-purple-300 focus:ring"
        />
        {errors?.seller_info?.name && (
          <p className="text-right text-error">
            {errors.seller_info.name.message}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
        >
          Email*
        </label>
        <input
          {...register("seller_info.email", {
            required: "*name is required",
          })}
          value={user?.email!}
          id="email"
          className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-purple-300 focus:ring"
        />
        {errors?.seller_info?.email && (
          <p className="text-right text-error">
            {errors.seller_info.email.message}
          </p>
        )}
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
        {errors?.seller_info?.number && (
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
          {...register("location", {
            required: "*location is required",
          })}
          id="location"
          className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-purple-300 focus:ring"
        />
        {errors.location && (
          <p className="text-right text-error">{errors.location.message}</p>
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
          className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-purple-300 focus:ring"
        >
          <option value="">Please select</option>
          <option value="JM">John Mayer</option>
          <option value="SRV">Stevie Ray Vaughn</option>
          <option value="JH">Jimi Hendrix</option>
          <option value="BBK">B.B King</option>
          <option value="AK">Albert King</option>
          <option value="BG">Buddy Guy</option>
          <option value="EC">Eric Clapton</option>
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

      <div>
        <label
          htmlFor="image"
          className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
        >
          Upload Image*
        </label>
        <input
          {...register("photo", {
            required: "*photo is required",
          })}
          type="file"
          id="photo"
          accept="photo/*"
          className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-purple-300 focus:ring"
        />

        {errors.photo && (
          <p className="text-right text-error">{errors.photo.message}</p>
        )}
      </div>

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
          type="submit"
          className="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-purple-500 rounded-lg outline-none ring-purple-300 hover:bg-purple-600 focus-visible:ring active:bg-purple-700 md:text-base"
        >
          Add Vehicle
        </button>

        <span className="text-sm text-gray-500">*Required</span>
      </div>
    </form>
  );
};

export default AddProductForm;
