
import React, { useState, useEffect } from 'react';
import { Heart, Clock } from 'lucide-react';

const AnimatedHeartTree = () => {
  const [growthStage, setGrowthStage] = useState(0);
  const [showClock, setShowClock] = useState(false);
  const [birthTime] = useState(new Date('1990-01-01T10:30:00'));

  useEffect(() => {
    // Stage 1: Start with small heart (immediate)
    // Stage 2: Grow trunk (0.5s)
    const timer1 = setTimeout(() => setGrowthStage(1), 500);
    
    // Stage 3: Heart transforms to tree base (1s)
    const timer2 = setTimeout(() => setGrowthStage(2), 1000);
    
    // Stage 4: Hearts start appearing (1.5s)
    const timer3 = setTimeout(() => setGrowthStage(3), 1500);
    
    // Stage 5: Clock appears (4.5s)
    const timer4 = setTimeout(() => setShowClock(true), 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none">
      {/* Growing trunk */}
      <div 
        className={`absolute bottom-0 right-20 w-8 bg-gradient-to-t from-amber-800 to-amber-600 rounded-t-lg transition-all duration-1000 ${
          growthStage >= 1 ? 'h-32 animate-grow-trunk' : 'h-0'
        }`} 
      />
      
      {/* Initial small heart that transforms */}
      {growthStage < 2 && (
        <Heart
          size={growthStage === 0 ? 24 : 32}
          className="absolute bottom-32 right-16 text-red-400 fill-current animate-heart-to-tree transition-all duration-500"
        />
      )}

      {/* Tree crown with growing hearts */}
      {growthStage >= 2 && (
        <div className="absolute bottom-24 right-4">
          {[...Array(15)].map((_, i) => (
            <Heart
              key={i}
              size={24 + Math.random() * 16}
              className={`absolute text-red-400 fill-current transition-all duration-500 ${
                growthStage >= 3 ? 'animate-heart-bloom opacity-100' : 'opacity-0 scale-0'
              }`}
              style={{
                left: `${-20 + Math.random() * 60}px`,
                top: `${-40 - Math.random() * 80}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`,
                transform: `rotate(${Math.random() * 30 - 15}deg)`
              }}
            />
          ))}
          
          {/* Magical sparkles during growth */}
          {growthStage >= 2 && growthStage < 4 && (
            <>
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-ping"
                  style={{
                    left: `${-30 + Math.random() * 80}px`,
                    top: `${-50 - Math.random() * 100}px`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${0.5 + Math.random() * 0.5}s`
                  }}
                />
              ))}
            </>
          )}
        </div>
      )}

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

export default AnimatedHeartTree;
