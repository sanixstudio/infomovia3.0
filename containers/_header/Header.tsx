import {
  HiddenNavbar,
  MainMenu,
  Search,
  ToggleDarkMode,
  UserMenu,
  WishLishtBtn,
} from "@/components";
import React from "react";

const Header = () => {
  return (
    <div className="bg-slate-800 dark:bg-slate-600">
      <div className="navbar max-w-[1440px] mx-auto my-0">
        <div className="navbar-start">
          <HiddenNavbar />
          <a href="/" className="text-3xl text-accent font-bold uppercase">
            InfoMovia
          </a>
        </div>
        <MainMenu />
        <Search />
        <div className="w-[200px] flex justify-center ">
          <ToggleDarkMode />
        </div>
        <WishLishtBtn />
        <UserMenu />
      </div>
    </div>
  );
};

export default Header;
