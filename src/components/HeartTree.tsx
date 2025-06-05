
import React, { useState, useEffect } from 'react';
import { Heart, Clock } from 'lucide-react';

const HeartTree = () => {
  const [showClock, setShowClock] = useState(false);
  const [birthTime] = useState(new Date('1990-01-01T10:30:00')); // Replace with actual birth time

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowClock(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none">
      {/* Tree trunk */}
      <div className="absolute bottom-0 right-20 w-8 h-32 bg-gradient-to-t from-amber-800 to-amber-600 rounded-t-lg animate-fade-in" style={{ animationDelay: '2s' }} />
      
      {/* Heart leaves */}
      <div className="absolute bottom-24 right-4">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            size={24 + Math.random() * 16}
            className="absolute text-red-400 fill-current animate-float"
            style={{
              left: `${-20 + Math.random() * 60}px`,
              top: `${-40 - Math.random() * 80}px`,
              animationDelay: `${2 + Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              transform: `rotate(${Math.random() * 30 - 15}deg)`
            }}
          />
        ))}
      </div>

      {/* Clock showing birth time */}
      {showClock && (
        <div className="absolute top-1/2 left-20 transform -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 animate-scale-in">
          <div className="flex items-center gap-3 text-white">
            <Clock size={32} className="text-yellow-400" />
            <div>
              <p className="text-lg font-semibold">Born at</p>
              <p className="text-2xl font-bold text-yellow-400">{formatTime(birthTime)}</p>
              <p className="text-sm opacity-75">The moment magic began ✨</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeartTree;
