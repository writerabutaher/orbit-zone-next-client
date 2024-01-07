"use client";

import { useAuth } from "@/providers/AuthProvider";
import { removeJWT } from "@/utils/api/jwt";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineArrowRight } from "react-icons/ai";

interface NavbarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ open, setOpen }: NavbarProps) => {
  const { logOut } = useAuth();
  const { replace } = useRouter();

  const handleLogOut = async () => {
    await logOut();

    const response = await removeJWT();

    if (response.success) {
      replace("/");
    }
  };

  return (
    <nav className="relative">
      <div className="container px-4 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-3xl font-semibold text-gray-800 uppercase">
              Orbit <span className="text-purple-500">Zone</span>
            </h1>
          </Link>

          {/* <!-- Mobile menu button --> */}
          <div className="flex md:hidden">
            <button
              onClick={() => setOpen(!open)}
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              {!open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
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
                  className="w-8 h-8"
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

        <div>
          <button
            onClick={handleLogOut}
            className="items-center justify-center hidden w-full px-6 py-3 text-base font-medium text-white bg-purple-400 rounded-lg md:flex hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-700 "
          >
            Log Out
            <AiOutlineArrowRight size={"1rem"} className="ml-2" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
