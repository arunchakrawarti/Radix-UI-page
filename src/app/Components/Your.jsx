"use client";
import React from "react";

const Your = () => {
  const stats = [
    {
      number: "25+",
      desc: "Years of Tech Innovation and Excellence",
    },
    {
      number: "3000+",
      desc: "Digital Transformations Successfully Delivered",
    },
    {
      number: "30+",
      desc: "Global Industries Served Across the Globe",
    },
    {
      number: "97%",
      desc: "Net Promoter Score in Client Service",
    },
  ];

  return (
    <section className="bg-[#f1f7ff] py-18 px-4 sm:px-6 md:px-16 lg:px-24">
      <h2 className="text-2xl sm:text-2xl md:text-xl lg:text-4xl font-bold text-gray-900 text-center">
        Your Best Product Strategy Consultant Team
      </h2>
      <p className="text-gray-600 mt-4 sm:mt-5 mb-10 text-center text-sm sm:text-base md:text-md">
        TOGAF-certified product consultants helping you launch right products at right time.
      </p>
      <div className="flex flex-wrap justify-center md:justify-between gap-6 max-w-5xl mx-auto">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center md:items-start md:border-r border-gray-200 last:border-r-0 px-4 flex-1 min-w-[180px]"
          >
            <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              {item.number}
            </h3>
            <p className="text-gray-700 mt-2 text-center md:text-left text-sm sm:text-base md:text-base">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Your;
