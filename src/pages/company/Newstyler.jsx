import React from "react";
import styler from "../../assets/company/styler.png";
import styler2 from "../../assets/company/styler2.png";

const Newstyler = () => {
  return (
    <section className="h-[333px] text-white">
      <div className="relative container bg-[#666DFF] grid grid-cols-2 gap-[100px] justify-center items-center h-full">
        <img src={styler} alt="stler image" className="absolute top-0 left-0" />
        <img
          src={styler2}
          alt="stler image"
          className="absolute bottom-0 right-0"
        />

        <div className="content  pl-20 flex flex-col gap-3 items-start">
          <p className="font-medium text-sm tracking-wide">NEWSLETTER</p>
          <h2 className="font-semibold leading-[54px] text-[36px] w-[90%]">
            Subscribe our News Letter to get Latest Updates.
          </h2>
        </div>
        <div className="input">
          <input
            className=" text-black outline-none text-[16px] font-medium py-5 pl-8 rounded-md w-[450px]"
            type="text"
            placeholder="Paresh@Pixeto.com"
          />
        </div>
      </div>
    </section>
  );
};

export default Newstyler;
