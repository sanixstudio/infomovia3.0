import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-950 dark:bg-slate-600 mt-auto">
      <div className="max-w-[1440px] rounded-xl p-1 mx-auto">
        <footer className="footer p-10 text-base-content">
          <div>
            <span className="footer-title">Movies</span>
            <a className="link link-hover">Currently Playing</a>
            <a className="link link-hover">Upcoming Movies</a>
            <a className="link link-hover">Top Movie</a>
            <a className="link link-hover">Trending</a>
          </div>
          <div>
            <span className="footer-title">TV Shows</span>
            <a className="link link-hover">Currently Playing</a>
            <a className="link link-hover">Upcoming</a>
            <a className="link link-hover">Top TV Shows</a>
            <a className="link link-hover">Trending</a>
          </div>
          <div>
            <span className="footer-title">Explore</span>
            <a className="link link-hover">Movie Genres</a>
            <a className="link link-hover">People</a>
            <a className="link link-hover">News</a>
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
