'use client'
import React, { useState } from 'react';

const faqItems = [
  {
    question: 'What is product strategy and consulting?',
    answer:
      'Product strategy and consulting involve defining a product’s vision, goals, and roadmap. We help businesses make informed decisions to create products that meet market needs and drive growth.',
  },
  {
    question: 'Do you provide product consulting for startups and enterprises?',
    answer:
      'Yes, we work with both startups and large enterprises. Our services are tailored to the specific needs and challenges of each, whether it’s finding product-market fit or optimizing an existing portfolio.',
  },
  {
    question: 'How can product strategy consulting help startups scale?',
    answer:
      'We help startups scale by validating their ideas, creating a clear product roadmap, prioritizing features, and building an efficient development process. This ensures they build the right product for their target market.',
  },
  {
    question: 'How do you help businesses achieve product-market fit?',
    answer:
      'We use a data-driven approach, including market research, competitor analysis, and customer interviews, to help businesses understand their target audience and refine their product to meet genuine market needs.',
  },
  {
    question: 'How does product strategy consulting help in digital transformation?',
    answer:
      'We guide businesses through digital transformation by helping them adopt a product-centric mindset. This involves defining a digital product roadmap, modernizing technology stacks, and fostering a culture of continuous innovation.',
  },
];

const Asked = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white w-[70%] m-auto text-gray-800 py-12 px-8 md:px-8 mt-20 lg:px-16">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10">
        
       
        <div className="basis-[30%]">
          <h1 className="text-3xl md:text-3xl ml-2 font-bold">
            Frequently Asked Questions
          </h1>
        </div>

       
        <div className="basis-[70%]">
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`group relative border rounded-lg overflow-hidden transition-all duration-300 
                ${openIndex === index ? 'border-indigo-500' : 'border-gray-200'} 
                mx-auto ml-10 w-[95%]`}  
              >
                
                <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>

                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex justify-between items-center p-4 text-left font-semibold ${
                    openIndex === index
                      ? 'bg-indigo-50 border-l-4 border-indigo-500'
                      : 'bg-white'
                  }`}
                >
                  <span className="text-base md:text-lg">{item.question}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-45' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                </button>

              
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="p-4 text-gray-600 text-sm md:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Asked;


