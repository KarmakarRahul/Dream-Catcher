import React, { useState } from 'react';

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
  const Cele1 = "/assets/cele1.jpg";
  const Cele2 = "/assets/cele2.jpg";
  const Cele3 = "/assets/cele3.jpg";
  const Cele4 = "/assets/cele4.jpg";
  const Cele5 = "/assets/cele5.jpg";
  const Cele6 = "/assets/cele6.jpg";
  const Cele7 = "/assets/cele7.jpg";
  const Cele8 = "/assets/cele8.jpg";
  const Cele9 = "/assets/cele9.jpg";
  const Cele10 = "/assets/cele10.jpg";
  const Cele11 = "/assets/cele11.jpg";
  const Cele12 = "/assets/cele12.jpg";

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

  const Celebrations = [
    Cele1,
    Cele2,
    Cele3,
    Cele4,
    Cele5,
    Cele6,
    Cele7,
    Cele8,
    Cele9,
    Cele10,
    Cele11,
    Cele12,
  ];

  const [isCelebrationsExpanded, setIsCelebrationsExpanded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpand, setIsExpand] = useState(false);

  const celebrationImages = isCelebrationsExpanded ? Celebrations : Celebrations.slice(0, 3);
  const displayedImages = isExpanded ? allImages : allImages.slice(0, 3);
  const amenitiesImages = isExpand ? Amenities : Amenities.slice(0, 3);

  return (
    <>
      {/* Celebrations Section */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-2xl font-bold mb-4">
            <span className="border-l-4 border-yellow-400 pl-2">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">Recent Events</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {celebrationImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Celebration item ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
          <div className="text-center">
            {!isCelebrationsExpanded ? (
              <button
                className="bg-yellow-400 text-black py-2 px-4 rounded-full text-lg font-bold"
                onClick={() => setIsCelebrationsExpanded(true)}
              >
                View All
              </button>
            ) : (
              <button
                className="bg-yellow-400 text-black py-2 px-4 rounded-full text-lg font-bold"
                onClick={() => setIsCelebrationsExpanded(false)}
              >
                Back
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-8">
          {/* <h2 className="text-2xl font-bold mb-4">
            <span className="border-l-4 border-yellow-400 pl-2">Gallery</span>
          </h2> */}
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

      {/* Amenities Section */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-lg text-gray-600 mb-8">Amenities</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {amenitiesImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Amenity item ${index + 1}`}
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
