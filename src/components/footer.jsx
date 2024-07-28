import React from 'react';
import map from "../assets/map.jpg"

const FooterComponent = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-center space-x-6 py-4">
        <a href="#" className="text-black text-2xl"><i className="fab fa-tiktok"></i></a>
        <a href="#" className="text-black text-2xl"><i className="fab fa-facebook"></i></a>
        <a href="#" className="text-black text-2xl"><i className="fab fa-instagram"></i></a>
        <a href="#" className="text-black text-2xl"><i className="fab fa-twitter"></i></a>
      </div>
      <div className="bg-blue-700 text-white py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <img src={map} alt="Map" className="w-32 h-24 md:w-48 md:h-36 mr-4" />
            <div className="mt-4 md:mt-0">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                Connect With Us
              </h3>
              <p className="mb-2">
                <i className="fas fa-map-marker-alt mr-2"></i>
                Near PTC Chowk, Canary Hill Road Hazaribagh, Jharkhand-825301
              </p>
              <div className="mt-2 space-y-2">
                <p>Principal's Email ID</p>
                <p>School Website</p>
                <p>Click here for Official School Brochure</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Admission Open</h3>
            <p className="mb-2">Dream Catcher Play School</p>
            <p className="mb-2">Play, Nursery, LKG & UKG</p>
            <p className="mb-2">Samaritan Welfare Foundation:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;