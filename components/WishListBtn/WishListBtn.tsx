import React from "react";
import { BiMessageSquareAdd } from "react-icons/bi";

const WishListBtn = () => {
  return (
    <div className="dropdown dropdown-end hidden sm:flex w-[200px] justify-center">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <BiMessageSquareAdd size={24} />
          <span className="badge badge-sm indicator-item bg-accent text-neutral">
            8
          </span>
        </div>
      </label>
    </div>
  );
};

export default WishListBtn;
