import React from 'react';
import { motion } from 'framer-motion';

export default function AmbientBackground() {
  const particles = Array.from({ length: 18 });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Dynamic Glowing Ambient Light Orbs */}
      <div className="absolute -top-40 -left-40 w-[650px] h-[650px] bg-purple-600/25 rounded-full blur-[140px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] bg-pink-600/20 rounded-full blur-[160px] animate-pulse-glow" style={{ animationDelay: '2.5s' }} />
      <div className="absolute bottom-10 -left-20 w-[550px] h-[550px] bg-amber-500/20 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: '4.5s' }} />

      {/* Modern Mesh Radial Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_90%_at_50%_-20%,rgba(168,85,247,0.2),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(236,72,153,0.15),transparent_70%)]" />

      {/* Floating Animated Sparkle Dust Particles */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            opacity: Math.random() * 0.5 + 0.2,
            scale: Math.random() * 0.6 + 0.4,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 5,
          }}
          className={`absolute rounded-full blur-[0.5px] ${
            i % 3 === 0
              ? 'w-2 h-2 bg-amber-300 shadow-[0_0_8px_#fde047]'
              : i % 3 === 1
              ? 'w-2.5 h-2.5 bg-pink-400 shadow-[0_0_10px_#f472b6]'
              : 'w-2 h-2 bg-purple-300 shadow-[0_0_8px_#c084fc]'
          }`}
          style={{
            top: `${(i * 5.5) % 95}%`,
            left: `${(i * 7.2) % 95}%`,
          }}
        />
      ))}
    </div>
  );
}
