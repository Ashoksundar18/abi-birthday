import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, X, Heart, Star } from 'lucide-react';
import { friendData } from '../config/friendData';

export default function EasterEggModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      // Trigger canvas-confetti burst
      const end = Date.now() + 2 * 1000;
      const colors = ['#e0aaff', '#ffb4a2', '#ffd166', '#ffffff'];

      (function frame() {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.8, y: 30, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-md w-full glass-card rounded-3xl p-8 text-center border border-amber-400/30 shadow-2xl shadow-purple-900/40"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Star Icon Badge */}
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-400 to-pink-500 mx-auto flex items-center justify-center text-white shadow-lg shadow-amber-500/20 mb-6 animate-bounce">
            <Star className="w-7 h-7 fill-white" />
          </div>

          <span className="text-xs uppercase tracking-widest font-semibold text-amber-300 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-3 inline-block">
            {friendData.easterEgg.secretMessageHeading}
          </span>

          <h3 className="font-heading text-2xl font-bold text-white mb-4">
            Secret Feature Found!
          </h3>

          <p className="text-lg font-serif text-purple-100/90 leading-relaxed mb-6 whitespace-pre-line">
            "{friendData.easterEgg.secretMessageText}"
          </p>

          <p className="text-xs text-gray-400 font-mono mb-6">
            {friendData.easterEgg.subtext}
          </p>

          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-sm shadow-md hover:opacity-90 transition-opacity cursor-pointer"
          >
            Close & Keep Exploring ✨
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
