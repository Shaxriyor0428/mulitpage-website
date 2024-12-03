import React from "react";
import icon_lampa from "../../assets/icon_lampa.png";
import icon_doc from "../../assets/icon_doc.png";
import icon_dev from "../../assets/icon_dev.png";
import icon_brain from "../../assets/icon_brain.png";
import icon_devSettings from "../../assets/icon_devSetting.png";
import icon_rocket from "../../assets/icon_rocket.png";

const processes = [
  {
    icon: icon_lampa,
    number: "01",
    title: "Discover",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
  },
  {
    icon: icon_doc,
    number: "02",
    title: "Designing",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
  },
  {
    icon: icon_dev,
    number: "03",
    title: "Development",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
  },
  {
    icon: icon_brain,
    number: "04",
    title: "Testing",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
  },
  {
    icon: icon_rocket,
    number: "05",
    title: "Deployment",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
  },
  {
    icon: icon_devSettings,
    number: "06",
    title: "Maintenance",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
  },
];

const Process = () => {
  return (
    <section>
      <div className="container mx-auto mt-24">
        <div className="space-y-4 mb-16">
          <p className="text-sm font-medium text-primary">OUR PROCESS</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            The process we are working
            <br />
            With Our client Worldwide
          </h2>
          <p className="text-muted-foreground max-w-[600px]">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processes.map((process, index) => (
            <div
              key={index}
              className="border border-muted relative overflow-hidden group hover:border-primary transition-colors"
            >
              <div className="p-7 relative">
                <div className="mb-6 flex">
                  <div className="w-[107px] h-[107px] pr-[16px]">
                    {/* <process.icon className="w-6 h-6" /> */}
                    <img src={process.icon} alt="icon" />
                  </div>
                  <span className="absolute right-3 text-3xl text-[#23253692] font-bold">
                    {process.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 inline-block w-auto">
                      {process.title}
                    </h3>
                    <p className="text-muted-foreground pr-20 w-auto">
                      {process.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
