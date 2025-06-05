
import React from 'react';

const MinimalistBirthdayMessage = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
      <div className="text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-light text-white mb-2 tracking-wide">
          Happy Birthday
        </h1>
        <h2 className="text-3xl md:text-5xl font-extralight text-white/90 mb-8">
          Samiksha 
        </h2>
      </div>
    </div>
  );
};

export default MinimalistBirthdayMessage;
