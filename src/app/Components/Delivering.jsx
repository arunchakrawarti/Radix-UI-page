"use client";
import React from "react";

const industries = [
  {
    name: "FinTech",
    img: "https://images.unsplash.com/photo-1581090700227-5f1b0a17b7b6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Healthcare",
    img: "https://images.unsplash.com/photo-1588776814546-ec54f1f2d6c5?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "CleanTech",
    img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Education & E-Learning",
    img: "https://images.unsplash.com/photo-1588075592446-2400bd9f8b36?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Insurance",
    img: "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Retail and eCommerce",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Legal & Compliance",
    img: "https://images.unsplash.com/photo-1589820296156-2454bb8e54b9?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "HR Management",
    img: "https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&w=800&q=80",
  },
];

const Delivering = () => {
  return (
    <section className="px-6 mt-10 w-[75%] m-auto md:px-12 lg:px-20 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
          Delivering Intelligent Solutions Across <br /> 30+ Industries
        </h2>
        <button className="mt-4 cursor-pointer md:mt-0 px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
          View all Industries →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((industry, i) => (
          <div
            key={i}
            className="relative rounded-lg overflow-hidden group h-22 sm:h-28 md:h-32 lg:h-36"
          >
           
            <img
              src={industry.img}
              alt={industry.name}
              className="w-full h-full object-cover transition-all duration-500 group-hover:h-[90%]"
            />

           
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>

           
            <h3 className="absolute bottom-3 left-3 text-white text-base font-semibold">
              {industry.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Delivering;


