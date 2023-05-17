import { UserMenu } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full flex border border-primary p-4">
      <Link href={"/"} className="flex border items-center gap-5">
        <Image
          src="https://picsum.photos/id/237/200/200"
          alt="logo"
          width={100}
          height={100}
          className="h-12 w-12 rounded-full"
        />
        <h2>Logo</h2>
      </Link>
      <div className="flex gap-3">
        <a href="#">Home</a>
        <a href="#">Gallery</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <UserMenu />
    </div>
  );
};

export default Header;
