import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="bg-blue-200 flex flex-col sm:flex-row items-center justify-between p-4 text-center sm:text-left">
      <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-0">
        <FaMapMarkerAlt className="text-black" />
        <a 
          href="https://www.google.com/maps/place/PTC+Chowk,+Suresh+Colony,+Hazaribagh,+Jharkhand+825301" 
          className="text-blue-600 underline"
          target="_blank" 
          rel="noopener noreferrer"
        >
          PTC Chowk, Hazaribag
        </a>
      </div>

      {/* Blinking Text for ADMISSIONS OPEN */}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 mb-4 sm:mb-0">
        <span className="text-lg font-bold blink-animation">ADMISSIONS OPEN</span>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <a 
          href="/admission" // Replace with the actual path to your admission page
          className="text-black font-bold text-xl"
        >
          APPLY NOW!
        </a>
      </div>
    </div>
  );
};

export default Banner;
