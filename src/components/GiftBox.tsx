
import React, { useState } from 'react';
import { Gift } from 'lucide-react';

interface GiftBoxProps {
  onUnwrapped?: () => void;
}

const GiftBox = ({ onUnwrapped }: GiftBoxProps) => {
  const [isUnwrapped, setIsUnwrapped] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);

  const handleUnwrap = () => {
    setIsUnwrapped(true);
    setTimeout(() => {
      setShowPhoto(true);
      // Call the callback after the photo appears
      if (onUnwrapped) {
        setTimeout(() => {
          onUnwrapped();
        }, 2000);
      }
    }, 1000);
  };

  return (
    <div className="text-center">
      {!isUnwrapped ? (
        <div className="animate-scale-in">
          <button
            onClick={handleUnwrap}
            className="px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-2xl font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-white/20 flex items-center gap-4 mx-auto"
          >
            <Gift size={32} />
            Open Gift 🎁
          </button>
        </div>
      ) : (
        <div className="relative">
          {/* Gift box with unwrapping animation */}
          <div className="relative mx-auto w-64 h-64 mb-8">
            {/* Gift box base */}
            <div className={`absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-lg shadow-2xl transition-all duration-1000 ${isUnwrapped ? 'animate-gift-unwrap opacity-0' : ''}`}>
              {/* Gift ribbon */}
              <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg"></div>
              <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-8 bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-lg"></div>
              
              {/* Gift bow */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full shadow-lg"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-300 rounded-full"></div>
              </div>
            </div>

            {/* Photo that appears after unwrapping */}
            {showPhoto && (
              <div className="absolute inset-0 flex items-center justify-center animate-photo-reveal">
                <div className="bg-white p-4 rounded-lg shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="/Users/sagarbhagat/Documents/GitHub/cheekubday/public/images/IMG_8700.PNG"
                    alt="Special Memory"
                    className="w-48 h-32 object-cover rounded"
                  />
                  <p className="text-center text-gray-800 mt-2 font-medium">A Sweet Memory 💕</p>
                </div>
              </div>
            )}
          </div>

          {showPhoto && (
            <p className="text-white text-lg animate-fade-in mt-4">
              ✨ A precious moment captured just for you ✨
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default GiftBox;
