import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, Laugh, Bookmark, Clock } from 'lucide-react';
import { friendData } from '../config/friendData';

const iconMap = {
  Sparkles: Sparkles,
  MessageCircle: MessageCircle,
  Laugh: Laugh,
  Bookmark: Bookmark,
};

export default function Timeline() {
  const chapters = friendData.timelineSection.chapters;

  return (
    <section id="timeline" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>{friendData.timelineSection.tag}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
          >
            {friendData.timelineSection.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 font-light"
          >
            {friendData.timelineSection.subheading}
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Connector Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/0 via-purple-500/40 to-amber-500/0 -translate-x-1/2" />

          <div className="space-y-12 sm:space-y-16">
            {chapters.map((chapter, index) => {
              const IconComp = iconMap[chapter.icon] || Sparkles;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={chapter.chapterNumber}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Node Dot in Center */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-[#0b0a10] border-2 border-purple-400 shadow-lg shadow-purple-500/30 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-300 animate-ping opacity-75" />
                  </div>

                  {/* Card Container */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)] ml-12 sm:ml-0">
                    <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 relative border border-white/10 group">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
                          Chapter {chapter.chapterNumber}
                        </span>

                        <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
                        {chapter.title}
                      </h3>

                      <p className="text-sm font-medium text-purple-200/70 mb-4">
                        {chapter.subtitle}
                      </p>

                      <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
                        "{chapter.description}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
