import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <div className="flex items-center justify-between max-w-7xl p-3 mx-auto">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-4">
        <DarkMode />
        <Link href="/" className="flex items-center gap-1">
          <span className="px-1 py-2 text-2xl font-bold rounded-lg bg-amber-500">
            IMDb
          </span>
          <span className="hidden text-xl sm:inline">clone</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
