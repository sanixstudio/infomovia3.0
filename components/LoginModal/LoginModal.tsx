"use client";
import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

type LoginProps = {
  loginModalIsOpen: boolean;
  closeLoginModal: () => void;
};

const LoginModal = ({ loginModalIsOpen, closeLoginModal }: LoginProps) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your Login logic here
  //   console.log("Logining user...");
  //   console.log("Email:", email);
  //   console.log("Password:", password);
  //   closeLoginModal();
  // };

  return (
    <div>
      {loginModalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-20 bg-slate-900 bg-opacity-90 backdrop-blur-lg">
          <form className="bg-slate-800 border relative border-slate-700 form rounded-lg shadow-lg w-full max-w-md flex flex-col gap-10 p-8">
            <IoIosCloseCircle
              size={32}
              className="absolute right-5 top-5 cursor-pointer hover:text-slate-500"
              onClick={() => closeLoginModal()}
            />
            <h1 className="text-4xl">Login</h1>
            <div className="flex flex-col">
              <label htmlFor="">Username</label>
              <input
                type="text"
                id=""
                name="username"
                value={username}
                placeholder="Your Name"
                onChange={(e) => setUsername(e.target.value)}
                className="p-3 rounded-md"
                tabIndex={1}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Email</label>
              <input
                type="email"
                id=""
                name="email"
                value={email}
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-md"
                tabIndex={2}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Password</label>
              <input
                type="password"
                id=""
                name="password"
                value={password}
                placeholder="Your Password"
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 rounded-md"
                tabIndex={3}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Confirm Password</label>
              <input
                type="password"
                id=""
                name="confirm-password"
                value={password}
                placeholder="Your Password"
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 rounded-md"
                tabIndex={4}
              />
            </div>
            <div className="flex gap-3 justify-end">
              <button
                className="btn btn-outline"
                tabIndex={5}
                onClick={() => closeLoginModal()}
              >
                Cancel
              </button>
              <button
                className="btn btn-accent"
                tabIndex={6}
                onClick={() => console.log("submitting...")}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
