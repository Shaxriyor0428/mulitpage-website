import React from "react";
import heroImage from "../../assets/header_image.png";
import { FaArrowRightLong } from "react-icons/fa6";
const Hero = () => {
  return (
    <section className="w-full bg-[#232536] pt-20 pb-10">
      <div className="grid grid-cols-2 gap-12 container">
        <div className="hero__content text-white flex flex-col gap-8 justify-center items-start">
          <h1 className="font-semibold text-[58px] leading-[68px]">
            Transform Your Idea Into Reality with Finsweet
          </h1>
          <p className="font-normal text-lg leading-6 w-[85%]">
            The entire Finsweet team knows what's good with Webflow and you can
            too with 1 week and a good attitude.
          </p>
          <div>
            <button className="text-white relative text-lg leading-6 font-medium py-5 pl-8 pr-16 bg-[#444CFC] rounded-md">
              {" "}
              Request Quote
              <FaArrowRightLong className="absolute top-6 right-7" />
            </button>
          </div>
        </div>
        <div className="image">
          <img src={heroImage} alt="Hero image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
