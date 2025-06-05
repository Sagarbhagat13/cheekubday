
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const GrowingHeartTree = () => {
  const [growthStage, setGrowthStage] = useState(0);
  // Enhanced stages: 0 = seed, 1 = sprout, 2 = sapling, 3 = growing tree, 4 = mature tree, 5 = heart transformation

  useEffect(() => {
    const timers = [
      setTimeout(() => setGrowthStage(1), 1000),   // Seed to sprout (1s)
      setTimeout(() => setGrowthStage(2), 2500),   // Sprout to sapling (1.5s later)
      setTimeout(() => setGrowthStage(3), 4000),   // Sapling to growing tree (1.5s later)
      setTimeout(() => setGrowthStage(4), 5500),   // Growing to mature tree (1.5s later)
      setTimeout(() => setGrowthStage(5), 7000),   // Mature to heart transformation (1.5s later)
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const renderSeed = () => (
    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
      <div className="w-4 h-4 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full animate-seed-glow shadow-lg" />
    </div>
  );

  const renderSprout = () => (
    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
      <div className="w-2 h-4 bg-gradient-to-t from-green-700 to-green-500 mx-auto animate-sprout-emerge" />
      <div className="w-4 h-4 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full" />
    </div>
  );

  const renderSapling = () => (
    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
      {/* Trunk */}
      <div className="w-1 h-12 bg-gradient-to-t from-amber-800 to-green-600 mx-auto animate-sapling-grow" />
      {/* First leaves */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-6 bg-green-500 rounded-full opacity-70 animate-leaves-appear" style={{ animationDelay: '0.5s' }} />
        <div className="w-4 h-4 bg-green-400 rounded-full absolute -left-2 top-1 opacity-60 animate-leaves-appear" style={{ animationDelay: '0.8s' }} />
        <div className="w-4 h-4 bg-green-400 rounded-full absolute -right-2 top-1 opacity-60 animate-leaves-appear" style={{ animationDelay: '1s' }} />
      </div>
      {/* Root */}
      <div className="w-4 h-4 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full" />
    </div>
  );

  const renderGrowingTree = () => (
    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
      {/* Thicker trunk */}
      <div className="w-2 h-20 bg-gradient-to-t from-amber-900 via-amber-700 to-green-600 mx-auto animate-trunk-thicken" />
      {/* Expanding branches */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <div className="w-12 h-12 border-4 border-green-500 rounded-full opacity-80 animate-branches-spread" style={{ animationDelay: '0.3s' }} />
        <div className="w-8 h-8 border-3 border-green-400 rounded-full absolute top-2 left-2 opacity-60 animate-branches-spread" style={{ animationDelay: '0.6s' }} />
        <div className="w-10 h-10 bg-green-500/30 rounded-full absolute -top-1 -left-1 animate-branches-spread" style={{ animationDelay: '0.9s' }} />
      </div>
      {/* Root system */}
      <div className="w-5 h-5 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full" />
    </div>
  );

  const renderMatureTree = () => (
    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
      {/* Full trunk */}
      <div className="w-3 h-24 bg-gradient-to-t from-amber-900 via-amber-700 to-amber-600 mx-auto rounded-t-lg" />
      {/* Full crown - circular before heart transformation */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-90" />
        <div className="w-16 h-16 bg-gradient-to-br from-green-300 to-green-500 rounded-full absolute top-2 left-2 opacity-70" />
        <div className="w-12 h-12 bg-gradient-to-br from-green-200 to-green-400 rounded-full absolute top-4 left-4 opacity-50" />
      </div>
      {/* Strong root system */}
      <div className="w-6 h-6 bg-gradient-to-br from-amber-800 to-amber-900 rounded-full" />
    </div>
  );

  const renderHeartTree = () => (
    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
      {/* Trunk */}
      <div className="w-4 h-28 bg-gradient-to-t from-amber-900 via-amber-700 to-amber-600 mx-auto rounded-t-lg shadow-lg" />
      
      {/* Heart-shaped crown */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6">
        {/* Left heart lobe */}
        <div className="absolute -left-6 top-2 w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full animate-heart-crown-left shadow-lg" />
        {/* Right heart lobe */}
        <div className="absolute right-6 top-2 w-12 h-12 bg-gradient-to-bl from-emerald-400 to-emerald-600 rounded-full animate-heart-crown-right shadow-lg" />
        {/* Heart point */}
        <div className="absolute left-0 top-6 w-0 h-0 border-l-6 border-r-6 border-t-12 border-l-transparent border-r-transparent border-t-emerald-500 animate-heart-crown-point shadow-lg" />
        
        {/* Magical floating hearts */}
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            size={12 + Math.random() * 10}
            className="absolute text-pink-300 fill-current animate-magical-particles"
            style={{
              left: `${-25 + Math.random() * 70}px`,
              top: `${-15 - Math.random() * 40}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Root system */}
      <div className="w-6 h-6 bg-gradient-to-br from-amber-900 to-amber-950 rounded-full shadow-lg" />
      
      {/* Enhanced magical sparkles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-full animate-sparkle shadow-sm"
          style={{
            left: `${-40 + Math.random() * 100}px`,
            top: `${-50 - Math.random() * 80}px`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
      {growthStage === 0 && renderSeed()}
      {growthStage === 1 && renderSprout()}
      {growthStage === 2 && renderSapling()}
      {growthStage === 3 && renderGrowingTree()}
      {growthStage === 4 && renderMatureTree()}
      {growthStage >= 5 && renderHeartTree()}
    </div>
  );
};

export default GrowingHeartTree;
