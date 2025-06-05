
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const AgeCalculator = () => {
  const [timeAlive, setTimeAlive] = useState({ days: 0, hours: 0, minutes: 0 });
  const birthDate = new Date('1998-06-06T15:25:00'); // June 6th, 1998, 3:25 PM

  useEffect(() => {
    const calculateAge = () => {
      const now = new Date();
      const timeDiff = now.getTime() - birthDate.getTime();
      
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      
      setTimeAlive({ days, hours, minutes });
    };

    calculateAge();
    const interval = setInterval(calculateAge, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-butterfly-appear z-30" style={{ animationDelay: '3s' }}>
      {/* Butterfly particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-4 -left-4 text-pink-300 animate-butterfly-flutter" style={{ animationDelay: '3.2s' }}>🦋</div>
        <div className="absolute -top-2 right-8 text-purple-300 animate-butterfly-flutter" style={{ animationDelay: '3.8s' }}>🦋</div>
        <div className="absolute -bottom-2 -left-2 text-blue-300 animate-butterfly-flutter" style={{ animationDelay: '4.1s' }}>🦋</div>
        <div className="absolute -bottom-4 right-4 text-yellow-300 animate-butterfly-flutter" style={{ animationDelay: '4.5s' }}>🦋</div>
      </div>
      
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center min-w-[500px] shadow-2xl hover:bg-white/10 transition-all duration-500 animate-gentle-pulse">
        <div className="flex items-center justify-center gap-3 text-white mb-4">
          <Clock size={24} className="text-amber-300 drop-shadow-lg animate-clock-tick" />
          <h3 className="text-lg font-playfair font-light tracking-wide text-amber-200">Time of Love</h3>
        </div>
        <div className="text-white space-y-2">
          <p className="text-3xl font-playfair font-light text-amber-200 drop-shadow-md tracking-wider leading-tight animate-number-glow">
            {timeAlive.days.toLocaleString()} days
          </p>
          <p className="text-lg font-inter font-light text-white/95 tracking-wide">
            {timeAlive.hours} hours, {timeAlive.minutes} minutes
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto my-3 opacity-80 animate-line-glow"></div>
          <p className="text-sm text-white/90 mt-3 font-inter font-light tracking-wide leading-relaxed">
            ✨ Of beautiful moments together ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgeCalculator;
