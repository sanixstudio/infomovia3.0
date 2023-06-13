import {
  Search,
  UserMenu,
  MainMenu,
  WishListBtn,
  HiddenNavbar,
} from "@/components";
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
  return (
    <div className="bg-slate-950 py-2">
      <div className="navbar max-w-[1440px] flex justify-between mx-auto my-0">
        <HiddenNavbar />
        <Logo />
        <MainMenu />
        <Search />
        <WishListBtn />
        <UserMenu />
      </div>
    </div>
  );
};

export default Header;
