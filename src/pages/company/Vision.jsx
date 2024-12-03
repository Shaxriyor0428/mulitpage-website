import React from "react";
import vision from "../../assets/company/vision.png";
const Vision = () => {
  return (
    <section className="w-full my-24">
      <div className="container flex flex-col gap-10">
        <span className="font-medium text-start">OUR VISION</span>
        <h1 className="font-semibold text-4xl text-[#232536] w-[50%]">
          We want to get local identification in every corner of the world in
          this era of global citizenship.
        </h1>
        <p className="font-normal text-[16px] leading-6 w-[45%]">
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable saw
          his giving Remain expense you position concluded.{" "}
        </p>
        <img src={vision} alt="vision image" />
      </div>
    </section>
  );
};

export default Vision;
