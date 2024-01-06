const dashBoardLayout = ({ children }: ChildrenProps) => {
  return (
    <div>
      <header>This is header</header>
      <aside>This is aside</aside>
      <main>{children}</main>
    </div>
  );
};

export default dashBoardLayout;
