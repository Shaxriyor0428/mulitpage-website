import React from "react";
// import Link from "react-router-dom";

export default function ReadCard({ cardItem }) {
  const { img, date, item, link } = cardItem;
  return (
    <div className=" max-w-[624px] overflow-hidden rounded-xl bg-sky-50/50">
      <a href="/" className="group">
        <div className=" flex">
          <div className="relative overflow-hidden  ">
            <img src={img} alt={item} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-2 p-[32px]">
            <time dateTime="2021-01-19" className="text-sm text-gray-600">
              {date}
            </time>
            <h2 className="text-xl font-semibold leading-tight text-gray-900 group-hover:text-gray-600 transition-colors">
              {item}
            </h2>
            <div className="flex items-center text-indigo-600 group-hover:text-indigo-500 transition-colors">
              <span className="text-sm font-medium">{link}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
