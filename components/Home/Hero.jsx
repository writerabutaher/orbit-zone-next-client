"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";

const Hero = () => {
  const location = window.location.pathname;

  return (
    <div className="relative w-full h-full pb-10">
      <div className="hidden md:block">
        <img
          className="absolute bg-cover bg-center w-full h-full inset-0"
          src="./assets/Hero 08.png"
        />
      </div>
      {location === "/" && <Navbar />}
      <div className="relative px-4 xl:px-0 container mx-auto md:flex items-center gap-8">
        <div className="text-color w-full md:w-1/3 pt-16 lg:pt-32 xl:pt-12">
          <h1 className="text-3xl md:text-4xl lg:text-6xl w-11/12 lg:w-11/12 xl:w-full text-gray-900 font-extrabold f-f-l uppercase">
            <span className="text-purple-700">Find</span> Your Perfect Ride, {}
            <span className="text-purple-700">Sell</span> with Ease
          </h1>
          <div className="f-f-r text-base lg:text-lg sm:pb-0 py-10 xl:pt-6">
            <h2>
              Orbit Zone is the go-to online platform for individuals looking to
              buy or sell cars, providing a comprehensive and seamless
              experience.
            </h2>
          </div>
          <div className="lg:flex">
            <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-purple-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-700 rounded-lg">
              Start Buying Now
            </button>
            <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 lg:ml-2 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-purple-200 text-purple-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-700 rounded-lg">
              Try Sell Out
            </button>
          </div>
        </div>
        <img
          className="w-full object-fill md:w-2/3 md:-ml-4 lg:-ml-4 xl:ml-0"
          src="./assets/super.png"
          alt="super png"
          role="img"
        />
        <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-purple-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-700 rounded-lg">
          Start building now
        </button>
        <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-purple-200 text-purple-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-700 rounded-lg">
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
