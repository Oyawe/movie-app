import Link from "next/link";
import React from "react";

const MenuItem = ({ title, address, Icon }) => {
  return (
    <Link
      href={address}
      className="transition duration-300 ease-in hover:text-amber-500"
    >
      <Icon className="text-2xl sm:hidden" />
      <p className="hidden uppercase sm:inline">{title}</p>
    </Link>
  );
};

export default MenuItem;
