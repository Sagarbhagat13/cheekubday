
import React from 'react';

const AbstractBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {/* Large floating circles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`circle-${i}`}
            className="absolute rounded-full opacity-20 animate-float-slow"
            style={{
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, hsl(${Math.random() * 360}, 70%, 60%), hsl(${Math.random() * 360}, 70%, 40%))`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
        
        {/* Triangular shapes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`triangle-${i}`}
            className="absolute opacity-15 animate-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: 0,
              height: 0,
              borderLeft: `${30 + Math.random() * 40}px solid transparent`,
              borderRight: `${30 + Math.random() * 40}px solid transparent`,
              borderBottom: `${60 + Math.random() * 80}px solid hsl(${Math.random() * 360}, 60%, 50%)`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${10 + Math.random() * 5}s`,
            }}
          />
        ))}
        
        {/* Organic flowing shapes */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`organic-${i}`}
            className="absolute opacity-25 animate-morph"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${60 + Math.random() * 100}px`,
              height: `${60 + Math.random() * 100}px`,
              background: `radial-gradient(ellipse at center, hsl(${Math.random() * 360}, 70%, 60%) 0%, transparent 70%)`,
              borderRadius: `${Math.random() * 50}% ${Math.random() * 50}% ${Math.random() * 50}% ${Math.random() * 50}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${12 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>
      
      {/* Particle system */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
    </div>
  );
};

export default AbstractBackground;
