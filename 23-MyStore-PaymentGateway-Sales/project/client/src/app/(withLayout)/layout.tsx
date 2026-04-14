import Header from "@/components/layout/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
