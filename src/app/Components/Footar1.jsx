'use client';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const Footer1 = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 relative font-sans">
      <div className="container mx-auto px-6 flex w-[70%] m-auto flex-col md:flex-row items-center justify-between gap-6">
        
        
        <div className="flex gap-3 items-center">
          <img
            src="https://d2ms8rpfqc4h24.cloudfront.net/reviews_f37e262a8d.svg" 
            alt="Logo"
            className="w-10 h-10"
          />
          <img
            src="https://d2ms8rpfqc4h24.cloudfront.net/dun_and_brandstreet_1b7f223457.svg"
            alt="Logo"
            className="w-10 h-10"
          />
          <img
            src="https://d2ms8rpfqc4h24.cloudfront.net/iso_667d2a00ae.svg" 
            alt="Logo"
            className="w-10 h-10"
          />
          <img
            src="https://d2ms8rpfqc4h24.cloudfront.net/aicpa_soc2_a6f4096a8a.svg"
            alt="Logo"
            className="w-10 h-10"
          />
        </div>

        
        <div className="flex flex-col items-center text-center text-sm text-gray-700 space-y-2">
          

          
          <p className="text-xs">
            Copyright © 2025 Radixweb. All Rights Reserved. An ISO 27001:2022, ISO 9001:2015 Certified
          </p>

          
          <div className="flex items-center justify-center gap-4 text-xs">
            <a href="#" className="hover:underline">Data Security Management</a>
            <span>|</span>
            <a href="#" className="hover:underline">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <img src="data:image/png;base64,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" alt="DMCA" className="h-4" />
          </div>
        </div>

      
        <div className="flex items-center gap-4 text-xl text-gray-800">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaXTwitter /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>

      
      <div className="fixed right-0 bottom-20 bg-green-400 text-black font-semibold px-1 py-1 rounded-md shadow-lg cursor-pointer">
        Need Help? <br /> I'm Here!
      </div>
    </footer>
  );
};

export default Footer1;
