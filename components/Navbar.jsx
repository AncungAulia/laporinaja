import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LogOut } from "lucide-react";
import Logo from "../src/assets/logo.png";

const Navbar = () => {
  const location = useLocation();

  // Function to check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white z-40 shadow-lg flex items-center justify-center py-3 px-10 fixed top-6 left-1/2 transform -translate-x-1/2 w-auto rounded-full min-w-[80%] max-h-16">
      <div className="flex items-center justify-between w-full max-w-6xl">
        <div className="">
          <img src={Logo} alt="Logo" className="w-36 h-auto ml-[-80%]" />
        </div>
        <div className="flex items-center gap-8 mr-[-10%]">
          <Link
            to={"/lapor"}
            className={`relative text-base font-medium text-[#004B87]
                            after:block after:absolute after:left-0 after:bottom-0
                            after:h-[2px] after:bg-[#FFBD4D] after:transition-all after:ease-in
                            ${
                              isActive("/lapor")
                                ? "after:w-full"
                                : "after:w-0 hover:after:w-full"
                            }`}
          >
            Lapor
          </Link>
          <Link
            to={"/upvote"}
            className={`relative text-base font-medium text-[#004B87]
                            after:block after:absolute after:left-0 after:bottom-0
                            after:h-[2px] after:bg-[#FFBD4D] after:transition-all after:ease-in
                            ${
                              isActive("/upvote")
                                ? "after:w-full"
                                : "after:w-0 hover:after:w-full"
                            }`}
          >
            Upvote
          </Link>
          <Link
            to={"/lacak"}
            className={`relative text-base font-medium text-[#004B87]
                            after:block after:absolute after:left-0 after:bottom-0
                            after:h-[2px] after:bg-[#FFBD4D] after:transition-all after:ease-in
                            ${
                              isActive("/lacak")
                                ? "after:w-full"
                                : "after:w-0 hover:after:w-full"
                            }`}
          >
            Lacak
          </Link>
          <Link
            to={"/"}
            className="relative flex items-center py-1 transition duration-300
                            after:block after:absolute after:left-0 after:bottom-0
                            after:h-[2px] after:w-0 after:bg-[#FFBD4D] after:transition-all after:ease-in
                            hover:after:w-full"
          >
            <LogOut className="inline mr-2 text-[#870000]" />
            <p className="text-base font-medium text-[#004B87]">Logout</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
