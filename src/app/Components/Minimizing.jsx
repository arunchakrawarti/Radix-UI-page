"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const Minimizing = () => {
  return (
    <section className="bg-[#f1f7ff] py-12 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="grid w-[70%] mt-10 m-auto grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        
       
        <div className="flex flex-col lg:sticky lg:top-20 self-start">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 leading-snug mb-6 md:mb-8">
            Minimizing Risks with <br /> Product Strategy <br /> Development
          </h2>
          <div className="rounded-br-4xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/5668773/pexels-photo-5668773.jpeg"
              alt="Business meeting"
              className="w-full h-auto md:w-[380px] md:h-[300px] object-cover rounded-br-4xl mt-6 md:mt-8"
            />
          </div>
        </div>

        
        <div className="space-y-8 overflow-y-scroll no-scrollbar h-[400px] md:h-[500px] lg:h-[600px] pr-2">
          
          {[
            {
              title: "Scope and TG Defining",
              desc: "Collaborating with business leaders to identify target audience and solution gaps. Ideating cost-effective features for rapid product differentiation."
            },
            {
              title: "Competition Mapping",
              desc: "Conducting data-led market research to predict trends. Analyzing competitor journeys for building deep competencies that create a winning software product."
            },
            {
              title: "Identifying Value Proposition",
              desc: "Building a compelling USP for your market. Improvising competitor offerings for features that highlight your distinctness to end users for maximum conversions."
            },
            {
              title: "Identing Market Launch",
              desc: "Collaborating with business leaders to identify target audience and solution gaps. Ideating cost-effective features for rapid product differentiation."
            },
            {
              title: "Identifying Value Proposition",
              desc: "Building a compelling USP for your market. Improvising competitor offerings for features that highlight your distinctness to end users for maximum conversions."
            },
            {
              title: "Scope and TG Defining",
              desc: "Collaborating with business leaders to identify target audience and solution gaps. Ideating cost-effective features for rapid product differentiation."
            }
          ].map((item, idx) => (
            <div key={idx}>
              <p className="text-lg md:text-[1.375rem] leading-8 md:leading-9 font-medium font-poppins transition duration-300 ease-in-out hover:text-blue-500 hover:scale-x-105 origin-left flex items-center gap-2">
                <ArrowRight size={20} className="text-blue-500" />
                {item.title}
              </p>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mt-2">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>

     
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default Minimizing;
