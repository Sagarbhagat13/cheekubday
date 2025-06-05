
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Play, Pause } from 'lucide-react';

interface ImageSlideshowProps {
  onComplete: () => void;
}

const ImageSlideshow = ({ onComplete }: ImageSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    {
      url: '/images/PHOTO-2025-06-04-23-54-27.jpg',
      caption: 'Beautiful moments together'
    },
    {
     url: '/images/IMG_4365 2.JPG',
      caption: 'Your lovely smile'
    },
    {
     url: '/images/PHOTO-2025-06-04-23-54-27.jpg',
      caption: 'Cozy moments at home'
    },
    {
     url: '/images/IMG_306AD7C639A8-1.jpegG',
      caption: 'Our peaceful adventures'
    },
    {
      url: '/images/PHOTO-2025-06-04-23-54-27.jpg',
      caption: 'Magical evenings together'
    },
    {
      url: '/images/PHOTO-2025-06-04-23-54-27.jpg',
      caption: 'Our happy place'
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev >= images.length - 1) {
            setTimeout(() => onComplete(), 2000);
            return prev;
          }
          return prev + 1;
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, currentIndex, images.length, onComplete]);

  const nextImage = () => {
    setCurrentIndex((prev) => {
      if (prev >= images.length - 1) {
        onComplete();
        return prev;
      }
      return prev + 1;
    });
  };

  const prevImage = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-4xl w-full">
        {/* Header with controls */}
        <div className="absolute top-0 left-0 right-0 z-10 p-6 bg-gradient-to-b from-black/50 to-transparent">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-playfair text-white">Beautiful Memories 💕</h2>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleAutoPlay}
                className="text-white hover:text-pink-300 transition-colors"
              >
                {isAutoPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
              <button
                onClick={onComplete}
                className="text-white hover:text-pink-300 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Image container */}
        <div className="relative aspect-[4/3] bg-black rounded-xl overflow-hidden shadow-2xl">
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].caption}
            className="w-full h-full object-cover animate-fade-in"
            key={currentIndex}
          />
          
          {/* Navigation buttons */}
          <button
            onClick={prevImage}
            disabled={currentIndex === 0}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Progress indicator */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
            <p className="text-white text-lg font-inter text-center mb-4">{images[currentIndex].caption}</p>
            <div className="flex justify-center space-x-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-pink-400 w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Image counter */}
        <div className="text-center mt-4">
          <span className="text-white/80 font-inter">
            {currentIndex + 1} of {images.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageSlideshow;
