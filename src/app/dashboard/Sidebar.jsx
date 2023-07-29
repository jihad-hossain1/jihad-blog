import NavLink from "@/components/NavLink";
import Link from "next/link";
import React from "react";
const navLinksDashboard = [
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/dashboard/addProduct",
    title: "Add Product",
  },
  {
    path: "/dashboard/manageProduct",
    title: "Manage Products",
  },
  {
    path: "/",
    title: "Home",
  },
];
const Sidebar = () => {
  return (
    <div>
      <aside className="mr-10">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <ul>
          {navLinksDashboard.map(({ path, title }) => (
            <li key={path}>
              <NavLink exact activeClassName="text-cyan-600" href={path}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
