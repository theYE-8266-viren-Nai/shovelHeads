import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar.jsx';

const Hero = () => {
  const [glitchText, setGlitchText] = useState('SHOVEL HEADS');
  const glitchVariations = ['SH0VEL HEADS', 'SHOVEL H3ADS', 'SHΩVEL HEADS', 'SHOVEL HE▲DS', 'SHOVEL HEADS'];

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.15) {
        const randomText = glitchVariations[Math.floor(Math.random() * glitchVariations.length)];
        setGlitchText(randomText);
        setTimeout(() => setGlitchText('SHOVEL HEADS'), 150);
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

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: 'easeOut',
        delay: 1.5
      }
    }
  };

  return (
    <motion.section
      className="relative min-h-screen overflow-hidden bg-cover font-shovelHeads"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('/images/index/shovelHeadBackground.jpg')",
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
      
      {/* Dark overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>
      
      {/* Scratched film lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-1 bg-gray-400 top-20 left-10 h-96 rotate-12 opacity-30"></div>
        <div className="absolute top-40 right-20 w-0.5 h-64 bg-gray-500 -rotate-6 opacity-40"></div>
        <div className="absolute w-2 h-48 rotate-45 bg-gray-400 bottom-32 left-1/3 opacity-20"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center font-nirvana">
        
        {/* Title */}
        <motion.div
          className="relative mt-14"
          variants={textVariants}
        >
          <div className="absolute opacity-40 -inset-4 bg-gray-500/20 blur-3xl"></div>
          
          <h1 
            className="relative font-black tracking-wider text-gray-300 transform text-6xl lg:text-8xl font-BambooBrush"
            style={{
              textShadow: `
                1px 1px 2px #000,
                -1px -1px 1px #444
              `,
              filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.1))'
            }}
          >
            {glitchText}
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="relative max-w-4xl mt-8"
          variants={subTextVariants}
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-gray-500/10 to-transparent blur"></div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex justify-center gap-6 mt-16"
          variants={buttonVariants}
        >
          <motion.button 
            className="px-8 py-4 font-bold tracking-wider text-gray-300 uppercase bg-transparent border-2 border-gray-600 backdrop-blur-sm hover:bg-gray-800/50 hover:border-gray-500 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            Listen Now
          </motion.button>
          <motion.button 
            className="px-8 py-4 font-bold tracking-wider text-gray-200 uppercase bg-gray-700/80 backdrop-blur-sm border-2 border-gray-600 hover:bg-gray-600/80 hover:border-gray-500 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            Discover
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="flex justify-center w-6 h-10 border-2 border-gray-500 rounded-full"
            animate={{ 
              boxShadow: [
                '0 0 0px rgba(255,255,255,0.1)',
                '0 0 10px rgba(200,200,200,0.2)',
                '0 0 0px rgba(255,255,255,0.1)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 mt-2 bg-gray-500 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
          <p className="mt-2 text-sm font-bold tracking-wider text-gray-400">SCROLL</p>
        </motion.div>
      </div>

      {/* Border corner elements */}
      <div className="absolute w-16 h-16 border-t-2 border-l-2 top-4 left-4 border-gray-600/40"></div>
      <div className="absolute w-16 h-16 border-t-2 border-r-2 top-4 right-4 border-gray-600/40"></div>
      <div className="absolute w-16 h-16 border-b-2 border-l-2 bottom-4 left-4 border-gray-600/40"></div>
      <div className="absolute w-16 h-16 border-b-2 border-r-2 bottom-4 right-4 border-gray-600/40"></div>
    </motion.section>
  );
};

export default Hero;