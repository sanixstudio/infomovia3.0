"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const UserMenu = () => {
  const user = null

  return (
    <>
      <div className="hidden sm:block ease-in duration-300">
        {user ? (
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-8 h-8 rounded-full bg-slate-500">
                  <Image
                    src={user?.image ? user?.image : "/images/user.png"}
                    width={24}
                    height={24}
                    alt="user"
                  />
                </div>
              </label>
              <ul
                tabIndex={7}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-slate-700 border-2 border-accent"
              >
                <li tabIndex={0.3}>
                  <button onClick={() => console.log("logging out...")}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex gap-2 ml-5">
            {/* <button
              className="btn btn-sm btn-outline btn-accent"
              onClick={() => router.push('/signin')}            >
              Login
            </button> */}
            <Link
              href={"/signin"}
              className="btn btn-accent btn-outline btn-sm"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default UserMenu;
