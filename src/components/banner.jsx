// src/components/Banner.jsx
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Assuming you want to use an icon for the location marker

const Banner = () => {
  return (
    <div className="bg-blue-200 flex items-center justify-between p-4">
      <div className="flex items-center space-x-2">
        <FaMapMarkerAlt className="text-black" />
        <a href="#" className="text-blue-600 underline">
          PTC Chowk,...
        </a>
      </div>
      <div className="text-black flex items-center space-x-4">
        <span className="text-lg">2024 SCHOOL ADMISSION NOW OPEN FOR ENTRY</span>
        <span className="text-black font-bold text-xl">APPLY NOW!</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-red-500 font-bold">ADMISSION</span>
        <span className="bg-yellow-500 text-black px-2 py-1 rounded">OPEN</span>
      </div>
    </div>
  );
};

export default Banner;