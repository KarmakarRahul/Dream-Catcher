import React from 'react';

const ChairmanAndAcademics = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-8">
        {/* Chairman's Desk Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            <span className="border-l-4 border-yellow-400 pl-2">From the Desk of Chairman</span>
          </h2>
          <p className="text-lg text-gray-600">
            At "DREAM CATCHERS", we understand that each child is unique and brings their own set of strengths, interests, and abilities. Our experienced and dedicated staff is committed to creating a warm, supportive community where your child can thrive, socially, emotionally, and academically. Our play-based curriculum is designed to ignite curiosity, encourage creativity and develop a love for learning. Through carefully planned activities and a rich variety of experiences, we aim to lay a strong foundation for your child's future education. We value the partnership with parents and believe in open communication to support your child's journey.
          </p>
        </div>
        
        {/* Academics Section */}
        <div className="bg-blue-100 py-12 px-8">
          <h2 className="text-2xl font-bold mb-4">
            <span className="border-l-4 border-yellow-400 pl-2">Academics</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">CBSE</p>
          <div className="flex flex-col md:flex-row items-start">
            <div className="flex-1 mb-8 md:mb-0 md:mr-8">
              <h3 className="text-xl font-bold mb-2">Streams Offered</h3>
              <p className="text-lg text-gray-600">Play, Nursery, LKG & UKG</p>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Medium(s) of Instruction</h3>
              <p className="text-lg text-gray-600">English</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairmanAndAcademics;
