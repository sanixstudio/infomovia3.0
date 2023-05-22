import Image from "next/image";
import React from "react";

const UserMenu = () => {
  return (
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
            tabIndex={7}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-slate-700 border-2 border-accent"
          >
            <li tabIndex={0.1}>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li tabIndex={0.2}>
              <a>Settings</a>
            </li>
            <li tabIndex={0.3}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
