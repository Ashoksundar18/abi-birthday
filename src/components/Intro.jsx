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
            className="rounded-3xl p-8 sm:p-16 relative overflow-hidden text-center border-2 border-purple-400/40 shadow-2xl shadow-purple-950/80 min-h-[500px]"
          >
            {/* ATTACHED BLUE BUTTERFLY PHOTO USED DIRECTLY AS CARD BACKGROUND */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src="/images/happy_birthday_bg.jpg"
                alt="Abirami Blue Butterfly Background Photo"
                className="w-full h-full object-cover object-center opacity-35 scale-105 transition-transform duration-700 pointer-events-none select-none"
              />
              {/* Soft Gradient Mask for crisp text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a10] via-[#0b0a10]/80 to-[#0b0a10]/60" />
            </div>

            <div className="relative z-10">
              {/* Section Tag */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-200 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
                  <PartyPopper className="w-4 h-4 text-amber-300 animate-bounce" />
                  <span>{friendData.intro.tag}</span>
                </div>
              </div>

              {/* Single Creator Credit Badge */}
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-gray-200 font-mono backdrop-blur-md">
                  <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400/60" />
                  {friendData.intro.creatorCredit}
                </span>
              </div>

              {/* HUGE BIG BOLD Happy Birthday Heading */}
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.15] text-gradient-romantic drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
              >
                {friendData.intro.heading}
              </motion.h2>

              <Quote className="w-10 h-10 text-purple-300/40 mx-auto mb-6" />

              {/* Heartfelt Text Paragraphs */}
              <div className="space-y-6 text-lg sm:text-2xl font-light text-gray-100 leading-relaxed font-sans max-w-2xl mx-auto drop-shadow-md">
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
              <div className="mt-12 flex items-center justify-center gap-3 text-purple-300/80">
                <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-purple-400/60" />
                <Heart className="w-4 h-4 fill-purple-400/60" />
                <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-purple-400/60" />
              </div>
            </div>
          </motion.div>
        </ThreeDCard>
      </div>
    </section>
  );
}
