import React, { useState } from 'react';
// import Img1 from "/assets/img1.jpg";
// import Img2 from "/assets/img2.jpg";
// import Img3 from "/assets/img3.jpg";
// import Img4 from "/assets/img4.jpg";
// import Img5 from "/assets/img5.jpg";
// import Img6 from "/assets/img6.jpg";
// import Img7 from "/assets/img7.jpg";
// import Img8 from "/assets/img8.jpg";
// import Img9 from "/assets/img9.jpg";
// import Ame1 from "/assets/ame1.jpg";
// import Ame2 from "/assets/ame2.jpg";
// import Ame3 from "/assets/ame3.jpg";
// import Ame4 from "/assets/ame4.jpg";
// import Ame5 from "/assets/ame5.jpg";
// import Ame6 from "/assets/ame6.jpg";
// import Ame7 from "/assets/ame7.jpg";
// import Ame8 from "/assets/ame8.jpg";
// import Ame9 from "/assets/ame9.jpg";
// import Ame10 from "/assets/ame10.jpg";
// import Ame11 from "/assets/ame11.jpg";
// import Ame12 from "/assets/ame12.jpg";


const GallerySection = () => {
const Img1 = "/assets/img1.jpg";
const Img2 = "/assets/img2.jpg";
const Img3 = "/assets/img3.jpg";
const Img4 = "/assets/img4.jpg";
const Img5 = "/assets/img5.jpg";
const Img6 = "/assets/img6.jpg";
const Img7 = "/assets/img7.jpg";
const Img8 = "/assets/img8.jpg";
const Img9 = "/assets/img9.jpg";
const Ame1 = "/assets/ame1.jpg";
const Ame2 = "/assets/ame2.jpg";
const Ame3 = "/assets/ame3.jpg";
const Ame4 = "/assets/ame4.jpg";
const Ame5 = "/assets/ame5.jpg";
const Ame6 = "/assets/ame6.jpg";
const Ame7 = "/assets/ame7.jpg";
const Ame8 = "/assets/ame8.jpg";
const Ame9 = "/assets/ame9.jpg";
const Ame10 = "/assets/ame10.jpg";
const Ame11 = "/assets/ame11.jpg";
const Ame12 = "/assets/ame12.jpg";
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
