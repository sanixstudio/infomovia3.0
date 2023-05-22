"use client";
import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const LoginModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your Login logic here
    console.log("Logging-in user...");
    console.log("Email:", email);
    console.log("Password:", password);
    handleModalClose();
  };

  return (
    <div>
      <button className=" px-4 py-2 rounded-lg" onClick={handleModalOpen}>
        Login
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-20 bg-slate-900 bg-opacity-90 backdrop-blur-lg">
          <form className="bg-slate-800 border relative border-slate-700 form rounded-lg shadow-lg w-full max-w-md flex flex-col gap-10 p-8">
            <IoIosCloseCircle
              size={32}
              className="absolute right-5 top-5 cursor-pointer hover:text-slate-500"
              onClick={() => setShowModal(false)}
            />
            <h1 className="text-4xl">User Login</h1>
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
            <div className="flex gap-3 justify-end">
              <button
                className="btn btn-outline"
                tabIndex={5}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-accent"
                tabIndex={6}
                onClick={() => setShowModal(false)}
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
