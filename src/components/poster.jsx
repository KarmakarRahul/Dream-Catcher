import React from 'react';
import poster from "/assets/poster.jpg"

const PosterComponent = () => {
  return (
    <div className="w-full bg-blue-50 rounded-lg shadow-md mx-auto mb-4">
      <div className="relative w-full">
        <img src={poster} alt="Dream Catchers Poster" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default PosterComponent;