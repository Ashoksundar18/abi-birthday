import React from 'react';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Soft Purple Top Light Orb */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] animate-pulse-glow" />
      
      {/* Warm Rose Pink Right Light Orb */}
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-pink-900/15 rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      
      {/* Soft Gold Bottom Left Orb */}
      <div className="absolute bottom-10 -left-20 w-[450px] h-[450px] bg-amber-900/15 rounded-full blur-[130px] animate-pulse-glow" style={{ animationDelay: '4s' }} />

      {/* Grid Texture lines (subtle) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
      
      {/* Subtle Noise / Floating Star Orbs */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-300/30 rounded-full blur-[1px] animate-float-slow" />
      <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-pink-300/40 rounded-full blur-[1px] animate-float-slow" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-amber-200/30 rounded-full blur-[1px] animate-float-slow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-indigo-300/30 rounded-full blur-[1px] animate-float-slow" style={{ animationDelay: '4.5s' }} />
    </div>
  );
}
