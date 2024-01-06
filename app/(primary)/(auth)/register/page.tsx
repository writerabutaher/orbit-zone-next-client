"use client";

import { useAuth } from "@/providers/AuthProvider";
import { createJWT } from "@/utils/api/jwt";
import { saveUser } from "@/utils/api/user";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Register = () => {
  const { googleSignIn, registerUser, loading } = useAuth();
  const searchParams = useSearchParams();
  const from = searchParams.get("redirectURL");
  const { replace } = useRouter();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormType>();

  const handleRegister: SubmitHandler<UserFormType> = async (data) => {
    const { name, email, password } = data;

    const userData = {
      name,
      email,
    };

    // register user
    const userCredential = await registerUser(email, password, name);

    if (userCredential !== null) {
      // save data into db
      const userResponse = await saveUser(userData);

      if (userResponse.code === "success") {
        const user = userResponse.data;

        const response = await createJWT({ email: user?.email! });

        if (response.success) {
          reset();
          toast.success("Register successfully");

          if (from) {
            replace(from);
          } else {
            replace("/dashboard");
          }
        }
      }
    }
  };

  // google sign up
  const handleGoogleSign = async () => {
    const user = await googleSignIn();

    if (user !== null) {
      const userData = {
        name: user.displayName,
        email: user.email,
      };

      // save data into db
      const userResponse = await saveUser(userData);

      if (userResponse.code === "success") {
        await createJWT({ email: userResponse?.data?.email! });
        toast.success("Google Sign up successfully");

        if (from) {
          replace(`${from}`);
        } else {
          replace("/dashboard");
        }
      }
    }
  };

  return (
    <div className="px-12 m-auto mx-auto xl:container sm:px-0">
      <div className="h-full mx-auto sm:w-max">
        <div className="py-12 m-auto">
          <div className="p-8 mt-12 -mx-6 border rounded-3xl bg-gray-50 sm:-mx-10 sm:p-10">
            <h3 className="text-2xl font-semibold text-gray-700 ">
              Register to your account
            </h3>
            <div className="flex flex-wrap grid-cols-2 gap-6 mt-12 sm:grid">
              <button
                onClick={handleGoogleSign}
                className="w-full px-6 transition bg-white border rounded-full h-11 border-gray-300/75 active:bg-gray-50 "
              >
                <div className="flex items-center justify-center mx-auto space-x-4 w-max">
                  <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#1976D2"
                    />
                  </svg>
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
                    viewBox="0 0 16 16"
                  >
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
              className="mt-10 space-y-8 "
            >
              <div>
                <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-purple-400  focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input
                    {...register("name", {
                      required: "name is required",
                    })}
                    type="text"
                    placeholder="Name"
                    className="w-full pb-3 transition bg-transparent border-b border-gray-300 outline-none invalid:border-red-400"
                  />
                </div>
                {errors.name && (
                  <p className="text-right text-error">
                    *{errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-purple-400  focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input
                    {...register("email", {
                      required: "email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address",
                      },
                    })}
                    type="email"
                    placeholder="Email"
                    className="w-full pb-3 transition bg-transparent border-b border-gray-300 outline-none invalid:border-red-400"
                  />
                </div>
                {errors.email && (
                  <p className="text-right text-error">
                    *{errors.email.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-end">
                <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-purple-400  focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input
                    {...register("password", {
                      required: "password was required",
                      minLength: {
                        value: 6,
                        message: "password must be 6 characters",
                      },
                    })}
                    type="password"
                    placeholder="Password"
                    className="w-full pb-3 transition bg-transparent border-b border-gray-300 outline-none invalid:border-red-400"
                  />
                </div>
                {errors.password && (
                  <p className="text-error">*{errors.password.message}</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className="flex items-center justify-center w-full px-6 py-3 transition bg-purple-500 rounded-full h-11 hover:bg-purple-600 focus:bg-purple-600 active:bg-purple-800"
                >
                  <span className="text-base font-semibold text-white ">
                    {loading ? (
                      <div className="w-6 h-6 border-2 border-white border-dashed rounded-full animate-spin"></div>
                    ) : (
                      "Register"
                    )}
                  </span>
                </button>
                <button className="pt-4 pl-4 -ml-3">
                  <Link href={"/login"}>
                    <span className="text-sm tracking-wide text-purple-600">
                      Have an account
                    </span>
                  </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
