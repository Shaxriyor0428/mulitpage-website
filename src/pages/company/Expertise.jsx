import React from "react";
import expertise1 from "../../assets/company/expertise_1.png";
import expertise2 from "../../assets/company/expertise2.png";
import expertise3 from "../../assets/company/expertise3.png";
const EXPERTISE = [
  {
    id: 1,
    image: expertise1,
    title: "On time Delivery",
    description:
      "Through True Rich Attended does no end it his mother since real had half every him.",
  },
  {
    id: 2,
    image: expertise2,
    title: "Best Quality",
    description:
      "Through True Rich Attended does no end it his mother since real had half every him.",
  },
  {
    id: 3,
    image: expertise3,
    title: "Support Assist",
    description:
      "Through True Rich Attended does no end it his mother since real had half every him.",
  },
];
const Expertise = () => {
  const expertise_links = EXPERTISE?.map((item) => (
    <div key={item.id} className="bg-white flex gap-3 w-[400px] h-[140px] justify-center items-center px-8">
      <div>
        <img className="-translate-y-3 w-[90px]"  src={item.image} alt={item.title} />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-xl">{item.title}</h1>
        <p className="font-medium text-[14px] text-[#5D5F6D]">
          {item.description}
        </p>
      </div>
    </div>
  ));
  return (
    <div className="bg-[#ECF8F9] w-full h-[660px] flex justify-center items-center">
      <div className="container grid grid-cols-2 gap-32">
        <div className="flex flex-col gap-4 justify-center">
          <p className="text-sm font-medium">OUR EXPERTISE</p>
          <h1 className="text-5xl font-semibold">
            We want to get local identification in every corner of the world in
            this era of global citezenship
          </h1>
          <p className="font-medium text-[14px] text-[#5D5F6D]">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw his giving Remain expense you position concluded.
          </p>
        </div>
        <div className="flex flex-col gap-3">{expertise_links}</div>
      </div>
    </div>
  );
};

export default Expertise;
