import { NavLink, Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <ul className="flex gap-4 p-5 bg-neutral-50 shadow-md font-semibold">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-bold text-blue-500" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "font-bold text-blue-500" : ""
            }
          >
            About
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default Layout;
