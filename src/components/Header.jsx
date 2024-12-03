import React from "react";
import logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
  return (
    <header id="header" className=" h-20 bg-[#232536]">
      <nav className="nabar container flex justify-between items-center h-full">
        <div className="logo h-full flex flex-col justify-center items-center">
          <img src={logo} alt="Logo header" />
        </div>
        <ul className="text-slate-300 flex gap-8 items-center justify-center h-full">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/service"}>Service</NavLink>
          <NavLink to={"/company"}>Company</NavLink>
          <NavLink to={"/career"}>Career</NavLink>
          <NavLink to={"/blog"}>Blog</NavLink>
          <NavLink to={"/contact-us"}>Contact us</NavLink>
          <div className="relative mr-8">
            <FaArrowRightLong className="absolute top-[5px] left-[104px]" />
            <NavLink to={"/clone-project"}>Clone project </NavLink>
          </div>

          <NavLink className={'py-2 px-8 rounded-lg bg-blue-500 shadow-lg hover:opacity-80'} to={'/login'}>Login </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
