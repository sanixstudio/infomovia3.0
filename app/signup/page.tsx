"use client";
import React, { FormEventHandler, useState } from "react";
import Link from "next/link";
import useMediaData from "@/hooks/useFetchMovies";

export default function Page() {
  const emailRef = React.useRef<HTMLInputElement | null>(null);
  const passwordRef = React.useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = React.useRef<HTMLInputElement | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { data, isLoading, error } = useMediaData(
        "registerUser",
        "/api/user/create"
      );
    } catch (err) {
      setErrorMessage("Invalid email or password: " + err);
    }
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto h-screen bg-slate-900">
      <div className="h-full flex-col flex justify-center items-center p-4">
        <h1 className="text-4xl font-bold mb-8">Sign In</h1>
        <form
          onSubmit={() => handleSubmit}
          className="w-full relative flex flex-col gap-6 max-w-md"
        >
          <div className="flex flex-col gap-2">
            <label className="ml-3" htmlFor="email">
              Email
            </label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              className="py-3 rounded-full bg-slate-900 px-4"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="ml-3" htmlFor="password">
              Password
            </label>
            <input
              ref={passwordRef}
              type="password"
              name="password"
              placeholder="Enter your password"
              id="password"
              className="py-3 rounded-full bg-slate-900 px-4"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="ml-3" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              ref={confirmPasswordRef}
              type="password"
              name="confirm-password"
              placeholder="Re-enter your password"
              id="confirm-password"
              className="py-3 rounded-full bg-slate-900 px-4"
              required
            />
          </div>
          <div>{errorMessage && <p>{errorMessage}</p>}</div>
          <div className="w-full flex justify-end gap-4">
            <Link
              href={"/"}
              className="btn btn-accent btn-outline rounded-full"
            >
              Cancel
            </Link>
            <button type="submit" className="btn btn-accent rounded-full">
              Sign Up
            </button>
          </div>
          <div className="text-sm flex gap-2 justify-center mt-4">
            <p>Already have an account?</p>
            <Link href="/signin" className="text-accent">
              Sign-In here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
