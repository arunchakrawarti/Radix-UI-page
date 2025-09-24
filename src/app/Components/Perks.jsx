'use client'
import React from "react";

const Perks = () => {
  return (
    <div className="flex flex-col lg:flex-row w-[95%] lg:w-[70%] mx-auto mt-12 gap-8 items-center">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="w-full max-w-[370px] aspect-[4/5] mt-2">
          <img
            src="https://cdn.wallpapersafari.com/44/55/kp50Ri.jpg"
            alt="Perks"
            className="w-full h-full rounded-md rounded-br-4xl object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2">
        <div className="lg:pl-10 mt-6 lg:mt-10 text-center lg:text-left">
          <h1 className="text-xl md:text-3xl font-bold">
            Perks of Radixweb's Product <br /> Strategy Consulting
          </h1>

          <div className="pt-3 mt-2">
            <p className="text-sm md:text-base">
              Design Products that win in the market. We help you redefine{" "}
              <br className="hidden sm:block" />
              the way you compete and the value you deliver.
            </p>
          </div>

          {/* Points */}
          <div className="mt-8 space-y-3 text-sm md:text-base">
            <p>
              <span className="text-blue-500 font-bold">✔</span> Assess team
              skill sets to weight tech capabilities gap
            </p>
            <p>
              <span className="text-blue-500 font-bold">✔</span> AI automation
              integrated product development process
            </p>
            <p>
              <span className="text-blue-500 font-bold">✔</span> Agile project
              management, structure roadmaps
            </p>
            <p>
              <span className="text-blue-500 font-bold">✔</span> Data
              forecasting to avoid operational disruption
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-center lg:justify-start">
            <button className="bg-blue-500 text-white py-2 px-6 mt-6 rounded-lg hover:bg-blue-600 transition text-sm md:text-base">
              Redefine Product Benchmarks →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perks;



