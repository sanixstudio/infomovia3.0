"use client";
import React from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

const UserMenu = () => {
  const { data: session } = useSession();
  return (
    <>
      <div className="hidden sm:block">
        {session?.user ? (
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full h-10 bg-slate-500">
                  <Image
                    src={session?.user?.image ?? ""}
                    width={26}
                    height={26}
                    alt=""
                  />
                </div>
              </label>
              <ul
                tabIndex={7}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-slate-700 border-2 border-accent"
              >
                <li tabIndex={0.3}>
                  <button onClick={() => signOut()}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex gap-2 ml-5">
            <button
              className="btn btn-sm btn-outline btn-accent"
              onClick={() => signIn()}
            >
              Login
            </button>
            {/* <button
              className="btn btn-sm btn-outline btn-accent"
              onClick={() => signOut()}
            >
              Register
            </button> */}
          </div>
        )}
      </div>
    </>
  );
};

export default UserMenu;
