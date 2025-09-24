"use client";
import { useState } from "react";

const Help = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const tabs = [
    { id: "experience", label: "Impeccable User Experiences" },
    { id: "decisioning", label: "Real-time Decisioning" },
    { id: "technology", label: "Best-fit Technology" },
    { id: "market", label: "Product Market-fit" },
  ];

  const content = {
    experience: `We integrate human-centred designs in our product development consulting services to harness empathy for real-world client problems.

By converging intelligent data and market trends, we help you accumulate accurate human insights. In unlocking CX visualization through the user’s eyes, we help you tailor superior user experiences that connect better, respond to needs and deliver value.`,

    decisioning: `In today’s fast-paced digital economy, decisions must be made instantly.  
Our real-time decisioning framework empowers businesses to leverage live data streams, customer interactions, and predictive analytics. 
   
By building AI-driven decision engines, we help you respond dynamically to opportunities and risks — ensuring accuracy, speed, and scalability.  
From fraud detection to personalized recommendations, real-time intelligence becomes the cornerstone of your business agility.`,

    technology: `Choosing the right technology is the backbone of sustainable product growth.  
We evaluate your unique business needs, scalability requirements, and ecosystem compatibility before suggesting the best-fit stack.  

Whether it’s cloud-native architecture, microservices, or innovation with practicality. This ensures your technology investments are future-proof, secure, and aligned with long-term business goals.`,

    market: `Even the best products fail without market alignment.  
We help you validate your product concepts through market research, competitor benchmarking, and customer behavior insights.  

Our structured product-market fit approach ensures your solutions address real demand and adapt to shifting trends.  
From prototype testing to launch, we guide you in creating products that resonate with your audience and scale successfully.`,
  };

  return (
    <div className="max-w-6xl mt-10 mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center md:text-left">
        Helping You Nail Market Entry
      </h2>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-6">
        {/* Tabs Section */}
        <div className="space-y-4 md:w-1/4">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer pb-9 border-b text-sm sm:text-base ${
                activeTab === tab.id
                  ? "font-bold border-purple-600 border-b-2 text-purple-600"
                  : "font-medium text-gray-700 border-gray-200"
              }`}
            >
              {tab.label}
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="bg-[#f4f9ff] border border-[#e7e5ff] rounded-br-3xl flex-1 px-4 sm:px-8 lg:px-12 py-6 sm:py-10">
          <p className="text-gray-800 whitespace-pre-line text-sm sm:text-base leading-relaxed">
            {content[activeTab]}
          </p>
        </div>
      </div>

      <div className="h-0.5 w-full bg-gray-300 mt-10 rounded-full"></div>
    </div>
  );
};

export default Help;




