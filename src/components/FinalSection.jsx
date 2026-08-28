import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { friendData } from '../config/friendData';
import ThreeDCard from './ThreeDCard';

export default function FinalSection() {
  const scrollToTop = (e) => {
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#e0aaff', '#ffb4a2', '#ffd166', '#ffffff']
      });
    } catch (err) {
      console.log('Confetti error:', err);
    }

    if (e) {
      e.preventDefault();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative py-28 px-6 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <ThreeDCard depth={45}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, type: 'spring', damping: 20 }}
            className="glass-card rounded-3xl p-8 sm:p-16 relative overflow-hidden border-2 border-purple-400/30 shadow-2xl shadow-purple-950/80 flex flex-col items-center"
          >
            {/* Glowing Backdrop Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-600/30 via-pink-600/25 to-amber-500/20 rounded-full blur-[130px] pointer-events-none z-0" />

            {/* Floating Heart Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 flex items-center justify-center text-white shadow-2xl shadow-pink-500/40 mb-8 border-2 border-white/40 group hover:scale-110 transition-transform relative z-10"
            >
              <Heart className="w-10 h-10 fill-white/90 animate-pulse pointer-events-none" />
            </motion.div>

            {/* Large Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-md relative z-10"
            >
              {friendData.closingSection.heading}
            </motion.h2>

            {/* Signature Line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-2xl font-serif text-purple-200/90 italic mb-10 max-w-xl font-light relative z-10"
            >
              {friendData.closingSection.signature}
            </motion.p>

            {/* Replay Button (Hybrid Anchor Link for 100% reliability) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative z-30 pointer-events-auto"
            >
              <a
                href="#"
                onClick={scrollToTop}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-amber-400 text-white font-heading font-semibold text-base sm:text-lg shadow-xl shadow-purple-900/40 hover:shadow-pink-500/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-white/30 group relative z-30 pointer-events-auto select-none"
              >
                <RotateCcw className="w-5 h-5 text-amber-200 group-hover:-rotate-180 transition-transform duration-600 pointer-events-none" />
                <span className="pointer-events-none">{friendData.closingSection.replayBtn}</span>
              </a>
            </motion.div>
          </motion.div>
        </ThreeDCard>

        {/* Footer Credit */}
        <div className="mt-16 pt-8 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-between text-xs text-purple-300/70 font-mono gap-2 relative z-10">
          <span>Made for {friendData.name}</span>
          <span>Personal Digital Scrapbook • 2026</span>
        </div>
      </div>
    </section>
  );
}
