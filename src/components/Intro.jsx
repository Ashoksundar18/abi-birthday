import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Quote, PartyPopper } from 'lucide-react';
import { friendData } from '../config/friendData';
import ThreeDCard from './ThreeDCard';

export default function Intro() {
  return (
    <section id="intro" className="relative py-28 px-6 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto">
        <ThreeDCard depth={50}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl p-8 sm:p-16 relative overflow-hidden text-center border-2 border-purple-400/60 shadow-2xl shadow-purple-950/90 min-h-[500px]"
          >
            {/* 100% BRIGHT CRYSTAL CLEAR BACKGROUND PHOTO */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src="/images/happy_birthday_bg.jpg"
                alt="Abi Blue Butterfly Background Photo"
                className="w-full h-full object-cover object-top opacity-100 scale-105 transition-transform duration-700 pointer-events-none select-none"
              />
              {/* Soft Gradient Overlay for text legibility at top and bottom only */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/75" />
            </div>

            <div className="relative z-10">
              {/* Section Tag */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/70 border border-purple-400/60 text-purple-200 text-xs font-semibold uppercase tracking-widest backdrop-blur-md shadow-xl">
                  <PartyPopper className="w-4 h-4 text-amber-300 animate-bounce" />
                  <span>{friendData.intro.tag}</span>
                </div>
              </div>

              {/* Single Creator Credit Badge */}
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/70 border border-white/30 text-xs text-gray-200 font-mono backdrop-blur-md shadow-md">
                  <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400/80" />
                  {friendData.intro.creatorCredit}
                </span>
              </div>

              {/* HUGE BIG BOLD Happy Birthday Heading */}
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.15] text-gradient-romantic drop-shadow-[0_8px_25px_rgba(0,0,0,1)]"
              >
                {friendData.intro.heading}
              </motion.h2>

              <Quote className="w-10 h-10 text-purple-300 mx-auto mb-6 drop-shadow-md" />

              {/* Heartfelt Text Paragraphs inside Glass Protection Container */}
              <div className="bg-black/65 backdrop-blur-md border border-white/30 p-6 sm:p-10 rounded-2xl space-y-6 text-lg sm:text-2xl font-light text-gray-100 leading-relaxed font-sans max-w-2xl mx-auto shadow-2xl">
                {friendData.intro.textParagraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className={index === friendData.intro.textParagraphs.length - 1 
                      ? "text-purple-200 font-normal pt-2 text-xl sm:text-3xl font-heading" 
                      : ""
                    }
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Bottom Accent Icon */}
              <div className="mt-12 flex items-center justify-center gap-3 text-purple-300">
                <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-purple-400" />
                <Heart className="w-5 h-5 fill-purple-400" />
                <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-purple-400" />
              </div>
            </div>
          </motion.div>
        </ThreeDCard>
      </div>
    </section>
  );
}
