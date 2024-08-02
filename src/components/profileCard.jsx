import React from 'react';
import 'tailwindcss/tailwind.css';
import profile from "../assets/profile.jpg";

const ProfileCard = () => {
  return (
    <div className="flex justify-center items-center py-8 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row max-w-md md:max-w-4xl">
        <div className="md:w-1/3 w-full h-64 md:h-auto">
          <img 
            src={profile} 
            alt="Profile" 
            className="object-cover w-full h-full"
          />
        </div>
        <div className="md:w-2/3 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Mr. Ashok Kumar</h2>
          <h3 className="text-lg md:text-xl mb-4">(President Awardee)</h3>
          <p className="text-sm md:text-base leading-relaxed">
            Retd. Founder Principal D.A.V P.S, Hazaribagh <br />
            Chairman, Samaritan Welfare & Educational Foundation <br />
            Chairman, Dream Catchers Play School, Hazaribagh & <br />
            State Coordinator, VVM, Jharkhand
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
