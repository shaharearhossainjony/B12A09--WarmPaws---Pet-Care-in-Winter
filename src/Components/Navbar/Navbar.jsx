import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  to={"/"}
                  className="bg-gradient-to-r font-bold from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/services"}
                  className="bg-gradient-to-r font-bold  from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to={"/profile"}
                  className="bg-gradient-to-r font-bold  from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost font-bold text-xl bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent">
            WarmPaws
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                to={"/"}
                className="bg-gradient-to-r font-bold  from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/services"}
                className="bg-gradient-to-r font-bold  from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to={"/profile"}
                className="bg-gradient-to-r font-bold  from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent"
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to={"/login"}
            className="btn bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent"
          >
            Login
          </Link>
        </div>
      </div>
    );
};

export default Navbar;