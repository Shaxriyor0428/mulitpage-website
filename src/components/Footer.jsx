import React from "react";
import { NavLink } from "react-router-dom";
import footerLogo from "../assets/footer-logo.png";
import footerContent from "../assets/footer-content.png";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full mt-16">
      <div className="container flex gap-16 relative">
        <div className="flex flex-col gap-3 mr-[10px]">
          <h1 className="#232536 font-semibold text-5xl leading-[58px] text-[#232536] mb-7 w-[70%]">
            Let's make something special
          </h1>
          <p className="font-semibold text-2xl leading-9 text-[#232536] mb-5">
            Let's talk! 🤙
          </p>
          <p>020 7993 2905</p>
          <p> hi@finsweet.com</p>
          <p>
            DLF Cybercity, Bhubaneswar. <br /> India, &52050
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <NavLink className="text-[#232536] font-semibold text-xl" to={"/"}>
            Home
          </NavLink>
          <NavLink to={"/service"}>Service</NavLink>
          <NavLink to={"/company"}>Company</NavLink>
          <NavLink to={"/news"}>News</NavLink>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[#232536] font-semibold text-xl">Service</p>
          <p>Technical support</p>
          <p>Development</p>
          <p>AWS/Azure </p>
          <p>Consulting</p>
          <p>Information Technology</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[#232536] font-semibold text-xl">Resourses</p>
          <p>About us</p>
          <p>Testimanial</p>
          <p>Privacy Policy</p>
          <p>Terms of use</p>
          <p>Blog</p>
        </div>
        <p className="absolute bottom-0 right-0">
          <img src={footerContent} alt="" />
        </p>
      </div>
      <div className="w-full bg-[#FFE6D2] mt-[60px] h-[80px]">
        <div className="container h-full flex justify-between items-center">
          <div className="logo flex gap-8">
            <div>
              <img src={footerLogo} alt="footer logo" />
            </div>
            <p className="font-medium">©2021 Finsweet</p>
          </div>
          <div className="icons flex gap-7">
            <FaFacebook className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
