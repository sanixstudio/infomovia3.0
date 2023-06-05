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

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Add your Login logic here

    closeLoginModal();
  };

  return (
    <div>
      {loginModalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-20 bg-slate-900 bg-opacity-95 backdrop-blur-xl">
          <form className="bg-gradient-to-l mx-4 from-slate-700 to-slate-800 border relative border-slate-700 form rounded-lg shadow-2xl w-full max-w-md flex flex-col gap-5 p-8">
            <button onClick={() => closeLoginModal}>
              <IoIosCloseCircle
                size={32}
                className="absolute right-5 top-5 cursor-pointer hover:text-slate-500"
              />
            </button>
            <h1 className="text-4xl">Login</h1>
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
            <div className="flex gap-3 justify-between">
              <button
                className="btn btn-outline flex-1"
                tabIndex={5}
                onClick={() => closeLoginModal}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
