import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ThreeDCard({ children, className = "", depth = 40 }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const normX = mouseX / width - 0.5;
    const normY = mouseY / height - 0.5;

    // Smooth responsive tilt angles
    const tiltX = -normY * 18;
    const tiltY = normX * 18;

    setRotateX(tiltX);
    setRotateY(tiltY);

    setGlare({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
      opacity: 0.35,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      className="perspective-1000 w-full"
      style={{ perspective: '1200px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{ type: 'spring', damping: 18, stiffness: 220, mass: 0.4 }}
        style={{ transformStyle: 'preserve-3d' }}
        className={`relative transition-all duration-300 group ${className}`}
      >
        {/* Glowing Neon Atmosphere Backlight */}
        <div
          className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-amber-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        />

        {/* 3D Content Container */}
        <div
          className="relative z-10 w-full h-full"
          style={{ transform: `translateZ(${depth}px)`, transformStyle: 'preserve-3d' }}
        >
          {children}
        </div>

        {/* 3D Specular Light Reflection Sheen */}
        <div
          className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300 z-30 overflow-hidden"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, rgba(236,72,153,0.15) 30%, transparent 70%)`,
          }}
        />
      </motion.div>
    </div>
  );
}
