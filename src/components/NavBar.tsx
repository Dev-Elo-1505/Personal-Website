import { NavLink } from "react-router";
import { navData } from "../data";

const NavBar = () => {
  return (
    <nav className="flex justify-center items-center sticky top-5 z-50 pb-5">
      <div className="flex justify-center items-center px-6 py-3 w-fit bg-black/5 rounded-lg bg-clip-padding backdrop-filter backdrop-blur ">
        <ul className="flex space-x-4">
          {navData.map((navItem) => (
            <li key={navItem.id}>
              <NavLink
                to={navItem.href}
                className={({ isActive }) => {
                  return isActive ? "font-bold" : "font-normal";
                }}
              >
                {navItem.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
