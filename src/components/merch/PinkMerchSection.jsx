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
    <div className="relative min-h-screen px-8 py-16 overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-zinc-800">
      
      {/* Background grunge effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-64 h-1 bg-gray-500 top-20 left-10 rotate-12"></div>
        <div className="absolute bottom-32 right-20 w-48 h-0.5 bg-gray-400 -rotate-6"></div>
        <div className="absolute w-32 h-32 rotate-45 border top-1/2 left-1/4 border-gray-600/20"></div>
      </div>

      <div className="flex flex-col items-center justify-center gap-12 mx-auto max-w-7xl lg:flex-row lg:gap-16">
        
        {/* Image */}
        <motion.div
          className="relative group"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <div className="absolute transition-all duration-500 opacity-0 -inset-4 bg-gradient-to-br from-gray-600/20 via-transparent to-gray-700/10 blur-xl group-hover:opacity-100"></div>

          <div className="relative transition-all duration-300 border-4 border-gray-500/60 group-hover:border-gray-400">
            <div className="absolute w-6 h-6 bg-gray-500 -top-2 -left-2"></div>
            <div className="absolute w-4 h-4 rotate-45 bg-gray-400 -top-2 -right-2"></div>
            <div className="absolute w-4 h-6 bg-gray-500 -bottom-2 -left-2 rotate-12"></div>
            <div className="absolute w-6 h-4 bg-gray-400 -bottom-2 -right-2"></div>

            <div className="absolute w-2 h-8 top-1/4 -left-1 bg-gray-600/80"></div>
            <div className="absolute w-1 h-12 bottom-1/3 -right-1 bg-gray-500/60"></div>

            <motion.img
              src="/images/merch/ShovelHeadsMechPink.jpg"
              alt="Limited Edition Merch"
              className="w-full max-w-lg transition-all duration-500 shadow-2xl filter group-hover:brightness-110"
              whileHover={{ scale: 1.02, rotateY: 5, rotateX: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />

            <div className="absolute inset-0 transition-all duration-300 opacity-0 pointer-events-none bg-gradient-to-tr from-transparent via-gray-500/10 to-transparent group-hover:opacity-100"></div>
          </div>

          {/* Floating elements */}
          <motion.div
            className="absolute text-2xl text-gray-400 -top-6 -right-6"
            animate={isHovered ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            ★
          </motion.div>
          
          <motion.div
            className="absolute text-xl text-gray-500 -bottom-4 -left-4"
            animate={isHovered ? { rotate: -180, x: 5, y: -5 } : { rotate: 0, x: 0, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            ⚡
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="max-w-2xl space-y-8 text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative">
            <motion.h2 
              className="relative z-10 text-4xl font-black text-gray-300 lg:text-6xl font-BambooBrush"
              style={{
                textShadow: '2px 2px 2px #000',
                filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.1))'
              }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              LIMITED
            </motion.h2>
            
            <motion.h3
              className="mt-2 text-2xl font-bold tracking-wider text-gray-400 lg:text-3xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              EDITION MERCH
            </motion.h3>

            <motion.div
              className="w-24 h-1 mt-4 bg-gray-500"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            ></motion.div>
          </div>

          <motion.div
            className="flex flex-wrap text-lg leading-relaxed text-gray-400 gap-x-2 gap-y-1 lg:text-xl"
            variants={containerVariants}
          >
            {words.map((word, i) => (
              <motion.span 
                key={i} 
                variants={wordVariants}
                className="inline-block cursor-default hover:text-gray-300"
                whileHover={{ scale: 1.1 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.button
              className="relative px-8 py-4 overflow-hidden font-bold tracking-wider text-gray-400 uppercase bg-transparent border-2 border-gray-500 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gray-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                Shop Now
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Background punk marks */}
      <div className="absolute text-6xl font-black transform top-10 right-10 text-gray-500/10 rotate-12">★</div>
      <div className="absolute text-4xl transform bottom-20 left-10 text-gray-500/10 -rotate-12">⚡</div>
      <div className="absolute text-3xl transform rotate-45 top-1/2 right-20 text-gray-500/10">✖</div>
    </div>
  );
};

export default PinkMerchSection;
