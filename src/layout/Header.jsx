import React, { useState } from "react";
import { GiCupcake } from "react-icons/gi";
import { Link } from "react-router-dom";
import padmaz from "../assets/padmaz.png";
import { ImCross } from "react-icons/im";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = () => {
  const [isSidebar, setisSidebar] = useState(false);
  return (
    <>
      <div className="fixed z-10">
        <button
          onClick={() => setisSidebar(true)}
          className="fixed cursor-pointer left-5 top-5"
        >
          <BiMenuAltLeft className="text-4xl font-bold" />
        </button>

        {/* --------------------sidebar------------------------  */}
        <div
          className={`min-h-screen bg-white transition-all py-10 duration-500 bg- ${
            isSidebar ? "translate-x-0" : "-translate-x-[300px]"
          } z-10 min-w-[300px] md:hidden top-0 left-0 relative`}
        >
          <button
            onClick={() => setisSidebar(false)}
            className="absolute right-5 top-5 cursor-pointer"
          >
            <ImCross className="text-2xl" />
          </button>

          <div className="flex flex-col justify-center items-center">
            <div>
              <img src={padmaz} className="w-[150px]" alt="padmaz logo" />
            </div>
            <div className="flex flex-col w-full justify-center items-center gap-y-8">
              <Link
                to={"/"}
                className="p-1 relative before:content-[''] before:absolute before:h-0.5 before:w-0 before:left-0 before:bg-red-500 before:bottom-0 before:transition-all duration-300 hover:before:w-full font-semibold  transition"
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className="p-1 relative before:content-[''] before:absolute before:h-0.5 before:w-0 before:left-0 before:bottom-0 before:bg-red-500 before:transition-all duration-300 hover:before:w-full font-semibold  transition"
              >
                About
              </Link>
              <Link
                to={"/contact-us"}
                className="p-1 relative before:content-[''] before:absolute before:h-0.5 before:w-0 before:left-0 before:bottom-0 before:bg-red-500 before:transition-all duration-300 hover:before:w-full font-semibold  transition"
              >
                Contact
              </Link>
              <Link to={"/products"}>
                <button className="hover:rounded-3xl cursor-pointer bg-[#bf2a28] rounded-lg transition-all duration-300 text-white px-6 py-3 font-bold hover:opacity-90">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* ------------------------top bar -------------------------------- */}
        <div className="fixed px-5 hidden md:block py-2.5 top-0 z-20 bg- w-full bg-white border-b border-b-gray-200 ">
          <div className="max-w-7xl mx-auto h-[70px] overflow-hidden flex items-center justify-between transition-all z-50 duration-300">
            <div>
              <img src={padmaz} className="w-[100px]" alt="padmaz logo" />
            </div>
            <nav className="flex items-center gap-8">
              <Link
                to={"/"}
                className="p-1 relative before:content-[''] before:absolute before:h-0.5 before:w-0 before:left-0 before:bg-red-500 before:bottom-0 before:transition-all duration-300 hover:before:w-full font-semibold  transition"
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className="p-1 relative before:content-[''] before:absolute before:h-0.5 before:w-0 before:left-0 before:bottom-0 before:bg-red-500 before:transition-all duration-300 hover:before:w-full font-semibold  transition"
              >
                About
              </Link>
              <Link
                to={"/contact-us"}
                className="p-1 relative before:content-[''] before:absolute before:h-0.5 before:w-0 before:left-0 before:bottom-0 before:bg-red-500 before:transition-all duration-300 hover:before:w-full font-semibold  transition"
              >
                Contact
              </Link>
              <Link to={"/products"}>
                <button className="hover:rounded-3xl cursor-pointer bg-[#bf2a28] rounded-lg transition-all duration-300 text-white px-6 py-3 font-bold hover:opacity-90">
                  Order Now
                </button>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
