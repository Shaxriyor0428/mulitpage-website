import React from "react";
import { NavLink } from "react-router-dom";
import TimeLogo from "../../assets/limeLogo.png";

const Services = () => {
  return (
    <section className="bg-[#FFE6D2] py-24">
      <div className="container">
        <div className="w-full max-w-[777px] pr-24">
          <h3 className="uppercase text-[14px] leading-5 font-medium">
            Our Services
          </h3>
          <h2 className="text-5xl leading-[58px] font-semibold mb-8">
            We build software solutions that solve client's business challenges
          </h2>

          <button className="text-[16px] py-4 px-8 bg-[#444CFC] text-white">
            Start a Project
          </button>
        </div>
        <div className="mt-20">
          <ul className="w-full flex justify-between">
            <li className="w-[405px] bg-white p-12">
              <div className="w-[47px] h-[47px] mb-4">
                <img src={TimeLogo} alt="" />
              </div>
              <div className="pr-6">
                <h6 className="leading-7 font-semibold mb-2">
                  Technical support
                </h6>
                <p className="text-[#5D5F6D] leading-6 mb-6">
                  We aim to attain the greatest satisfaction for our clients and
                  be one of the prominent names when it comes to world-class
                  service
                </p>
                <NavLink
                  className={"text-[#444CFC] font-medium leading-6"}
                  to={"/about"}
                >
                  Read more
                </NavLink>
              </div>
            </li>
            <li className="w-[405px] bg-white p-12">
              <div className="w-[47px] h-[47px] mb-4">
                <img src={TimeLogo} alt="" />
              </div>
              <div className="pr-6">
                <h6 className="leading-7 font-semibold mb-2">
                Testing Management
                </h6>
                <p className="text-[#5D5F6D] leading-6 mb-6">
                  We aim to attain the greatest satisfaction for our clients and
                  be one of the prominent names when it comes to world-class
                  service
                </p>
                <NavLink
                  className={"text-[#444CFC] font-medium leading-6"}
                  to={"/about"}
                >
                  Read more
                </NavLink>
              </div>
            </li>
            <li className="w-[405px] bg-white p-12">
              <div className="w-[47px] h-[47px] mb-4">
                <img src={TimeLogo} alt="" />
              </div>
              <div className="pr-6">
                <h6 className="leading-7 font-semibold mb-2">
                Development
                </h6>
                <p className="text-[#5D5F6D] leading-6 mb-6">
                  We aim to attain the greatest satisfaction for our clients and
                  be one of the prominent names when it comes to world-class
                  service
                </p>
                <NavLink
                  className={"text-[#444CFC] font-medium leading-6"}
                  to={"/about"}
                >
                  Read more
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
