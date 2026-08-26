import React, { useState, useEffect } from 'react';
import { Music, Volume2, VolumeX, Disc3 } from 'lucide-react';
import { initGunaaAudio, playGunaaTheme, stopGunaaTheme, toggleGunaaTheme } from '../utils/gunaaSynth';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    initGunaaAudio();

    // Listen for custom trigger event when user clicks "Begin the Journey"
    const handleStartAudio = () => {
      playGunaaTheme((status) => setIsPlaying(status));
    };

    window.addEventListener('start-gunaa-music', handleStartAudio);

    return () => {
      window.removeEventListener('start-gunaa-music', handleStartAudio);
    };
  }, []);

  const handleToggle = () => {
    toggleGunaaTheme((status) => setIsPlaying(status));
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={handleToggle}
        title={isPlaying ? "Pause Gunaa Instrumental" : "Play Gunaa Instrumental"}
        className={`glass-pill px-4 py-2.5 rounded-full flex items-center gap-3 shadow-xl transition-all duration-300 group cursor-pointer border ${
          isPlaying 
            ? 'border-purple-400/60 shadow-purple-500/30 bg-purple-900/40' 
            : 'border-white/15 hover:border-purple-400/40'
        }`}
      >
        <div className={`relative flex items-center justify-center ${isPlaying ? 'text-purple-300' : 'text-gray-400'}`}>
          <Disc3 className={`w-5 h-5 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '3.5s' }} />
        </div>
        
        <div className="flex flex-col items-start text-left">
          <span className="text-xs font-semibold tracking-wide text-gray-200 group-hover:text-white">
            {isPlaying ? "Playing Gunaa Theme 🎵" : "Play Gunaa Theme 🎵"}
          </span>
          <span className="text-[10px] text-purple-300/80 font-mono">
            Kanmani Anbodu Instrumental
          </span>
        </div>

        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-purple-400 animate-pulse ml-1" />
        ) : (
          <VolumeX className="w-4 h-4 text-gray-400 ml-1" />
        )}
      </button>
    </div>
  );
}
