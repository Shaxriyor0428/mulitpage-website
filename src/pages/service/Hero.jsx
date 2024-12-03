import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Hero = () => {
  return (
    <section className="bg-[#FFE6D2] w-full py-16">
      <div className="container grid grid-cols-[60%_40%] gap-[125px]">
        <div className="div flex flex-col">
          <strong className="text-[#232536] font-medium text-[14px] leading-5">
            Our Services
          </strong>
          <h2 className="font-semibold text-[48px] leading-[58px] text-[#232536] mb-8 w-[80%]">
            We Build Software Solutionthat Solve Clients Business Challenges
          </h2>
          <p className="text-[16px] leading-6 font-normal text-[#232536] mb-8 w-[72%]">
            Through True Rich Attended does no end it his mother since
            favourable real had half every him case in packages enquire we up
            ecstatic.
          </p>
          <div>
            <button className="text-white relative text-lg leading-6 font-medium py-5 pl-8 pr-16 bg-[#444CFC] rounded-md">
              Request A Quote
              <FaArrowRightLong className="absolute top-6 right-7" />
            </button>
          </div>
        </div>
        <div className="div flex flex-col justify-center gap-4">
          <p className="text-[#232536] font-semibold text-[24px] leading-9">
            Technical support
          </p>
          <p className="text-[#232536] font-semibold text-[24px] leading-9">
            Development
          </p>
          <p className="text-[#232536] font-semibold text-[24px] leading-9">
            AWS/Azure
          </p>
          <p className="text-[#232536] font-semibold text-[24px] leading-9">
            Consulting
          </p>
          <p className="text-[#232536] font-semibold text-[24px] leading-9">
            Information Technology
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
