"use client";
import React, { useState } from "react";

const testimonials = [
  {
    quote:
      "They work with you as your true partner. Every challenge and every problem is their problem too and they work with you very closely.",
    name: "Raj S.",
    role: "Owner",
    img: "https://up.yimg.com/ib/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?pid=Api&rs=1&c=1&qlt=95&w=73&h=110",
  },
  {
    quote:
      "Amazing experience! They helped us define our product roadmap and achieve faster market success.",
    name: "Priya K.",
    role: "CEO",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "Professional team with deep knowledge. Truly care about your growth and product strategy. Our product have successfully delivered ",
    name: "Arjun M.",
    role: "Product Manager",
    img: "https://randomuser.me/api/portraits/men/36.jpg",
  },
];

const Follow = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { quote, name, role, img } = testimonials[index];

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      {/* Left Section */}
      <div className="w-[80%] md:w-[80%] mx-auto">
        <h2 className="text-2xl mt-15 md:text-2xl font-bold leading-snug text-gray-800 max-w-[450px]">
          We Follow a Boundaryless Approach to Innovation
        </h2>
        <div className="mt-6 pl-4 border-l-2 border-blue-600 text-gray-600 leading-relaxed max-w-[500px]">
          <p>
            Product Strategy Consulting Services guide startups and enterprises
            in creating roadmaps, positioning, and go-to-market strategies. Our
            product strategy consultants have successfully delivered thousands
            of market-leading products.
          </p>
        </div>
      </div>

      {/* Right Section with arrows below */}
      <div className="w-[80%] md:w-[90%] mx-auto">
        <div className="bg-[#f1f7ff] rounded-br-3xl p-8 md:p-8 shadow-sm">
          <span className="text-7xl text-teal-600  ml-6">“</span>
          <p className="-mt-4 py-2 px-6 text-gray-700 leading-relaxed">{quote}</p>

          <div className="flex items-center mt-8">
            <img
              src={img}
              alt={name}
              className="h-12 w-12 rounded-full ml-7 object-cover"
            />
            <div className="ml-4">
              <h4 className="font-semibold text-gray-900">{name}</h4>
              <p className="text-sm text-gray-600">{role}</p>
            </div>
          </div>
        </div>

        {/* Arrows just below the right card */}
        <div className="flex justify-center gap-6 mt-2 text-blue-600 text-lg">
          <button onClick={handlePrev} className="hover:text-blue-800">
            ←
          </button>
          <button onClick={handleNext} className="hover:text-blue-800">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Follow;






