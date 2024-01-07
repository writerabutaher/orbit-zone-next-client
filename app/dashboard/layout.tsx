"use client";

import Sidebar from "@/components/Dashboard/Sidebar";
import { useState } from "react";

const DashBoardLayout = ({ children }: ChildrenProps) => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div className="flex">
      <div className="hidden sm:block">
        <Sidebar open={open} setOpen={setOpen} />
      </div>
      <div
        className={` ${
          open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } transition-all ease-in-out duration-300 absolute left-0`}
      >
        <Sidebar open={open} setOpen={setOpen} />
      </div>

      <main className="w-full">
        <button
          className="absolute right-0 sm:hidden"
          onClick={() => setOpen(!open)}
        >
          Click
        </button>
        {children}
      </main>
    </div>
  );
};

export default DashBoardLayout;
