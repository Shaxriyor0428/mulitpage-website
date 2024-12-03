import React from "react";
import story_1 from "../../assets/company/story_1.png";
import story_2 from "../../assets/company/story_2.png";
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
const Story = () => {
  const storyItems = STORYS.map((item) => (
    <div key={item.id} className="ball flex flex-col gap-4 mb-6 items-start">
      <strong className="font-semibold text-3xl">{item.ball}</strong>
      <div>
        <img src={item.photo} alt="Story 2" />
        <span className="font-semibold text-[16px] leading-7">
          {item.title}
        </span>
      </div>
    </div>
  ));
  return (
    <div className="w-full my-10">
      <div className="container grid grid-cols-2 gap-24">
        <div className="flex flex-col gap-6">
          <div >
            <img src={story_1} alt="story kub" />
          </div>
          <div>
            <p className=" relative text-[18px] font-medium leading-7">
              Our Story
            <span className=" absolute">👇</span>
            </p>
          </div>
          <h2 className="font-semibold text-5xl leading-[54px]">From Startups to Titans of Industry</h2>
          <p className="font-normal text-lg leading-6">
            Through True Rich Attended does no end it his mother since
            favourable real had half every him case in packages enquire we up
            ecstatic unsatiable saw his giving Remain expense of gay produce
            excited perceived do an a china mean its so ye when in explained
            Hearts am next over match mr partiality not shoud latter thus as out
            no passed forming middleton exercise up
          </p>
        </div>
        <div className="bg-[#FFD3AF91] grid grid-cols-2 px-20 py-6 pt-12">
          {storyItems}
        </div>
      </div>
    </div>
  );
};

export default Story;
