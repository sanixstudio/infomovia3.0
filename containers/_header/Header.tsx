import { MainMenu, UserMenu } from "@/components";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between px-4 py-3 border-b border-secondary-button">
      <Link href={"/"} className="flex items-center gap-5">
        <Image src="/images/logo.png" alt="logo" width={200} height={100} />
        {/* <h2 className="">Logo</h2> */}
      </Link>
      <div>
        <RxHamburgerMenu />
        <MainMenu />
      </div>
      <UserMenu />
    </div>
  );
};

export default Header;
