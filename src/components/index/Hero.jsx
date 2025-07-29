// components/index/Hero.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  // Random title glitch effect
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

  // Subtitle rotation effect
  useEffect(() => {
    const subtitleInterval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitleVariations.length);
    }, 4000);

    return () => clearInterval(subtitleInterval);
  }, []);

  const heroVariants = {
    hidden: {
      opacity: 0,
      scale: 1.1,
      filter: 'brightness(0.5) contrast(1.5)'
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'brightness(1) contrast(1)',
      transition: {
        duration: 2,
        ease: 'easeOut',
        staggerChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: -90,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
        delay: 0.5,
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const subtitleVariants = {
    hidden: {
      opacity: 0,
      x: -200,
      filter: 'blur(8px)'
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        delay: 1.2
      }
    }
  };

  const floatingElementVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 2,
        type: 'spring',
        stiffness: 200
      }
    }
  };

  return (
    <motion.section
      className="relative min-h-screen pt-24 overflow-hidden bg-cover"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/images/index/shovelHeadBackground.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: '70% 80%',
        height: '100vh',
        width: '100%',
      }}
      variants={heroVariants}
      initial="hidden"
      animate="visible"
    >
      <Navbar />

      {/* Dynamic grunge overlay effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      {/* Animated film scratches */}
      <motion.div className="absolute inset-0 opacity-8">
        <motion.div
          className="absolute w-1 top-20 left-16 h-80 bg-text-primary rotate-12 opacity-30"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 320, opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
        <motion.div
          className="absolute top-60 right-24 w-0.5 h-48 bg-accent-yellow -rotate-6 opacity-40"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 192, opacity: 0.4 }}
          transition={{ duration: 1.2, delay: 1.3 }}
        />
        <motion.div
          className="absolute w-2 h-64 rotate-45 bottom-40 left-1/3 bg-text-primary opacity-20"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 256, opacity: 0.2 }}
          transition={{ duration: 1.8, delay: 0.8 }}
        />
      </motion.div>

      {/* Main content with enhanced animations */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="px-8 text-center text-text-primary">

          {/* Main title with enhanced effects */}
          <motion.div
            className="relative mt-8"
            variants={titleVariants}
          >
            {/* Background energy glow */}
            <motion.div
              className="absolute -inset-8 bg-accent-yellow/15 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />

            {/* Secondary glow layer */}
            <motion.div
              className="absolute -inset-4 bg-accent-light/10 blur-2xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5
              }}
            />

            <motion.h1
              className="relative mb-4 text-6xl font-black lg:text-8xl text-text-secondary font-nirvana"
              style={{
                textShadow: '4px 4px 0px #000000, -2px -2px 0px #fce83a, 4px -2px 0px #000000, -2px 4px 0px #000000',
                filter: 'drop-shadow(0 0 20px rgba(252, 232, 58, 0.5))'
              }}
              animate={glitchTitle !== 'SHOVEL HEADS' ? {
                x: [0, -2, 2, 0],
                textShadow: [
                  '4px 4px 0px #000000, -2px -2px 0px #fce83a',
                  '6px 2px 0px #ff0000, -4px -4px 0px #00ff00',
                  '4px 4px 0px #000000, -2px -2px 0px #fce83a'
                ]
              } : {}}
              transition={{ duration: 0.2 }}
            >
              {glitchTitle.split(' ').map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  className="inline-block mr-4 lg:mr-8"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    textShadow: '6px 6px 0px #000000, -3px -3px 0px #fce83a'
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Floating punk decorations */}
            <motion.div
              className="absolute text-3xl -top-8 -right-8 text-accent-yellow"
              variants={floatingElementVariants}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
                scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
              }}
            >
              ★
            </motion.div>

            <motion.div
              className="absolute text-2xl -bottom-4 -left-12 text-accent-light"
              variants={floatingElementVariants}
              animate={{
                rotate: [0, -180, 0],
                y: [0, -10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5
              }}
            >
              ⚡
            </motion.div>

            <motion.div
              className="absolute text-xl top-1/2 -right-16 text-accent-yellow"
              variants={floatingElementVariants}
              animate={{
                rotate: [0, 90, 0],
                x: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1
              }}
            >
              ✖
            </motion.div>
          </motion.div>

          {/* Animated subtitle with rotation */}
          <motion.div
            variants={subtitleVariants}
            className="relative"
          >
            <motion.p
              key={currentSubtitle}
              className="text-xl font-bold tracking-wider lg:text-2xl text-text-secondary"
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
              transition={{ duration: 0.8 }}
            >
              {subtitleVariations[currentSubtitle]}
            </motion.p>

            {/* Underline effect */}
            <motion.div
              className="w-32 h-1 mx-auto mt-4 bg-gradient-to-r from-transparent via-accent-yellow to-transparent"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </motion.div>

          {/* Call to action buttons */}
          <motion.div
            className="flex flex-col justify-center gap-4 mt-12 sm:flex-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.button
              className="relative px-8 py-4 overflow-hidden font-bold tracking-wider uppercase bg-transparent border-2 group border-accent-yellow text-accent-yellow"
              whileHover={{ scale: 1.05, borderColor: '#fff9c4' }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-accent-yellow"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-background">
                Listen Now
              </span>
            </motion.button>

            <motion.button
              className="px-8 py-4 font-bold tracking-wider uppercase transition-all duration-300 group bg-accent-yellow text-background hover:bg-accent-light hover:shadow-lg hover:shadow-accent-yellow/30"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Tour Dates
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Animated corner elements */}
      <motion.div
        className="absolute w-20 h-20 border-t-2 border-l-2 top-8 left-8 border-accent-yellow/40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      />
      <motion.div
        className="absolute w-20 h-20 border-t-2 border-r-2 top-8 right-8 border-accent-yellow/40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.7 }}
      />
      <motion.div
        className="absolute w-20 h-20 border-b-2 border-l-2 bottom-8 left-8 border-accent-yellow/40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.9 }}
      />
      <motion.div
        className="absolute w-20 h-20 border-b-2 border-r-2 bottom-8 right-8 border-accent-yellow/40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 3.1 }}
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1 }}
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
      </motion.div>
    </motion.section>
  );
};

export default Hero;