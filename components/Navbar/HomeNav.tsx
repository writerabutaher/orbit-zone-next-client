"use client";

import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

const HomeNav = () => {
  const location = usePathname();

  return (
    <div className={`${location === "/" ? "block" : "hidden"}`}>
      <Navbar />
    </div>
  );
};

export default HomeNav;
