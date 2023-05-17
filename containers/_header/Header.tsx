import { UserMenu } from "@/components";
import React from "react";

const Header = () => {
  return (
    <div className="w-full flex border">
      <h2 className="">Logo</h2>
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
