import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OiiAbiSlide from './components/OiiAbiSlide';
import Intro from './components/Intro';
import QuotesSection from './components/QuotesSection';
import Timeline from './components/Timeline';
import PersonalLetter from './components/PersonalLetter';
import FinalSection from './components/FinalSection';
import AmbientBackground from './components/AmbientBackground';
import EasterEggModal from './components/EasterEggModal';
import { friendData } from './config/friendData';

export default function App() {
  const [starClickCount, setStarClickCount] = useState(0);
  const [isEasterEggOpen, setIsEasterEggOpen] = useState(false);

  const handleStarClick = () => {
    const nextCount = starClickCount + 1;
    setStarClickCount(nextCount);

    if (nextCount >= friendData.easterEgg.clicksRequired) {
      setIsEasterEggOpen(true);
      setStarClickCount(0); // Reset count after trigger
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0b0a10] text-[#f4f2f7] overflow-x-hidden">
      {/* Background ambient lighting */}
      <AmbientBackground />

      {/* Floating navigation header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="relative z-10">
        <Hero
          onStarClick={handleStarClick}
          starClickCount={starClickCount}
        />
        {/* Dedicated 2nd Slide for oii Abi... ✨ */}
        <OiiAbiSlide />
        <Intro />
        <QuotesSection />
        <Timeline />
        <PersonalLetter />
        <FinalSection />
      </main>

      {/* Easter Egg Confetti Modal */}
      <EasterEggModal
        isOpen={isEasterEggOpen}
        onClose={() => setIsEasterEggOpen(false)}
      />
    </div>
  );
}
