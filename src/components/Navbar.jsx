import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/profile",
    title: "Profile",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];
const Navbar = () => {
  return (
    <div className="flex items-center justify-between container mx-auto">
      <h1 className="text-3xl font-semibold">Jihad Blog</h1>
      <ul className="flex items-center justify-center">
        {navLinks.map(({ path, title }) => (
          <li key={path} className="mx-2">
            <NavLink
              exact={path === "/"}
              activeClassName="text-cyan-600"
              href={path}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
