import React from 'react';
import 'tailwindcss/tailwind.css';

const ProfileChairmanCard = () => {
  const profile = "/assets/profile.jpg";

  return (
    <div className="flex justify-center items-center py-8 bg-gray-100">
      {/* Profile Card */}
      <div className="bg-white shadow-lg border-4 border-gray-300 rounded-lg overflow-hidden max-w-6xl flex flex-col lg:flex-row">
        {/* Left Section: Main Image with Border */}
        <div className="relative w-full lg:w-1/2 h-auto border-4 border-black p-2">
          {/* Inner Decorative Border */}
          <div className="h-full w-full border-4 p-2 rounded-lg bg-gray-200">
            <img 
              src={profile} 
              alt="Profile" 
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        </div>

        {/* Right Section: Content */}
        <div className="w-full lg:w-1/2 bg-black p-6 flex flex-col justify-center text-white">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-white">Dr M.V.V. Prasada Rao</h2>
          <h3 className="text-lg lg:text-xl font-semibold mb-4 text-white">(Chairman)</h3>
          <p className="text-sm lg:text-base leading-relaxed mb-4 text-white">
          Dr. M.V.V. Prasada Rao, Chairman of Dream Catchers, is a distinguished educationist and advisor with 37 years of extensive expertise in educational administration. A retired Director of CBSE, Dr. Rao holds an impressive academic portfolio, including an MA, MPhil, BL, BEd, and a PhD.
          </p>

          {/* Additional Information */}
          <p className="text-base mb-4 text-white">
          Throughout his illustrious career, Dr. Rao has held prominent leadership roles such as Joint Secretary and Regional Officer for the Chennai, Allahabad, Patna, Bhubaneswar, and Delhi regions. He also served as the Regional Director of the UGC (NET) Examination. Notably, he was invited by the Ministry of Education, Government of Israel, to participate in a specialized training program on study planning and curriculum development in Jerusalem.
          </p>

          {/* Awards Section */}
          <div className="mt-4">
            {/* <p className="text-xl font-bold mb-2 text-white">Awards:</p> */}
            <ul className="list-disc list-inside text-base text-white">
            In addition to his administrative achievements, Dr. Rao served as the District Program Coordinator for NSS, East Godavari, and dedicated over nine years as an NSS Program Officer, contributing significantly to community development and youth engagement.
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileChairmanCard;
