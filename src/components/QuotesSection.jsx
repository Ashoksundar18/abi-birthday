import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, HeartHandshake, Camera, Smile, Compass, Heart } from 'lucide-react';
import { friendData } from '../config/friendData';
import ThreeDCard from './ThreeDCard';

const iconMap = {
  Sparkles: Sparkles,
  HeartHandshake: HeartHandshake,
  Camera: Camera,
  Smile: Smile,
  Compass: Compass,
};

export default function QuotesSection() {
  const quotes = friendData.quotesSection.quotes;

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Heart className="w-3.5 h-3.5" />
            <span>{friendData.quotesSection.tag}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
          >
            {friendData.quotesSection.heading}
          </motion.h2>
        </div>

        {/* Animated 3D Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {quotes.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;

            return (
              <ThreeDCard key={item.id} depth={30}>
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: index * 0.12 }}
                  className="glass-card glass-card-hover rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between border border-white/10 group h-full"
                >
                  {/* Background Subtle Gradient Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-purple-500/20 transition-all duration-500" />

                  <div>
                    {/* Card Icon Header */}
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Quote Text */}
                    <p className="text-xl sm:text-2xl font-serif font-normal text-purple-50/90 leading-snug tracking-wide">
                      "{item.text}"
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-purple-300/60 uppercase tracking-widest font-mono">
                    <span>Reminder 0{index + 1}</span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-300/70 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              </ThreeDCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
