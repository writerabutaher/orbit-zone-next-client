"use client";

import React from "react";
import Navbar from "../Navbar/Navbar";
import { usePathname } from "next/navigation";

const Hero = () => {
  const location = usePathname();
  return (
    <div className="relative w-full h-full pb-10">
      <div className="hidden md:block">
        <img
          className="absolute inset-0 w-full h-full bg-center bg-cover"
          src="./assets/Hero 08.png"
        />
      </div>
      <div className={`${location === "/" ? "block" : "hidden"}`}>
        <Navbar />
      </div>
      <div className="container relative items-center gap-8 px-4 mx-auto xl:px-0 md:flex">
        <div className="w-full pt-16 text-color md:w-1/3 lg:pt-32 xl:pt-12">
          <h1 className="w-11/12 text-3xl font-extrabold text-gray-900 uppercase md:text-4xl lg:text-6xl lg:w-11/12 xl:w-full f-f-l">
            <span className="text-purple-700">Find</span> Your Perfect Ride, {}
            <span className="text-purple-700">Sell</span> with Ease
          </h1>
          <div className="py-10 text-base f-f-r lg:text-lg sm:pb-0 xl:pt-6">
            <h2>
              Orbit Zone is the go-to online platform for individuals looking to
              buy or sell cars, providing a comprehensive and seamless
              experience.
            </h2>
          </div>
          <div className="lg:flex">
            <button className="hidden w-full py-4 mt-4 text-base font-bold text-white bg-purple-700 rounded-lg md:block hover:opacity-90 xl:text-base xl:w-6/12 xl:mt-8 f-f-r focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-700">
              Start Buying Now
            </button>
            <button className="hidden w-full py-4 mt-4 text-base font-medium text-purple-600 bg-purple-200 rounded-lg md:block hover:opacity-90 xl:text-base xl:w-4/12 lg:ml-2 xl:ml-2 xl:mt-8 f-f-r focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-700">
              Try Sell Out
            </button>
          </div>
        </div>
        <img
          className="object-fill w-full md:w-2/3 md:-ml-4 lg:-ml-4 xl:ml-0"
          src="./assets/super.png"
          alt="super png"
          role="img"
        />
        <button className="w-full py-4 mt-4 text-base font-bold text-white bg-purple-700 rounded-lg md:hidden hover:opacity-90 xl:text-base xl:w-6/12 xl:mt-8 f-f-r focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-700">
          Start building now
        </button>
        <button className="w-full py-4 mt-4 text-base font-medium text-purple-600 bg-purple-200 rounded-lg md:hidden hover:opacity-90 xl:text-base xl:w-4/12 xl:ml-2 xl:mt-8 f-f-r focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-700">
          Try it out
        </button>
      </div>
    </div>
  );
};

<style>{`
  .top-100 {
      animation: slideDown .5s ease-in-out;
  }

  @keyframes slideDown {
      0% {
          top: -50%;
      }

      100% {
          top: 0;
      }
  }

  * {
      outline: none !important;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
  } `}</style>;

export default Hero;
