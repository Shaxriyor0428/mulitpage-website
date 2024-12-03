import React from "react";
import AvatarLogo from "../../assets/avatar_1.png";

const Customers = () => {
  return (
    <section className="my-24 bg-[#F9F9FF] py-[120px]">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="w-[502px]">
            <h2 className="text-5xl font-bold mb-4 leading-[58px]">
              Our customers love what we do
            </h2>
            <h3 className="text-[18px] mb-3 leading-7 font-medium">
              Transform your idea into reality with finsweet
            </h3>
            <p className="text-gray-600 mb-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <ul className="flex items-center gap-x-2 mb-4">
              <li className="w-[48px] h-[48px] overflow-hidden">
                <img src={AvatarLogo} alt="" />
              </li>
              <li className="w-[48px] h-[48px] overflow-hidden">
                <img src={AvatarLogo} alt="" />
              </li>
              <li className="w-[48px] h-[48px] overflow-hidden">
                <img src={AvatarLogo} alt="" />
              </li>
            </ul>
            <h4 className="font-medium text-[12px]">30+ Customer Reviews</h4>
          </div>
          <div className="h-[340px] w-[630px] flex">
            <div className=" w-8 h-full bg-gradient-to-t from-red-500 via-yellow-500 to-green-500 mb-4"></div>
            <div className="p-12">
              <h4 className="text-[24px] leading-9">
                Finsweet has been a wonderful partner to work with. I have been
                a customer now for the past few months now and I have had
                nothing but positive experiences!
              </h4>

              <div className="flex items-center gap-x-4 mt-6">
                <img src={AvatarLogo} alt="" />
                <div>
                  <h6>Johnny Andro</h6>
                  <p>Director, Company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
