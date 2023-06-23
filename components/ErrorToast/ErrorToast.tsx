"use client";
import { Toast } from "flowbite-react";
import React from "react";
import { HiX } from "react-icons/hi";

const ErrorToast = ({ message }: { message: string }) => {
  return (
    <Toast className="bg-slate-400">
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
        <HiX className="h-5 w-5" />
      </div>
      <div className="ml-3 text-sm text-slate-800 font-semibold">{message}</div>
      <Toast.Toggle />
    </Toast>
  );
};

export default ErrorToast;
