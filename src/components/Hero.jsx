import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown, Heart, Stars } from 'lucide-react';
import confetti from 'canvas-confetti';
import { friendData } from '../config/friendData';
import ThreeDCard from './ThreeDCard';

export default function Hero({ onStarClick, starClickCount }) {
  const scrollToIntro = (e) => {
    if (e) {
      e.preventDefault();
    }

    // Fire celebratory birthday confetti when clicking Begin the Journey
    try {
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.65 },
        colors: ['#e0aaff', '#ffb4a2', '#ffd166', '#f472b6', '#ffffff']
      });
    } catch (err) {
      console.log('Confetti error:', err);
    }

    const el = document.getElementById('oii-abi-slide');
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 20;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-purple-600/20 via-pink-600/15 to-amber-500/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center w-full">
        {/* 3D Card around text contents */}
        <ThreeDCard depth={35}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, type: 'spring', damping: 20 }}
            className="glass-card rounded-3xl p-8 sm:p-14 relative overflow-hidden border-2 border-purple-400/30 shadow-2xl shadow-purple-950/70 flex flex-col items-center"
          >
            {/* Top Scrapbook Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/15 border border-purple-400/30 backdrop-blur-md mb-8 shadow-md"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin pointer-events-none" style={{ animationDuration: '4s' }} />
              <span className="text-xs uppercase tracking-widest font-semibold text-purple-200 pointer-events-none">
                {friendData.hero.badge}
              </span>
              
              {/* Subtle Secret Star for Easter Egg */}
              <button
                type="button"
                onClick={onStarClick}
                title="A subtle star..."
                className="ml-1 text-purple-300 hover:text-amber-300 hover:scale-125 transition-all active:scale-95 cursor-pointer text-sm relative z-30 pointer-events-auto"
              >
                ✦
              </button>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.15] drop-shadow-lg"
            >
              A Little Something <br className="hidden sm:inline" />
              <span className="text-gradient-romantic drop-shadow-[0_10px_20px_rgba(236,72,153,0.3)]">For You...</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-2xl font-light text-purple-100/90 max-w-2xl mb-6 leading-relaxed font-serif italic"
            >
              "{friendData.hero.subheading}"
            </motion.p>

            {/* 1st Page Single Creator Credit Line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm text-purple-200 font-mono shadow-md backdrop-blur-md"
            >
              <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400/60 animate-pulse pointer-events-none" />
              <span>{friendData.hero.creatorCredit}</span>
            </motion.div>
          </motion.div>
        </ThreeDCard>

        {/* CTA BUTTON PLACED OUTSIDE 3D TILT CONTAINER FOR 100% CLICK & SCROLL RELIABILITY */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-4 mt-8 relative z-30 pointer-events-auto"
        >
          <a
            href="#oii-abi-slide"
            onClick={scrollToIntro}
            className="group relative inline-flex items-center gap-3 px-9 py-4 sm:px-11 sm:py-4.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-amber-400 text-white font-heading font-bold text-lg sm:text-xl shadow-2xl shadow-pink-600/50 hover:shadow-pink-500/70 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden ring-2 ring-white/40 z-30 pointer-events-auto select-none"
          >
            <Stars className="w-5 h-5 text-amber-200 animate-pulse pointer-events-none" />
            <span className="relative z-10 pointer-events-none">{friendData.hero.ctaButton}</span>
            <div className="absolute inset-0 bg-white/25 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
          </a>

          {/* Hint indicator */}
          <a
            href="#oii-abi-slide"
            onClick={scrollToIntro}
            className="flex items-center gap-1.5 text-xs text-purple-300/80 hover:text-amber-200 font-mono uppercase tracking-widest mt-1 cursor-pointer transition-colors z-30 pointer-events-auto"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="flex items-center gap-1.5 pointer-events-none"
            >
              <ArrowDown className="w-3.5 h-3.5 text-pink-400 pointer-events-none" />
              <span>Click to reveal the surprise</span>
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
