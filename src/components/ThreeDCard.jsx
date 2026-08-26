import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ThreeDCard({ children, className = "", depth = 30 }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate normalized mouse position from center (-0.5 to +0.5)
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const normX = mouseX / width - 0.5;
    const normY = mouseY / height - 0.5;

    // Calculate 3D tilt angles (max 15 deg)
    const tiltX = -normY * 20;
    const tiltY = normX * 20;

    setRotateX(tiltX);
    setRotateY(tiltY);

    // Glare reflection position
    setGlare({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
      opacity: 0.25
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      className="perspective-1000"
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.5 }}
        style={{ transformStyle: 'preserve-3d' }}
        className={`relative transition-shadow duration-300 ${className}`}
      >
        {/* 3D Content Container */}
        <div style={{ transform: `translateZ(${depth}px)`, transformStyle: 'preserve-3d' }}>
          {children}
        </div>

        {/* 3D Dynamic Glare / Light Reflection Sheen */}
        <div
          className="absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 60%)`,
          }}
        />
      </motion.div>
    </div>
  );
}
