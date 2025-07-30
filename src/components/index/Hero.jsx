import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar.jsx';

const Hero = () => {
  const [glitchTitle, setGlitchTitle] = useState('SHOVEL HEADS');
  const [currentSubtitle, setCurrentSubtitle] = useState(0);

  const glitchVariations = [
    'SHOVEL HEADS',
    'SH✖VEL HEADS',
    'SHOVEL H€ADS',
    'SH⚡VEL HEADS',
    'SHOVEL HΞ∆DS'
  ];

  const subtitleVariations = [
    'UNDERGROUND • LOUD • REBELLIOUS',
    'PUNK • GRUNGE • METAL',
    'DISTORTED • RAW • UNFILTERED',
    'CHAOS • ENERGY • REBELLION'
  ];

  // Random title glitch effect (logic kept but effect removed)
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.12) {
        const randomVariation = glitchVariations[Math.floor(Math.random() * glitchVariations.length)];
        setGlitchTitle(randomVariation);
        setTimeout(() => setGlitchTitle('SHOVEL HEADS'), 180);
      }
    }, 2500);

    return () => clearInterval(glitchInterval);
  }, []);

  // Subtitle rotation effect (logic kept but effect removed)
  useEffect(() => {
    const subtitleInterval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitleVariations.length);
    }, 4000);

    return () => clearInterval(subtitleInterval);
  }, []);

  return (
    <section
      className="relative min-h-screen pt-24 overflow-hidden bg-cover font-shovelHeads"
      style={{
        backgroundImage: "url('/images/index/shovelHeadBackground.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: '70% 80%',
        height: '100vh',
        width: '100%',
      }}
    >
      <Navbar />

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="px-8 text-center text-gray-200">
          {/* Main title */}
          <h1
            className="mb-4 text-6xl font-black text-gray-300 lg:text-8xl"
            style={{ textShadow: '1px 1px 2px #000' }}
          >
            {glitchTitle}
          </h1>

          {/* Subtitle */}
          

          {/* Call to action buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              className="px-8 py-4 font-bold tracking-wider text-gray-400 uppercase bg-transparent border-2 border-gray-600"
            >
              Listen Now
            </button>

            <button
              className="px-8 py-4 font-bold tracking-wider text-gray-200 uppercase bg-gray-700"
            >
              Discover
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;