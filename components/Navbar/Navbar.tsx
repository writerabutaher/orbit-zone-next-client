"use client";

import { useAuth } from "@/providers/AuthProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const location = usePathname();

  return (
    <nav className="relative">
      <div className="container px-4 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-3xl font-semibold text-gray-800 uppercase">
              Orbit <span className="text-purple-500">Zone</span>
            </h1>
          </Link>

          {/* open state */}
          {/* <!-- Mobile menu button --> */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div
          className={`${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
        >
          {/* location state */}
          <div className="flex flex-col md:flex-row md:mx-6 md:gap-8">
            <Link
              className={`my-2 ${
                isOpen
                  ? "text-gray-800 hover:text-purple-600"
                  : `${
                      location === "/"
                        ? "text-white before:bg-white"
                        : "before:bg-gray-800 text-gray-800"
                    }`
              } before:absolute before:-bottom-1 font-medium before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:transition hover:before:scale-100 relative text-lg`}
              href="/"
            >
              Home
            </Link>
            <a
              className={`my-2 ${
                isOpen
                  ? "text-gray-800 hover:text-purple-600"
                  : `${
                      location === "/"
                        ? "text-white before:bg-white"
                        : "before:bg-gray-800 text-gray-800"
                    }`
              } before:absolute before:-bottom-1 font-medium before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:transition hover:before:scale-100 relative text-lg`}
              href="#"
            >
              Shop
            </a>
            <Link
              className={`my-2 ${
                isOpen
                  ? "text-gray-800 hover:text-purple-600"
                  : `${
                      location === "/"
                        ? "text-white before:bg-white"
                        : "before:bg-gray-800 text-gray-800"
                    }`
              } before:absolute before:-bottom-1 font-medium before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:transition hover:before:scale-100 relative text-lg`}
              href="#"
            >
              Contact
            </Link>
            <Link
              className={`my-2 ${
                isOpen
                  ? "text-gray-800 hover:text-purple-600"
                  : `${
                      location === "/"
                        ? "text-white before:bg-white"
                        : "before:bg-gray-800 text-gray-800"
                    }`
              } before:absolute before:-bottom-1 font-medium before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:transition hover:before:scale-100 relative text-lg`}
              href="#"
            >
              About
            </Link>
          </div>

          {/* user state */}
          <div className="flex md:justify-center md:block">
            {!user ? (
              <Link
                href={"/login"}
                className="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-purple-400 rounded-lg hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-700"
              >
                Sign In
                <AiOutlineArrowRight size={"1rem"} className="ml-2" />
              </Link>
            ) : (
              <Link
                href="/dashboard"
                className="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-purple-400 rounded-lg hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-700"
              >
                Dashboard
                <AiOutlineArrowRight size={"1rem"} className="ml-2" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
