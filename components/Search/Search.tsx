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
    const query = inputRef.current?.value.trim();
    query && setSearchQuery(query);
  };

  useEffect(() => {
    if (searchQuery !== "") {
      router.push(`/search/${searchQuery}`);
    }
  }, [router, searchQuery]);

  return (
    <div className="mt-5 md:mt-0 md:hidden lg:flex form-control">
      <form
        onSubmit={handleSubmit}
        className="flex relative w-fit items-center"
      >
        <input
          type="text"
          placeholder="Search"
          ref={inputRef}
          className="pl-5 bg-slate-500 focus:bg-slate-600 text-slate-300 placeholder-slate-400
          input input-bordered w-[400px] md:w-[250px] lg:w-[300px] rounded-full focus:border-3 focus:border-accent"
        />
        <button type="submit" className="absolute right-3">
          <AiOutlineSearch size={24} />
        </button>
      </form>
    </div>
  );
};

export default Search;
