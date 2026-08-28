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
            className="relative rounded-3xl p-8 sm:p-14 border border-amber-500/30 shadow-2xl shadow-purple-950/80 overflow-hidden min-h-[500px]"
          >
            {/* PHOTO USED DIRECTLY AS CARD BACKGROUND */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src="/images/personal_letter_bg.jpg"
                alt="Abi White Saree Background Photo"
                className="w-full h-full object-cover object-center opacity-30 scale-105 transition-transform duration-700 pointer-events-none select-none"
              />
              {/* Soft Gradient Overlay for crisp text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a10] via-[#0b0a10]/85 to-[#0b0a10]/65" />
            </div>

            {/* Top Decorative Postmark / Stamp Badge */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 flex items-center gap-3 pointer-events-none opacity-90 z-10">
              <div className="border border-dashed border-amber-400/50 px-3 py-1.5 rounded text-[10px] font-mono tracking-widest text-amber-300 uppercase rotate-2 bg-black/40 backdrop-blur-md">
                {letter.stampText}
              </div>
            </div>

            {/* CARD FOREGROUND CONTENT */}
            <div className="relative z-10">
              {/* Section Heading */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3 backdrop-blur-md">
                  <Send className="w-3.5 h-3.5" />
                  <span>{letter.heading}</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white drop-shadow-md">
                  {letter.heading}
                </h2>
              </div>

              {/* Letter Body Container */}
              <div className="space-y-6 text-gray-100 text-lg sm:text-xl font-light leading-relaxed">
                <p className="font-handwriting text-3xl sm:text-4xl text-amber-200 font-semibold mb-6 drop-shadow-md">
                  {letter.salutation}
                </p>

                {letter.paragraphs.map((para, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="text-gray-100/95 text-lg sm:text-xl drop-shadow"
                  >
                    {para}
                  </motion.p>
                ))}

                {/* Funny Postscript Highlight Box */}
                <div className="my-8 p-6 rounded-2xl bg-black/40 border border-amber-400/30 backdrop-blur-md space-y-2 shadow-xl">
                  {letter.funnyPostscript.map((line, fIdx) => (
                    <p
                      key={fIdx}
                      className={fIdx === 1 
                        ? "text-xl sm:text-2xl font-bold text-purple-300 font-heading drop-shadow-sm" 
                        : fIdx === 2 
                        ? "text-lg sm:text-xl font-semibold text-amber-300 drop-shadow-sm" 
                        : "text-gray-200 drop-shadow-sm"
                      }
                    >
                      {line}
                    </p>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-300 font-mono">
                      {letter.signOff}
                    </p>
                    <p className="font-handwriting text-3xl sm:text-4xl text-pink-300 font-bold mt-1 drop-shadow">
                      From a good friend ✨
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-amber-300 text-xs font-mono bg-black/30 px-3 py-1.5 rounded-full border border-amber-400/20 backdrop-blur-sm">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Made especially for you</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </ThreeDCard>
      </div>
    </section>
  );
}
