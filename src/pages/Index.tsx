
import React, { useState, useEffect } from 'react';
import { Heart, Music, Lightbulb, Gift, Mail, RotateCcw } from 'lucide-react';
import UniverseBackground from '../components/UniverseBackground';
import AbstractBackground from '../components/AbstractBackground';
import ForestBackground from '../components/ForestBackground';
import MusicBackground from '../components/MusicBackground';
import LightsBackground from '../components/LightsBackground';
import BalloonsBackground from '../components/BalloonsBackground';
import CakeBackground from '../components/CakeBackground';
import GiftBackground from '../components/GiftBackground';
import LetterBackground from '../components/LetterBackground';
import SlideshowBackground from '../components/SlideshowBackground';
import MinimalistBirthdayMessage from '../components/MinimalistBirthdayMessage';
import AgeCalculator from '../components/AgeCalculator';
import GrowingHeartTree from '../components/GrowingHeartTree';
import AnimatedHeartTree from '../components/AnimatedHeartTree';
import MusicPlayer from '../components/MusicPlayer';
import LightsEffect from '../components/LightsEffect';
import Balloons from '../components/Balloons';
import CakeSection from '../components/CakeSection';
import GiftBox from '../components/GiftBox';
import LoveLetterModal from '../components/LoveLetterModal';
import ImageSlideshow from '../components/ImageSlideshow';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState('initial');
  const [showMessage, setShowMessage] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [lightsOn, setLightsOn] = useState(false);
  const [balloonsReleased, setBalloonsReleased] = useState(false);
  const [showCake, setShowCake] = useState(false);
  const [giftUnwrapped, setGiftUnwrapped] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [showSlideshow, setShowSlideshow] = useState(false);

  useEffect(() => {
    if (currentScreen === 'birthday') {
      const timer = setTimeout(() => {
        setCurrentScreen('party');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const resetExperience = () => {
    setCurrentScreen('initial');
    setShowMessage(false);
    setMusicPlaying(false);
    setLightsOn(false);
    setBalloonsReleased(false);
    setShowCake(false);
    setGiftUnwrapped(false);
    setShowLetter(false);
    setShowSlideshow(false);
  };

  const handleHeartClick = () => {
    setCurrentScreen('birthday');
  };

  const handlePartyClick = () => {
    setCurrentScreen('music');
  };

  const handleMusicClick = () => {
    setMusicPlaying(true);
    setTimeout(() => setCurrentScreen('lights'), 1500);
  };

  const handleLightsClick = () => {
    setLightsOn(true);
    setTimeout(() => setCurrentScreen('balloons'), 1500);
  };

  const handleBalloonsClick = () => {
    setBalloonsReleased(true);
    setTimeout(() => setCurrentScreen('cake'), 2000);
  };

  const handleCakeClick = () => {
    setShowCake(true);
    setTimeout(() => setCurrentScreen('gift'), 2000);
  };

  const handleGiftUnwrapped = () => {
    setGiftUnwrapped(true);
    setTimeout(() => setCurrentScreen('letter'), 3000);
  };

  const handleLetterClick = () => {
    setShowLetter(true);
  };

  const handleLetterNext = () => {
    setShowLetter(false);
    setCurrentScreen('slideshow');
    setShowSlideshow(true);
  };

  const handleSlideshowComplete = () => {
    setShowSlideshow(false);
    setCurrentScreen('finale');
  };

  const renderBackground = () => {
    switch (currentScreen) {
      case 'initial':
        return <UniverseBackground />;
      case 'birthday':
        return <AbstractBackground />;
      case 'party':
        return <AbstractBackground />;
      case 'music':
        return <MusicBackground />;
      case 'lights':
        return <LightsBackground />;
      case 'balloons':
        return <BalloonsBackground />;
      case 'cake':
        return <CakeBackground />;
      case 'gift':
        return <GiftBackground />;
      case 'letter':
        return <LetterBackground />;
      case 'slideshow':
        return <SlideshowBackground />;
      case 'finale':
        return <UniverseBackground />;
      default:
        return <UniverseBackground />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {renderBackground()}
      
      {musicPlaying && <MusicPlayer />}
      {lightsOn && <LightsEffect />}
      {balloonsReleased && <Balloons />}

      {(currentScreen === 'birthday' || currentScreen === 'party') && (
        <GrowingHeartTree />
      )}

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        {currentScreen === 'initial' && (
          <div className="text-center animate-fade-in">
            <button
              onClick={handleHeartClick}
              className="group relative p-8 rounded-full bg-gradient-to-r from-pink-500/20 to-red-500/20 backdrop-blur-sm border border-white/20 hover:scale-110 transition-all duration-300 animate-pulse"
            >
              <Heart 
                size={80} 
                className="text-red-500 group-hover:text-red-400 transition-colors duration-300 fill-current" 
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/10 to-red-500/10 animate-ping"></div>
            </button>
            <p className="mt-6 text-white text-xl font-light tracking-wide opacity-80">
              Click my heart ❤️
            </p>
          </div>
        )}

        {currentScreen === 'birthday' && (
          <>
            <MinimalistBirthdayMessage />
            <AgeCalculator />
          </>
        )}

        {currentScreen === 'party' && (
          <div className="text-center animate-scale-in">
            <button
              onClick={handlePartyClick}
              className="px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-2xl font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-white/20"
            >
              Let's Party! 🎉
            </button>
          </div>
        )}

        {currentScreen === 'music' && (
          <div className="text-center animate-scale-in">
            <button
              onClick={handleMusicClick}
              className="px-12 py-6 bg-gradient-to-r from-green-500 to-blue-500 text-white text-2xl font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-white/20 flex items-center gap-4"
            >
              <Music size={32} />
              Turn On Music 🎵
            </button>
          </div>
        )}

        {currentScreen === 'lights' && (
          <div className="text-center animate-scale-in">
            <button
              onClick={handleLightsClick}
              className="px-12 py-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-2xl font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-white/20 flex items-center gap-4"
            >
              <Lightbulb size={32} />
              Turn On Lights ✨
            </button>
          </div>
        )}

        {currentScreen === 'balloons' && (
          <div className="text-center animate-scale-in">
            <button
              onClick={handleBalloonsClick}
              className="px-12 py-6 bg-gradient-to-r from-red-500 to-pink-500 text-white text-2xl font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-white/20"
            >
              Release Balloons 🎈
            </button>
          </div>
        )}

        {currentScreen === 'cake' && (
          <div className="text-center animate-scale-in">
            <button
              onClick={handleCakeClick}
              className="px-12 py-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-2xl font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-white/20 flex items-center gap-4"
            >
              <Gift size={32} />
              Cut The Cake 🎂
            </button>
            {showCake && <CakeSection />}
          </div>
        )}

        {currentScreen === 'gift' && (
          <div className="text-center animate-scale-in">
            <GiftBox onUnwrapped={handleGiftUnwrapped} />
          </div>
        )}

        {currentScreen === 'letter' && (
          <div className="text-center animate-scale-in">
            <button
              onClick={handleLetterClick}
              className="px-12 py-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-2xl font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-white/20 flex items-center gap-4"
            >
              <Mail size={32} />
              Read Love Letter 💌
            </button>
          </div>
        )}

        {currentScreen === 'finale' && (
          <div className="text-center animate-fade-in">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
              <h1 className="text-6xl font-playfair font-light text-white mb-8 tracking-wide">
                The End ✨
              </h1>
              <p className="text-xl text-white/90 mb-8 font-inter tracking-wide">
                Thank you for this magical journey together
              </p>
              <div className="flex justify-center space-x-6 mb-10">
                <span className="text-4xl animate-float">💕</span>
                <span className="text-4xl animate-float" style={{ animationDelay: '0.5s' }}>🌟</span>
                <span className="text-4xl animate-float" style={{ animationDelay: '1s' }}>💖</span>
              </div>
              <button
                onClick={resetExperience}
                className="px-10 py-4 bg-gradient-to-r from-pink-600 to-red-600 text-white text-xl font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-xl border-2 border-white/20 flex items-center gap-3 mx-auto"
              >
                <RotateCcw size={24} />
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>

      {showLetter && (
        <LoveLetterModal 
          onClose={() => setShowLetter(false)} 
          onNext={handleLetterNext}
        />
      )}
      
      {showSlideshow && (
        <ImageSlideshow onComplete={handleSlideshowComplete} />
      )}
    </div>
  );
};

export default Index;
