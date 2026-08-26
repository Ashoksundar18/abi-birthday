import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown, Heart, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';
import { friendData } from '../config/friendData';

export default function Hero({ onStarClick, starClickCount }) {
  const scrollToIntro = () => {
    // Fire celebratory birthday confetti when clicking Begin the Journey
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#e0aaff', '#ffb4a2', '#ffd166', '#ffffff']
    });

    const el = document.getElementById('oii-abi-slide');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Background Decorative Ambient Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-purple-600/15 via-pink-600/10 to-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Top Scrapbook Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-purple-500/20 backdrop-blur-md mb-8 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
          <span className="text-xs uppercase tracking-widest font-semibold text-purple-200">
            {friendData.hero.badge}
          </span>
          
          {/* Subtle Secret Star for Easter Egg */}
          <button
            onClick={onStarClick}
            title="A subtle star..."
            className="ml-1 text-purple-300 hover:text-amber-300 hover:scale-125 transition-all active:scale-95 cursor-pointer text-sm"
          >
            ✦
          </button>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.15]"
        >
          A Little Something <br className="hidden sm:inline" />
          <span className="text-gradient-romantic">For You...</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-2xl font-normal text-purple-100/80 max-w-2xl mb-4 leading-relaxed"
        >
          "{friendData.hero.subheading}"
        </motion.p>

        {/* 1st Page Single Creator Credit Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs sm:text-sm text-purple-200 font-medium shadow-sm"
        >
          <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400/40" />
          <span>{friendData.hero.creatorCredit}</span>
        </motion.div>

        {/* Call-to-action button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <button
            onClick={scrollToIntro}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 text-white font-heading font-semibold text-base sm:text-lg shadow-xl shadow-purple-900/30 hover:shadow-purple-500/40 hover:scale-105 active:scale-98 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <span className="relative z-10">{friendData.hero.ctaButton}</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          {/* Hint indicator */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-6 text-gray-400 flex flex-col items-center gap-1 cursor-pointer"
            onClick={scrollToIntro}
          >
            <span className="text-xs uppercase tracking-widest opacity-60">Scroll to explore</span>
            <ArrowDown className="w-4 h-4 text-purple-400/80" />
          </motion.div>
        </motion.div>

        {/* Easter Egg Hint feedback when clicked partially */}
        {starClickCount > 0 && starClickCount < 5 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-xs text-amber-300/70 font-mono"
          >
            ✦ Clicked {starClickCount}/5 times...
          </motion.p>
        )}
      </div>
    </section>
  );
}
