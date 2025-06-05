
import React from 'react';

const LightsEffect = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {/* Colorful blinking lights */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-4 h-4 rounded-full animate-ping"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'][Math.floor(Math.random() * 6)],
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${1 + Math.random()}s`
          }}
        />
      ))}
      
      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-yellow-200/5 to-transparent animate-pulse" />
      
      {/* String lights */}
      <div className="absolute top-0 left-0 w-full h-8 flex justify-around items-center">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full animate-bounce"
            style={{
              backgroundColor: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7'][i % 5],
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LightsEffect;
