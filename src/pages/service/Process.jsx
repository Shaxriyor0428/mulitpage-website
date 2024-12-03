import React from "react";
import cardIcon1 from "../../assets/cardIcon1.png";
import cardIcon2 from "../../assets/cardIcon2.png";
import cardIcon3 from "../../assets/cardIcon3.png";
import cardIcon4 from "../../assets/cardIcon4.png";
import cardIcon5 from "../../assets/cardIcon5.png";
import cardIcon6 from "../../assets/cardIcon6.png";

const CARDS = [
  {
    id: 1,
    number: "01",
    icon: cardIcon1,
    title: "Discover",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
  },
  {
    id: 2,
    number: "02",
    icon: cardIcon2,
    title: "Designing",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
  },
  {
    id: 3,
    number: "03",
    icon: cardIcon3,
    title: "Development",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
  },
  {
    id: 4,
    number: "04",
    icon: cardIcon4,
    title: "Testing",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
  },
  {
    id: 5,
    number: "05",
    icon: cardIcon5,
    title: "Deployment",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
  },
  {
    id: 6,
    number: "06",
    icon: cardIcon6,
    title: "Maintenance",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
  },
];

const Process = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-start">
        <h2 className="text-4xl font-extrabold text-gray-900">
          The process we are working
          <br />
          With Our client Worldwide
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl">
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 relative">
        {CARDS.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300 flex flex-col relative"
          >
            {/* Card Icon - Top Left */}
            <div className="absolute top-4 left-4 w-16 h-16 flex items-center justify-center bg-orange-50 rounded-full">
              <img
                src={card.icon}
                alt={`${card.title} icon`}
                className="w-8 h-8"
              />
            </div>

            {/* Card Number - Top Right */}
            <span className="absolute top-4 right-4 text-2xl font-extrabold text-orange-500">
              {card.number}
            </span>

            {/* Card Title */}
            <h3 className="text-xl font-semibold text-gray-900 text-center mt-2 mb-4">
              {card.title}
            </h3>

            {/* Card Description */}
            <p className="text-gray-600 text-center">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
