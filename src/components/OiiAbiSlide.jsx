import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import ThreeDCard from './ThreeDCard';

export default function OiiAbiSlide() {
  return (
    <section id="oii-abi-slide" className="relative min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-r from-pink-500/25 via-purple-500/25 to-amber-500/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Aesthetic Background Watermark Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="font-handwriting text-8xl sm:text-[14rem] md:text-[18rem] font-extrabold text-pink-300/20 block whitespace-nowrap tracking-wider rotate-[-4deg] filter drop-shadow-2xl">
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
            className="rounded-3xl p-10 sm:p-24 relative overflow-hidden border-2 border-pink-400/70 shadow-2xl shadow-purple-950/90 min-h-[520px] sm:min-h-[600px] flex flex-col items-center justify-between group"
          >
            {/* 100% BRIGHT CRYSTAL CLEAR BACKGROUND PHOTO */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/oii_abi_photo.jpg"
                alt="Abi Background Photo"
                className="w-full h-full object-cover object-center opacity-100 scale-105 group-hover:scale-110 transition-transform duration-1000 pointer-events-none select-none"
              />
              {/* Very minimal subtle vignette for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
            </div>

            {/* CARD FOREGROUND CONTENT WITH GLASS PROTECTION */}
            <div className="relative z-10 w-full flex flex-col items-center">
              {/* Subtle Ambient Top Tag */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/70 border border-pink-400/70 text-pink-200 text-xs font-semibold uppercase tracking-widest mb-8 backdrop-blur-md shadow-xl">
                <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
                <span>SPECIAL MEMORY SLIDE</span>
              </div>

              {/* DEDICATED BIG 3D VISIBLE TITLE "oii Abi... ✨" */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="font-handwriting text-6xl sm:text-8xl md:text-[9.5rem] font-extrabold text-gradient-romantic tracking-wide drop-shadow-[0_8px_25px_rgba(0,0,0,1)] leading-none">
                  oii Abi... ✨
                </h2>
              </motion.div>
            </div>

            {/* Subtitle & Accent Footer */}
            <div className="relative z-10 w-full flex flex-col items-center">
              <div className="bg-black/65 backdrop-blur-md border border-white/30 p-6 sm:p-8 rounded-2xl max-w-xl mx-auto mb-8 shadow-2xl">
                <p className="text-xl sm:text-3xl font-serif italic text-amber-100 font-light drop-shadow-md leading-snug">
                  "A small corner of the internet made dedicated especially for you."
                </p>
              </div>

              {/* Bottom Accent Decor */}
              <div className="flex items-center justify-center gap-4 text-pink-400">
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
