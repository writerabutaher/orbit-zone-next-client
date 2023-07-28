"use client";

import React from "react";
import { useForm } from "react-hook-form";

type Data = {
  name: string;
  email: string;
  password: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data: Data) => {
    console.log(data);
  };

  return (
    <div className="px-12 m-auto mx-auto xl:container sm:px-0">
      <div className="h-full mx-auto sm:w-max">
        <div className="py-12 m-auto">
          <div className="p-8 mt-12 -mx-6 border rounded-3xl bg-gray-50 sm:-mx-10 sm:p-10">
            <h3 className="text-2xl font-semibold text-gray-700 ">
              Login to your account
            </h3>
            <div className="flex flex-wrap grid-cols-2 gap-6 mt-12 sm:grid">
              <button className="w-full px-6 transition bg-white border rounded-full h-11 border-gray-300/75 active:bg-gray-50 ">
                <div className="flex items-center justify-center mx-auto space-x-4 w-max">
                  <img
                    src="images/google.svg"
                    className="w-5"
                    alt=""
                  />
                  <span className="block text-sm font-semibold tracking-wide w-max text-cyan-700 ">
                    With Google
                  </span>
                </div>
              </button>
              <button className="w-full px-6 transition bg-gray-900 rounded-full h-11 hover:bg-gray-800 focus:bg-gray-700 active:bg-gray-600 ">
                <div className="flex items-center justify-center mx-auto space-x-4 text-white w-max">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5"
                    viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  <span className="block text-sm font-semibold tracking-wide text-white w-max">
                    With Github
                  </span>
                </div>
              </button>
            </div>

            <form
              onSubmit={handleSubmit(handleRegister)}
              className="mt-10 space-y-8 ">
              <div>
                <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400  focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input
                    {...register("name", {
                      required: "Required",
                    })}
                    id=""
                    type="text"
                    placeholder="Your name"
                    className="w-full pb-3 transition bg-transparent border-b border-gray-300 outline-none invalid:border-red-400"
                  />
                  {errors.name && (
                    <p className="text-error">{errors.name.message}</p>
                  )}
                </div>
              </div>
              <div>
                <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400  focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input
                    {...register("email", {
                      required: "Required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address",
                      },
                    })}
                    id=""
                    type="email"
                    placeholder="Your email or user name"
                    className="w-full pb-3 transition bg-transparent border-b border-gray-300 outline-none invalid:border-red-400"
                  />
                  {errors.email && (
                    <p className="text-error">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400  focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input
                    {...register("password", {
                      required: "Required",
                      minLength: {
                        value: 6,
                        message: "password must be 6 characters",
                      },
                    })}
                    id=""
                    type="Your password"
                    placeholder="Your answer"
                    className="w-full pb-3 transition bg-transparent border-b border-gray-300 outline-none invalid:border-red-400"
                  />
                  {errors.password && (
                    <p className="text-error">{errors.password.message}</p>
                  )}
                </div>
                <button
                  type="reset"
                  className="p-3 -mr-3 w-max">
                  <span className="text-sm tracking-wide text-sky-600 ">
                    Forgot password ?
                  </span>
                </button>
              </div>

              <div>
                <button className="flex items-center justify-center w-full px-6 py-3 transition rounded-full bg-sky-500 h-11 hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                  <span className="text-base font-semibold text-white ">
                    Login
                  </span>
                </button>
                <button
                  type="reset"
                  className="p-3 -ml-3 w-max">
                  <span className="text-sm tracking-wide text-sky-600 ">
                    Create new account
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="pt-12 text-gray-500 border-t ">
            <div className="space-x-4 text-center">
              <span>&copy; Tailus</span>
              <a className="text-sm hover:text-sky-900 ">Contact</a>
              <a className="text-sm hover:text-sky-900 ">Privacy & Terms</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
