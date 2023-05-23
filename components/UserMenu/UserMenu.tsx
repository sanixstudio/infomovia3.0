"use client";
import Image from "next/image";
import React, { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

const UserMenu = () => {
  const [loginModalIsOpen, setLoginModalIsOPen] = useState(false);
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);

  const closeLoginModal = () => setLoginModalIsOPen(true);
  const closeRegisterModal = () => setRegisterModalIsOpen(false);

  const user = "";

  return (
    <>
      <div className="navbar-end">
        {user ? (
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full h-10 bg-slate-500">
                  <Image
                    src="https://picsum.photos/id/433/200/300"
                    width={26}
                    height={26}
                    alt=""
                  />
                </div>
              </label>
              <ul
                tabIndex={7}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-slate-700 border-2 border-accent"
              >
                <li tabIndex={0.1}>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li tabIndex={0.2}>
                  <a>Settings</a>
                </li>
                <li tabIndex={0.3}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex gap-2 ml-5">
            <button
              className="btn btn-sm btn-outline btn-accent"
              onClick={() => setLoginModalIsOPen(true)}
            >
              Login
            </button>
            <button
              className="btn btn-sm btn-outline btn-accent"
              onClick={() => setRegisterModalIsOpen(true)}
            >
              Register
            </button>
          </div>
        )}
      </div>
      <LoginModal
        loginModalIsOpen={loginModalIsOpen}
        closeLoginModal={closeLoginModal}
      />
      <RegisterModal
        registerModalIsOpen={registerModalIsOpen}
        closeRegisterModal={closeRegisterModal}
      />
    </>
  );
};

export default UserMenu;
