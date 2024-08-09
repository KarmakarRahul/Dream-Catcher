import React, { useState } from 'react';
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpg";
import Img5 from "../assets/img4.jpg";
import Img6 from "../assets/img3.jpg";

const GallerySection = () => {
  const allImages = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,

  ];

  const [isExpanded, setIsExpanded] = useState(false);

  const displayedImages = isExpanded ? allImages : allImages.slice(0, 4);

  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-2xl font-bold mb-4">
          <span className="border-l-4 border-yellow-400 pl-2">Gallery</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8">All Photos & Video</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {displayedImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery item ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg"
            />
          ))}
        </div>
        <div className="text-center">
          {!isExpanded ? (
            <button
              className="bg-yellow-400 text-black py-2 px-4 rounded-full text-lg font-bold"
              onClick={() => setIsExpanded(true)}
            >
              View All
            </button>
          ) : (
            <button
              className="bg-yellow-400 text-black py-2 px-4 rounded-full text-lg font-bold"
              onClick={() => setIsExpanded(false)}
            >
              Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
