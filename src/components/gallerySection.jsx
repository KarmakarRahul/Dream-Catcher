import React, { useState } from 'react';
import Img1 from "../assets/Img1.jpg";
import Img2 from "../assets/Img2.jpg";
import Img3 from "../assets/Img3.jpg";
import Img4 from "../assets/Img4.jpg";
import Img5 from "../assets/Img5.jpg";
import Img6 from "../assets/Img6.jpg";
import Img7 from "../assets/Img7.jpg";
import Img8 from "../assets/Img8.jpg";
import Img9 from "../assets/Img9.jpg";
import Ame1 from "../assets/ame1.jpg";
import Ame2 from "../assets/ame2.jpg";
import Ame3 from "../assets/ame3.jpg";
import Ame4 from "../assets/ame4.jpg";
import Ame5 from "../assets/ame5.jpg";
import Ame6 from "../assets/ame6.jpg";
import Ame7 from "../assets/ame7.jpg";
import Ame8 from "../assets/ame8.jpg";
import Ame9 from "../assets/ame9.jpg";
import Ame10 from "../assets/ame10.jpg";
import Ame11 from "../assets/ame11.jpg";
import Ame12 from "../assets/ame12.jpg";


const GallerySection = () => {
  const allImages = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
  ];

  const Amenities = [
    Ame1,
    Ame2,
    Ame3,
    Ame4,
    Ame5,
    Ame6,
    Ame7,
    Ame8,
    Ame9,
    Ame10,
    Ame11,
    Ame12,
  ];

  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpand, setIsExpand] = useState(false);

  const amenitiesImages = isExpand ? Amenities : Amenities.slice(0, 3);

  const displayedImages = isExpanded ? allImages : allImages.slice(0, 3);

  return (
    <>
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-2xl font-bold mb-4">
          <span className="border-l-4 border-yellow-400 pl-2">Gallery</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8">All Photos & Videos</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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

<div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-8">
        {/* <h2 className="text-2xl font-bold mb-4">
          <span className="border-l-4 border-yellow-400 pl-2">Gallery</span>
        </h2> */}
        <p className="text-lg text-gray-600 mb-8">Amenities</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {amenitiesImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery item ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg"
            />
          ))}
        </div>
        <div className="text-center">
          {!isExpand ? (
            <button
              className="bg-yellow-400 text-black py-2 px-4 rounded-full text-lg font-bold"
              onClick={() => setIsExpand(true)}
            >
              View All
            </button>
          ) : (
            <button
              className="bg-yellow-400 text-black py-2 px-4 rounded-full text-lg font-bold"
              onClick={() => setIsExpand(false)}
            >
              Back
            </button>
          )}
        </div>
      </div>
    </div>
</>
  );
};



export default GallerySection;
