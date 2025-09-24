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

Whether it’s cloud-native architecture, microservices, or innovation with practicality.This ensures your technology investments are future-proof, secure, and aligned with long-term business goals.`,

    market: `Even the best products fail without market alignment.  
We help you validate your product concepts through market research, competitor benchmarking, and customer behavior insights.  

Our structured product-market fit approach ensures your solutions address real demand and adapt to shifting trends.  
From prototype testing to we guide you in launching products that resonate with your audience and scale successfully.`,
  };

  return (
    <div className="max-w-6xl mt-10 mx-auto px-20 py-12">
      <h2 className="text-3xl font-bold mb-6">
        Helping You Nail Market Entry
      </h2>

      <div className="flex flex-col md:flex-row gap-8 mt-8 items-stretch">
        
       
        <div className="space-y-6 ml-4 mt-6 md:w-1/4">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer pb-6 border-b ${
                activeTab === tab.id
                  ? "font-bold border-b-2 border-purple-600"
                  : "font-semibold text-gray-700 border-gray-200"
              }`}
            >
              {tab.label}
            </div>
          ))}
        </div>

        
        <div className="bg-[#f4f9ff] border border-[#e7e5ff] rounded-br-4xl flex-1 mx-4 md:mx-8 px-14 pt-16 py-8">
          <p className="text-gray-800 whitespace-pre-line">
            {content[activeTab]}
          </p>
        </div>

      </div>

      <div className="h-0.5 w-full bg-gray-300 mt-10 rounded-r-full"></div>
    </div>
  );
};

export default Help;







