"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Button } from "flowbite-react";

const UserMenu = () => {
  const session = useSession();
  return (
    <>
      <div className="hidden sm:block md:flex relative items-center ease-in duration-300">
        {session.data?.user ? (
          <div className="flex-none">
            <div className="">
              <label tabIndex={0} className="">
                <div className="w-8 h-8 rounded-full bg-slate-500">
                  <Image
                    src={
                      session.data.user?.image
                        ? session.data.user?.image
                        : "/images/user.png"
                    }
                    width={24}
                    height={24}
                    alt="user"
                  />
                </div>
              </label>
              <ul
                tabIndex={7}
                className="mt-3 p-2 shadow rounded-box bg-slate-700 border-2 border-accent absolute z-10 right-0"
              >
                <li tabIndex={0.3}>
                  <Button gradientMonochrome="cyan" onClick={() => signOut()}>
                    Logout
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex gap-2 ml-5">
            <Button gradientMonochrome="teal" className="bg-cyan-600">
              <Link href={"/signin"}>Login</Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default UserMenu;
