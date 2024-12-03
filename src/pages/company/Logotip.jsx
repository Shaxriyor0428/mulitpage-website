import React from "react";
import logo1 from "../../assets/company/logo1.png";
import logo2 from "../../assets/company/logo2.png";
import logo3 from "../../assets/company/logo3.png";
import logo4 from "../../assets/company/logo4.png";
import logo5 from "../../assets/company/logo5.png";
const Logotip = () => {
  return (
    <section className="w-full h-full py-10">
      <div className="container h-[106px] flex justify-center items-center gap-8 bg-slate-50">
        <div>
          <img src={logo1}  alt="Logo" />
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

export default Logotip;
