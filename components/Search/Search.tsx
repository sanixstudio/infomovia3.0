"use client";
import { useRouter } from "next/navigation";
import React, { useRef, useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current !== null) {
      setSearchQuery(inputRef.current.value);
    }
  };

  useEffect(() => {
    if (searchQuery !== "") {
      router.push(`/search/${searchQuery}`);
    }
  }, [router, searchQuery]);

  return (
    <div className="w-full hidden md:flex form-control">
      <form
        onSubmit={handleSubmit}
        className="flex relative w-fit items-center"
      >
        <input
          type="text"
          placeholder="Search"
          ref={inputRef}
          className=" text-slate-300
          input input-bordered w-[250px] lg:w-[300px] rounded-full focus:border-3 focus:border-accent"
        />
        <button type="submit" className="absolute right-3">
          <AiOutlineSearch size={24} />
        </button>
      </form>
    </div>
  );
};

export default Search;
