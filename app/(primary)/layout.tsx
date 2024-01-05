import Footer from "@/components/Footer/Footer";
import RootNav from "@/components/Navbar/RootNav";
import React from "react";

interface ChildrenProps {
  children?: React.ReactNode;
}

const layout = ({ children }: ChildrenProps) => {
  return (
    <>
      <header>
        <RootNav />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default layout;
