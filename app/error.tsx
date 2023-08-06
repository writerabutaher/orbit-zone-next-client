"use client";

import Link from "next/link";
import React from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div className="min-h-screen bg-gray-800">
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center justify-center mx-4 bg-white border rounded-md md:w-2/3 ">
          <div className="flex flex-col items-center py-16 ">
            <img
              className="hidden px-4 md:block"
              src="https://i.ibb.co/9Vs73RF/undraw-page-not-found-su7k-1-3.png"
              alt=""
            />
            <img
              className="md:hidden"
              src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png"
              alt=""
            />
            <h1 className="px-4 pt-8 pb-4 text-5xl font-bold leading-10 text-center text-gray-800">
              OOPS!{" "}
            </h1>
            <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">
              {error.message}
            </p>
            <Link href={"/"}>
              <button className="h-10 mx-4 text-base text-white bg-indigo-700 border rounded-md w-44 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">
                Home
              </button>
            </Link>
            <button
              onClick={() => reset()}
              className="h-10 mx-4 text-base text-white bg-indigo-700 border rounded-md w-44 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
