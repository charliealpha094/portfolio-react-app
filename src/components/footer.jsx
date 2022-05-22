import React from "react";

import logo from "./../accessories/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#ecf0f3] text-center flex items-center justify-center">
      <img
        src={logo}
        alt="Logo"
        style={{ width: "120px" }}
        className="py-4 px-3"
      />
      Carlos Amaral 2022
    </div>
  );
};

export default Footer;
