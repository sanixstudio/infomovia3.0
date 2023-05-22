import {
  HiddenNavbar,
  LoginModal,
  MainMenu,
  RegisterModal,
  Search,
  ToggleDarkMode,
  UserMenu,
  WishLishtBtn,
} from "@/components";
import React from "react";

const Header = () => {
  return (
    <>
      <RegisterModal />
      <LoginModal />
      <div className="bg-slate-950 dark:bg-slate-600">
        <div className="navbar max-w-[1440px] mx-auto my-0">
          <div className="navbar-start">
            <HiddenNavbar />
            <a
              href="/"
              className="text-2xl lg:text-3xl text-white bg-accent p-2 rounded font-bold uppercase"
            >
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
    </>
  );
};

export default Header;
