"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { saveCategory } from "@/utils/api/category";

type Inputs = {
  name: string;
};

const SubscribeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    saveCategory(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center gap-x-3 md:justify-end"
    >
      <div className="relative">
        <svg
          className="absolute inset-y-0 w-6 h-6 my-auto text-gray-400 left-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
        <input
          {...register("name")}
          type="text"
          required
          placeholder="Enter your email"
          className="w-full py-2 pl-12 pr-3 text-gray-500 bg-white border rounded-lg shadow-sm outline-none focus:border-indigo-600"
        />
      </div>
      <button className="block w-auto px-4 py-3 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none">
        Subscribe
      </button>
    </form>
  );
};

export default SubscribeForm;
