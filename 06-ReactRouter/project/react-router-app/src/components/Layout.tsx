import { Link, Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <ul className="flex gap-4 p-5 bg-gray-50 shadow-md font-semibold">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default Layout;
