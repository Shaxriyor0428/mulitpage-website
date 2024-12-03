import React from "react";
import career from "../../assets/career.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { ImTelegram } from "react-icons/im";
import Newstyler from "../company/Newstyler";
const Career = () => {
  const Text = [
    {
      id: 1,
      title: "Full Stack Developer",
      text1: "Bengaluru · Full Time ",
      text2: "$10K - $18K · No equity",
      link: "Apply Now",
      icon: <FaArrowRightLong />,
    },
    {
      id: 2,
      title: "Testing Engineer",
      text1: "Remote · Full Time",
      text2: "$08K - $10K · No equity",
      link: "Apply Now",
      icon: <FaArrowRightLong />,
    },
    {
      id: 3,
      title: "FHr Manager",
      text1: "Mumbai . Fultime",
      text2: "$08K - $10K · 4 to 5 Yrs Exp",
      link: "Apply Now",
      icon: <FaArrowRightLong />,
    },
    {
      id: 4,
      title: "Product Designer",
      text1: "Mumbai . Fultime",
      text2: "$08K - $10K · 4 to 5 Yrs Exp",
      link: "Apply Now",
      icon: <FaArrowRightLong />,
    },
    {
      id: 5,
      title: "Wordpress Developer",
      text1: "Mumbai, Full Time",
      text2: "$08K - $10K · 4 to 5 Yrs Exp",
      link: "Apply Now",
      icon: <FaArrowRightLong />,
    },
    {
      id: 6,
      title: "Jr. QA Testerr",
      text1: "California, USA . Full Time",
      text2: "$14K - $23K · No equity",
      link: "Apply Now",
      icon: <FaArrowRightLong />,
    },
    {
      id: 7,
      title: "Sr. UX Designer",
      text1: "California, USA . Full Time",
      text2: "$14K - $23K · No equity",
      link: "Apply Now",
      icon: <FaArrowRightLong />,
    },
    {
      id: 8,
      title: "Social Media Manager",
      text1: "Kolkata, India .  Fulltime",
      text2: "$5K - $6K ·  Fresher  ",
      link: "Apply Now",
      icon: <FaArrowRightLong />,
    },
    {
      id: 9,
      title: "Golang Developer",
      text1: "Mumbai . Fultime",
      text2: "$08K - $10K · 4 to 5 Yrs Exp",
      link: "Apply Now",
      icon: <FaArrowRightLong />,
    },
  ];

  const Text2 = [
    {
      id: 1,
      title: "Covid-19 insurance",
      text: "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
      icon: "😷",
    },
    {
      id: 2,
      title: "Flexible working time",
      text: "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
      icon: "⏱️",
    },
    {
      id: 3,
      title: "Work from home",
      text: "Bengaluru · Full Time ",
      icon: "🏡",
    },
    {
      id: 4,
      title: "Annual retreats",
      text: "Through True Rich Attended does no end it his mother since real had halfdoes no end it ",
      icon: "🎉",
    },
    {
      id: 5,
      title: "Learning stipend",
      text: "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
      icon: "💰",
    },
    {
      id: 6,
      title: "Gym membership",
      text: "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
      icon: "💪",
    },
  ];
  return (
    <>
      <section className="py-20">
        <div className="container">
          <div className="content flex flex-col gap-6 justify-center items-center">
            <p className="text-[14px] font-medium leading-5">
              CAREER AT FINSWEET
            </p>
            <h1 className="font-semibold leading-[58px] text-center text-[48px] w-[55%]">
              We hired people who are Always Passionate about <br /> what they
              do
            </h1>
            <p className="text-[16px] font-normal leading-6 w-[45%] text-center pb-8">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw .
            </p>
          </div>
          <div className="image w-full justify-center items-center h-full">
            <img className="w-full" src={career} alt="image career" />
          </div>
          <div>
            <p className="text-[18px] font-medium leading-7 mt-20 text-center mb-4">
              See Our open positions
            </p>
            <span className="block text-center">👇</span>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="container">
          <div className="grid grid-flow-col-3 grid-flow-row-3 grid-cols-3 gap-6 bg-[#ECF8F9] p-20">
            {Text?.map((item) => (
              <div
                className="w-[354px] h-[243px] bg-white p-10 m"
                key={item.id}
              >
                <h3 cl>{item.title}</h3>
                <p>{item.text1}</p>
                <p>{item.text2}</p>
                <div className="flex gap-4 py-20 ">
                  <button className="text-[#5D5FEF]">{item.link}</button>
                  <button className="text-[#5D5FEF]">{item.icon}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#FAFAFD] py-20">
        <div className="container">
          <div className="w-1/2 flex flex-col gap-4">
            <p>OUR WORK & CULTURE</p>
            <h2 className="text-3xl font-bold">
              Come and join a team of highly skilled professionals.
            </h2>
            <p>
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded.{" "}
            </p>
          </div>
          <div className="second__section grid grid-flow-col-3 grid-flow-row-2 grid-cols-3 gap-6 bg-[#FAFAFD]">
            {Text2?.map((item) => (
              <div className="w-[354px] h-[243px] bg-white p-10 " key={item.id}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FFE9D7]">
                  {item.icon}
                </div>
                <h3 cl>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Newstyler />
    </>
  );
};

export default Career;
