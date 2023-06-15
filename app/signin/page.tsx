"use client";
import { signIn, useSession } from "next-auth/react";
import React, { useRef, useState } from "react";
import Link from "next/link";

export default function Page() {
  const { data: session } = useSession();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setErrorMessage(result.error);
      }
    } catch (error) {
      setErrorMessage("An error occurred while signing in.");
    }
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto h-screen bg-slate-900">
      <div className="h-full flex-col flex justify-center items-center p-4">
        <h1 className="text-4xl font-bold mb-8">Sign In</h1>
        <form
          onSubmit={handleSubmit}
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
              className="rounded-full bg-slate-900 px-4"
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
              placeholder="Enter your Password"
              id="password"
              className="rounded-full bg-slate-900 px-4"
              required
            />
          </div>
          {errorMessage && <p>{errorMessage}</p>}
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
          {!session && (
            <div className="text-sm flex gap-2 justify-center mt-4">
              <p>Don&apos;t have an account?</p>
              <Link href="/singup" className="text-accent">
                Sign-Up here
              </Link>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
