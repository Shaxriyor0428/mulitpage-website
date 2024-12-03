import React from "react";
import company1 from "../../assets/company/company.png";
import company2 from "../../assets/company/company2.png";
import company3 from "../../assets/company/company3.png";

const Hero = () => {
  return (

    <section className="container py-8">
      <div className="w-[60%] flex flex-col gap-8">
        <p className="font-medium text-lg">Company</p>
        <h1 className="font-semibold text-[48px] leading-[58px] w-[90%]">
          Award-winning Company seen and used by millions around the world.
        </h1>
        <p className="text-lg font-normal">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The Maker is a
          decentralized.{" "}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-12">
        <div className="">
          <img src={company1} alt="company" />
        </div>
        <div className="">
          <img src={company2} alt="company" />
        </div>
        <div className="">
          <img src={company3} className="max-h-[97%]" alt="company" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
