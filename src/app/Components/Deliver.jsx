// "use client";
// import React, { useState } from "react";
// import { ArrowRight } from "lucide-react";

// const Deliver = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const services = [
//     {
//       title: "Extensive Market Research",
//       desc: "Get detailed insights on customer needs and market trends. Our expertise in Innovation, R&D enables you to take bold, real-time business decisions to define gamechanging products.",
//     },
//     {
//       title: "Flawless Product Positioning",
//       desc: "Find unique value proposition for software products for targeted customer segments. Differentiate your product from competitors with market-leading functionalities.",
//     },
//     {
//       title: "Functional Product Optimization",
//       desc: "Design, develop and deploy market leading solutions. Create detailed blueprints, define features, customer user journeys and employ UATs for product success.",
//     },
//     {
//       title: "Realistic Pricing Strategies",
//       desc: "Balance competitive edge with profit. Use our expertise to identify failproof pricing strategies, set user-led costing, and analyze price performances for wider acceptance.",
//     },
//     {
//       title: "Identify GTM Strategies",
//       desc: "Reach your targets effectively through aligned messaging and channel activation. Build marketing collaterals, launch strategies and market testing abilities.",
//     },
//     {
//       title: "Product Innovation",
//       desc: "Build premium capabilities for new products or enhance existing ones for competitive edge. Analyze the market effectively for threats and weaknesses; identify new opportunities.",
//     },
//   ];

//   return (
//     <section className="max-w-6xl mx-auto px-24 py-12 text-center">
//       <h2 className="text-2xl md:text-3xl font-bold mb-12">
//         Ace Delivery with Product Strategy Services
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//         {services.map((service, idx) => (
//           <div
//             key={idx}
//             onClick={() => setActiveIndex(idx)}
//             className={`
//               relative border border-gray-200 rounded-lg p-6 text-left shadow-sm transition cursor-pointer
//               hover:shadow-md group
//               before:absolute before:inset-y-0 before:left-0 before:w-[3px]
//               before:bg-gradient-to-b before:from-blue-300 before:to-pink-300 before:opacity-0 hover:before:opacity-100
//               after:absolute after:inset-y-0 after:right-0 after:w-[3px]
//               after:bg-gradient-to-b after:from-blue-300 after:to-pink-300 after:opacity-0 hover:after:opacity-100
//             `}
//           >
//             <h3
//               className={`font-semibold text-lg mb-3 transition-colors
//                 ${activeIndex === idx ? "text-blue-600" : "text-gray-800 group-hover:text-blue-500"}
//               `}
//             >
//               {service.title}
//             </h3>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               {service.desc}
//             </p>
//           </div>
//         ))}
//       </div>

//       <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 mx-auto hover:bg-blue-700 transform hover:scale-105 transition">
//         Build Product Vision <ArrowRight size={18} />
//       </button>
//     </section>
//   );
// };

// export default Deliver;


"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const Deliver = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      title: "Extensive Market Research",
      desc: "Get detailed insights on customer needs and market trends. Our expertise in Innovation, R&D enables you to take bold, real-time business decisions to define gamechanging products.",
    },
    {
      title: "Flawless Product Positioning",
      desc: "Find unique value proposition for software products for targeted customer segments. Differentiate your product from competitors with market-leading functionalities.",
    },
    {
      title: "Functional Product Optimization",
      desc: "Design, develop and deploy market leading solutions. Create detailed blueprints, define features, customer user journeys and employ UATs for product success.",
    },
    {
      title: "Realistic Pricing Strategies",
      desc: "Balance competitive edge with profit. Use our expertise to identify failproof pricing strategies, set user-led costing, and analyze price performances for wider acceptance.",
    },
    {
      title: "Identify GTM Strategies",
      desc: "Reach your targets effectively through aligned messaging and channel activation. Build marketing collaterals, launch strategies and market testing abilities.",
    },
    {
      title: "Product Innovation",
      desc: "Build premium capabilities for new products or enhance existing ones for competitive edge. Analyze the market effectively for threats and weaknesses; identify new opportunities.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-24 py-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-12">
        Ace Delivery with Product Strategy Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {services.map((service, idx) => (
          <div
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`
              relative border border-gray-100  rounded-lg p-6 text-left shadow-sm transition cursor-pointer
              hover:shadow-md group
              before:absolute before:inset-y-0 before:left-0 before:w-[2px]
              before:bg-gradient-to-b before:from-blue-200 before:to-pink-300 before:opacity-0 hover:before:opacity-100
              after:absolute after:inset-y-0 after:right-0 after:w-[2px]
              after:bg-gradient-to-b after:from-blue-200 after:to-pink-300 after:opacity-0 hover:after:opacity-100
            `}
          >
            <h3
              className={`font-semibold text-lg mb-3 transition-colors
                ${activeIndex === idx ? "text-blue-600" : "text-gray-800 group-hover:text-blue-500"}
              `}
            >
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 mx-auto hover:bg-blue-700 transform hover:scale-105 transition">
        Build Product Vision <ArrowRight size={18} />
      </button>
    </section>
  );
};

export default Deliver;


