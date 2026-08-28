import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import ThreeDCard from './ThreeDCard';

export default function OiiAbiSlide() {
  return (
    <section id="oii-abi-slide" className="relative min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-r from-pink-500/25 via-purple-500/25 to-amber-500/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Aesthetic Background Watermark Text positioned high up */}
      <div className="absolute top-12 inset-x-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="font-handwriting text-7xl sm:text-[12rem] md:text-[14rem] font-extrabold text-pink-300/15 block whitespace-nowrap tracking-wider rotate-[-4deg] filter drop-shadow-2xl">
          oii Abi... ✨
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        <ThreeDCard depth={55}>
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, type: 'spring', damping: 20 }}
            className="rounded-3xl p-6 sm:p-14 relative overflow-hidden border-2 border-pink-400/70 shadow-2xl shadow-purple-950/90 min-h-[550px] sm:min-h-[640px] flex flex-col justify-between items-center group"
          >
            {/* 100% BRIGHT CRYSTAL CLEAR BACKGROUND PHOTO - ALIGNED SO FACE IS 100% UNCOVERED */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/oii_abi_photo.jpg"
                alt="Abi Background Photo"
                className="w-full h-full object-cover object-center opacity-100 scale-105 group-hover:scale-110 transition-transform duration-1000 pointer-events-none select-none"
              />
              {/* Soft Gradient Overlay for text legibility at top and bottom only */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/75" />
            </div>

            {/* TOP HEADER CONTENT (POSITIONED ABOVE FACE SO FACE IS 100% CLEAR) */}
            <div className="relative z-10 w-full flex flex-col items-center pt-2">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/60 border border-pink-400/70 text-pink-200 text-xs font-semibold uppercase tracking-widest mb-4 backdrop-blur-md shadow-xl">
                <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
                <span>SPECIAL MEMORY SLIDE</span>
              </div>

              {/* SLEEK TITLE AT TOP (NEVER BLOCKS FACE) */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="inline-block px-6 py-2 rounded-2xl bg-black/50 border border-pink-400/50 backdrop-blur-md shadow-2xl"
              >
                <h2 className="font-handwriting text-5xl sm:text-7xl md:text-8xl font-extrabold text-gradient-romantic tracking-wide drop-shadow-[0_4px_12px_rgba(0,0,0,1)] leading-none">
                  oii Abi... ✨
                </h2>
              </motion.div>
            </div>

            {/* BOTTOM FOOTER CONTENT (POSITIONED BELOW FACE SO FACE IS 100% CLEAR) */}
            <div className="relative z-10 w-full flex flex-col items-center pb-2">
              <p className="text-lg sm:text-2xl font-serif italic text-amber-100 font-light drop-shadow-[0_4px_16px_rgba(0,0,0,1)] leading-snug max-w-xl mx-auto mb-6">
                "A small corner of the internet made dedicated especially for you."
              </p>

              {/* Bottom Accent Decor */}
              <div className="flex items-center justify-center gap-4 text-pink-400 drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
                <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-pink-400" />
                <Heart className="w-6 h-6 fill-pink-400 animate-pulse" />
                <div className="h-[2px] w-24 bg-gradient-to-l from-transparent to-pink-400" />
              </div>
            </div>
          </motion.div>
        </ThreeDCard>
      </div>
    </section>
  );
}
