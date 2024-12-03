import React from "react";
import Company from "../../assets/company/company.png";
import Company2 from "../../assets/company/company2.png";
import Company3 from "../../assets/company/company3.png";
import { NavLink } from "react-router-dom";

import story_1 from "../../assets/company/story_1.png";
import story_2 from "../../assets/company/story_2.png";
import Story from "../company/Story";

const STORYS = [
  {
    id: 1,
    photo: story_2,
    ball: "1560+",
    title: "Project Delivered",
  },
  {
    id: 2,
    photo: story_2,
    ball: "100+",
    title: "Professional",
  },
  {
    id: 3,
    photo: story_2,
    ball: "950+",
    title: "Happy Client",
  },
  {
    id: 4,
    ball: "10 yrs",
    photo: story_2,
    title: "Experience",
  },
];
const About = () => {
  const storyItems = STORYS.map((item) => (
    <div className="flex flex-col items-start w-md">
      <strong className="font-semibold text-3xl">{item.ball}</strong>

      <img src={item.photo} alt="Story 2" className="py-2" />
      <span className="font-semibold text-[16px] leading-7">{item.title}</span>
    </div>
  ));

  return (
    <section className="pt-8">
      {/* <Story /> */}
      <div className="container">
        <div>
          <h3 className="leading-5 mb-4 text-[14px]">ABOUT US</h3>
          <div className="w-full flex justify-between">
            <div className="w-full max-w-[640px]">
              <h2 className="text-5xl leading-[58px] font-semibold">
                The company leads entire webdesign process from concept to
                delivery.
              </h2>
            </div>
            <div className="w-full max-w-[550px] px-8">
              <h3 className="text-[36px] font-semibold leading-[54px] mb-4">
                The Era Of Technology.
              </h3>
              <p className="leading-6 text-[#5D5F6D] ">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable saw his giving Remain expense you position concluded.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <ul className="w-full flex items-center justify-between">
            <li>
              <img src={Company} alt="" />
            </li>
            <li>
              <img src={Company2} alt="" />
            </li>
            <li>
              <img src={Company3} alt="" />
            </li>
          </ul>
          <div className="w-full py-12 flex gap-[66px]">
            {storyItems}
            {/* <div className="flex items-center justify-between">
              <div className="w-full max-w-[60%] grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-start">
                  <div className="w-12 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 mb-4"></div>
                  <div className="text-4xl font-bold mb-2">1560+</div>
                  <div className="text-gray-600">Project Delivered</div>
                </div>

                <div className="flex flex-col items-start">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4"></div>
                  <div className="text-4xl font-bold mb-2">100+</div>
                  <div className="text-gray-600">Professional</div>
                </div>

                <div className="flex flex-col items-start">
                  <div className="w-12 h-1 bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 mb-4"></div>
                  <div className="text-4xl font-bold mb-2">950+</div>
                  <div className="text-gray-600">Happy Client</div>
                </div>

                <div className="flex flex-col items-start">
                  <div className="w-12 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 mb-4"></div>
                  <div className="text-4xl font-bold mb-2">10 yrs</div>
                  <div className="text-gray-600">Experience</div>
                </div>
              </div>
              <NavLink to="/about" className="text-[#444CFC] leading-6">
                Read about us
              </NavLink>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
