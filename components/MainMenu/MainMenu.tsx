import React from "react";

const MainMenu = () => {
  return (
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
  );
};

export default MainMenu;
