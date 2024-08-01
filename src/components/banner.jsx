import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Assuming you want to use an icon for the location marker

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
      <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 mb-4 sm:mb-0">
        <span className="text-lg">2024 SCHOOL ADMISSION NOW OPEN FOR ENTRY</span>
        <span className="text-black font-bold text-xl">APPLY NOW!</span>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <span className="text-red-500 font-bold">ADMISSION</span>
        <span className="bg-yellow-500 text-black px-2 py-1 rounded">OPEN</span>
      </div>
    </div>
  );
};

export default Banner;
