"use client";
import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

type RegisterProps = {
  registerModalIsOpen: boolean;
  closeRegisterModal: () => void;
};

const RegisterModal = ({
  registerModalIsOpen,
  closeRegisterModal,
}: RegisterProps) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your register logic here
  //   console.log("Registering user...");
  //   console.log("Email:", email);
  //   console.log("Password:", password);
  //   closeRegisterModal();
  // };

  return (
    <div>
      {registerModalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-20 bg-slate-900 bg-opacity-90 backdrop-blur-xl">
          <form className="bg-gradient-to-l mx-4 from-slate-700 to-slate-800 border relative border-slate-700 form rounded-lg shadow-lg w-full max-w-md flex flex-col gap-5 p-8">
            <IoIosCloseCircle
              size={32}
              className="absolute right-5 top-5 cursor-pointer hover:text-slate-500"
              onClick={() => closeRegisterModal()}
            />
            <h1 className="text-4xl">Register</h1>
            <div className="flex flex-col">
              <label htmlFor="">Username</label>
              <input
                type="text"
                id=""
                name="username"
                value={username}
                placeholder="Username"
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
                placeholder="Confirm Password"
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 rounded-md"
                tabIndex={4}
              />
            </div>
            <div className="flex gap-3 justify-between">
              <button
                className="btn btn-accent flex-1"
                tabIndex={6}
                onClick={() => console.log("submitting...")}
              >
                Register
              </button>
              <button
                className="btn btn-outline flex-1"
                tabIndex={5}
                onClick={() => closeRegisterModal()}
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

export default RegisterModal;
