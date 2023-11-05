"use client";

import Navbar from "@/components/Navbar/Navbar";
import { usePathname } from "next/navigation";
import React from "react";

interface ChildrenProps {
  children?: React.ReactNode;
}

const layout = ({ children }: ChildrenProps) => {
  const location = usePathname();
  
  return (
    <>
      <div className={`${location === "/" ? "hidden" : "block"}`}>
        <Navbar />
      </div>
      {children}
      <footer>Footer</footer>
    </>
  );
};

export default layout;
