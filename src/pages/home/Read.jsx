import React from "react";
import ReadCard from "./ReadCard";
import RoadImg from "../../assets/roadItemImageOne.png";
import RoadImgtwo from "../../assets/roadItemImageTwo.png";

export const ReadData = [
  {
    img: RoadImg,
    date: "Jan 19, 2021",
    item: "Today’s best design trends for digital products",
    link: "Read More",
  },
  {
    img: RoadImgtwo,
    date: "Jan 19, 2021",
    item: "A practical guide to building a brand strategy",
    link: "Read More",
  },
];

const Read = () => {
  return (
    <section>
      <div className="container">
        <h3 className="text-[48px] font-semibold text-[#232536]">
          Read our latest blogs & news
        </h3>
        <div className="mt-[48px] mb-[196px] flex justify-center gap-[32px]">
          {ReadData.map((cardItem) => (
            <ReadCard cardItem={cardItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Read;
