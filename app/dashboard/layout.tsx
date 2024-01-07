"use client";

import Navbar from "@/components/Dashboard/Navbar";
import Sidebar from "@/components/Dashboard/Sidebar";
import { useClickOutside } from "@mantine/hooks";
import { useState } from "react";

const DashBoardLayout = ({ children }: ChildrenProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useClickOutside(() => setOpen(false));

  return (
    <div className="flex">
      <>
        <div className="fixed hidden lg:block">
          <Sidebar open={open} setOpen={setOpen} />
        </div>
        <div
          ref={ref}
          className={` ${
            open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } transition-all ease-in-out duration-300 fixed z-50 lg:opacity-0`}
        >
          <Sidebar open={open} setOpen={setOpen} />
        </div>
      </>

      <main className="w-full lg:ml-64">
        <div ref={ref}>
          <Navbar open={open} setOpen={setOpen} />
        </div>
        <div className="px-4">{children}</div>
      </main>
    </div>
  );
};

export default DashBoardLayout;
