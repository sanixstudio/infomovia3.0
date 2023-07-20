import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 dark:bg-slate-600 mt-auto">
      <div className="max-w-[1440px] rounded-xl p-1 mx-auto">
        <div className="p-10 text-base-content flex items-center md:items-start md:justify-between flex-wrap gap-10 flex-col sm:flex-row md:gap-0">
          <div className="flex flex-col items-center sm:items-start">
            <span className="font-bold text-2xl mb-5">Movies</span>
            <Link href="/movies" className="link link-hover">
              Explore Categories
            </Link>
            <Link href="/filter" className="link link-hover">
              Search Movies with filters (upcoming)
            </Link>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl mb-5">TV Shows</span>
            <Link href="tvshows" className="link link-hover">
              Explore TV Shows
            </Link>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl mb-5">People</span>
            <Link href="/people" className="link link-hover">
              Celebrities
            </Link>
          </div>
        </div>
        <div className="px-10 py-4 text-base-content">
          <div className="flex flex-col items-center">
            <Image
              src="/images/adi.png"
              width={50}
              height={50}
              alt="purrgramer logo"
              className="bg-slate-600  rounded-lg"
            />
            <p className="text-xs text-center text-slate-400 mt-2">
              &copy;SanixStudio 2023
              <br />
              By Adnan Niaz
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
