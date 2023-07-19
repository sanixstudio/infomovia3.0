"use client";

import { Search } from "@/components";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: "bg-red-500 hover:bg-red-600",
    },
  },
};

export default function NavbarWithDropdown() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <div className="w-full flex justify-between bg-slate-800">
      <Navbar className="w-full max-w-[1440px] mx-auto bg-transparent">
        <Navbar.Brand href="/">
          <Image
            width={200}
            height={100}
            alt="Flowbite React Logo"
            className="object-contain mr-3"
            src="/images/im_logo.png"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          {user ? (
            <Dropdown
              inline
              label={
                <Avatar
                  alt="User settings"
                  img={user?.image as string}
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Watchlist</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => signOut()}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Button gradientMonochrome="teal" pill className="bg-cyan-600">
              <Link href={"/signin"}>Login</Link>
            </Button>
          )}
          <Navbar.Toggle className="px-2 border-0 ml-3 hover:bg-slate-700 active:border-0" />
        </div>
        <Navbar.Collapse className="w-full py-5 md:py-0 pb-10">
          <div className="w-full px-5 md:flex md:items-center gap-10">
            <Navbar.Link
              href="/"
              className="text-white hover:bg-slate-500 border-0 pl-0"
            >
              <p>Home</p>
            </Navbar.Link>
            <div className="my-5 md:my-0">
              <Dropdown
                inline
                label="Genre"
                className="bg-slate-700 border-0 px-1 rounded-md"
              >
                <div className="grid grid-cols-2 bg-slate-700">
                  <Dropdown.Item className="text-white hover:bg-slate-800 focus:bg-slate-800">
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item className="text-white hover:bg-slate-800 focus:bg-slate-800">
                    Adventure
                  </Dropdown.Item>
                  <Dropdown.Item className="text-white hover:bg-slate-800 focus:bg-slate-800">
                    Animation
                  </Dropdown.Item>
                  <Dropdown.Item className="text-white hover:bg-slate-800 focus:bg-slate-800">
                    Biography
                  </Dropdown.Item>
                  <Dropdown.Item className="text-white hover:bg-slate-800 focus:bg-slate-800">
                    Comedy
                  </Dropdown.Item>
                  <Dropdown.Item className="text-white hover:bg-slate-800 focus:bg-slate-800">
                    Family
                  </Dropdown.Item>
                  <Dropdown.Item className="text-white hover:bg-slate-800 focus:bg-slate-800">
                    Horror
                  </Dropdown.Item>
                  <Dropdown.Item className="text-white hover:bg-slate-800 focus:bg-slate-800">
                    Thriller
                  </Dropdown.Item>
                  <Dropdown.Item className="text-white hover:bg-slate-800 focus:bg-slate-800">
                    Sports
                  </Dropdown.Item>
                </div>
              </Dropdown>
            </div>
            <Dropdown
              inline
              label="Explore"
              className="bg-slate-700 border-0 px-1 rounded-md"
            >
              <Dropdown.Item className="text-white hover:bg-slate-800 focus:bg-slate-800">
                Movies
              </Dropdown.Item>
              <Dropdown.Item className="text-white hover:bg-slate-800 focus:bg-slate-800">
                TV Shows
              </Dropdown.Item>
              <Dropdown.Item className="text-white hover:bg-slate-800 focus:bg-slate-800">
                Celebrities
              </Dropdown.Item>
            </Dropdown>
            <Search />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
