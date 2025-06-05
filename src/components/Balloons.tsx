
import React from 'react';

const Balloons = () => {
  const balloonColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'];

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-balloon-rise"
          style={{
            left: `${10 + Math.random() * 80}%`,
            bottom: '-150px',
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${6 + Math.random() * 3}s`,
            animationFillMode: 'forwards'
          }}
        >
          {/* Balloon */}
          <div
            className="w-12 h-16 rounded-full relative shadow-lg transform hover:scale-110 transition-transform"
            style={{ backgroundColor: balloonColors[i % balloonColors.length] }}
          >
            {/* Balloon highlight */}
            <div className="absolute top-2 left-2 w-3 h-4 bg-white/30 rounded-full" />
          </div>
          
          {/* String */}
          <div className="w-0.5 h-16 bg-gray-600 mx-auto opacity-80" />
        </div>
      ))}
      
      {/* Confetti falling from top */}
      {[...Array(50)].map((_, i) => (
        <div
          key={`confetti-${i}`}
          className="absolute w-2 h-2 animate-confetti-fall"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-10px',
            backgroundColor: balloonColors[Math.floor(Math.random() * balloonColors.length)],
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
            animationFillMode: 'forwards'
          }}
        />
      ))}
    </div>
  );
};

export default Balloons;
