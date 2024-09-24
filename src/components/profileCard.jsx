import React from 'react';
import 'tailwindcss/tailwind.css';
import profile from "/assets/profile.jpg"; // Assuming the image is locally available
import profile2 from "/assets/profile2.jpg";
import profile3 from "/assets/profile3.png";

const ProfileChairmanCard = () => {
  return (
    <div className="flex justify-center items-center py-8 bg-gray-100">
      {/* Profile Card */}
      <div className="bg-white shadow-lg border-4 border-gray-300 rounded-lg overflow-hidden max-w-6xl flex flex-col lg:flex-row">
        
        {/* Left Section: Main Image with Border */}
        <div className="relative w-full lg:w-1/3 h-full lg:h-auto border-4 border-black p-2">
          {/* Inner Decorative Border */}
          <div className="h-full w-full border-4 p-2 rounded-lg bg-gray-200">
            <img 
              src={profile} 
              alt="Profile" 
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        </div>

        {/* Right Section: Two Vertical Images and Content */}
        <div className="w-full lg:w-2/3 flex flex-col lg:flex-row">
          {/* Two Vertical Images */}
          <div className="lg:w-1/3 flex flex-col">
            {/* Image 1 with Borders */}
            <div className="h-48 lg:h-1/2 p-2 border-4 border-black">
              <div className="h-full w-full border-4 rounded-lg bg-gray-200">
                <img 
                  src={profile2} 
                  alt="Profile" 
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
            </div>
            {/* Image 2 with Borders */}
            <div className="h-48 lg:h-1/2 p-2 border-4 border-black">
              <div className="h-full w-full border-4 rounded-lg bg-gray-200">
                <img 
                  src={profile3} 
                  alt="Profile" 
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-2/3 bg-black p-6 flex flex-col justify-center text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-white">Mr. Ashok Kumar</h2>
            <h3 className="text-lg lg:text-xl font-semibold mb-4 text-white">(President Awardee)</h3>
            <p className="text-sm lg:text-base leading-relaxed mb-4 text-white">
              Retd. Founder Principal D.A.V P.S, Hazaribagh <br />
              Chairman, Samaritan Welfare & Educational Foundation <br />
              Chairman, Dream Catchers Play School, Hazaribagh & <br />
              State Coordinator, VVM, Jharkhand
            </p>

            {/* Additional Information */}
            <p className="text-base mb-4 text-white">
              DAV Public School Hazaribagh started in 1992 and Mr. Ashok Kumar was its first principal. 
              Under his visionary leadership, the school achieved remarkable heights. His steadfast guidance 
              and unwavering dedication have transformed the school into a beacon of academic excellence and 
              holistic development.
            </p>

            {/* Awards Section */}
            <div className="mt-4">
              <p className="text-xl font-bold mb-2 text-white">Awards:</p>
              <ul className="list-disc list-inside text-base text-white">
                <li>DAV Hansraj Best Principal Award 20.04.2010.</li>
                <li>Prime Minister felicitated Ashok Kumar on 04.09.2014.</li>
                <li>President of India His Excellency Shri Pranav Mukherjee conferred National Award for the teachers on 05.09.2014.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileChairmanCard;
