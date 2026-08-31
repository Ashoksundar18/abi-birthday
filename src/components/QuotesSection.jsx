import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  HeartHandshake, 
  Camera, 
  Smile, 
  Compass, 
  Heart, 
  Sun, 
  Sunrise, 
  Shield, 
  Feather, 
  Flame, 
  Quote
} from 'lucide-react';
import { friendData } from '../config/friendData';
import ThreeDCard from './ThreeDCard';

const iconMap = {
  Sparkles: Sparkles,
  HeartHandshake: HeartHandshake,
  Camera: Camera,
  Smile: Smile,
  Compass: Compass,
  Heart: Heart,
  Sun: Sun,
  Sunrise: Sunrise,
  Shield: Shield,
  Feather: Feather,
  Flame: Flame,
};

export default function QuotesSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [featuredQuote, setFeaturedQuote] = useState(null);

  const { tag, heading, subheading, categories, quotes } = friendData.quotesSection;

  const filteredQuotes = activeCategory === 'all' 
    ? quotes 
    : quotes.filter(q => q.category === activeCategory);

  const handlePickRandomQuote = () => {
    const healingQuotes = quotes.filter(q => q.category === 'healing');
    const randomIndex = Math.floor(Math.random() * healingQuotes.length);
    setFeaturedQuote(healingQuotes[randomIndex]);
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden" id="quotes">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-rose-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-4 shadow-sm"
          >
            <Sun className="w-3.5 h-3.5 text-amber-400" />
            <span>{tag}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
          >
            {heading}
          </motion.h2>

          {subheading && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-lg text-purple-200/70 max-w-2xl mx-auto"
            >
              {subheading}
            </motion.p>
          )}
        </div>

        {/* Category Filter Pills & Random Hope Button */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories?.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 scale-105 border border-purple-400/30'
                  : 'bg-white/5 hover:bg-white/10 text-purple-200/70 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}

          <button
            onClick={handlePickRandomQuote}
            className="px-5 py-2.5 rounded-full text-xs font-medium tracking-wide bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-purple-500/20 hover:from-amber-500/30 hover:to-purple-500/30 text-amber-200 border border-amber-500/30 transition-all flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Random Word of Hope 🎲</span>
          </button>
        </div>

        {/* Featured Random Quote Highlight Box */}
        <AnimatePresence>
          {featuredQuote && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="mb-12 p-8 rounded-3xl bg-gradient-to-r from-purple-950/90 via-slate-900/95 to-indigo-950/90 border border-amber-400/30 shadow-2xl relative overflow-hidden backdrop-blur-xl max-w-3xl mx-auto"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <Quote className="w-32 h-32 text-amber-300" />
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 text-[10px] uppercase font-mono tracking-widest mb-4">
                  A Gentle Ray of Hope ✨
                </span>
                <p className="text-xl sm:text-2xl font-serif text-white leading-relaxed mb-4">
                  "{featuredQuote.text}"
                </p>
                {featuredQuote.author && (
                  <p className="text-sm font-sans font-semibold text-amber-300/90 tracking-wide">
                    — {featuredQuote.author}
                  </p>
                )}
                <button
                  onClick={() => setFeaturedQuote(null)}
                  className="mt-6 text-xs text-purple-300/70 hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
                >
                  Close Box
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Animated 3D Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredQuotes.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Sparkles;
              const formattedNumber = (index + 1).toString().padStart(2, '0');

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 30 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="h-full"
                >
                  <ThreeDCard depth={30}>
                    <div
                      className={`glass-card glass-card-hover rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between border transition-all duration-300 group h-full ${
                        item.category === 'healing'
                          ? 'border-amber-500/20 hover:border-amber-400/40 bg-gradient-to-b from-purple-950/40 via-slate-900/60 to-slate-950/80'
                          : 'border-white/10 hover:border-purple-400/30'
                      }`}
                    >
                      {/* Background Subtle Gradient Glow */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 via-amber-500/5 to-transparent rounded-bl-full pointer-events-none group-hover:from-purple-500/20 transition-all duration-500" />

                      <div>
                        {/* Card Icon Header & Category Badge */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                            <IconComponent className="w-6 h-6 text-amber-300" />
                          </div>

                          {item.category === 'healing' && (
                            <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[10px] font-semibold tracking-wider uppercase">
                              Overcoming 🌅
                            </span>
                          )}
                        </div>

                        {/* Quote Text */}
                        <p className="text-lg sm:text-xl font-serif font-normal text-purple-50/95 leading-relaxed tracking-wide mb-4">
                          "{item.text}"
                        </p>

                        {/* Author */}
                        {item.author && (
                          <p className="text-xs font-sans text-purple-300/70 font-medium italic">
                            — {item.author}
                          </p>
                        )}
                      </div>

                      <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-purple-300/60 uppercase tracking-widest font-mono">
                        <span>Reminder {formattedNumber}</span>
                        <Sparkles className="w-3.5 h-3.5 text-amber-300/70 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </ThreeDCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
