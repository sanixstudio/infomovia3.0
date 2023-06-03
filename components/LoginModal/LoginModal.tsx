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
    <>
      {loginModalIsOpen ? (
        <div className="fixed inset-0 flex items-center justify-center z-20 bg-slate-900 bg-opacity-90 backdrop-blur-lg">
          <div className="flex flex-col gap-2">
            <h1>Login</h1>
            <input className="p-2" type="email" />
            <input className="p-2" type="password" />
            <div className="flex justify-between">
              <button type="submit" onClick={() => closeLoginModal()}>
                Cancel
              </button>
              <button type="submit" onClick={() => closeLoginModal()}>
                Submit
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default LoginModal;

// {loginModalIsOpen ? (
//   <div className="fixed inset-0 flex items-center justify-center z-20 bg-slate-900 bg-opacity-90 backdrop-blur-lg">
//     <form className="bg-slate-800 border relative border-slate-700 form rounded-lg shadow-lg w-full max-w-md flex flex-col gap-10 p-8">
//       <button className="btn btn-circle btn-sm btn-ghost w-[32px] absolute right-2 top-2 cursor-pointer">
//         <IoIosCloseCircle size={32} onClick={() => closeLoginModal()} />
//       </button>
//       <h1 className="text-4xl">Login</h1>
//       <div className="flex flex-col">
//         <label htmlFor="">Email</label>
//         <input
//           type="email"
//           id=""
//           name="email"
//           value={email}
//           placeholder="Your Email"
//           onChange={(e) => setEmail(e.target.value)}
//           className="p-3 rounded-md"
//           tabIndex={2}
//         />
//       </div>
//       <div className="flex flex-col">
//         <label htmlFor="">Password</label>
//         <input
//           type="password"
//           id=""
//           name="password"
//           value={password}
//           placeholder="Your Password"
//           onChange={(e) => setPassword(e.target.value)}
//           className="p-3 rounded-md"
//           tabIndex={3}
//         />
//       </div>
//       <div className="flex gap-3 flex-col justify-end">
//         <button
//           className="btn btn-accent w-full"
//           tabIndex={6}
//           onClick={() => console.log("submitting...")}
//         >
//           Login
//         </button>
//         <button
//           className="btn btn-outline w-full"
//           tabIndex={5}
//           onClick={() => closeLoginModal()}
//         >
//           Cancel
//         </button>
//       </div>
//       <div className="text-center">
//         <p>
//           Have no account?{" "}
//           <a href="#" className="link font-bold">
//             Register here
//           </a>
//         </p>
//       </div>
//     </form>
//   </div>
// ) : null}
