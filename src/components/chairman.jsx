import React from 'react';
import img2 from "/assets/img2.jpg";

const ChairmanSection = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img 
            src={img2} 
            alt="Chairman" 
            className="w-full md:w-1/3 h-auto object-cover"
          />
          <div className="p-8 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">Mr. Ashok Kumar</h2>
            <p className="text-lg font-semibold mb-4">(President Awardee)</p>
            <p className="text-base mb-4">
              Retd. Founder Principal D.A.V P.S, Hazaribagh <br/>
              Chairman, Samaritan Welfare & Educational Foundation <br/>
              Chairman, Dream Catchers Play School, Hazaribagh & State Coordinator, VVM, Jharkhand
            </p>
            <p className="text-base mb-4">
              DAV Public School Hazaribagh started in 1992 and he was the first principal of DAV. Under his visionary leadership, 
              the school achieved remarkable heights. His steadfast guidance and unwavering dedication have transformed the 
              school into a beacon of academic excellence and holistic development.
            </p>
            <p className="text-xl font-bold mb-4">Awards:</p>
            <ul className="list-disc list-inside text-base mb-4">
              <li>DAV Hansraj Best Principal Award 20.04.2010.</li>
              <li>Prime Minister felicitated Ashok Kumar on 04.09.2014.</li>
              <li>President of India His Excellency Shri Pranav Mukherjee conferred National Award for the teachers on 05.09.2014.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairmanSection;
