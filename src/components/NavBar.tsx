import { NavLink } from "react-router";

const navData = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Elo", href: "/about" },
  { id: 3, name: "Projects", href: "/project" },
  { id: 4, name: "Contact", href: "/contact" },
];

const NavBar = () => {
  return (
    <nav className="flex justify-center items-center px-6 py-3 w-fit bg-black/5 rounded-lg bg-clip-padding backdrop-filter backdrop-blur sticky top-4">
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
    </nav>
  );
};

export default NavBar;
