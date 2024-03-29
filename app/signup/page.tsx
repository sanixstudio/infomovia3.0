"use client";
import React, { FormEventHandler, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { Button } from "flowbite-react";

export default function Page() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const session = useSession();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const email = emailRef.current?.value.trim();
    const password = passwordRef.current?.value.trim();
    const confirmPassword = confirmPasswordRef.current?.value.trim();

    if (!email || !password || !confirmPassword) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch("/api/user/register", {
        method: "POST",
        body: JSON.stringify({ email, password, confirmPassword }),
        headers: { "Content-Type": "application/json" },
      });

      const user = await res.json();

      console.log(user);

      if (!user) {
        setErrorMessage("Error: Something went wrong");
      }

      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setErrorMessage(result.error);
      } else {
        setErrorMessage("");
        router.push("/filter");
      }
    } catch (err) {
      setErrorMessage("Check your credentials");
    }
  };

  if (session.status === "authenticated") router.push("/");

  return (
    <div className="w-full max-w-[1440px] mx-auto h-screen bg-slate-900">
      <div className="h-full flex-col flex justify-center items-center p-4">
        <h1 className="text-4xl font-bold mb-8">Sign In</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full relative flex flex-col gap-6 max-w-md"
        >
          <label className="ml-3 -mb-4" htmlFor="email">
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
          <label className="ml-3 -mb-4" htmlFor="password">
            Password
          </label>
          <input
            ref={passwordRef}
            type="password"
            name="password"
            placeholder="Enter your Password"
            id="password"
            className="py-3 rounded-full bg-slate-900 px-4"
            required
          />
          <label className="ml-3 -mb-4" htmlFor="confirm-password">
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
          {errorMessage && <p className="text-red-400">{errorMessage}</p>}
          <div className="w-full flex justify-end gap-4 mt-4">
            <Button
              gradientMonochrome="teal"
              pill
              outline
              className="bg-cyan-600"
            >
              <Link href={"/"}>Cancel</Link>
            </Button>
            <Button
              type="submit"
              gradientMonochrome="teal"
              pill
              className="bg-cyan-600"
            >
              Register
            </Button>
          </div>
          <div className="text-sm flex gap-2 justify-center mt-4">
            <p>Already have have an account?</p>
            <Link href="/signin" className="text-accent">
              Sign-In here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
