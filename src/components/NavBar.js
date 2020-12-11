import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <div className="py-7 px-5 border-b">
        <nav className="flex justify-between items-center max-w-screen-md mx-auto">
          <div>
            <NavLink className="text-xl" to="/" exact>
              Tommy Pratama
            </NavLink>
          </div>
          <div>
            <NavLink className="hover:bg-gray-100 px-4 py-3 mr-4 rounded" to="/post">Blog Posts</NavLink>
            <NavLink className="hover:bg-gray-100 px-4 py-3 mr-4 rounded" to="/project">Projects</NavLink>
            <NavLink className="hover:bg-gray-100 px-4 py-3 rounded" to="/about">About Me!</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
