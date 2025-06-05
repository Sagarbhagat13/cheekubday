
import React from 'react';

const BirthdayMessage = () => {
  return (
    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center animate-fade-in z-20">
      <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 bg-clip-text text-transparent mb-4 animate-pulse">
        Happy Birthday
      </h1>
      <h2 className="text-4xl md:text-6xl font-light text-white mb-8 animate-fade-in" style={{ animationDelay: '1s' }}>
        My Beautiful Cheeku
      </h2>
      <div className="text-xl text-pink-200 animate-fade-in" style={{ animationDelay: '2s' }}>
        ✨ Another year of love, laughter, and magic ✨
      </div>
    </div>
  );
};

export default BirthdayMessage;
