'use client'
import React from "react";

const Photo = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Left Image Section */}
      <div className="md:w-2/5 w-full h-64 md:h-auto">
        <img
          className="w-full h-full md:h-full object-cover"
          src="https://up.yimg.com/ib/th/id/OIP.JPogPMSOOv8g9WJdtLUluAHaEe?pid=Api&rs=1&c=1&qlt=95&w=156&h=94"
          alt="Strategy"
        />
      </div>

      {/* Right Content Section */}
      <div className="md:w-3/5 w-full bg-gray-800 text-white flex justify-center items-center py-10 px-4">
        <div className="max-w-3xl w-full">
          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">
            Accelerators with Our Product <br /> Strategy Consulting
          </h1>

          {/* First Accordion (Expanded Example) */}
          <div className="border-b border-gray-700 py-4">
            <div className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center">
                <img
                  src="https://d2ms8rpfqc4h24.cloudfront.net/overall_portfolio_strategy_95553c5881.svg"
                  alt="Overall Portfolio Strategy"
                  className="w-8 h-8 mr-4"
                />
                <h2 className="text-base font-semibold">
                  Overall Portfolio Strategy
                </h2>
              </div>
              <svg
                className="w-6 h-6 transform rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </div>
            <p className="mt-4 text-sm md:text-base text-gray-300 pl-12 pr-2">
              Bring rapid platform-product alignment with our vendor-neutral
              approach. We help you establish E2E strategies and execute plans
              with superior portfolio investment models.
            </p>
          </div>

          {/* Second Accordion */}
          <div className="border-b border-gray-700 py-4">
            <div className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center">
                <img
                  src="https://d2ms8rpfqc4h24.cloudfront.net/R_and_D_investment_framework_1f12affaa0.svg"
                  alt="R&D Investment Framework"
                  className="w-8 h-8 mr-4"
                />
                <h2 className="text-base font-semibold">
                  R&amp;D Investment Framework
                </h2>
              </div>
              <svg
                className="w-6 h-6 transform transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Third Accordion */}
          <div className="border-b border-gray-700 py-4">
            <div className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center">
                <img
                  src="https://d2ms8rpfqc4h24.cloudfront.net/product_management_and_execution_5467846a5d.svg"
                  alt="Product Management & Execution"
                  className="w-8 h-8 mr-4"
                />
                <h2 className="text-base font-semibold">
                  Product Management &amp; Execution
                </h2>
              </div>
              <svg
                className="w-6 h-6 transform transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Fourth Accordion */}
          <div className="py-4">
            <div className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center">
                <img
                  src="https://d2ms8rpfqc4h24.cloudfront.net/comprehensive_technology_strategy_00b203a4cf.svg"
                  alt="Comprehensive Technology Strategy"
                  className="w-8 h-8 mr-4"
                />
                <h2 className="text-base font-semibold">
                  Comprehensive Technology Strategy
                </h2>
              </div>
              <svg
                className="w-6 h-6 transform transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;








