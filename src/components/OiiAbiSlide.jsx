import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Stars } from 'lucide-react';
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
            className="rounded-3xl p-10 sm:p-24 relative overflow-hidden border-2 border-pink-400/60 shadow-2xl shadow-purple-950/90 min-h-[520px] sm:min-h-[600px] flex flex-col items-center justify-between group"
          >
            {/* PHOTO USED DIRECTLY AS CARD BACKGROUND */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/oii_abi_photo.jpg"
                alt="Abi Background Photo"
                className="w-full h-full object-cover object-center opacity-45 mix-blend-luminosity scale-105 group-hover:scale-110 transition-transform duration-1000 pointer-events-none select-none"
              />
              {/* Soft Gradient Overlay for crisp text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a10] via-[#0b0a10]/75 to-[#0b0a10]/50" />
            </div>

            {/* CARD FOREGROUND CONTENT */}
            <div className="relative z-10 w-full flex flex-col items-center">
              {/* Subtle Ambient Top Tag */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-pink-500/25 border border-pink-400/60 text-pink-200 text-xs font-semibold uppercase tracking-widest mb-8 backdrop-blur-md shadow-lg shadow-pink-500/20">
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
                <h2 className="font-handwriting text-6xl sm:text-8xl md:text-[9.5rem] font-extrabold text-gradient-romantic tracking-wide drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)] leading-none">
                  oii Abi... ✨
                </h2>
              </motion.div>
            </div>

            {/* Subtitle & Accent Footer */}
            <div className="relative z-10 w-full flex flex-col items-center">
              <p className="text-xl sm:text-3xl font-serif italic text-amber-100 max-w-xl mx-auto mb-8 font-light drop-shadow-lg leading-snug">
                "A small corner of the internet made dedicated especially for you."
              </p>

              {/* Bottom Accent Decor */}
              <div className="flex items-center justify-center gap-4 text-pink-400">
                <div className="h-[1.5px] w-24 bg-gradient-to-r from-transparent to-pink-400" />
                <Heart className="w-6 h-6 fill-pink-400 animate-pulse" />
                <div className="h-[1.5px] w-24 bg-gradient-to-l from-transparent to-pink-400" />
              </div>
            </div>
          </motion.div>
        </ThreeDCard>
      </div>
    </section>
  );
}
