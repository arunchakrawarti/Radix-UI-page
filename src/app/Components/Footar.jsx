"use client";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#01013d] text-white py-12 px-4 md:px-8 lg:px-16 font-sans">
      <div className="container w-[70%] m-auto max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
          <div className="flex flex-col col-span-1 lg:col-span-2 space-y-6">
            <div className="flex items-center">
              <img
                src="https://d2ms8rpfqc4h24.cloudfront.net/white_radix_logo_with_spacing_883f33495d.png"
                alt="Radixweb Logo"
                className="h-20 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Radixweb is a product engineering company, driving start-to-end
              software product development success.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md w-max">
              Let&apos;s Talk
            </button>

           
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <img
                  src="https://d2ms8rpfqc4h24.cloudfront.net/mail_fee72c80f5.svg"
                  alt="Email"
                  className="h-4 w-4"
                />
                <a href="mailto:biz@radixweb.in" className="hover:text-blue-400">
                  biz@radixweb.in
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="https://d2ms8rpfqc4h24.cloudfront.net/mail_fee72c80f5.svg"
                  alt="Email"
                  className="h-4 w-4"
                />
                <a
                  href="mailto:resumes@radixweb.com"
                  className="hover:text-blue-400"
                >
                  resumes@radixweb.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="https://d2ms8rpfqc4h24.cloudfront.net/call_930d31163f.svg"
                  alt="Phone"
                  className="h-4 w-4"
                />
                <a href="tel:+13125283083" className="hover:text-blue-400">
                  Sales: +1 312 528 3083
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="https://d2ms8rpfqc4h24.cloudfront.net/call_930d31163f.svg"
                  alt="Phone"
                  className="h-4 w-4"
                />
                <a href="tel:+917935200685" className="hover:text-blue-400">
                  Careers: +91-79-35200685
                </a>
              </div>
            </div>

           
            <div>
              <h2 className="text-lg font-bold mt-8 mb-4">Verticals</h2>
              <div className="flex space-x-4">
                <img
                  src="https://d2ms8rpfqc4h24.cloudfront.net/OPS_Logo_f133d5d767.svg"
                  alt="OnPrintShop"
                  className="h-8 bg-white p-1 rounded"
                />
                <img
                  src="https://d2ms8rpfqc4h24.cloudfront.net/Rx_Web_abb1e2c456.png"
                  alt="RxWeb"
                  className="h-8 bg-white p-1 rounded"
                />
                <img
                  src="https://d2ms8rpfqc4h24.cloudfront.net/Tezjs_5bfb67e9a3.png"
                  alt="TezJS"
                  className="h-8 bg-white p-1 rounded"
                />
              </div>
            </div>
          </div>

          
          <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
           
            <div>
              <h2 className="text-lg font-bold mb-2">Services</h2>
              <ul className="space-y-2 text-sm">
                {[
                  "Product Engineering & SaaS",
                  "Enterprise Software & Applications",
                  "Cloud, DevOps & Security",
                  "AI & Data Solutions",
                  "Low-Code/No-Code Development",
                  "Staff Augmentation",
                  "Big Data & Gen AI",
                  "Quality Engineering",
                  "Project Rescue",
                ].map((item, i) => (
                  <li key={i} className="flex items-center hover:text-blue-400">
                    <FaChevronRight className="mr-2 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

           
            <div>
              <h2 className="text-lg font-bold mb-2">Industries</h2>
              <ul className="space-y-2 text-sm">
                {[
                  "Healthcare",
                  "FinTech",
                  "EdTech",
                  "Cleantech",
                  "HRTech",
                  "LegalTech",
                  "Retail",
                ].map((item, i) => (
                  <li key={i} className="flex items-center hover:text-blue-400">
                    <FaChevronRight className="mr-2 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

           
            <div>
              <h2 className="text-lg font-bold mb-2">About Us</h2>
              <ul className="space-y-2 text-sm">
                {[
                  "Why Us",
                  "Our Leadership",
                  "Our Infrastructure",
                  "Our Awards",
                  "Partners",
                  "Life at Radix",
                  "Current Openings",
                ].map((item, i) => (
                  <li key={i} className="flex items-center hover:text-blue-400">
                    <FaChevronRight className="mr-2 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

           
            <div>
              <h2 className="text-lg font-bold mb-2">Quick Links</h2>
              <ul className="space-y-2 text-sm">
                {[
                  "Services",
                  "Industries",
                  "Solutions",
                  "About Us",
                  "Case Studies",
                  "Success Stories",
                  "Blogs",
                ].map((item, i) => (
                  <li key={i} className="flex items-center hover:text-blue-400">
                    <FaChevronRight className="mr-2 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

       
        <div className="mt-12  border-t border-gray-700 pt-8">
          <h2 className="text-lg font-bold mb-6">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <img
                src="https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/Flag_of_the_United_States_78b6549590.svg"
                alt="US Flag"
                className="h-8"
              />
              <div>
                <h3 className="font-bold">United States</h3>
                <p className="text-sm">
                  6136 Frisco Square Blvd Suite 400, Frisco, TX 75034 United
                  States
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/Flag_of_India_fa3c637c2c.svg"
                alt="India Flag"
                className="h-8"
              />
              <div>
                <h3 className="font-bold">India</h3>
                <p className="text-sm">
                  Ekyarth, B/H Nirma University, Chharodi, Ahmedabad - 382481
                  India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;






