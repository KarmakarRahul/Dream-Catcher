import React from 'react';
import 'tailwindcss/tailwind.css';
import profile from "../assets/profile.jpg";

const ProfileChairmanCard = () => {
  return (
    <div className="flex justify-center items-center py-8 bg-gray-100">
      {/* Profile Card */}
      <div className="bg-black text-white shadow-lg border-4 border-black rounded-lg overflow-hidden max-w-md lg:max-w-4xl flex flex-col lg:flex-row">
        {/* Profile Image */}
        <div className="w-full lg:w-1/3 h-64 lg:h-auto">
          <img 
            src={profile} 
            alt="Profile" 
            className="object-cover w-full h-full"
          />
        </div>

        {/* Profile Information */}
        <div className="w-full lg:w-2/3 bg-gray-900 p-6 flex flex-col justify-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Mr. Ashok Kumar</h2>
          <h3 className="text-lg lg:text-xl font-semibold mb-4">(President Awardee)</h3>
          <p className="text-sm lg:text-base leading-relaxed mb-4">
            Retd. Founder Principal D.A.V P.S, Hazaribagh <br />
            Chairman, Samaritan Welfare & Educational Foundation <br />
            Chairman, Dream Catchers Play School, Hazaribagh & <br />
            State Coordinator, VVM, Jharkhand
          </p>

          {/* Additional Information */}
          <p className="text-base mb-4">
            DAV Public School Hazaribagh started in 1992 and Mr. Ashok Kumar was its first principal. 
            Under his visionary leadership, the school achieved remarkable heights. His steadfast guidance 
            and unwavering dedication have transformed the school into a beacon of academic excellence and 
            holistic development.
          </p>

          {/* Awards Section */}
          <div className="mt-4">
            <p className="text-xl font-bold mb-2">Awards:</p>
            <ul className="list-disc list-inside text-base">
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

export default ProfileChairmanCard;
