import React from "react";
import TimeLogo from '../../assets/limeLogo.png'

const Expertise = () => {
  return (
    <section className="bg-[#ECF8F9] py-24">
      <div className="container">
        <div className="w-full flex justify-between">
          <div className="w-full max-w-[630px] px-4">
            <h3 className="uppercase text-[14px] leading-5 font-medium">
              Our expertise
            </h3>
            <h2 className="text-5xl leading-[58px] font-semibold mb-6">
              We want to get local identification in every corner of the world
              in this era of global citizenship
            </h2>
            <p className="leading-6 text-[#5D5F6D]">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded.{" "}
            </p>
          </div>
          <div>
            <ul className="flex flex-col gap-y-3">
              <li className="w-full max-w-[515px] flex gap-x-4 bg-[white] p-8">
                <div className="w-[47px] h-[47px]">
                <img src={TimeLogo} alt="" />
                </div>
                <div className="w-full max-w-[303px]">
                  <h6 className="text-[16px] leading-[28px] mb-1">On Time Delivery</h6>
                  <p className="text-[14px] leading-5 text-[#5D5F6D]">
                    Through True Rich Attended does no end it his mother since
                    real had half every him.
                  </p>
                </div>
              </li>
              <li className="w-full max-w-[515px] flex gap-x-4 bg-[white] p-8">
                <div className="w-[47px] h-[47px]">
                <img src={TimeLogo} alt="" />
                </div>
                <div className="w-full max-w-[303px]">
                  <h6 className="text-[16px] leading-[28px] mb-1">Best Quality</h6>
                  <p className="text-[14px] leading-5 text-[#5D5F6D]">
                    Through True Rich Attended does no end it his mother since
                    real had half every him.
                  </p>
                </div>
              </li>
              <li className="w-full max-w-[515px] flex gap-x-4 bg-[white] p-8">
                <div className="w-[47px] h-[47px]">
                <img src={TimeLogo} alt="" />
                </div>
                <div className="w-full max-w-[303px]">
                  <h6 className="text-[16px] leading-[28px] mb-1">Support Assist</h6>
                  <p className="text-[14px] leading-5 text-[#5D5F6D]">
                    Through True Rich Attended does no end it his mother since
                    real had half every him.
                  </p>
                </div>
              </li>
            </ul>
            <div className="w-full h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 mb-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
