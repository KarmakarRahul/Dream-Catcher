import React from 'react';
import 'tailwindcss/tailwind.css';
import imgs1 from "/assets/imgs1.jpg";
import imgs2 from "/assets/imgs2.jpg";
import imgs3 from "/assets/imgs3.jpg";

const Slider = () => {
  const images = [imgs1, imgs2, imgs3];

  return (
    <div className="flex justify-center items-center space-x-6 p-4 bg-gray-100">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative w-1/3 transition-transform duration-300 ease-in-out transform hover:scale-110"
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;
