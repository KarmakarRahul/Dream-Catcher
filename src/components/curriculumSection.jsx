import React from 'react';
import 'tailwindcss/tailwind.css';
import curriculum from "../assets/curriculum.jpg";
const CurriculumSection = () => {
  return (
    <section className="bg-gray-100 py-12 flex justify-center items-center">
      <div className="max-w-6xl mx-auto">
        <img 
          src={curriculum}
          alt="Curriculum Tree" 
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default CurriculumSection;
