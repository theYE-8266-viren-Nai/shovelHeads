import React from 'react';
import { motion } from 'framer-motion';

const ShovelheadOriginallyFromYangon = () => {
  const animationProps = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: 'easeIn' },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center px-4 mt-8 sm:px-6 lg:px-8"
      {...animationProps}
    >
      <h1
        className="text-4xl font-black text-center sm:text-5xl md:text-6xl lg:text-7xl font-shovelHeads text-shovel-head-main-color pixel-text"
      >
        Shovel Heads, A Grunge/Punk Rock Band
        <br />
        <span className="block mt-2 text-3xl font-nirvana text-shovel-head-main-color sm:text-4xl md:text-5xl lg:text-6xl">
          Originally From Yangon
        </span>
      </h1>
    </motion.div>
  );
};

export default ShovelheadOriginallyFromYangon;