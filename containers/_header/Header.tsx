import {
  Search,
  UserMenu,
  MainMenu,
  WishListBtn,
  HiddenNavbar,
  ToggleDarkMode,
} from "@/components";
import { useAppContext } from "@/context/appContext";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="mr-8">
      <Image
        src="/images/im_logo.png"
        width={400}
        height={100}
        alt="infomovia  logo"
        className="hidden sm:block max-w-[200px] md:max-w-full"
      />
      <Image
        src="/images/im_icon.png"
        width={40}
        height={40}
        alt="infomovia logo"
        className="sm:hidden max-w-[200px] md:max-w-full"
      />
    </Link>
  );
};

const Header = () => {
  const { darkMode } = useAppContext();
  return (
    <div className={`${darkMode ? "bg-slate-900 border-b border-slate-800" : "bg-slate-100"} py-2`}>
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
  );
};

export default Header;
