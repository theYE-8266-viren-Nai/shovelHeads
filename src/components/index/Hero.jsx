import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar.jsx';

const Hero = () => {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);

  const subtitleVariations = [
    'UNDERGROUND • LOUD • REBELLIOUS',
    'PUNK • GRUNGE • METAL',
    'DISTORTED • RAW • UNFILTERED',
    'CHAOS • ENERGY • REBELLION'
  ];

  useEffect(() => {
    const subtitleInterval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitleVariations.length);
    }, 4000);
    return () => clearInterval(subtitleInterval);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: 'easeOut' }
    }
  };

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

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="px-8 space-y-4 text-center text-gray-200">
          {/* Static Title */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-4 text-6xl font-black text-gray-300 lg:text-8xl"
            style={{ textShadow: '1px 1px 2px #000' }}
          >
            SHOVEL HEADS
          </motion.h1>

          {/* Rotating Subtitle */}
          <motion.p
            key={currentSubtitle}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg tracking-widest text-gray-400"
          >
            {subtitleVariations[currentSubtitle]}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex justify-center gap-4 mt-12"
          >
            <button className="px-8 py-4 font-bold tracking-wider text-gray-400 uppercase bg-transparent border-2 border-gray-600">
              Listen Now
            </button>
            <button className="px-8 py-4 font-bold tracking-wider text-gray-200 uppercase bg-gray-700">
              Discover
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
