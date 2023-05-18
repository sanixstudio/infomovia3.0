import React from "react";

const Search = () => {
  return (
    <div className="w-full flex text-center hidden md:block form-control">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-[250px] lg:w-[300px] rounded-full"
      />
    </div>
  );
};

export default Search;
