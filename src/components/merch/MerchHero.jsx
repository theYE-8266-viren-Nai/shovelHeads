import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar';

const MerchHero = () => {
  const animationProps = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: 'easeIn' },
  };

  return (
    <motion.section
      className="relative min-h-screen bg-cover"
      style={{
        backgroundImage: "url('/images/merch/shovelHeadsMerchHero.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: '70% 80%',
        height: '100vh',
        width: '100%',
      }}
      {...animationProps}
    >
      <motion.div {...animationProps}>
        <Navbar />
      </motion.div>
    </motion.section>
  );
};

export default MerchHero;