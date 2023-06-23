"use client";
import { Toast } from "flowbite-react";
import React from "react";
import { HiCheck } from "react-icons/hi";

const SuccessToast = ({ message }: { message: string }) => {
  return (
    <Toast className="bg-slate-400">
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
        <HiCheck className="h-5 w-5" />
      </div>
      <div className="ml-3 text-sm text-slate-800 font-semibold">{message}</div>
      <Toast.Toggle />
    </Toast>
  );
};

export default SuccessToast;
