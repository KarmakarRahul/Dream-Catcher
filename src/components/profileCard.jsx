import React from 'react';
import 'tailwindcss/tailwind.css';
import profile from "../assets/profile.jpg"

const ProfileCard = () => {
  return (
    <div className="flex justify-center items-center py-8 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
        <div className="w-1/3">
          <img 
            src={profile} 
            alt="Profile" 
            className="object-cover w-full h-full"
            style={{ borderRadius: '8px 0 0 8px' }}
          />
        </div>
        <div className="w-2/3 bg-black text-white p-6 flex flex-col justify-center" style={{ borderRadius: '0 8px 8px 0' }}>
          <h2 className="text-2xl font-bold mb-2">Mr. Ashok Kumar</h2>
          <h3 className="text-xl mb-4">(President Awardee)</h3>
          <p className="text-md">
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
