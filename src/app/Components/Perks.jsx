'use client'
import React from "react";

const Perks = () => {
  return (
    <div className="flex flex-col lg:flex-row w-[90%] lg:w-[70%] mx-auto mt-15 gap-6 items-center">
     
      <div className="w-full lg:w-1/2">
        <img
          src="https://cdn.wallpapersafari.com/44/55/kp50Ri.jpg"
          alt="Perks"
          className="w-[370px] ml-20 mt-10 h-[460px] rounded-md rounded-br-4xl object-cover"
        />
      </div>

     
      <div className="w-full lg:w-1/2">
        <div className="lg:pl-10 -ml-5 mt-6 lg:mt-10">
          <h1 className="text-xl md:text-3xl font-bold text-center lg:text-left">
            Perks of Radixweb's Product <br/> Strategy Consulting
          </h1>

          <div className="pt-3 mt-2 text-center lg:text-left">
            <p>
              Design Products that win in the market. We help you redefine <br/> the
              way you compete and the value you deliver.
            </p>
          </div>

          <div className="mt-8 space-y-3 text-sm md:text-base">
            <p>
              <span className="text-blue-200 font-bold ">✔</span> Assess team
              skill sets to weight tech capabilities gap
            </p>
            <p>
              <span className="text-blue-200 font-bold">✔</span> AI automation
              integrated product development process
            </p>
            <p>
              <span className="text-blue-200 font-bold">✔</span> Agile project
              management, structure roadmaps
            </p>
            <p>
              <span className="text-blue-200 font-bold">✔</span> Data
              forecasting to avoid operational disruption
            </p>
          </div>

          <div className="flex justify-center lg:justify-start">
            <button className="bg-blue-500 text-white py-2 cursor-pointer px-6 mt-6 rounded-lg hover:bg-blue-600 transition">
              Redefine Product Benchmarks →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perks;







