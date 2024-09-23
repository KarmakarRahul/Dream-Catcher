import React, { useState } from 'react';
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpg";
import Imgg1 from "../assets/img18.jpg";
import Imgg2 from "../assets/img19.jpg";
import Imgg3 from "../assets/img20.jpg";
import Imgg4 from "../assets/img21.jpg";
import Imgg5 from "../assets/img22.jpg";
import Img5 from "../assets/img5.jpg";
import Img6 from "../assets/img6.jpg";
import Img7 from "../assets/img7.jpg";
import Img9 from "../assets/img9.jpg";
import Img10 from "../assets/img10.jpg";
import Img11 from "../assets/img11.jpg";
import Img12 from "../assets/img12.jpg";
import Img13 from "../assets/img12.jpg";
import Img14 from "../assets/img14.jpg";
import Img15 from "../assets/img15.jpg";
import Img16 from "../assets/img16.jpg";
import Img17 from "../assets/img17.jpg";


const GallerySection = () => {
  const allImages = [
    Img1,
    Img2,
    Img3,
    Img4,
    Imgg1,
    Imgg2,
    Imgg3,
    Imgg4,
    Imgg5,
  ];

  const Amenities = [
    Img5,
    Img6,
    Img7,
    Img9,
    Img10,
    Img11,
    Img12,
    Img13,
    Img14,
    Img15,
    Img16,
    Img17,

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
