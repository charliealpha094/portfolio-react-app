import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

import logo from "../accessories/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#ecf0f3]">
      <div>
        <img src={logo} alt="Logo" style={{ width: "120px" }} />
      </div>

      {/* Desktop menu*/}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/*Hamburger mobile*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Mobile menu*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#fff] flex flex-col justify-center items-center"
        }
      >
        {" "}
        <li className="py-6 text-3xl">Home</li>
        <li className="py-6 text-3xl">About</li>
        <li className="py-6 text-3xl">Skills</li>
        <li className="py-6 text-3xl">Work</li>
        <li className="py-6 text-3xl">Contact</li>
      </ul>

      {/*Social icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
