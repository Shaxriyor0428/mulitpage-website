import React from 'react'

const Section = ({ title, description, image, reverse, bg }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center p-8`}
    >
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <img src={image} alt={title} className="rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Section