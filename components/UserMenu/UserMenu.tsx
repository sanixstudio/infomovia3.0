import Image from "next/image";
import React from "react";

const UserMenu = () => {
  return (
    <button className="active:border-primary rounded-full">
      <Image
        src="https://picsum.photos/id/55/100/100"
        width={40}
        height={40}
        alt="user menu"
        className="rounded-full hover:border-2 hover:border-primary "
      />
    </button>
  );
};

export default UserMenu;
