import { NavLink } from "react-router";

const navData = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Elo", href: "/about" },
  { id: 3, name: "Projects", href: "/project" },
  { id: 4, name: "Contact", href: "/contact" },
];

const NavBar = () => {
  return (
    <nav className="flex justify-center py-4 px-5 w-fit bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20">
      <ul className="flex space-x-4">
        {navData.map((navItem) => (
          <li key={navItem.id}>
            <NavLink
              to={navItem.href}
              className={({ isActive }) => {
                return isActive ? "font-bold text-black" : "font-normal text-gray-400";
              }}
            >
              {navItem.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
