import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Heart, Sparkles } from 'lucide-react';
import { friendData } from '../config/friendData';

export default function FinalSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative py-28 px-6 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />

        {/* Floating Heart Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 flex items-center justify-center text-white shadow-xl shadow-purple-500/30 mb-8"
        >
          <Heart className="w-8 h-8 fill-white/90" />
        </motion.div>

        {/* Large Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight"
        >
          {friendData.closingSection.heading}
        </motion.h2>

        {/* Signature Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-2xl font-serif text-purple-200/80 italic mb-12"
        >
          {friendData.closingSection.signature}
        </motion.p>

        {/* Replay Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          onClick={scrollToTop}
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-medium text-sm sm:text-base backdrop-blur-md shadow-lg hover:border-purple-400/40 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
        >
          <RotateCcw className="w-4 h-4 text-purple-300 group-hover:-rotate-180 transition-transform duration-500" />
          <span>{friendData.closingSection.replayBtn}</span>
        </motion.button>

        {/* Footer Credit */}
        <div className="mt-20 pt-8 border-t border-white/5 w-full flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-mono gap-2">
          <span>Made for {friendData.name}</span>
          <span>Personal Digital Scrapbook • 2026</span>
        </div>
      </div>
    </section>
  );
}
