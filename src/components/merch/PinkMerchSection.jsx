// components/merch/PinkMerchSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const merchText = "This is limited edition merch designed with attitude and rebellion. Bold, unapologetic, and built for the underground scene.";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  }
};

const wordVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    rotateX: -90,
    filter: 'blur(4px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 120,
      duration: 0.6
    }
  }
};

const imageVariants = {
  hidden: { 
    opacity: 0, 
    x: -100,
    scale: 0.8,
    filter: 'grayscale(100%)'
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    filter: 'grayscale(0%)',
    transition: { 
      duration: 1.2, 
      ease: 'easeOut',
      delay: 0.3
    }
  }
};

const PinkMerchSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const words = merchText.split(" ");

  return (
    <div className="relative min-h-screen px-8 py-16 overflow-hidden bg-gradient-to-br from-background via-bg-dark to-bg-card">
      
      {/* Background grunge effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-64 h-1 top-20 left-10 bg-accent-yellow rotate-12"></div>
        <div className="absolute bottom-32 right-20 w-48 h-0.5 bg-text-primary -rotate-6"></div>
        <div className="absolute w-32 h-32 rotate-45 border top-1/2 left-1/4 border-accent-yellow/20"></div>
      </div>

      <div className="flex flex-col items-center justify-center gap-12 mx-auto max-w-7xl lg:flex-row lg:gap-16">
        
        {/* Image Section with punk frame */}
        <motion.div
          className="relative group"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Grunge frame layers */}
          <div className="absolute transition-all duration-500 opacity-0 -inset-4 bg-gradient-to-br from-accent-yellow/20 via-transparent to-accent-yellow/10 blur-xl group-hover:opacity-100"></div>
          
          {/* Main frame */}
          <div className="relative transition-all duration-300 border-4 border-accent-yellow/60 group-hover:border-accent-yellow">
            {/* Corner decorations */}
            <div className="absolute w-6 h-6 -top-2 -left-2 bg-accent-yellow"></div>
            <div className="absolute w-4 h-4 rotate-45 -top-2 -right-2 bg-accent-light"></div>
            <div className="absolute w-4 h-6 -bottom-2 -left-2 bg-accent-yellow rotate-12"></div>
            <div className="absolute w-6 h-4 -bottom-2 -right-2 bg-accent-light"></div>
            
            {/* Scratched edges */}
            <div className="absolute w-2 h-8 top-1/4 -left-1 bg-accent-yellow/80"></div>
            <div className="absolute w-1 h-12 bottom-1/3 -right-1 bg-accent-yellow/60"></div>
            
            <motion.img
              src="/images/merch/ShovelHeadsMechPink.jpg"
              alt="Limited Edition Merch"
              className="w-full max-w-lg transition-all duration-500 shadow-2xl filter group-hover:brightness-110"
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: 2
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            
            {/* Distressed overlay */}
            <div className="absolute inset-0 transition-all duration-300 opacity-0 pointer-events-none bg-gradient-to-tr from-transparent via-accent-yellow/5 to-transparent group-hover:opacity-100"></div>
          </div>

          {/* Floating punk elements */}
          <motion.div
            className="absolute text-2xl -top-6 -right-6 text-accent-yellow"
            animate={isHovered ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            ★
          </motion.div>
          
          <motion.div
            className="absolute text-xl -bottom-4 -left-4 text-accent-light"
            animate={isHovered ? { rotate: -180, x: 5, y: -5 } : { rotate: 0, x: 0, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            ⚡
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="max-w-2xl space-y-8 text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Title with grunge styling */}
          <div className="relative">
            <motion.h2 
              className="relative z-10 text-4xl font-black lg:text-6xl text-text-secondary font-BambooBrush"
              style={{
                textShadow: `
                  3px 3px 0px #000000,
                  -1px -1px 0px #fce83a,
                  3px -1px 0px #000000,
                  -1px 3px 0px #000000
                `,
                filter: 'drop-shadow(0 0 15px rgba(252, 232, 58, 0.3))'
              }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              LIMITED
            </motion.h2>
            
            <motion.h3
              className="mt-2 text-2xl font-bold tracking-wider lg:text-3xl text-accent-yellow"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              EDITION MERCH
            </motion.h3>
            
            {/* Decorative line */}
            <motion.div
              className="w-24 h-1 mt-4 bg-gradient-to-r from-accent-yellow to-accent-light"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            ></motion.div>
          </div>

          {/* Animated text */}
          <motion.div
            className="flex flex-wrap text-lg leading-relaxed gap-x-2 gap-y-1 lg:text-xl text-text-primary"
            variants={containerVariants}
          >
            {words.map((word, i) => (
              <motion.span 
                key={i} 
                variants={wordVariants}
                className="inline-block transition-colors duration-200 cursor-default hover:text-accent-yellow"
                whileHover={{ 
                  scale: 1.1,
                  textShadow: '2px 2px 4px rgba(252, 232, 58, 0.5)'
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Call to action */}
          <motion.div
            className="pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.button
              className="relative px-8 py-4 overflow-hidden font-bold tracking-wider uppercase bg-transparent border-2 group border-accent-yellow text-accent-yellow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button background effect */}
              <motion.div
                className="absolute inset-0 bg-accent-yellow"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              <span className="relative z-10 transition-colors duration-300 group-hover:text-background">
                Shop Now
              </span>
              
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-2 h-2 transition-all duration-200 transform -translate-x-1 -translate-y-1 opacity-0 bg-accent-yellow group-hover:opacity-100"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 transition-all duration-200 transform translate-x-1 translate-y-1 opacity-0 bg-accent-yellow group-hover:opacity-100"></div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Background punk elements */}
      <div className="absolute text-6xl font-black transform top-10 right-10 text-accent-yellow/10 rotate-12">★</div>
      <div className="absolute text-4xl transform bottom-20 left-10 text-accent-light/10 -rotate-12">⚡</div>
      <div className="absolute text-3xl transform rotate-45 top-1/2 right-20 text-accent-yellow/10">✖</div>
    </div>
  );
};

export default PinkMerchSection;