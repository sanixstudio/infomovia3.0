import {
  Search,
  UserMenu,
  MainMenu,
  WishListBtn,
  HiddenNavbar,
  ToggleDarkMode,
} from "@/components";

const Logo = () => {
  return (
    <a
      href="/"
      className="text-xl sm:text-2xl lg:text-3xl text-white bg-accent p-2 rounded font-bold uppercase"
    >
      InfoMovia
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
