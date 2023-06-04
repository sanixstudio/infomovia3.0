import {
  Search,
  UserMenu,
  MainMenu,
  WishListBtn,
  HiddenNavbar,
  ToggleDarkMode,
} from "@/components";
import Image from "next/image";

const Logo = () => {
  return (
    <a
      href="/"
      // className="text-xl sm:text-2xl lg:text-3xl text-white bg-accent p-2 rounded font-bold uppercase"
      className="mr-8"
    >
      {/* InfoMovia */}
      <Image
        src="/images/im_logo.png"
        width={400}
        height={100}
        alt=""
        className="max-w-[200px] md:max-w-full"
      />
    </a>
  );
};

const Header = () => {
  return (
    <>
      <div className="bg-slate-950 dark:bg-slate-600 py-2">
        <div className="navbar max-w-[1440px] flex justify-between mx-auto my-0">
          <HiddenNavbar />
          <Logo />
          <MainMenu />
          <Search />
          <ToggleDarkMode />
          <WishListBtn />
          <UserMenu />
        </div>
      </div>
    </>
  );
};

export default Header;
