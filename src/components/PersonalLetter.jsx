import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Send } from 'lucide-react';
import { friendData } from '../config/friendData';
import ThreeDCard from './ThreeDCard';

export default function PersonalLetter() {
  const letter = friendData.personalLetter;

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <ThreeDCard depth={40}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-b from-[#1b172a] to-[#120f1f] rounded-3xl p-8 sm:p-14 border border-amber-500/20 shadow-2xl shadow-purple-950/50 overflow-hidden"
          >
            {/* Top Decorative Postmark / Stamp Badge */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 flex items-center gap-3 pointer-events-none opacity-80">
              <div className="border border-dashed border-amber-400/40 px-3 py-1.5 rounded text-[10px] font-mono tracking-widest text-amber-300/80 uppercase rotate-2">
                {letter.stampText}
              </div>
            </div>

            {/* Section Heading */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3">
                <Send className="w-3.5 h-3.5" />
                <span>{letter.heading}</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                {letter.heading}
              </h2>
            </div>

            {/* Letter Body Container */}
            <div className="space-y-6 text-gray-200 text-lg sm:text-xl font-light leading-relaxed">
              <p className="font-handwriting text-3xl sm:text-4xl text-amber-200 font-semibold mb-6">
                {letter.salutation}
              </p>

              {letter.paragraphs.map((para, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="text-gray-200/90 text-lg sm:text-xl"
                >
                  {para}
                </motion.p>
              ))}

              {/* Funny Postscript Highlight Box */}
              <div className="my-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                {letter.funnyPostscript.map((line, fIdx) => (
                  <p
                    key={fIdx}
                    className={fIdx === 1 
                      ? "text-xl sm:text-2xl font-bold text-purple-300 font-heading" 
                      : fIdx === 2 
                      ? "text-lg sm:text-xl font-semibold text-amber-300" 
                      : "text-gray-300"
                    }
                  >
                    {line}
                  </p>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-400 font-mono">
                    {letter.signOff}
                  </p>
                  <p className="font-handwriting text-3xl sm:text-4xl text-pink-300 font-bold mt-1">
                    From a good friend ✨
                  </p>
                </div>

                <div className="flex items-center gap-2 text-amber-300/80 text-xs font-mono">
                  <Sparkles className="w-4 h-4" />
                  <span>Made especially for you</span>
                </div>
              </div>
            </div>
          </motion.div>
        </ThreeDCard>
      </div>
    </section>
  );
}
