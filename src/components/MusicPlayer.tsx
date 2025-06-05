
import React, { useEffect, useRef, useState } from 'react';

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Create a simple birthday song using Web Audio API
    const createBirthdaySong = () => {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Happy Birthday melody notes (simplified)
      const notes = [
        { freq: 261.63, duration: 0.5 }, // C
        { freq: 261.63, duration: 0.5 }, // C
        { freq: 293.66, duration: 1 },   // D
        { freq: 261.63, duration: 1 },   // C
        { freq: 349.23, duration: 1 },   // F
        { freq: 329.63, duration: 2 },   // E
      ];

      let currentTime = audioContext.currentTime;
      
      notes.forEach((note, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(note.freq, currentTime);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0, currentTime);
        gainNode.gain.linearRampToValueAtTime(0.3, currentTime + 0.1);
        gainNode.gain.linearRampToValueAtTime(0, currentTime + note.duration);
        
        oscillator.start(currentTime);
        oscillator.stop(currentTime + note.duration);
        
        currentTime += note.duration;
      });

      setIsPlaying(true);
      setTimeout(() => setIsPlaying(false), 6000);
    };

    // Start playing when component mounts
    createBirthdaySong();
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className={`bg-gradient-to-r from-green-400 to-blue-500 rounded-full px-6 py-3 flex items-center gap-3 shadow-lg transition-all duration-300 ${isPlaying ? 'animate-pulse scale-105' : 'opacity-75'}`}>
        <div className="flex gap-1">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-1 bg-white rounded-full transition-all duration-300 ${isPlaying ? 'animate-bounce' : ''}`}
              style={{
                height: isPlaying ? `${12 + Math.random() * 8}px` : '8px',
                animationDelay: `${i * 0.2}s`,
                animationDuration: '0.8s'
              }}
            />
          ))}
        </div>
        <span className="text-white font-semibold">
          {isPlaying ? '♪ Playing Birthday Song ♪' : '♪ Music Ready ♪'}
        </span>
      </div>
    </div>
  );
};

export default MusicPlayer;
