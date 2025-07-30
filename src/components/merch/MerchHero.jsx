// components/merch/MerchHero.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar.jsx';

const MerchHero = () => {
  const [glitchText, setGlitchText] = useState('MERCH');
  const glitchVariations = ['M€RCH', 'M3RCH', 'MΞRCH', 'M▲RCH', 'MERCH'];

  // Random text glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.15) {
        const randomText = glitchVariations[Math.floor(Math.random() * glitchVariations.length)];
        setGlitchText(randomText);
        setTimeout(() => setGlitchText('MERCH'), 150);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  const heroVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1.5, ease: 'easeOut' }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { 
        duration: 1.2, 
        ease: 'easeOut',
        delay: 0.5
      }
    }
  };

  const subTextVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 1, 
        ease: 'easeOut',
        delay: 1
      }
    }
  };

  return (
    <motion.section
      className="relative min-h-screen overflow-hidden bg-cover"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('/images/merch/shovelHeadsMerchHero.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: '70% 53%',
        height: '100vh',
        width: '100%',
      }}
      variants={heroVariants}
      initial="hidden"
      animate="visible"
    >
      <Navbar />
      
      {/* Grunge overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60"></div>
      
      {/* Scratched film effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-1 top-20 left-10 h-96 bg-text-primary rotate-12 opacity-30"></div>
        <div className="absolute top-40 right-20 w-0.5 h-64 bg-accent-yellow -rotate-6 opacity-40"></div>
        <div className="absolute w-2 h-48 rotate-45 bottom-32 left-1/3 bg-text-primary opacity-20"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        
        {/* Main title with punk styling */}
        <motion.div
          className="relative mt-14"
          variants={textVariants}
        >
          {/* Background glow */}
          <div className="absolute opacity-50 -inset-4 bg-accent-yellow/20 blur-3xl"></div>
          
          <h1 
            className="relative font-black tracking-wider transform text-8xl lg:text-9xl text-text-secondary font-BambooBrush"
            style={{
              textShadow: `
                4px 4px 0px #000000,
                -2px -2px 0px #fce83a,
                6px -2px 0px #000000,
                -2px 6px 0px #000000,
                0 0 30px rgba(252, 232, 58, 0.6)
              `,
              filter: 'drop-shadow(0 0 25px rgba(252, 232, 58, 0.4))'
            }}
          >
            {glitchText}
          </h1>
          
          {/* Punk decorations */}
          <div className="absolute text-2xl -top-4 -right-4 text-accent-yellow animate-pulse">★</div>
          <div className="absolute text-xl -bottom-2 -left-6 text-accent-light rotate-12">⚡</div>
          <div className="absolute text-lg -rotate-45 top-1/2 -right-8 text-accent-yellow">✖</div>
        </motion.div>

        {/* Subtitle with typewriter effect */}
        <motion.div
          className="relative max-w-4xl"
          variants={subTextVariants}
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-accent-yellow/10 to-transparent blur"></div>
          <p className="relative text-xl font-bold tracking-widest uppercase lg:text-2xl text-text-primary">
            <span className="inline-block px-6 py-3 border-2 border-accent-yellow/60 bg-background/80 backdrop-blur-sm">
              Official Band Merchandise
            </span>
          </p>
          
          {/* Distressed border effects */}
          <div className="absolute top-0 w-4 h-1 left-8 bg-accent-yellow"></div>
          <div className="absolute bottom-0 w-3 h-1 right-12 bg-accent-light"></div>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="flex justify-center w-6 h-10 border-2 rounded-full border-accent-yellow"
            animate={{ 
              boxShadow: [
                '0 0 0px rgba(252, 232, 58, 0.4)',
                '0 0 20px rgba(252, 232, 58, 0.6)',
                '0 0 0px rgba(252, 232, 58, 0.4)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 mt-2 rounded-full bg-accent-yellow"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
          <p className="mt-2 text-sm font-bold tracking-wider text-text-muted">SCROLL</p>
        </motion.div>
      </div>

      {/* Corner grunge elements */}
      <div className="absolute w-16 h-16 border-t-2 border-l-2 top-4 left-4 border-accent-yellow/40"></div>
      <div className="absolute w-16 h-16 border-t-2 border-r-2 top-4 right-4 border-accent-yellow/40"></div>
      <div className="absolute w-16 h-16 border-b-2 border-l-2 bottom-4 left-4 border-accent-yellow/40"></div>
      <div className="absolute w-16 h-16 border-b-2 border-r-2 bottom-4 right-4 border-accent-yellow/40"></div>
    </motion.section>
  );
};

export default MerchHero;