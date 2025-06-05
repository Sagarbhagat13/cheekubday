
import React, { useState, useEffect } from 'react';

const CakeSection = () => {
  const [showCake, setShowCake] = useState(false);
  const [candles, setCandles] = useState(Array(5).fill(true)); // 5 candles

  useEffect(() => {
    setShowCake(true);
  }, []);

  const blowCandle = (index: number) => {
    const newCandles = [...candles];
    newCandles[index] = false;
    setCandles(newCandles);
  };

  return (
    <div className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${showCake ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <div className="relative">
        {/* Cake base */}
        <div className="w-48 h-32 bg-gradient-to-t from-pink-300 to-pink-200 rounded-lg shadow-2xl border-4 border-pink-400">
          {/* Cake decorations */}
          <div className="absolute inset-2 bg-gradient-to-t from-white to-pink-100 rounded-lg">
            <div className="flex justify-center items-center h-full text-pink-600 font-bold text-lg">
              🎂 Happy Birthday Samiksha! 🎂
            </div>
          </div>
          
          {/* Candles */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex gap-4">
            {candles.map((isLit, index) => (
              <div key={index} className="relative">
                {/* Candle */}
                <div className="w-2 h-8 bg-yellow-200 rounded-sm border border-yellow-300" />
                
                {/* Flame */}
                {isLit && (
                  <div 
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-full animate-bounce cursor-pointer"
                    onClick={() => blowCandle(index)}
                    style={{ animationDuration: '0.5s' }}
                  />
                )}
                
                {/* Smoke when blown */}
                {!isLit && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gray-300 opacity-50 rounded-full animate-fade-in" />
                )}
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-center text-white mt-4 text-sm">
          {candles.some(c => c) ? 'Click the flames to blow out candles! 🕯️' : 'Make a wish! ✨'}
        </p>
      </div>
    </div>
  );
};

export default CakeSection;
