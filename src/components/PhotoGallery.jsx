import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Sparkles, Box } from 'lucide-react';
import { friendData } from '../config/friendData';
import SmartImage from './SmartImage';
import Lightbox from './Lightbox';
import ThreeDCard from './ThreeDCard';

export default function PhotoGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const photos = friendData.gallery.photos;

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < photos.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return (
    <section id="gallery" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>{friendData.gallery.tag}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
          >
            {friendData.gallery.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 font-light"
          >
            {friendData.gallery.subheading}
          </motion.p>
        </div>

        {/* 5-Photo Custom Layout: Top 2 Showcase 3D Cards + Bottom 3 Memory 3D Cards */}
        <div className="space-y-6">
          {/* Top Row: 2 Showcase 3D Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {photos.slice(0, 2).map((photo, index) => (
              <ThreeDCard key={photo.id} depth={35} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative group h-[380px] sm:h-[460px] w-full"
                >
                  <div className="w-full h-full rounded-3xl p-1.5 bg-gradient-to-b from-white/15 via-purple-500/10 to-transparent group-hover:from-purple-500/40 group-hover:to-pink-500/30 transition-all duration-500 shadow-xl">
                    <SmartImage
                      src={photo.src}
                      alt={photo.alt}
                      caption={photo.caption}
                      className="w-full h-full rounded-2xl"
                      onClick={() => setSelectedIndex(index)}
                    />

                    {/* Photo Caption Overlay Badge */}
                    <div className="absolute bottom-4 left-4 right-4 pointer-events-none z-10">
                      <div className="glass-pill px-4 py-2.5 rounded-2xl backdrop-blur-md border border-white/20 flex items-center justify-between shadow-lg group-hover:border-purple-400/50 transition-colors">
                        <span className="text-sm sm:text-base font-semibold text-white truncate pr-2">
                          {photo.caption}
                        </span>
                        <Sparkles className="w-4 h-4 text-amber-300 flex-shrink-0 group-hover:rotate-12 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ThreeDCard>
            ))}
          </div>

          {/* Bottom Row: 3 Memory 3D Cards (Frame 3: photo3.jpg 'Pure chaos 😂') */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {photos.slice(2, 5).map((photo, index) => {
              const actualIndex = index + 2;
              const isFrame3 = actualIndex === 2; // photo3.jpg (Black & White dress frame with pink outline)

              return (
                <ThreeDCard key={photo.id} depth={isFrame3 ? 50 : 35} className="h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: actualIndex * 0.12 }}
                    className={`relative group h-[320px] sm:h-[380px] w-full ${
                      isFrame3 ? 'ring-2 ring-pink-400/70 rounded-2xl shadow-2xl shadow-pink-500/30' : ''
                    }`}
                  >
                    <div className="w-full h-full rounded-2xl p-1.5 bg-gradient-to-b from-white/10 to-transparent group-hover:from-pink-500/30 group-hover:to-purple-500/20 transition-all duration-500 shadow-lg">
                      <SmartImage
                        src={photo.src}
                        alt={photo.alt}
                        caption={photo.caption}
                        className="w-full h-full rounded-xl"
                        onClick={() => setSelectedIndex(actualIndex)}
                      />

                      {/* Photo Caption & 3D Frame 3 Badge */}
                      <div className="absolute bottom-3 left-3 right-3 pointer-events-none z-10">
                        <div className={`glass-pill px-3.5 py-2 rounded-xl backdrop-blur-md flex items-center justify-between shadow-md transition-colors ${
                          isFrame3 
                            ? 'border-2 border-pink-400/80 bg-pink-950/70' 
                            : 'border border-white/15 group-hover:border-purple-400/40'
                        }`}>
                          <span className="text-xs sm:text-sm font-bold text-white truncate pr-2">
                            {photo.caption}
                          </span>
                          <Sparkles className="w-3.5 h-3.5 text-amber-300 flex-shrink-0 group-hover:rotate-12 transition-transform animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </ThreeDCard>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <Lightbox
          photo={photos[selectedIndex]}
          onClose={() => setSelectedIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={selectedIndex > 0}
          hasNext={selectedIndex < photos.length - 1}
        />
      )}
    </section>
  );
}
