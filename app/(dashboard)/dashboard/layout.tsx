"use client";

import useAuth from "@/hooks/useAuth";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const dashBoardLayout = ({ children }: DashboardLayoutProps) => {
  useAuth();
  return (
    <div>
      <header>This is header</header>
      <aside>This is aside</aside>
      <main>{children}</main>
    </div>
  );
};

export default dashBoardLayout;
