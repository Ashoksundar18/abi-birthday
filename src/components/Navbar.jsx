import React, { useState, useEffect } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { friendData } from '../config/friendData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 40);
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      scrolled ? 'py-3 bg-[#0b0a10]/80 backdrop-blur-md border-b border-white/5' : 'py-5 bg-transparent'
    }`}>
      {/* Scroll progress bar */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-400 to-amber-300 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
            <Heart className="w-4 h-4 fill-white/80" />
          </div>
          <span className="font-heading font-semibold text-lg tracking-tight text-white/90 group-hover:text-purple-200 transition-colors">
            For {friendData.name} <span className="text-purple-400 font-normal text-sm">✨</span>
          </span>
        </a>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-purple-300/80 font-medium px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            Personal Scrapbook
          </span>
        </div>
      </div>
    </header>
  );
}
