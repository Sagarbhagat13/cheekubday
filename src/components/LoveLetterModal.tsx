import React from 'react';
import { X, Heart } from 'lucide-react';

interface LoveLetterModalProps {
  onClose: () => void;
  onNext: () => void;
}

const LoveLetterModal = ({ onClose, onNext }: LoveLetterModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto relative animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-purple-800 mb-2">💌 A Love Letter For You 💌</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full" />
          </div>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">My Dearest Wife,</p>
            
            <p>
              On this special day, I want you to know that you are the most incredible woman I have ever known. 
              Your smile lights up my world brighter than all the stars in the universe.
            </p>
            
            <p>
              Every moment with you feels like magic, and every day I fall in love with you all over again. 
              Your kindness, your laughter, your beautiful soul - everything about you makes my life complete.
            </p>
            
            <p>
              Thank you for being my partner, my best friend, and my greatest love. 
              I promise to cherish every moment we have together and to love you more with each passing day.
            </p>
            
            <p>
              Happy Birthday, my beautiful wife. Here's to another year of adventures, laughter, 
              and endless love together. You deserve all the happiness in the world, and I'm grateful 
              to be the one who gets to share it with you.
            </p>
            
            <div className="text-center mt-8 space-y-2">
              <p className="text-xl font-semibold text-purple-800">Forever and always yours,</p>
              <p className="text-2xl font-bold text-pink-600">Your Loving Husband ❤️</p>
            </div>
            
            <div className="flex justify-center space-x-4 mt-6">
              <span className="text-2xl">💕</span>
              <span className="text-2xl">🌹</span>
              <span className="text-2xl">💖</span>
              <span className="text-2xl">✨</span>
              <span className="text-2xl">💕</span>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={onNext}
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-xl border-2 border-white/20 flex items-center gap-3 mx-auto"
            >
              <Heart size={20} />
              View Our Beautiful Memories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveLetterModal;
