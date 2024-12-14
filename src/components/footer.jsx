import React from 'react';
// import map from "../../public/assets/map.jpg";

const FooterComponent = () => {
  // Google Maps URL for the provided address
  const googleMapsUrl = "https://maps.app.goo.gl/7et97vaQ8j7Eiz3R7";

  return (
    <div className="bg-white relative">
      <div className="flex justify-center space-x-6 py-4">
        <a href="#" className="text-black text-2xl"><i className="fab fa-tiktok"></i></a>
        <a href="#" className="text-black text-2xl"><i className="fab fa-facebook"></i></a>
        <a href="#" className="text-black text-2xl"><i className="fab fa-instagram"></i></a>
        <a href="#" className="text-black text-2xl"><i className="fab fa-twitter"></i></a>
      </div>

      <div className="bg-blue-700 text-white py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="flex flex-col gap-3 md:flex-row items-start md:items-center">
            {/* Dynamic Map Link */}
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <img 
                src="/assets/map.jpg" 
                alt="Map" 
                className="w-32 h-24 md:w-48 md:h-36 mr-4 mb-4 md:mb-0 rounded-lg border-2 border-black shadow-lg" 
              />
            </a>
            <div className="mt-4 md:mt-0">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                Connect With Us
              </h3>
              <p className="mb-2">
                <i className="fas fa-map-marker-alt mr-2"></i>
                Lal kothi compound, Gali No 1, PTC Chowk Hazaribagh, Jharkhand-825301
              </p>
              <div className="mt-2 space-y-2">
                {/* Optional Additional Information */}
                {/* <p>Principal's Email ID</p> */}
                {/* <p>School Website</p> */}
                {/* <p>Click here for Official School Brochure</p> */}
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Admission Open</h3>
            <p className="mb-2">Dream Catchers Play School</p>
            <p className="mb-2">Play, Nursery, LKG & UKG</p>
            <p className="mb-2">Managed by Samaritan Welfare Foundation</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Right Corner - Designed by P5 Digital Solutions */}
      <div className="absolute bottom-2 right-4 text-sm text-white">
        <p>
          Designed and developed by <strong>P5 Digital Solutions</strong> <span className="text-red-500">❤️</span>
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;
