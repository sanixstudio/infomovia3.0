import { signIn, useSession } from "next-auth/react";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { data: session } = useSession();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value;

    if (!email) {
      setErrorMessage("Please enter your email.");
      return;
    }

    try {
      await signIn("email", { email, callbackUrl: "/profile" });
      router.push("/profile");
    } catch (error) {
      setErrorMessage("An error occurred while signing up: " + error);
    }
  };
}
