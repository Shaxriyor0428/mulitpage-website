import React from "react";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
const Logotop = () => {
  return (
    <section className="w-full bg-[#232536] pb-8">
      <div className="container h-[105px] flex justify-center items-center gap-8">
        <div className="text-white">
          <p>Our Clients</p>
          <p>We've Worked with</p>
        </div>
        <div>
          <img src={logo1} alt="Logo" />
        </div>
        <div>
          <img src={logo2} alt="Logo" />
        </div>
        <div>
          <img src={logo3} alt="Logo" />
        </div>
        <div>
          <img src={logo4} alt="Logo" />
        </div>
        <div>
          <img src={logo5} alt="Logo" />
        </div>
      </div>
    </section>
  );
};

export default Logotop;
