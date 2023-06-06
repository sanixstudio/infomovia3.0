import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-950 dark:bg-slate-600 mt-auto">
      <div className="max-w-[1440px] rounded-xl p-1 mx-auto">
        <footer className="footer p-10 text-base-content">
          <div>
            <span className="footer-title">Movies</span>
            <Link href="/filter" className="link link-hover">
              Search Movies with filters (upcoming)
            </Link>
            <Link href="/movies" className="link link-hover">
              Explore Categories
            </Link>
          </div>
          <div>
            <span className="footer-title">TV Shows</span>
            <Link href="tvshows" className="link link-hover">
              Explore TV Shows
            </Link>
          </div>
          <div>
            <span className="footer-title">Explore</span>
            <Link href="/people" className="link link-hover">
              People
            </Link>
          </div>
        </footer>
        <footer className="footer px-10 py-4 text-base-content">
          <div className="items-center grid-flow-col">
            <Image
              src="/images/adi.png"
              width={50}
              height={50}
              alt="purrgramer logo"
              className="bg-slate-600  rounded-lg"
            />
            <p>
              &copy;Purrgramer 2023 <br />
              Created by Adnan Niaz
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
