"use client";

import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

const RootNav = () => {
  const location = usePathname();

  return (
    <div className={`${location === "/" ? "hidden" : "block"}`}>
      <Navbar />
    </div>
  );
};

export default RootNav;
