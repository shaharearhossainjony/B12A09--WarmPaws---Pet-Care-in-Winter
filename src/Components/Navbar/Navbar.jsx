import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().catch((err) => console.log(err));
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="purple"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `bg-gradient-to-r font-bold from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent
                  ${isActive ? "border-b-2 border-purple-600 pb-1" : ""}`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `bg-gradient-to-r font-bold from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent
                  ${isActive ? "border-b-2 border-purple-600 pb-1" : ""}`
                }
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `bg-gradient-to-r font-bold from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent
                  ${isActive ? "border-b-2 border-purple-600 pb-1" : ""}`
                }
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>

        <NavLink
          to="/"
          className="btn btn-ghost font-bold text-xl bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent"
        >
          WarmPaws
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `bg-gradient-to-r font-bold from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent
                ${isActive ? "border-b-2 border-purple-600 pb-1" : ""}`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `bg-gradient-to-r font-bold from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent
                ${isActive ? "border-b-2 border-purple-600 pb-1" : ""}`
              }
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `bg-gradient-to-r font-bold from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent
                ${isActive ? "border-b-2 border-purple-600 pb-1" : ""}`
              }
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-3">
        {user ? (
          <>
            <div className="relative group cursor-pointer">
              <img
                src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                alt="User"
                className="w-10 h-10 rounded-full border border-purple-400"
              />

              <span className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 bg-purple-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {user?.displayName || "User"}
              </span>
            </div>

            <button
              onClick={handleLogout}
              className="btn bg-purple-700 hover:bg-purple-800 text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink
            to="/login"
            className="btn bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
