import React from "react";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";
import service5 from "../../assets/service5.png";

const SECTIONS = [
  {
    id: 1,
    title: "Technical Support",
    theme:
      "Best in class tech support for your company. We become your tech backbone.",
    description:
      "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving. Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
    image: service1,
  },
  {
    id: 2,
    title: "Development",
    theme:
      "Bring your ideas to reality with certified developers working with the latest technologies.",
    description:
      "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving. Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
    image: service2,
    reverse: true,
  },
  {
    id: 3,
    title: "AWS/Azure",
    theme:
      "We help you deploy, manage and secure your application on leading web services.",
    description:
      "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving. Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
    image: service3,
  },
  {
    id: 4,
    title: "Consulting",
    theme: "Get advice from world-class professionals.",
    description:
      "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving. Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
    image: service4,
    reverse: true,
  },
  {
    id: 5,
    title: "Information Technology",
    theme:
      "We want to get local identification in every corner of the world in this era of global citizenship.",
    description:
      "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving. Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
    image: service5,
  },
];

const BACKGROUND_CLASSES = [
  "bg-[#FFFFFF]",
  "bg-[#ECF8F9]",
  "bg-[#FFFFFF]",
  "bg-[#F9F9FF]",
  "bg-[#FFFFFF]",
];

const SectionsStyle = () => {
  return (
    <div className="container space-y-8 mx-auto px-2 py-8">
      {SECTIONS.map(
        ({ id, title, theme, description, image, reverse }, index) => (
          <div
            key={id}
            className={`flex flex-col md:flex-row ${
              reverse ? "md:flex-row-reverse" : ""
            } items-center py-8 ${
              BACKGROUND_CLASSES[index % BACKGROUND_CLASSES.length]
            }`}
          >
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-xl md:text-2xl font-poppins font-bold text-gray-800 mb-2">
                {title}
              </h2>
              <h1 className="text-2xl md:text-3xl font-poppins font-extrabold text-[#232536] mb-3">
                {theme}
              </h1>
              <p className="text-gray-600 text-base font-poppins">
                {description}
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={image}
                alt={title}
                className="w-full md:w-5/6 mx-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default SectionsStyle;
