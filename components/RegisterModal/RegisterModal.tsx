"use client";
import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const RegisterModal = () => {
  const [showModal, setShowModal] = useState(false);
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
    // Add your register logic here
    console.log("Registering user...");
    console.log("Email:", email);
    console.log("Password:", password);
    handleModalClose();
  };

  return (
    <div>
      <button
        className=" px-4 py-2 rounded-lg"
        onClick={handleModalOpen}
      >
        Register
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-20 bg-slate-900 bg-opacity-90 backdrop-blur-lg">
          <div className="bg-neutral px-6 py-8 w-full mx-4 max-w-[600px] rounded-lg relative shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={handleModalClose}
            >
              <IoIosCloseCircle className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
                  onClick={handleModalClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-accent text-white px-4 py-2 rounded-lg"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterModal;
