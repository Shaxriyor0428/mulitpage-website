import React from "react";
import team1 from "../../assets/company/team1.png";
import team2 from "../../assets/company/team2.png";
import team3 from "../../assets/company/team3.png";
import team4 from "../../assets/company/team4.png";
import team5 from "../../assets/company/team5.png";
import team6 from "../../assets/company/team6.png";
import team7 from "../../assets/company/team7.png";
import team8 from "../../assets/company/team8.png";
const TEAM_IMAGES = [
  {
    id: 1,
    photo: team1,
  },
  {
    id: 2,
    photo: team2,
  },
  {
    id: 3,
    photo: team3,
  },
  {
    id: 4,
    photo: team4,
  },
  {
    id: 5,
    photo: team5,
  },
  {
    id: 6,
    photo: team6,
  },
  {
    id: 7,
    photo: team7,
  },
  {
    id: 8,
    photo: team8,
  },
];
const Team = () => {
  const teamImages = TEAM_IMAGES.map((item) => (
    <div key={item.id} className="">
      <img src={item.photo} alt="" />
    </div>
  ));
  return (
    <section className="">
      <div className="container">
        <div className="content flex flex-col gap-6">
          <span className="font-medium text-sm tracking-wide">
            MEET OUR TEAM
          </span>
          <h2 className="font-semibold text-5xl w-[40%]">
            Teamwork is the only way we work{" "}
          </h2>
          <p className="font-normal text-[16px] leading-6 w-[38%]">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable.
          </p>
        </div>

        <div className="images grid grid-cols-4 mt-16 ">{teamImages}</div>
      </div>
    </section>
  );
};

export default Team;
