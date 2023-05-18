import { ToggleDarkMode } from "@/components";
import Image from "next/image";
import React from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-slate-800 dark:bg-slate-600">
      <div className="navbar max-w-[1440px] mx-auto my-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-slate-800 min-w-fit"
            >
              <li>
                <a>Home</a>
              </li>
              <li tabIndex={0}>
                <a>
                  Genre
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-slate-800">
                  <li>
                    <a>Action</a>
                  </li>
                  <li>
                    <a>Animation </a>
                  </li>
                  <li>
                    <a>Comedy</a>
                  </li>
                  <li>
                    <a>Horror</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
              <li>
                <div className="md:hidden form-control">
                  <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered rounded-full"
                  />
                </div>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">InfoMovia 3.0</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <a>
                Genre
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-slate-800">
                <li>
                  <a>Action</a>
                </li>
                <li>
                  <a>Animation </a>
                </li>
                <li>
                  <a>Comedy</a>
                </li>
                <li>
                  <a>Horror</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="w-full flex text-center hidden md:block form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-[250px] lg:w-[300px] rounded-full"
          />
        </div>
        {/* Toggle Dark mode */}
        <div className="w-[200px] flex justify-center ">
          <ToggleDarkMode />
        </div>
        {/* Favorite List */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <BiMessageSquareAdd size={24} />
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
        </div>
        {/* User Menu */}
        <div className="navbar-end">
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full h-10 bg-slate-500">
                  <Image src="/images/user.png" width={26} height={26} alt="" />
                  {/* <Image
                    width={26}
                    height={26}
                    src=""
                    alt="gender-neutral-user"
                  /> */}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-slate-800"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
