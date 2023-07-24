interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const dashBoardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <header>This is header</header>
      <aside>This is aside</aside>
      <main>{children}</main>
    </>
  );
};

export default dashBoardLayout;
