import React from 'react';
import img2 from "../assets/img2.jpg"

const ChairmanSection = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <img src={img2} alt="Dummy" className="w-full h-auto rounded" />
          <img src={img2} alt="Dummy" className="w-full h-auto rounded" />
          <img src={img2} alt="Dummy" className="w-full h-auto rounded" />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Know our Chairman</h2>
          <p className="text-lg mb-4">
            Our Chairman <strong>Mr. Ashok Kumar (President Awardee)</strong> is the State Coordinator of VVM Jharkhand.
          </p>
          <p className="mb-8">
            DAV Public School Hazaribagh started 1992 and he was the first principal of DAV. Under his visionary leadership, 
            the school had achieved remarkable heights. His steadfast guidance and unwavering dedication have transformed the 
            school into a beacon of academic excellence and holistic development.
          </p>
          <p className="text-lg font-bold">
            Awards:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>DAV Hansraj Best Principal Award 20.04.2010.</li>
            <li>Prime Minister felicitated Ashok Kumar on 04.09.2014.</li>
            <li>President of India His Excellency Shri Pranav Mukherjee conferred National Award for the teachers on 05.09.2014.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChairmanSection;
