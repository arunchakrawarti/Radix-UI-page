"use client";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full z-50 fixed shadow-sm bg-white">
      <div className="max-w-7xl pt-1 h-14 ml-20 mr-60 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-12">
         
          <div className="ml-40 flex-shrink-0">
            <Image src="data:image/png;base64,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" alt="Logo" width={40} height={40} />
          </div>

         
          <div className="hidden md:flex space-x-4 font-extrabold text-gray-700 font-stretch-75%">
           
         <div className="group relative">
        <button className="hover:text-blue-600 flex items-center gap-1">
          Services ▾
        </button>

        {/* Dropdown menu */}
        <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Web Development
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              App Development
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              AI Solutions
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Cloud Services
            </li>
          </ul>
        </div>
      </div>

            
           
           <div className="group relative">
  {/* Button */}
  <button className="hover:text-blue-600">Industries ▾</button>

  {/* Dropdown */}
  <div className="absolute left-0 mt-2 hidden group-hover:flex gap-4 bg-white shadow-lg p-6 rounded-lg z-50">
    {/* List */}
    <div>
      <h1 className="font-bold mb-2">Industries</h1>
      <ul className="space-y-2 text-gray-700">
        <li className="hover:text-blue-600 cursor-pointer">FinTech</li>
        <li className="hover:text-blue-600 cursor-pointer">Healthcare</li>
        <li className="hover:text-blue-600 cursor-pointer">EdTech</li>
        <li className="hover:text-blue-600 cursor-pointer">Retail</li>
      </ul>
    </div>

    {/* Image */}
    <div className="w-60 h-40 overflow-hidden rounded-lg">
      <img
        src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg"
        alt="industry"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>


            <a href="#" className="hover:text-blue-600">
              Why Radixweb ▾
            </a>
            <div className="group relative">
              <button className="hover:text-blue-600">Work ▾</button>
            </div>
           <div className="group relative">
  {/* Button */}
  <button className="hover:text-blue-600">
    About ▾
  </button>

 
  <div className="absolute left-0 mt-2 hidden w-[500px] bg-white shadow-lg rounded-md mr-10 p-4 group-hover:flex justify-between z-10">
    
    
    <div>
      <ul className="space-y-2 pl-5 text-gray-700">
        <h1 className="font-semibold text-lg mb-2">About</h1>
        <li className="hover:text-blue-600 cursor-pointer">Overview</li>
        <li className="hover:text-blue-600 cursor-pointer">Leadership</li>
        <li className="hover:text-blue-600 cursor-pointer">Our Infrastructure</li>
        <li className="hover:text-blue-600 cursor-pointer">Career</li>
      </ul>
    </div>

   
    <div className="w-48 h-32 pr-10 overflow-hidden rounded-md">
      <img
        src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=daylight-forest-glossy-443446.jpg&fm=jpg"
        alt="About"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>


          <div className="group relative">
 
  <button className="hover:text-blue-600">
    Insights ▾
  </button>

 
  <div className="absolute left-0 mt-2 hidden w-48 rounded-md bg-white shadow-lg group-hover:block z-10">
    <ul className="p-4 space-y-2 text-gray-700">
      <h1 className="font-bold">Inside</h1>
      <li className="hover:text-blue-600 cursor-pointer">Blog</li>
      <li className="hover:text-blue-600 cursor-pointer">News</li>
      <li className="hover:text-blue-600 cursor-pointer">Guides</li>
      <li className="hover:text-blue-600 cursor-pointer">Podcast</li>
      <li className="hover:text-blue-600 cursor-pointer">Training Tech</li>
      <li className="hover:text-blue-600 cursor-pointer">Emerging Tech</li>
    </ul>
  </div>
</div>


          </div>

         
          <div className="hidden md:block">
            <a
              href="#"
              className="bg-blue-600 text-white px-5 py-2 rounded-md  hover:bg-gray-700 transition"
            >
              Let's Talk
            </a>
          </div>

          
          <div className="md:hidden">
            <button className="text-gray-700 focus:outline-none">☰</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
